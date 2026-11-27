// Reading uploaded documents for the study space: the text of a PDF (page by
// page) or a Word document, and plain text. Photos are not read here: they go
// to a vision model with the question. A PDF that is only scanned pictures has
// no text; the app then asks for photos of the pages instead.
import { HttpError } from './http.js';

const MAX_TEXT = 200_000; // characters kept per document

export const KINDS = {
  'application/pdf': 'pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
  'text/plain': 'text',
  'image/jpeg': 'image',
  'image/png': 'image',
  'image/webp': 'image',
};

export async function readDocument(mime, bytes) {
  const kind = KINDS[mime];
  if (!kind) throw new HttpError(415, 'This kind of file cannot be read. Send a photo, a PDF, a Word document (.docx) or a text file.', 'unsupported_file');
  if (kind === 'image') return { kind, pages: 1, text: null };
  if (kind === 'text') return { kind, pages: 1, text: new TextDecoder().decode(bytes).slice(0, MAX_TEXT) };
  if (kind === 'docx') {
    const mammoth = (await import('mammoth')).default;
    try {
      const { value } = await mammoth.extractRawText({ buffer: Buffer.from(bytes) });
      return { kind, pages: null, text: tidy(value) };
    } catch {
      throw new HttpError(422, 'This Word document could not be opened. Save it again as .docx, or send it as a PDF.', 'unreadable_file');
    }
  }
  // PDF
  const { extractText, getDocumentProxy } = await import('unpdf');
  try {
    const pdf = await getDocumentProxy(new Uint8Array(bytes));
    const { totalPages, text } = await extractText(pdf, { mergePages: false });
    const pages = (Array.isArray(text) ? text : [text]).map((t, i) => `--- Page ${i + 1} ---\n${tidy(t)}`);
    return { kind, pages: totalPages, text: pages.join('\n\n').slice(0, MAX_TEXT) };
  } catch {
    throw new HttpError(422, 'This PDF could not be opened. It may be damaged or protected by a password.', 'unreadable_file');
  }
}

const tidy = (t) =>
  String(t || '')
    .replace(/\r/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

// True when a PDF has (almost) no text: a scan or photos saved as PDF.
export const looksScanned = (doc) => doc.kind === 'pdf' && (doc.text || '').replace(/--- Page \d+ ---/g, '').replace(/\s/g, '').length < 40 * Math.max(1, doc.pages || 1);

// Renders a useful subset of markdown (paragraphs, **bold**, and "- "
// bullet lists) without pulling in a markdown-parsing dependency —
// AI responses are plain text with light formatting, not full documents.
function renderInline(text, keyPrefix) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={`${keyPrefix}-${i}`} className="text-tag">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={`${keyPrefix}-${i}`}>{part}</span>
    )
  )
}

export default function MarkdownLite({ text }) {
  const blocks = text.split(/\n\s*\n/)

  return (
    <div className="space-y-3">
      {blocks.map((block, bi) => {
        const lines = block.split('\n').filter(Boolean)
        const isList = lines.length > 0 && lines.every((l) => /^[-*]\s+/.test(l.trim()))

        if (isList) {
          return (
            <ul key={bi} className="list-disc space-y-1 pl-5">
              {lines.map((line, li) => (
                <li key={li}>{renderInline(line.trim().replace(/^[-*]\s+/, ''), `${bi}-${li}`)}</li>
              ))}
            </ul>
          )
        }

        return (
          <p key={bi} className="leading-relaxed">
            {lines.map((line, li) => (
              <span key={li}>
                {renderInline(line, `${bi}-${li}`)}
                {li < lines.length - 1 && <br />}
              </span>
            ))}
          </p>
        )
      })}
    </div>
  )
}

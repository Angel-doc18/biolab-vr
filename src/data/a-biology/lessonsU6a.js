// A Level Biology lessons for Upper Sixth, term 1: DNA replication and
// protein synthesis, gene regulation and mutation, gene technology, Mendelian
// and advanced inheritance, homeostasis and the kidney, hormones, nerve
// impulses, synapses and muscle. Original text written for this app.

const L = (id, unit, n, title, minutes, tags, body, figure, tip, check, terms, examples) => ({
  id,
  unit,
  n,
  title,
  minutes,
  paper: 'Paper 1 and Paper 2',
  tags,
  body,
  figure,
  ...(examples ? { examples } : {}),
  tip,
  check: { q: check[0], a: check[1], why: check[2] },
  terms,
});

export const LESSONS_U6A = [
  // ---------- 1. Replication and protein synthesis ----------
  L('ab-replication-7', 'ab-u6-proteinsynthesis', '1.1', 'DNA replication', 15, ['Molecular genetics'], [
    'Before a cell divides, its DNA is copied by **semi-conservative replication**:\n- **DNA helicase** unwinds the double helix and breaks the hydrogen bonds between bases, exposing two template strands\n- free DNA nucleotides pair with the exposed bases by **complementary base pairing** (A–T, C–G)\n- **DNA polymerase** joins the nucleotides into a new strand, working only in the 5′ to 3′ direction; one strand is made continuously (leading strand), the other in short pieces (Okazaki fragments) on the lagging strand\n- **DNA ligase** joins the fragments.\nEach new molecule contains **one original strand and one new strand**.',
    '**Meselson and Stahl (1958)** proved this. They grew bacteria for many generations on heavy nitrogen (¹⁵N), so all their DNA was heavy, then moved them to light nitrogen (¹⁴N) and separated the DNA by density in a centrifuge:\n- generation 0: one **heavy** band\n- after one division: one **intermediate** band (each molecule half heavy, half light), ruling out conservative replication\n- after two divisions: one **intermediate** and one **light** band, ruling out dispersive replication.',
    'Replication is very accurate because of base pairing and the proofreading activity of DNA polymerase; occasional errors are **mutations**.',
  ], 'ab-replication', 'One old strand plus one new strand in every new molecule.',
  ['After one generation in ¹⁴N, Meselson and Stahl found:', ['a single band of intermediate density', 'one heavy and one light band', 'only light DNA', 'only heavy DNA'], 'Each molecule had one ¹⁵N and one ¹⁴N strand.'],
  [['Semi-conservative replication', 'Copying in which each new DNA molecule keeps one original strand.'], ['DNA helicase', 'The enzyme that unwinds DNA and separates the strands.'], ['DNA polymerase', 'The enzyme that builds the new strand.'], ['DNA ligase', 'The enzyme that joins DNA fragments.']],
  [
    { q: 'Predict the bands after three divisions in ¹⁴N, starting from heavy DNA.', steps: ['**After 1: all intermediate. After 2: half intermediate, half light.**', '**After 3: 2 of 8 molecules intermediate, 6 of 8 light.**', '**So an intermediate band (¼ of the DNA) and a light band (¾).**'] },
  ]),

  L('ab-transcription-7', 'ab-u6-proteinsynthesis', '1.2', 'Transcription', 14, ['Molecular genetics'], [
    'A **gene** is a sequence of DNA bases coding for a polypeptide. **Transcription** copies a gene into **messenger RNA** in the nucleus:\n- **RNA polymerase** binds to the **promoter**, a base sequence just before the gene\n- the DNA unwinds locally; only one strand, the **template (antisense) strand**, is read\n- free RNA nucleotides pair with it (A with U, T with A, C with G, G with C) and RNA polymerase joins them, building mRNA from its 5′ end\n- at a terminator sequence the polymerase stops and the mRNA is released.',
    'In eukaryotes the first product, **pre-mRNA**, is processed: non-coding **introns** are removed and the coding **exons** are joined (**splicing**); a cap and a tail are added to protect it. The mature mRNA leaves through a **nuclear pore**.',
    'The mRNA has the same sequence as the **coding (sense) strand** of the DNA, except that it has **U instead of T**. One gene can be transcribed many times, making many copies of mRNA and so much protein.',
  ], 'ab-protein-synthesis', 'mRNA copies the coding strand, with U for T.',
  ['If the template strand reads TAC GGA, the mRNA reads:', ['AUG CCU', 'TAC GGA', 'ATG CCT', 'UAC GGA'], 'Complementary, with U for T.'],
  [['Transcription', 'Making mRNA from a DNA template.'], ['Promoter', 'The DNA sequence where RNA polymerase binds.'], ['Intron', 'A non-coding sequence removed from pre-mRNA.'], ['Exon', 'A coding sequence kept in mature mRNA.']],
  [
    { q: 'A pre-mRNA of 3000 bases has introns totalling 1200 bases. How many amino acids can the mature mRNA code for (ignore the stop codon and untranslated ends)?', steps: ['Exons = 3000 − 1200 = **1800 bases.**', 'Codons = 1800 ÷ 3 = **600 amino acids.**'] },
  ]),

  L('ab-translation-7', 'ab-u6-proteinsynthesis', '1.3', 'Translation and the genetic code', 16, ['Molecular genetics'], [
    '**Translation** builds a polypeptide on a **ribosome** following the mRNA code:\n- **activation**: each amino acid is joined to its specific **tRNA** by an enzyme, using ATP\n- the ribosome binds the mRNA and finds the **start codon AUG** (methionine)\n- a tRNA with the complementary **anticodon** brings its amino acid; the ribosome holds two tRNAs at a time\n- a **peptide bond** forms between neighbouring amino acids; the ribosome moves along one codon; the free tRNA leaves to collect another amino acid\n- at a **stop codon** (UAA, UAG or UGA) the polypeptide is released.\nSeveral ribosomes can translate one mRNA at once (a polysome).',
    'Features of the **genetic code**:\n- **triplet**: three bases (a codon) per amino acid; 4³ = 64 codons\n- **degenerate**: most amino acids have more than one codon (61 codons for 20 amino acids)\n- **non-overlapping**: each base is read once\n- **universal**: the same codons mean the same amino acids in almost all organisms, which is why human genes work in bacteria.',
    'After translation, polypeptides fold into their tertiary shape and may be modified in the RER and Golgi apparatus.',
  ], 'ab-genetic-code', 'AUG starts; UAA, UAG, UGA stop.',
  ['The anticodon on a tRNA that pairs with the codon GCA is:', ['CGU', 'GCA', 'CGT', 'GCU'], 'Complementary, using U in RNA.'],
  [['Translation', 'Building a polypeptide on a ribosome from mRNA.'], ['Codon', 'Three mRNA bases coding for an amino acid.'], ['Anticodon', 'Three tRNA bases complementary to a codon.'], ['Degenerate code', 'More than one codon for most amino acids.']],
  [
    { q: 'Translate AUG UUU GGC UAA using: UUU = Phe, GGC = Gly, AUG = Met.', steps: ['**AUG: start, methionine.**', '**UUU: phenylalanine; GGC: glycine.**', '**UAA: stop. Polypeptide: Met-Phe-Gly.**'] },
  ]),

  // ---------- 2. Regulation and mutation ----------
  L('ab-lacoperon-7', 'ab-u6-generegulation', '2.1', 'Gene regulation: the lac operon', 15, ['Molecular genetics'], [
    'Cells do not use all their genes all the time. In the bacterium **E. coli**, the enzymes for using lactose are made only when lactose is present: a model described by **Jacob and Monod (1961)**.\nThe **lac operon** is a group of genes and control sequences:\n- **structural genes**: lacZ (β-galactosidase, which hydrolyses lactose to glucose and galactose), lacY (permease, which lets lactose in) and lacA\n- the **operator**: a switch next to the genes\n- the **promoter**: where RNA polymerase binds\n- a separate **regulator gene** codes for a **repressor protein**.',
    '- **Lactose absent**: the repressor binds to the **operator**, blocking RNA polymerase; the structural genes are not transcribed, saving energy\n- **lactose present**: lactose (as its derivative allolactose) binds to the repressor, changing its shape so it **leaves the operator**; RNA polymerase transcribes the genes, and the enzymes are made. When the lactose is used up, the repressor binds again.',
    'This is **induction**: the substrate switches on the genes for its own breakdown. In eukaryotes, genes are controlled by **transcription factors** (proteins that bind promoters), by hormones such as oestrogen, and by how tightly DNA is packed.',
  ], 'ab-lac-operon', 'No lactose: repressor on the operator. Lactose: repressor off.',
  ['A mutation that stops the repressor binding the operator would cause:', ['the enzymes to be made all the time', 'the enzymes never to be made', 'lactose to be made', 'no transcription at all'], 'The switch is always off.'],
  [['Operon', 'A group of genes controlled together by one operator and promoter.'], ['Repressor', 'A protein that blocks transcription by binding the operator.'], ['Operator', 'The DNA sequence the repressor binds to.'], ['Induction', 'Switching on genes in response to a substance.']],
  [
    { q: 'Explain why E. coli grown in glucose makes almost no β-galactosidase, but makes much within minutes of being moved to lactose.', steps: ['**Without lactose, the repressor sits on the operator, so lacZ is not transcribed.**', '**Lactose binds the repressor, which changes shape and leaves the operator.**', '**RNA polymerase transcribes lacZ, Y and A, and the enzymes are made quickly.**'] },
  ]),

  L('ab-mutation-7', 'ab-u6-generegulation', '2.2', 'Gene mutations', 14, ['Molecular genetics'], [
    'A **gene mutation** is a change in the base sequence of DNA. Causes: errors in replication, ionising radiation (X-rays, gamma rays), ultraviolet light and chemical **mutagens** (tar in tobacco smoke, some pesticides).\n- **substitution**: one base replaced by another. It may be **silent** (the new codon codes for the same amino acid, because the code is degenerate), **missense** (a different amino acid) or **nonsense** (a stop codon, shortening the protein)\n- **insertion** or **deletion** of one base: a **frameshift**; every codon after it is read wrongly, usually producing a useless protein. Inserting or deleting three bases adds or removes one amino acid without a frameshift.',
    '**Sickle-cell anaemia**: a substitution in the gene for the β chain of haemoglobin changes the sixth codon from GAG to GUG in the mRNA, so **glutamic acid is replaced by valine**. HbS molecules stick together at low oxygen, distorting red cells into sickles that block capillaries and break down. Homozygotes (HbS HbS) suffer from the disease; heterozygotes (HbA HbS) have the trait and are partly protected from malaria.',
    'Most mutations are harmful or neutral; a few are beneficial and provide the variation on which natural selection acts. Mutations in body cells may cause **cancer**; only mutations in gametes are inherited.',
  ], 'ab-mutations', 'Substitution changes one codon; insertion or deletion shifts the frame.',
  ['Why is a deletion usually more harmful than a substitution?', ['it causes a frameshift that changes every following codon', 'it is always silent', 'it only affects introns', 'it adds a stop codon at the start'], 'All later amino acids may change.'],
  [['Gene mutation', 'A change in the base sequence of a gene.'], ['Mutagen', 'An agent that increases the rate of mutation.'], ['Frameshift', 'A change in the reading frame caused by insertion or deletion.'], ['Silent mutation', 'A change that does not alter the amino acid.']],
  [
    { q: 'The mRNA AUG GCA UUC... has the C of codon 2 replaced by U. What is the effect? (GCA and GUA code for alanine and valine.)', steps: ['**Codon 2 changes from GCA to GUA.**', '**Alanine is replaced by valine: a missense mutation.**', '**The protein may or may not work, depending on where the change lies.**'] },
  ]),

  L('ab-chromosomal-7', 'ab-u6-generegulation', '2.3', 'Chromosome mutations and karyotypes', 14, ['Molecular genetics', 'Practical'], [
    '**Chromosome mutations** change the structure or number of chromosomes:\n- **structural**: deletion, duplication, inversion or translocation of part of a chromosome\n- **numerical**: gain or loss of whole chromosomes (**aneuploidy**), usually from **non-disjunction**, when homologous chromosomes or chromatids fail to separate in meiosis, giving gametes with an extra or missing chromosome; or whole extra sets (**polyploidy**), common in plants.',
    'A **karyotype** is the set of chromosomes of a cell, photographed at metaphase and arranged in pairs by size and centromere position. Humans have **46** chromosomes: 22 pairs of autosomes and one pair of sex chromosomes (XX or XY).\n- **Down syndrome**: **trisomy 21** (47 chromosomes); learning difficulties, characteristic features, heart defects; risk rises with the mother’s age\n- **Klinefelter syndrome**: **47, XXY**; male, tall, small testes, usually infertile\n- **Turner syndrome**: **45, X**; female, short, ovaries do not develop, infertile.',
    'Practical: from a karyotype chart, count the chromosomes, check each pair, identify the sex chromosomes and name the abnormality. Prenatal tests (amniocentesis, chorionic villus sampling) can produce a karyotype of a fetus.',
  ], 'ab-karyotypes', 'Count, pair, check the sex chromosomes.',
  ['A karyotype shows 47 chromosomes with three copies of chromosome 21 and XY. The person is:', ['a male with Down syndrome', 'a female with Turner syndrome', 'a male with Klinefelter syndrome', 'normal'], 'Trisomy 21.'],
  [['Non-disjunction', 'Failure of chromosomes to separate in meiosis.'], ['Aneuploidy', 'An abnormal number of individual chromosomes.'], ['Karyotype', 'The chromosomes of a cell arranged in pairs.'], ['Trisomy', 'Three copies of one chromosome.']],
  [
    { q: 'Explain how non-disjunction in the mother can produce a child with Turner syndrome.', steps: ['**The X chromosomes fail to separate in meiosis, so an egg forms with no X chromosome.**', '**It is fertilised by a sperm carrying an X.**', '**The zygote has 45 chromosomes with a single X: Turner syndrome (45, X).**'] },
  ]),

  // ---------- 3. Gene technology ----------
  L('ab-recombinant-7', 'ab-u6-gentech', '3.1', 'Recombinant DNA and gene cloning', 16, ['Gene technology'], [
    '**Recombinant DNA** combines DNA from different organisms. Making human insulin in bacteria:\n- obtain the gene: cut it from human DNA with **restriction enzymes**, or make it from insulin mRNA using **reverse transcriptase** (giving DNA without introns, which bacteria cannot remove)\n- **restriction enzymes** cut DNA at specific sequences; many make staggered cuts leaving **sticky ends** (EcoRI cuts GAATTC between G and A)\n- cut a **plasmid** (the **vector**) with the **same** restriction enzyme, so its sticky ends match the gene’s\n- join gene and plasmid with **DNA ligase**\n- put the recombinant plasmid into bacteria (**transformation**), helped by calcium ions and heat shock\n- identify transformed bacteria with **marker genes** (antibiotic resistance, or fluorescence) and grow them in fermenters to harvest the protein.',
    'Products made this way: human insulin (since the early 1980s, replacing animal insulin), growth hormone, blood-clotting factors, hepatitis B vaccine. Genetically modified crops include insect-resistant (Bt) maize and cotton, and Golden Rice with extra provitamin A.',
    'Concerns: spread of genes to wild relatives, effects on non-target insects, dependence on seed companies, labelling and consumer choice, and ethical questions about modifying animals and humans. Each use must be judged on evidence of risks and benefits, under national biosafety laws.',
  ], 'ab-gene-cloning', 'Same restriction enzyme for gene and plasmid; ligase seals.',
  ['Why must the same restriction enzyme cut both the gene and the plasmid?', ['so their sticky ends are complementary and can join', 'to kill the bacteria', 'to make the plasmid larger', 'so ligase is not needed'], 'Matching overhangs pair.'],
  [['Restriction enzyme', 'An enzyme that cuts DNA at a specific base sequence.'], ['Vector', 'A carrier, such as a plasmid, used to insert DNA into a cell.'], ['Transformation', 'Uptake of foreign DNA by a cell.'], ['Marker gene', 'A gene used to identify cells that took up the vector.']],
  [
    { q: 'Explain why the human insulin gene is usually made from mRNA rather than cut from chromosomes for use in bacteria.', steps: ['**Human genes contain introns.**', '**Bacteria have no machinery to splice out introns.**', '**DNA copied from mature mRNA by reverse transcriptase has no introns, so bacteria can express it correctly.**'] },
  ]),

  L('ab-pcr-7', 'ab-u6-gentech', '3.2', 'PCR, gel electrophoresis and DNA profiling', 15, ['Gene technology', 'Practical'], [
    'The **polymerase chain reaction (PCR)** copies a chosen piece of DNA millions of times in a few hours. Each cycle:\n- **denaturation** at about **95 °C**: the strands separate\n- **annealing** at about **55 °C**: short **primers** bind to the ends of the target sequence\n- **extension** at about **72 °C**: **Taq polymerase** (from Thermus aquaticus, a bacterium of hot springs, so it is not denatured) builds new strands.\nThe amount doubles each cycle: after n cycles, 2ⁿ copies.',
    '**Gel electrophoresis** separates DNA fragments by size. DNA is placed in wells in an agarose gel; an electric current is applied; DNA, being **negatively charged** (phosphate groups), moves towards the **positive** electrode. **Smaller fragments move further**. A **ladder** of known sizes in one lane allows sizes to be read; bands are made visible with a stain or a fluorescent dye.',
    '**DNA profiling** compares variable regions of DNA (short tandem repeats) that differ between people. Uses: identifying suspects and victims in crime, settling paternity, identifying remains after disasters, and tracing pathogens. Only identical twins share the same profile.',
  ], 'ab-gel', 'Denature 95, anneal 55, extend 72; DNA runs to +.',
  ['In gel electrophoresis, the band nearest the wells contains:', ['the largest fragments', 'the smallest fragments', 'no DNA', 'primers only'], 'Large fragments move slowly.'],
  [['PCR', 'A method of copying DNA many times in cycles of heating and cooling.'], ['Primer', 'A short DNA sequence that starts copying at a specific site.'], ['Gel electrophoresis', 'Separation of DNA fragments by size in an electric field.'], ['DNA profiling', 'Comparing variable DNA regions to identify individuals.']],
  [
    { q: 'A child’s profile has bands at 6, 9 and 14 kb. The mother has 6 and 11; man A has 9 and 14; man B has 8 and 14. Who could be the father?', steps: ['**The child got 6 from the mother.**', '**The other bands (9 and 14) must come from the father.**', '**Man A has both 9 and 14; man B lacks 9. Man A could be the father.**'] },
  ]),

  // ---------- 4. Mendelian genetics ----------
  L('ab-monohybrid-7', 'ab-u6-mendel', '4.1', 'Monohybrid inheritance', 14, ['Inheritance'], [
    'Terms: a **gene** occupies a **locus** on a chromosome; its alternative forms are **alleles**. A **homozygous** organism has two identical alleles (AA or aa); a **heterozygous** one has two different alleles (Aa). The **genotype** is the alleles present; the **phenotype** is the observable feature, the result of genotype and environment. A **dominant** allele is expressed in the heterozygote; a **recessive** allele only in the homozygote.',
    '**Gregor Mendel** (1866), working with garden peas, found the **law of segregation**: the two alleles of a gene separate during gamete formation, so each gamete carries one allele. Crossing pure-breeding tall (TT) with dwarf (tt) peas gives all tall F1 (Tt); selfing F1 gives F2 in the ratio **3 tall : 1 dwarf** (genotypes 1 TT : 2 Tt : 1 tt).',
    'A **test cross** (back cross) with the homozygous recessive reveals an unknown genotype: if all offspring show the dominant phenotype, the parent was homozygous; if half show the recessive phenotype, it was heterozygous.',
  ], 'monohybrid-cross', 'Each gamete carries one allele of each gene.',
  ['A test cross of a tall pea gives 52 tall and 48 dwarf. The tall parent was:', ['heterozygous, Tt', 'homozygous, TT', 'tt', 'impossible to tell'], 'A 1 : 1 ratio.'],
  [['Allele', 'An alternative form of a gene.'], ['Genotype', 'The alleles an organism has.'], ['Phenotype', 'The observable characteristics.'], ['Test cross', 'A cross with the homozygous recessive to find an unknown genotype.']],
  [
    { q: 'Albinism is recessive. Two normally pigmented parents have an albino child. What is the chance their next child is albino?', steps: ['**Both parents must be carriers, Aa.**', '**Aa × Aa gives AA : Aa : aa in 1 : 2 : 1.**', '**Probability of aa = 1/4 (25%) for each child.**'] },
  ]),

  L('ab-dihybrid-7', 'ab-u6-mendel', '4.2', 'Dihybrid inheritance', 16, ['Inheritance'], [
    'A **dihybrid cross** follows two genes at once. Mendel’s **law of independent assortment**: alleles of different genes (on different chromosomes) are distributed to gametes independently of each other, because homologous pairs line up at random at metaphase I.',
    'Example in peas: round (R) is dominant to wrinkled (r); yellow (Y) is dominant to green (y).\n- P: RRYY × rryy; F1: all RrYy (round, yellow)\n- F1 gametes: **RY, Ry, rY, ry** in equal proportions\n- F2 from a 4 × 4 Punnett square: **9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green**.',
    'The **dihybrid test cross** RrYy × rryy gives **1 : 1 : 1 : 1**. If the observed ratio departs strongly from 9 : 3 : 3 : 1 or 1 : 1 : 1 : 1, the genes may be **linked** (on the same chromosome) or interact (**epistasis**); the chi-squared test decides whether a difference is significant.',
  ], 'ab-dihybrid', 'Four gamete types; 9 : 3 : 3 : 1 from two heterozygotes.',
  ['What fraction of the F2 of RrYy × RrYy is round and green?', ['3/16', '9/16', '1/16', '1/4'], 'R_ yy.'],
  [['Dihybrid cross', 'A cross following two genes.'], ['Independent assortment', 'Random distribution of alleles of different genes into gametes.'], ['Punnett square', 'A grid showing the combinations of gametes.']],
  [
    { q: 'List the gametes of AaBb and of Aabb.', steps: ['**AaBb: AB, Ab, aB, ab (four types, equal numbers).**', '**Aabb: Ab and ab (two types).**'] },
  ]),

  L('ab-chisquare-7', 'ab-u6-mendel', '4.3', 'The chi-squared test', 16, ['Inheritance', 'Data analysis'], [
    'The **chi-squared (χ²) test** checks whether observed results differ **significantly** from those expected from a hypothesis (such as a 9 : 3 : 3 : 1 ratio), or whether the difference could be due to chance.\nSteps:\n- state the **null hypothesis**: there is no significant difference between observed and expected numbers\n- calculate the **expected** numbers (E) from the total and the ratio\n- for each class calculate **(O − E)² ÷ E**; add them: **χ² = Σ (O − E)² ÷ E**\n- **degrees of freedom** = number of classes − 1\n- compare χ² with the **critical value** at the **0.05 probability** level.',
    'Critical values at p = 0.05: 1 df **3.84**; 2 df **5.99**; 3 df **7.82**; 4 df **9.49**.\n- if χ² is **less** than the critical value, the probability that the difference is due to chance is more than 5%: **accept** the null hypothesis; the results fit the ratio\n- if χ² is **greater**, the difference is **significant**: reject the null hypothesis; something else (linkage, selection, epistasis) is acting.',
    'The test needs raw counts (not percentages) and expected numbers that are not too small (each at least about 5).',
  ], 'ab-chi-table', 'χ² = Σ(O − E)²/E; df = classes − 1; compare at p = 0.05.',
  ['With 4 phenotype classes, the degrees of freedom are:', ['3', '4', '5', '2'], 'Classes minus one.'],
  [['Null hypothesis', 'The statement that there is no significant difference.'], ['Degrees of freedom', 'The number of classes minus one.'], ['Critical value', 'The χ² value at the chosen probability level.'], ['Significant', 'Too large a difference to be due to chance.']],
  [
    { q: 'A dihybrid cross gives 556 offspring: 315, 108, 101, 32. Test against 9 : 3 : 3 : 1.', steps: ['Expected: 556 × 9/16 = **312.75**; × 3/16 = **104.25** (twice); × 1/16 = **34.75.**', '(O − E)²/E: 0.016 + 0.135 + 0.101 + 0.218 = **χ² ≈ 0.47.**', 'df = 3; critical value 7.82.', '**0.47 < 7.82: no significant difference; the results fit 9 : 3 : 3 : 1.**'] },
  ]),

  // ---------- 5. Advanced inheritance ----------
  L('ab-sexlinkage-7', 'ab-u6-linkage', '5.1', 'Sex determination and sex linkage', 15, ['Inheritance'], [
    'In mammals, females are **XX** and males **XY**; the Y carries the SRY gene that triggers male development. Males produce X and Y sperm in equal numbers, so each child has a 1 in 2 chance of being a boy.',
    '**Sex-linked** genes lie on the **X chromosome**, which is much larger than the Y; the Y carries no allele for them. Recessive X-linked conditions appear far more often in males, who need only one copy:\n- **haemophilia**: blood fails to clot (lacking factor VIII)\n- **red-green colour blindness**.\nWrite alleles as superscripts: X^H (normal) and X^h (haemophilia). Females can be X^H X^H, **carrier** X^H X^h, or affected X^h X^h; males X^H Y or X^h Y.',
    'Pattern in pedigrees: affected sons usually have carrier mothers; an affected father passes the allele to **all his daughters** (carriers) but **none of his sons**, because sons receive his Y. In a pedigree, squares are males, circles females, shaded symbols affected.',
  ], 'ab-sex-linkage', 'Fathers pass X to daughters, Y to sons.',
  ['A carrier mother (X^H X^h) and a normal father (X^H Y): the chance that a son is affected is:', ['1/2', '1/4', '0', '1'], 'Sons receive one of her two X chromosomes.'],
  [['Sex linkage', 'Inheritance of genes carried on the X chromosome.'], ['Carrier', 'A heterozygous female with a recessive X-linked allele.'], ['Pedigree', 'A family tree showing inheritance of a feature.']],
  [
    { q: 'A colour-blind man (X^b Y) marries a woman with normal vision who is not a carrier (X^B X^B). Give the outcomes.', steps: ['**Daughters: X^B X^b, all carriers with normal vision.**', '**Sons: X^B Y, all with normal vision.**', '**No children are colour blind, but all daughters can pass the allele on.**'] },
  ]),

  L('ab-linkage-7', 'ab-u6-linkage', '5.2', 'Autosomal linkage and crossing over', 15, ['Inheritance'], [
    'Genes on the **same chromosome** are **linked**: they tend to be inherited together and do not assort independently. A dihybrid test cross with linked genes gives mostly **parental** combinations instead of 1 : 1 : 1 : 1.',
    'Linkage is broken by **crossing over** at **chiasmata** during prophase I of meiosis, when non-sister chromatids of homologous chromosomes exchange segments, producing **recombinant** gametes.\n**Recombination frequency = (number of recombinant offspring ÷ total offspring) × 100%**.\nThe further apart two genes are, the more often crossing over separates them. A recombination frequency of 1% is taken as **1 map unit (centimorgan)**, so frequencies are used to **map** gene order and distances. Frequencies cannot exceed 50%, which looks like independent assortment.',
    'Example: in a test cross, 400 offspring are 172 + 168 parental types and 31 + 29 recombinants. RF = 60 ÷ 400 × 100 = **15%**: the genes are 15 map units apart.',
  ], 'ab-linkage-map', 'Recombinants ÷ total × 100 = map units.',
  ['Genes A and B show 8% recombination, B and C 3%, A and C 11%. The order is:', ['A – B – C', 'B – A – C', 'A – C – B', 'C – A – B'], 'A to C equals A to B plus B to C.'],
  [['Linked genes', 'Genes on the same chromosome.'], ['Crossing over', 'Exchange of segments between non-sister chromatids.'], ['Recombinant', 'An offspring with a new combination of alleles.'], ['Map unit', 'A recombination frequency of 1%.']],
  [
    { q: 'Explain why a test cross of AaBb with linked genes gives more AaBb and aabb offspring than Aabb and aaBb.', steps: ['**If the parent received AB from one parent and ab from the other, A and B are on one chromosome, a and b on its homologue.**', '**Without crossing over, gametes are AB or ab: the parental types are most common.**', '**Ab and aB gametes form only when crossing over occurs between the genes, which is less frequent.**'] },
  ]),

  L('ab-epistasis-7', 'ab-u6-linkage', '5.3', 'Codominance, multiple alleles and epistasis', 16, ['Inheritance'], [
    '**Codominance**: both alleles are fully expressed in the heterozygote. In the human **ABO blood groups**, there are **multiple alleles**: I^A and I^B are codominant, and both are dominant to i.\n- group A: I^A I^A or I^A i; group B: I^B I^B or I^B i; group AB: I^A I^B; group O: i i.\nIn sickle cell, HbA HbS individuals make both normal and sickle haemoglobin: codominance at the molecular level.',
    '**Epistasis**: one gene affects the expression of another gene at a different locus. It modifies the 9 : 3 : 3 : 1 ratio:\n- **recessive epistasis**, **9 : 3 : 4**: in mice, aa (no pigment, albino) masks the gene for agouti or black coat\n- **dominant epistasis**, **12 : 3 : 1**: in summer squash, a dominant allele for white fruit masks the colour gene\n- **complementary genes**, **9 : 7**: in sweet peas, purple flowers need a dominant allele of both genes (each controls a step in making the pigment).',
    'Epistasis often reflects **biochemical pathways**: if gene A’s enzyme makes the substance that gene B’s enzyme acts on, a failure at A hides whatever B could do.',
  ], 'ab-epistasis', 'ABO: I^A and I^B codominant over i. Epistasis bends 9 : 3 : 3 : 1.',
  ['Parents of blood groups A and B have a child of group O. Their genotypes must be:', ['I^A i and I^B i', 'I^A I^A and I^B I^B', 'I^A I^B and ii', 'ii and ii'], 'Each passed an i allele.'],
  [['Codominance', 'Both alleles fully expressed in the heterozygote.'], ['Multiple alleles', 'More than two alleles of one gene in a population.'], ['Epistasis', 'Interaction in which one gene masks or modifies another.']],
  [
    { q: 'Two black mice (AaBb) are crossed, where aa gives albino whatever B is, B gives black and bb brown. Give the expected ratio.', steps: ['**A_B_ = 9 black; A_bb = 3 brown; aa__ = 4 albino.**', '**Ratio 9 black : 3 brown : 4 albino (recessive epistasis).**'] },
  ]),

  // ---------- 6. Homeostasis and the kidney ----------
  L('ab-homeostasis-7', 'ab-u6-kidney', '6.1', 'Homeostasis and negative feedback', 13, ['Homeostasis'], [
    '**Homeostasis** is the maintenance of a constant internal environment: body temperature (about 37 °C), blood glucose (about 4 to 6 mmol dm⁻³), blood water potential, pH and carbon dioxide concentration. Enzymes and cells work best in stable conditions.',
    'Control systems use **negative feedback**:\n- a **receptor** detects a change from the **set point**\n- a **coordinator** (brain or endocrine gland) receives the information\n- **effectors** (muscles, glands) make a **corrective response**\n- the factor returns towards the set point and the response is reduced.\nNegative feedback keeps conditions within narrow limits. **Positive feedback** amplifies a change (contractions in childbirth driven by oxytocin; the rising LH before ovulation); it is used for rapid one-way events, not for stability.',
    '**Excretion** removes the waste products of metabolism: carbon dioxide (lungs) and **urea**, made in the **liver** from excess amino acids by **deamination** (the amino group becomes ammonia, then urea in the ornithine cycle). The kidneys excrete urea and regulate water and salt.',
  ], 'ab-negative-feedback', 'Receptor → coordinator → effector → correction.',
  ['Why is negative feedback, not positive feedback, used to regulate blood glucose?', ['it reverses changes, keeping levels stable', 'it amplifies changes', 'it acts only once', 'it needs no receptors'], 'Stability needs correction.'],
  [['Homeostasis', 'Keeping the internal environment constant.'], ['Negative feedback', 'A response that reverses a change.'], ['Deamination', 'Removal of the amino group from an amino acid.'], ['Excretion', 'Removal of metabolic waste.']],
  [
    { q: 'Describe the negative feedback loop when body temperature rises.', steps: ['**Thermoreceptors in the hypothalamus detect the rise.**', '**The hypothalamus sends impulses to effectors.**', '**Sweating increases and skin arterioles dilate, losing heat; temperature falls back and the response decreases.**'] },
  ]),

  L('ab-nephron-7', 'ab-u6-kidney', '6.2', 'The nephron', 17, ['Homeostasis', 'Practical'], [
    'Each kidney has an outer **cortex**, an inner **medulla** (pyramids) and a **pelvis** leading to the **ureter**; it contains about a million **nephrons**.\n- **Ultrafiltration**: blood enters the **glomerulus** (a capillary knot) at high pressure because the afferent arteriole is wider than the efferent; water and small solutes (glucose, amino acids, urea, ions) are forced through the capillary endothelium, basement membrane and podocytes into **Bowman’s capsule**. Cells and plasma proteins stay in the blood. About 125 cm³ of filtrate forms per minute.\n- **Selective reabsorption** in the **proximal convoluted tubule**: all the glucose and amino acids and most water and sodium are reabsorbed, by co-transport and osmosis, through cells with **microvilli** and many **mitochondria**.',
    '- **Loop of Henle**: a **counter-current multiplier**. The **ascending limb** actively pumps **Na⁺ and Cl⁻** out into the medulla and is **impermeable to water**; the **descending limb** is permeable to water, which leaves by osmosis into the salty medulla. The medulla becomes very concentrated, most deeply at the tip.\n- **Distal convoluted tubule**: adjusts pH and the balance of ions.\n- **Collecting duct**: passes down through the salty medulla; water leaves by osmosis when the walls are made permeable by **ADH**, producing concentrated urine.',
    'Animals of dry habitats have **long loops of Henle** and can produce very concentrated urine. Practical: in a dissected sheep or pig kidney, identify the cortex, medulla, pyramids, pelvis and ureter, and the renal artery and vein.',
  ], 'ab-nephron', 'Filter, reabsorb, concentrate.',
  ['Glucose is absent from normal urine because:', ['it is all reabsorbed in the proximal convoluted tubule', 'it is not filtered', 'the loop of Henle destroys it', 'the bladder absorbs it'], 'By co-transport with Na⁺.'],
  [['Ultrafiltration', 'Filtration under pressure in the glomerulus.'], ['Selective reabsorption', 'Taking back useful substances from the filtrate.'], ['Counter-current multiplier', 'The loop of Henle mechanism that concentrates salt in the medulla.'], ['Podocyte', 'A cell of Bowman’s capsule with gaps between its extensions.']],
  [
    { q: 'Filtrate forms at 125 cm³ per minute and urine at 1 cm³ per minute. What percentage of the filtrate is reabsorbed?', steps: ['Reabsorbed = 125 − 1 = **124 cm³ per minute.**', 'Percentage = 124 ÷ 125 × 100 = **99.2%.**'] },
  ]),

  // ---------- 7. Hormones ----------
  L('ab-adh-7', 'ab-u6-hormones', '7.1', 'Osmoregulation and ADH', 14, ['Homeostasis'], [
    '**Osmoregulation** controls the water potential of the blood:\n- **osmoreceptors** in the **hypothalamus** detect a fall in blood water potential (after sweating, eating salty food or drinking little)\n- the hypothalamus makes **antidiuretic hormone (ADH)**, which is stored in and released from the **posterior pituitary gland**\n- ADH travels in the blood to the **collecting ducts** (and distal tubules), binds to receptors and causes vesicles containing **aquaporins** (water channels) to fuse with the cell membranes\n- the walls become more permeable to water, which moves out by osmosis into the salty medulla\n- **less urine**, more concentrated, is produced, and the blood water potential rises back.',
    'When blood water potential is too high (after drinking much water), less ADH is released; aquaporins are removed; **large volumes of dilute urine** are produced. Thirst is also triggered by the hypothalamus.',
    'Alcohol inhibits ADH release, causing dehydration. Lack of ADH causes **diabetes insipidus**: large volumes of dilute urine without glucose (unlike diabetes mellitus).',
  ], 'ab-adh', 'More ADH: more aquaporins, less urine.',
  ['After a long walk in the hot sun without drinking, ADH secretion:', ['increases', 'decreases', 'stops', 'stays the same'], 'Blood water potential has fallen.'],
  [['Osmoregulation', 'Control of the water potential of body fluids.'], ['ADH', 'Antidiuretic hormone, which increases water reabsorption.'], ['Aquaporin', 'A protein channel for water.'], ['Osmoreceptor', 'A receptor that detects changes in water potential.']],
  [
    { q: 'Explain why drinking alcohol can cause a headache from dehydration.', steps: ['**Alcohol inhibits ADH release from the posterior pituitary.**', '**Collecting ducts become less permeable, so less water is reabsorbed.**', '**More dilute urine is lost and the body becomes dehydrated.**'] },
  ]),

  L('ab-bloodsugar-7', 'ab-u6-hormones', '7.2', 'Control of blood glucose', 15, ['Homeostasis', 'Practical'], [
    'Blood glucose is kept at about **4 to 6 mmol dm⁻³** by the **islets of Langerhans** in the **pancreas**:\n- **rise** in glucose (after a meal): **β cells** secrete **insulin**, which increases glucose uptake by liver and muscle cells (more glucose transporters in their membranes), stimulates **glycogenesis** (glucose to glycogen), increases respiration and fat synthesis; glucose falls\n- **fall** in glucose (fasting, exercise): **α cells** secrete **glucagon**, which acts on the liver to stimulate **glycogenolysis** (glycogen to glucose) and **gluconeogenesis** (glucose from amino acids and glycerol); glucose rises.\n**Adrenaline** also raises blood glucose in stress.',
    '**Diabetes mellitus**:\n- **type 1**: the immune system destroys the β cells, so no insulin is made; usually begins in childhood; treated with **insulin injections**, careful diet and monitoring\n- **type 2**: cells become resistant to insulin, or too little is made; linked to obesity, inactivity and family history; increasingly common in Cameroon’s towns; treated with diet, exercise, weight loss and drugs.\nSymptoms: thirst, frequent urination, tiredness, weight loss; complications include damage to eyes, kidneys, nerves and blood vessels.',
    'Practical: test **mock urine samples** with Benedict’s solution or glucose test strips; a positive result suggests that blood glucose exceeds the kidney’s reabsorption capacity, as in untreated diabetes.',
  ], 'ab-blood-glucose', 'Insulin lowers glucose; glucagon raises it.',
  ['Glucagon acts mainly on the:', ['liver', 'muscles only', 'brain', 'kidney'], 'Glycogenolysis and gluconeogenesis.'],
  [['Insulin', 'A hormone from β cells that lowers blood glucose.'], ['Glucagon', 'A hormone from α cells that raises blood glucose.'], ['Glycogenesis', 'Making glycogen from glucose.'], ['Gluconeogenesis', 'Making glucose from non-carbohydrates.']],
  [
    { q: 'Explain why a person with type 1 diabetes may produce glucose in the urine.', steps: ['**Without insulin, cells take up little glucose and the liver does not store it as glycogen.**', '**Blood glucose rises very high.**', '**The filtrate holds more glucose than the proximal tubule carriers can reabsorb, so the excess appears in urine.**'] },
  ]),

  // ---------- 8. Nerves ----------
  L('ab-neurone-7', 'ab-u6-nerves', '8.1', 'Neurones and the resting potential', 14, ['Nervous coordination'], [
    'Types of neurone:\n- **sensory**: carry impulses from receptors to the central nervous system; the cell body lies in a dorsal root ganglion\n- **relay** (intermediate): within the CNS, linking sensory and motor neurones\n- **motor**: carry impulses from the CNS to effectors; the cell body lies in the CNS with dendrites, and a long **axon** ending at the effector.\nMany axons are wrapped in a **myelin sheath**, made by **Schwann cells**, with gaps called **nodes of Ranvier**.',
    'At rest the inside of the axon is **negative** relative to the outside: the **resting potential**, about **−70 mV**. It is maintained by:\n- the **sodium-potassium pump**, moving **3 Na⁺ out** and **2 K⁺ in** for each ATP\n- the membrane being **more permeable to K⁺** than to Na⁺ (many K⁺ leak channels), so K⁺ diffuses out, leaving the inside negative\n- large negative organic ions trapped inside.\nThe membrane is said to be **polarised**.',
    'A **reflex arc** (receptor → sensory neurone → relay neurone → motor neurone → effector) gives fast, automatic protection, such as withdrawing the hand from a hot pan.',
  ], 'reflex-arc', 'Pump 3 Na⁺ out, 2 K⁺ in; K⁺ leaks out: −70 mV.',
  ['The resting potential is negative inside mainly because:', ['K⁺ diffuses out through leak channels and the pump removes more positive ions than it brings in', 'Na⁺ floods in', 'Cl⁻ is pumped out', 'the axon has no membrane'], 'More positive charge outside.'],
  [['Resting potential', 'The potential difference across a resting neurone membrane, about −70 mV.'], ['Myelin sheath', 'An insulating layer around many axons.'], ['Node of Ranvier', 'A gap in the myelin sheath.'], ['Polarised', 'Having a potential difference across the membrane.']],
  [
    { q: 'Explain why a respiratory poison eventually abolishes the resting potential.', steps: ['**Without respiration, no ATP is made.**', '**The sodium-potassium pump stops.**', '**Ions leak down their gradients until the concentrations even out, and the potential difference disappears.**'] },
  ]),

  L('ab-actionpotential-7', 'ab-u6-nerves', '8.2', 'The action potential and its conduction', 16, ['Nervous coordination', 'Data analysis'], [
    'A stimulus opens some sodium channels. If the membrane reaches the **threshold** (about **−55 mV**), an **action potential** follows:\n- **depolarisation**: **voltage-gated Na⁺ channels** open; Na⁺ floods in; the inside becomes positive, to about **+40 mV**\n- **repolarisation**: Na⁺ channels close and **voltage-gated K⁺ channels** open; K⁺ flows out; the potential falls\n- **hyperpolarisation**: so much K⁺ leaves that the potential briefly falls below −70 mV\n- the resting potential is restored by the pump and leak channels.\nThe whole event lasts about 2 to 3 ms.',
    'The **all-or-nothing** law: a stimulus below threshold produces no action potential; any stimulus above it produces a full-sized one. A stronger stimulus causes a higher **frequency** of impulses, not bigger ones. During the **refractory period**, the membrane cannot fire again (absolute) or needs a larger stimulus (relative); this keeps impulses **separate** and makes them travel **one way**.',
    'Conduction: the action potential causes local currents that depolarise the next region. In **myelinated** axons, depolarisation occurs only at the **nodes of Ranvier**, so the impulse jumps from node to node (**saltatory conduction**), reaching about 100 m s⁻¹ compared with about 1 m s⁻¹ in thin unmyelinated axons. Speed also increases with **axon diameter** and temperature.',
  ], 'ab-action-potential', 'Na⁺ in (up), K⁺ out (down), refractory period (one way).',
  ['What causes the rising phase of the action potential?', ['voltage-gated sodium channels open and Na⁺ enters', 'potassium enters', 'the pump speeds up', 'chloride enters'], 'Depolarisation.'],
  [['Action potential', 'A rapid reversal of membrane potential that carries an impulse.'], ['Threshold', 'The potential that must be reached to trigger an action potential.'], ['Refractory period', 'A short time after an impulse when the membrane cannot fire again.'], ['Saltatory conduction', 'Impulse jumping from node to node.']],
  [
    { q: 'An impulse travels 0.9 m along a motor neurone in 9 ms. Calculate its speed and suggest whether the axon is myelinated.', steps: ['Speed = 0.9 m ÷ 0.009 s = **100 m s⁻¹.**', '**Such a high speed indicates a myelinated axon with saltatory conduction.**'] },
  ]),

  // ---------- 9. Synapses and muscle ----------
  L('ab-synapse-7', 'ab-u6-synapse', '9.1', 'Synaptic transmission', 15, ['Nervous coordination'], [
    'A **synapse** is a junction between neurones, with a gap, the **synaptic cleft**, about 20 nm wide. At a **cholinergic** synapse:\n- an action potential arrives at the **presynaptic knob**\n- **voltage-gated Ca²⁺ channels** open; calcium ions enter\n- vesicles of **acetylcholine (ACh)** move to and fuse with the presynaptic membrane, releasing ACh by **exocytosis**\n- ACh diffuses across the cleft and binds to **receptors** on the postsynaptic membrane, opening **Na⁺ channels**\n- the postsynaptic membrane depolarises; if threshold is reached, an action potential starts\n- **acetylcholinesterase** hydrolyses ACh into choline and ethanoic acid, which are taken back and recycled, so the signal stops.',
    'Synapses:\n- make transmission **one-way** (vesicles only on one side, receptors only on the other)\n- allow **summation**: several small inputs add up, from many synapses at once (**spatial**) or rapid repeated impulses at one synapse (**temporal**)\n- allow **inhibition**: some neurotransmitters make the postsynaptic membrane more negative\n- filter out weak, unimportant stimuli and allow learning.',
    'Drugs and poisons: **nicotine** mimics ACh at some receptors; **organophosphate** insecticides inhibit acetylcholinesterase, causing continuous stimulation (careless spraying in farms causes poisoning); **curare** and some snake venoms block ACh receptors, causing paralysis.',
  ], 'ab-synapse', 'Ca²⁺ in → ACh out → receptors → enzyme clears.',
  ['Why does an organophosphate insecticide cause muscle spasms?', ['acetylcholinesterase is inhibited, so ACh keeps stimulating', 'it blocks Ca²⁺ channels', 'it destroys ACh receptors', 'it stops ACh being made'], 'Continuous stimulation.'],
  [['Synaptic cleft', 'The gap between neurones at a synapse.'], ['Acetylcholine', 'A neurotransmitter at cholinergic synapses.'], ['Acetylcholinesterase', 'The enzyme that breaks down acetylcholine.'], ['Summation', 'The adding together of several inputs to reach threshold.']],
  [
    { q: 'Explain why a synapse can only pass impulses in one direction.', steps: ['**Vesicles of neurotransmitter are only in the presynaptic knob.**', '**Receptors are only on the postsynaptic membrane.**', '**So the transmitter can only be released on one side and detected on the other.**'] },
  ]),

  L('ab-muscle-7', 'ab-u6-synapse', '9.2', 'Skeletal muscle and the sliding-filament theory', 16, ['Movement', 'Practical'], [
    'A skeletal muscle consists of **muscle fibres** (long multinucleate cells). Each fibre contains **myofibrils**, divided into repeating **sarcomeres** between **Z lines**:\n- thin **actin** filaments attached to the Z lines\n- thick **myosin** filaments in the middle, with protruding **heads**\n- the **A band** (dark): the length of the myosin filaments\n- the **I band** (light): actin only\n- the **H zone**: myosin only, in the centre.\nAt a **neuromuscular junction**, a motor neurone releases ACh, which depolarises the muscle fibre membrane (sarcolemma); the excitation spreads along T-tubules.',
    'The **sliding-filament theory**:\n- excitation causes the **sarcoplasmic reticulum** to release **Ca²⁺**\n- Ca²⁺ binds to **troponin**, which moves **tropomyosin** away from the binding sites on actin\n- **myosin heads** bind to actin, forming **cross-bridges**, and tilt (the **power stroke**), pulling the actin towards the centre; ADP and phosphate are released\n- **ATP** binds to the myosin head, which detaches; hydrolysis of ATP re-cocks the head for the next stroke.\nThe filaments slide over each other: the **I band and H zone shorten**, the **A band stays the same**, and the sarcomere shortens.',
    'When stimulation stops, Ca²⁺ is pumped back into the sarcoplasmic reticulum (using ATP) and the muscle relaxes. After death, ATP runs out, myosin heads stay bound and muscles stiffen (**rigor mortis**).',
  ], 'ab-sarcomere', 'Filaments slide; I band and H zone shorten; A band stays.',
  ['Which band does not change length when a muscle contracts?', ['the A band', 'the I band', 'the H zone', 'the whole sarcomere'], 'Myosin filaments do not shorten.'],
  [['Sarcomere', 'The contractile unit of a myofibril, between two Z lines.'], ['Actin', 'The protein of the thin filaments.'], ['Myosin', 'The protein of the thick filaments, with heads that form cross-bridges.'], ['Troponin', 'A protein that binds calcium and moves tropomyosin.']],
  [
    { q: 'A relaxed sarcomere is 2.5 µm long with an A band of 1.6 µm. On contraction it shortens to 2.0 µm. Give the new A band and total I band lengths.', steps: ['**The A band stays 1.6 µm.**', 'I band (both halves together) = sarcomere − A band.', 'Relaxed: 2.5 − 1.6 = **0.9 µm**; contracted: 2.0 − 1.6 = **0.4 µm.**'] },
  ]),
];

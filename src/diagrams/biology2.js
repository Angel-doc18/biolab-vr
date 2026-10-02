// More labelled Biology and Human Biology diagrams: organ systems and cycles.
import { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { Head, Txt } from './Diagram';

const O = '#33414d';
const rad = (d) => (d * Math.PI) / 180;
const polar = (cx, cy, r, deg) => [Math.round(cx + r * Math.cos(rad(deg))), Math.round(cy + r * Math.sin(rad(deg)))];

// A tube drawn as an outline with a lighter core.
function Tube({ d, w = 10, fill = '#e6a58f' }) {
  return (
    <G>
      <Path d={d} fill="none" stroke={O} strokeWidth={w + 2.4} strokeLinecap="round" strokeLinejoin="round" />
      <Path d={d} fill="none" stroke={fill} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
    </G>
  );
}

function Arrow({ x1, y1, x2, y2, c = O, w = 1.4 }) {
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={w} />
      <Head x={x2} y={y2} dx={x2 - x1} dy={y2 - y1} size={6} fill={c} />
    </G>
  );
}

// ---------- digestion ----------

function DigestiveArt() {
  return (
    <G>
      {/* small intestine coiled in the abdomen (drawn first, the colon frames it) */}
      <Tube d="M214 182 C230 196 222 214 204 214 C180 214 150 210 142 222 C134 236 160 242 186 238 C212 234 226 244 220 256 C214 268 180 264 160 262 C140 260 132 270 146 278" w={9} fill="#efb8a6" />
      {/* oesophagus */}
      <Tube d="M176 6 L178 98" w={10} fill="#e6a58f" />
      {/* stomach */}
      <Path d="M180 94 C200 84 240 86 252 104 C264 124 256 152 232 160 C216 165 200 160 192 152 L186 148 C194 144 200 138 204 130 C194 122 184 110 180 94 Z" fill="#e3a08f" stroke={O} strokeWidth={1.5} />
      {/* liver and gall bladder */}
      <Path d="M90 98 C98 80 162 76 204 90 C200 102 188 112 172 118 C142 130 110 132 96 126 C86 118 86 106 90 98 Z" fill="#8c3b30" stroke={O} strokeWidth={1.5} />
      <Ellipse cx={150} cy={130} rx={8} ry={11} fill="#7fa650" stroke={O} strokeWidth={1.1} />
      {/* pancreas */}
      <Path d="M182 168 C196 160 222 158 244 160 C250 162 250 168 244 170 C224 174 204 176 190 178 C182 178 178 172 182 168 Z" fill="#e8c27a" stroke={O} strokeWidth={1.2} />
      {/* duodenum from the stomach around the head of the pancreas */}
      <Tube d="M188 152 C172 160 168 184 184 192 C196 198 208 192 214 182" w={9} fill="#e6a58f" />
      {/* large intestine: caecum and ascending, transverse and descending colon, then rectum */}
      <Tube d="M118 286 L116 206 C116 198 122 196 130 196 L236 194 C244 194 248 198 248 206 L250 268 C250 286 232 292 214 294 C200 296 192 300 192 308" w={15} fill="#c98a6b" />
      <Tube d="M192 306 L192 322" w={12} fill="#b97a5c" />
      {/* appendix */}
      <Tube d="M116 292 C112 302 104 306 98 304" w={5} fill="#c98a6b" />
    </G>
  );
}

function VillusArt() {
  const cells = [];
  for (let y = 84; y < 250; y += 12) {
    cells.push(<Line key={`l${y}`} x1={100} y1={y} x2={106} y2={y} stroke="#b07a6a" strokeWidth={0.7} />);
    cells.push(<Line key={`r${y}`} x1={194} y1={y} x2={200} y2={y} stroke="#b07a6a" strokeWidth={0.7} />);
  }
  // Microvilli: a fringe on the free surface of the epithelium (the villus top is
  // half an ellipse, 50 wide and 25.5 high, centred at 150, 80).
  const fringe = Array.from({ length: 15 }, (_, i) => {
    const t = rad(180 + (i * 180) / 14);
    const x = 150 + 50 * Math.cos(t);
    const y = 80 + 25.5 * Math.sin(t);
    const nx = Math.cos(t) / 50;
    const ny = Math.sin(t) / 25.5;
    const len = Math.hypot(nx, ny);
    return <Line key={i} x1={x} y1={y} x2={x + (nx / len) * 5} y2={y + (ny / len) * 5} stroke={O} strokeWidth={0.9} />;
  });
  return (
    <G>
      <Path d="M100 250 L100 80 C100 46 200 46 200 80 L200 250" fill="#f6d9cf" stroke={O} strokeWidth={1.6} />
      <Path d="M106 250 L106 82 C106 54 194 54 194 82 L194 250" fill="#fbe9e3" stroke="#b07a6a" strokeWidth={0.9} />
      {cells}
      {fringe}
      {/* capillary network from the arteriole to the venule */}
      <Path d="M118 262 L118 100 C118 72 182 72 182 100 L182 262" fill="none" stroke="#c8463d" strokeWidth={2.6} />
      {[120, 150, 180, 210].map((y) => (
        <Path key={y} d={`M118 ${y} C130 ${y - 8} 140 ${y + 8} 150 ${y} C160 ${y - 8} 170 ${y + 8} 182 ${y}`} fill="none" stroke="#c8463d" strokeWidth={1.2} />
      ))}
      {/* lacteal: lymph vessel taking up fat */}
      <Path d="M140 262 L140 100 C140 88 160 88 160 100 L160 262" fill="#fff6d6" stroke="#c9a227" strokeWidth={1.4} />
      <Arrow x1={118} y1={276} x2={118} y2={262} c="#c8463d" />
      <Arrow x1={182} y1={262} x2={182} y2={276} c="#4a68a8" />
    </G>
  );
}

// ---------- blood and circulation ----------

function BloodCellsArt() {
  return (
    <G>
      {/* red blood cell: biconcave disc with no nucleus */}
      <Circle cx={56} cy={80} r={28} fill="#d65a4f" stroke={O} strokeWidth={1.2} />
      <Circle cx={56} cy={80} r={13} fill="#e8928a" />
      {/* phagocyte with a lobed nucleus */}
      <Path d="M150 46 C172 44 190 60 188 80 C186 102 170 116 150 114 C128 112 112 98 114 78 C116 58 130 48 150 46 Z" fill="#f2e6f3" stroke={O} strokeWidth={1.2} />
      <Path d="M132 70 C134 60 146 60 146 70 C146 78 156 78 158 70 C160 62 172 64 170 74 C168 86 160 92 154 90 C150 100 136 98 136 88 C136 82 130 78 132 70 Z" fill="#7a4fb3" stroke={O} strokeWidth={0.9} />
      {/* lymphocyte with a large round nucleus */}
      <Circle cx={254} cy={80} r={26} fill="#eef0fa" stroke={O} strokeWidth={1.2} />
      <Circle cx={252} cy={80} r={20} fill="#5b4fa8" stroke={O} strokeWidth={0.9} />
      {/* platelets: small cell fragments */}
      {[[330, 68, 6, 4], [344, 84, 5, 3.5], [326, 92, 4.5, 3], [346, 64, 4, 3]].map(([x, y, rx, ry], i) => (
        <Ellipse key={i} cx={x} cy={y} rx={rx} ry={ry} fill="#d9a7c7" stroke={O} strokeWidth={0.9} />
      ))}
      <Txt x={56} y={150} size={11} weight="700">Red blood cell</Txt>
      <Txt x={150} y={150} size={11} weight="700">Phagocyte</Txt>
      <Txt x={254} y={150} size={11} weight="700">Lymphocyte</Txt>
      <Txt x={336} y={150} size={11} weight="700">Platelets</Txt>
      <Txt x={56} y={164} size={9.5}>carries oxygen</Txt>
      <Txt x={150} y={164} size={9.5}>engulfs bacteria</Txt>
      <Txt x={254} y={164} size={9.5}>makes antibodies</Txt>
      <Txt x={336} y={164} size={9.5}>help blood clot</Txt>
    </G>
  );
}

// ---------- plants ----------

const STEM = { cx: 170, cy: 130 };
function StemArt() {
  const { cx, cy } = STEM;
  const bundles = Array.from({ length: 8 }, (_, i) => 22.5 + i * 45);
  const wedge = (a, r0, r1, spread) => {
    const [x1, y1] = polar(cx, cy, r0, a - spread);
    const [x2, y2] = polar(cx, cy, r1, a - spread);
    const [x3, y3] = polar(cx, cy, r1, a + spread);
    const [x4, y4] = polar(cx, cy, r0, a + spread);
    return `M${x1} ${y1} L${x2} ${y2} A${r1} ${r1} 0 0 1 ${x3} ${y3} L${x4} ${y4} A${r0} ${r0} 0 0 0 ${x1} ${y1} Z`;
  };
  return (
    <G>
      <Circle cx={cx} cy={cy} r={110} fill="#e9f3dc" stroke={O} strokeWidth={2.4} />
      <Circle cx={cx} cy={cy} r={104} fill="#f1f6e8" stroke="#8aa36a" strokeWidth={0.8} />
      <Circle cx={cx} cy={cy} r={46} fill="#fbfcf6" stroke="#b9c7a3" strokeWidth={0.8} />
      {bundles.map((a) => (
        <G key={a}>
          <Path d={wedge(a, 50, 70, 13)} fill="#f3e6c8" stroke={O} strokeWidth={0.9} />
          <Path d={wedge(a, 70, 86, 13)} fill="#c9df9f" stroke={O} strokeWidth={0.9} />
          <Path d={(() => {
            const [x1, y1] = polar(cx, cy, 70, a - 13);
            const [x2, y2] = polar(cx, cy, 70, a + 13);
            return `M${x1} ${y1} A70 70 0 0 1 ${x2} ${y2}`;
          })()} fill="none" stroke="#5f7d2f" strokeWidth={2} />
          {[0, 1, 2].map((k) => {
            const [x, y] = polar(cx, cy, 56 + (k % 2) * 6, a - 6 + k * 6);
            return <Circle key={k} cx={x} cy={y} r={3} fill="#fff" stroke="#5b4636" strokeWidth={1.3} />;
          })}
        </G>
      ))}
    </G>
  );
}

// ---------- breathing ----------

function BreathingArt() {
  const ribs = [90, 120, 150, 180, 210];
  return (
    <G>
      {/* ribs with intercostal muscles between them */}
      {ribs.map((y) => (
        <G key={y}>
          <Path d={`M66 ${y} C56 ${y + 10} 54 ${y + 26} 60 ${y + 34}`} fill="none" stroke="#d8cfb8" strokeWidth={7} strokeLinecap="round" />
          <Path d={`M274 ${y} C284 ${y + 10} 286 ${y + 26} 280 ${y + 34}`} fill="none" stroke="#d8cfb8" strokeWidth={7} strokeLinecap="round" />
        </G>
      ))}
      {ribs.slice(0, -1).map((y) => (
        <G key={`m${y}`}>
          <Line x1={60} y1={y + 12} x2={58} y2={y + 30} stroke="#c06a5f" strokeWidth={2} />
          <Line x1={280} y1={y + 12} x2={282} y2={y + 30} stroke="#c06a5f" strokeWidth={2} />
        </G>
      ))}
      {/* lungs inside the pleural membranes */}
      <Path d="M150 88 C110 76 80 100 78 150 C76 196 82 226 100 234 C120 240 140 232 150 222 Z" fill="#f2b5ae" stroke={O} strokeWidth={1.5} />
      <Path d="M190 88 C230 76 260 100 262 150 C264 196 258 226 240 234 C220 240 200 232 190 222 Z" fill="#f2b5ae" stroke={O} strokeWidth={1.5} />
      <Path d="M150 82 C104 70 70 98 72 150 C70 200 78 232 100 240" fill="none" stroke="#7fb0d9" strokeWidth={1.4} />
      <Path d="M86 140 L146 128 M90 190 L146 172" stroke={O} strokeWidth={0.8} />
      <Path d="M252 160 L196 150" stroke={O} strokeWidth={0.8} />
      {/* larynx, trachea with cartilage rings, bronchi and bronchioles */}
      <Rect x={160} y={6} width={20} height={20} rx={4} fill="#e6d6c2" stroke={O} strokeWidth={1.2} />
      <Rect x={163} y={26} width={14} height={66} fill="#efe3d3" stroke={O} strokeWidth={1.2} />
      {[34, 44, 54, 64, 74, 84].map((y) => (
        <Line key={y} x1={163} y1={y} x2={177} y2={y} stroke="#b7a68f" strokeWidth={2} />
      ))}
      <Tube d="M168 92 L140 118 L124 150" w={6} fill="#efe3d3" />
      <Tube d="M172 92 L200 118 L216 150" w={6} fill="#efe3d3" />
      <Path d="M124 150 L110 170 M124 150 L126 178 M140 118 L112 128 M216 150 L230 170 M216 150 L214 178 M200 118 L228 128" stroke="#a88f74" strokeWidth={2} />
      {/* diaphragm dome */}
      <Path d="M54 250 C90 216 250 216 286 250 L286 258 C250 226 90 226 54 258 Z" fill="#b0584a" stroke={O} strokeWidth={1.2} />
    </G>
  );
}

// ---------- skin ----------

function SkinArt() {
  return (
    <G>
      {/* layers: cornified, living (Malpighian) epidermis, dermis, fat */}
      <Rect x={70} y={30} width={240} height={10} fill="#efe0c4" stroke={O} strokeWidth={0.8} />
      <Rect x={70} y={40} width={240} height={22} fill="#e9c7a6" stroke={O} strokeWidth={0.8} />
      <Rect x={70} y={62} width={240} height={150} fill="#f7e3d8" stroke={O} strokeWidth={0.8} />
      <Rect x={70} y={212} width={240} height={46} fill="#fbf1c7" stroke={O} strokeWidth={0.8} />
      {[[90, 226], [118, 238], [150, 228], [186, 240], [222, 228], [256, 238], [290, 228]].map(([x, y], i) => (
        <Ellipse key={i} cx={x} cy={y} rx={13} ry={9} fill="#fff8de" stroke="#d8c48a" strokeWidth={0.8} />
      ))}
      {/* hair in its follicle, sebaceous gland and erector muscle */}
      <Path d="M112 6 C114 18 116 26 118 40" fill="none" stroke="#3b2a20" strokeWidth={2.4} />
      <Path d="M108 40 L104 160 C104 172 132 172 132 160 L128 40" fill="#f0d2be" stroke={O} strokeWidth={1.2} />
      <Line x1={118} y1={40} x2={118} y2={158} stroke="#3b2a20" strokeWidth={2.4} />
      <Ellipse cx={118} cy={164} rx={10} ry={6} fill="#c58a6a" stroke={O} strokeWidth={0.9} />
      <Ellipse cx={142} cy={92} rx={10} ry={7} fill="#f2d16b" stroke={O} strokeWidth={1} />
      <Line x1={130} y1={110} x2={168} y2={70} stroke="#c06a5f" strokeWidth={3} strokeLinecap="round" />
      {/* sweat gland, duct and pore */}
      <Path d="M236 30 L236 40" stroke={O} strokeWidth={1.2} />
      <Path d="M236 40 C230 70 244 100 236 140 C232 160 240 176 236 180" fill="none" stroke="#5a7aa0" strokeWidth={2.4} />
      <Path d="M236 180 C224 182 222 196 232 198 C246 200 252 186 242 184 C230 182 228 194 238 194" fill="none" stroke="#5a7aa0" strokeWidth={3} />
      {/* blood capillaries and a nerve ending */}
      <Path d="M70 74 C110 80 150 64 190 76 C214 84 260 66 310 74" fill="none" stroke="#c8463d" strokeWidth={1.6} />
      <Path d="M180 76 L184 120 C186 140 200 140 202 120 L204 76" fill="none" stroke="#c8463d" strokeWidth={1.4} />
      <Path d="M310 150 C280 150 270 130 276 110 C278 100 284 96 286 88" fill="none" stroke="#e0a43a" strokeWidth={1.6} />
      <Circle cx={286} cy={86} r={3} fill="#e0a43a" />
    </G>
  );
}

// ---------- coordination ----------

function BodyOutline() {
  return (
    <Path
      d="M150 14 C166 14 176 26 176 42 C176 58 166 68 160 70 L160 80 C184 84 204 90 210 110 L222 190 C224 198 214 200 212 192 L200 128 L198 210 C198 220 200 230 196 250 L188 330 L166 330 L160 250 L152 250 L146 250 L140 330 L118 330 L110 250 C106 230 108 220 108 210 L106 128 L94 192 C92 200 82 198 84 190 L96 110 C102 90 122 84 146 80 L146 70 C140 68 130 58 130 42 C130 26 140 14 150 14 Z"
      fill="#fbf4ec"
      stroke={O}
      strokeWidth={1.4}
    />
  );
}

function EndocrineArt() {
  return (
    <G>
      <BodyOutline />
      <Circle cx={152} cy={42} r={5} fill="#7a4fb3" stroke={O} strokeWidth={0.9} />
      <Path d="M140 84 C140 76 150 78 153 82 C156 78 166 76 166 84 C166 92 156 92 153 88 C150 92 140 92 140 84 Z" fill="#e0a43a" stroke={O} strokeWidth={0.9} />
      <Ellipse cx={136} cy={158} rx={9} ry={14} fill="#c58a6a" stroke={O} strokeWidth={0.9} />
      <Ellipse cx={170} cy={158} rx={9} ry={14} fill="#c58a6a" stroke={O} strokeWidth={0.9} />
      <Path d="M128 146 C130 138 142 138 144 146 Z" fill="#f2d16b" stroke={O} strokeWidth={0.9} />
      <Path d="M162 146 C164 138 176 138 178 146 Z" fill="#f2d16b" stroke={O} strokeWidth={0.9} />
      <Path d="M132 176 C146 168 168 168 180 174 C182 178 178 182 172 182 C160 182 146 184 136 184 C130 184 128 180 132 176 Z" fill="#e8c27a" stroke={O} strokeWidth={0.9} />
      <Ellipse cx={136} cy={214} rx={6} ry={4.5} fill="#d97791" stroke={O} strokeWidth={0.9} />
      <Ellipse cx={170} cy={214} rx={6} ry={4.5} fill="#d97791" stroke={O} strokeWidth={0.9} />
      <Ellipse cx={146} cy={258} rx={5} ry={7} fill="#6f86bd" stroke={O} strokeWidth={0.9} />
      <Ellipse cx={160} cy={258} rx={5} ry={7} fill="#6f86bd" stroke={O} strokeWidth={0.9} />
    </G>
  );
}

function JointArt() {
  return (
    <G>
      {/* joint capsule and synovial membrane enclosing the synovial fluid */}
      <Path d="M100 80 C80 100 80 160 100 180 L220 180 C240 160 240 100 220 80 Z" fill="#dfeffa" stroke="#5a7aa0" strokeWidth={1.4} />
      {/* bone ends with cartilage */}
      <Path d="M120 10 L120 92 C120 118 200 118 200 92 L200 10 Z" fill="#efe6d2" stroke={O} strokeWidth={1.4} />
      <Path d="M120 92 C120 118 200 118 200 92 C200 104 120 104 120 92 Z" fill="#cfe3ef" stroke={O} strokeWidth={1} />
      <Path d="M120 250 L120 172 C120 146 200 146 200 172 L200 250 Z" fill="#efe6d2" stroke={O} strokeWidth={1.4} />
      <Path d="M120 172 C120 146 200 146 200 172 C200 160 120 160 120 172 Z" fill="#cfe3ef" stroke={O} strokeWidth={1} />
      {/* ligaments joining bone to bone */}
      <Path d="M108 60 L108 200" stroke="#c9b37a" strokeWidth={6} strokeLinecap="round" />
      <Path d="M212 60 L212 200" stroke="#c9b37a" strokeWidth={6} strokeLinecap="round" />
      {/* bone marrow */}
      <Rect x={146} y={10} width={28} height={60} rx={10} fill="#e9b7a6" opacity={0.7} />
      <Rect x={146} y={190} width={28} height={60} rx={10} fill="#e9b7a6" opacity={0.7} />
    </G>
  );
}

// ---------- reproduction ----------

function FemaleArt() {
  return (
    <G>
      {/* oviducts with funnels over the ovaries */}
      <Tube d="M150 70 C130 54 104 50 86 62 C76 70 74 82 80 92" w={6} fill="#e9a3b4" />
      <Tube d="M210 70 C230 54 256 50 274 62 C284 70 286 82 280 92" w={6} fill="#e9a3b4" />
      <Path d="M72 88 C70 100 90 106 92 94" fill="#e9a3b4" stroke={O} strokeWidth={1} />
      <Path d="M288 88 C290 100 270 106 268 94" fill="#e9a3b4" stroke={O} strokeWidth={1} />
      <Ellipse cx={92} cy={112} rx={15} ry={10} fill="#f3c27a" stroke={O} strokeWidth={1.1} />
      <Ellipse cx={268} cy={112} rx={15} ry={10} fill="#f3c27a" stroke={O} strokeWidth={1.1} />
      {/* uterus with its lining, cervix and vagina */}
      <Path d="M146 64 C146 56 214 56 214 64 C220 110 204 142 192 152 L188 166 L172 166 L168 152 C156 142 140 110 146 64 Z" fill="#d9877e" stroke={O} strokeWidth={1.5} />
      <Path d="M158 72 C160 68 200 68 202 72 C204 104 194 130 184 144 L176 144 C166 130 156 104 158 72 Z" fill="#f2c7c0" stroke="#b5534a" strokeWidth={1} />
      <Rect x={172} y={166} width={16} height={8} fill="#c06a5f" stroke={O} strokeWidth={1} />
      <Path d="M170 174 L166 226 L194 226 L190 174 Z" fill="#f0c4b4" stroke={O} strokeWidth={1.2} />
    </G>
  );
}

function MaleArt() {
  return (
    <G>
      {/* bladder, then the urethra through the prostate and penis */}
      <Path d="M140 30 C140 10 220 10 220 30 C222 60 204 76 180 76 C156 76 138 60 140 30 Z" fill="#f2d9a6" stroke={O} strokeWidth={1.4} />
      <Ellipse cx={180} cy={92} rx={20} ry={13} fill="#d9b48a" stroke={O} strokeWidth={1.2} />
      <Ellipse cx={136} cy={74} rx={10} ry={16} fill="#e8c27a" stroke={O} strokeWidth={1} />
      <Ellipse cx={224} cy={74} rx={10} ry={16} fill="#e8c27a" stroke={O} strokeWidth={1} />
      <Path d="M172 104 L170 210 C170 220 190 220 190 210 L188 104 Z" fill="#efc8b4" stroke={O} strokeWidth={1.3} />
      <Line x1={180} y1={76} x2={180} y2={216} stroke="#c9a227" strokeWidth={2} />
      {/* testes in the scrotum, epididymis and sperm ducts looping over the bladder */}
      <Path d="M112 150 C100 190 124 228 150 222 C162 220 166 200 160 182 Z" fill="#f4dccf" stroke={O} strokeWidth={1.1} />
      <Path d="M248 150 C260 190 236 228 210 222 C198 220 194 200 200 182 Z" fill="#f4dccf" stroke={O} strokeWidth={1.1} />
      <Ellipse cx={136} cy={196} rx={14} ry={18} fill="#e9a3b4" stroke={O} strokeWidth={1.1} />
      <Ellipse cx={224} cy={196} rx={14} ry={18} fill="#e9a3b4" stroke={O} strokeWidth={1.1} />
      <Path d="M148 182 C152 178 154 172 150 168" fill="none" stroke="#7a4fb3" strokeWidth={3} />
      <Path d="M212 182 C208 178 206 172 210 168" fill="none" stroke="#7a4fb3" strokeWidth={3} />
      <Path d="M150 168 C120 140 104 60 130 40 C140 34 150 40 158 56 C164 70 170 84 176 92" fill="none" stroke="#5a7aa0" strokeWidth={2.2} />
      <Path d="M210 168 C240 140 256 60 230 40 C220 34 210 40 202 56 C196 70 190 84 184 92" fill="none" stroke="#5a7aa0" strokeWidth={2.2} />
    </G>
  );
}

// ---------- genetics ----------

function ChromosomeArt() {
  const pairs = [['A', 'T'], ['C', 'G'], ['T', 'A'], ['G', 'C'], ['A', 'T'], ['C', 'G']];
  return (
    <G>
      {/* chromosome: two sister chromatids joined at the centromere */}
      <Path d="M58 30 C50 30 48 40 52 50 L72 100 L52 150 C48 160 50 170 58 170 C66 170 70 162 74 152 L84 120 L94 152 C98 162 102 170 110 170 C118 170 120 160 116 150 L96 100 L116 50 C120 40 118 30 110 30 C102 30 98 38 94 48 L84 80 L74 48 C70 38 66 30 58 30 Z" fill="#9fb6e6" stroke={O} strokeWidth={1.3} />
      <Circle cx={84} cy={100} r={7} fill="#f2a83a" stroke={O} strokeWidth={1} />
      <Path d="M62 56 L71 52 L76 64 L67 68 Z" fill="#2e8b57" stroke={O} strokeWidth={0.8} />
      {/* enlarged section of DNA: two backbones joined by base pairs */}
      <Path d="M126 100 L196 40 M126 100 L196 160" stroke={O} strokeWidth={0.8} strokeDasharray="3 3" />
      <Rect x={200} y={30} width={150} height={140} fill="#fbfbf7" stroke={O} strokeWidth={0.8} />
      <Path d="M214 40 C254 70 254 130 214 160" fill="none" stroke="#5a7aa0" strokeWidth={5} />
      <Path d="M336 40 C296 70 296 130 336 160" fill="none" stroke="#c06a5f" strokeWidth={5} />
      {pairs.map(([a, b], i) => {
        const y = 52 + i * 20;
        const t = (y - 40) / 120;
        const xl = 214 + 40 * 4 * t * (1 - t) * 0.75;
        const xr = 336 - 40 * 4 * t * (1 - t) * 0.75;
        const mid = (xl + xr) / 2;
        return (
          <G key={i}>
            <Line x1={xl} y1={y} x2={mid} y2={y} stroke="#7fb069" strokeWidth={4} />
            <Line x1={mid} y1={y} x2={xr} y2={y} stroke="#e0a43a" strokeWidth={4} />
            <Txt x={xl + 10} y={y - 4} size={8} weight="700">{a}</Txt>
            <Txt x={xr - 10} y={y - 4} size={8} weight="700">{b}</Txt>
          </G>
        );
      })}
    </G>
  );
}

// ---------- ecology ----------

function Box({ x, y, w, h, text, fill }) {
  const lines = text.split('\n');
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} rx={6} fill={fill} stroke={O} strokeWidth={1.2} />
      {lines.map((t, i) => (
        <Txt key={i} x={x + w / 2} y={y + h / 2 + 4 + (i - (lines.length - 1) / 2) * 12} size={10} weight="700">
          {t}
        </Txt>
      ))}
    </G>
  );
}

function CarbonArt() {
  return (
    <G>
      <Box x={120} y={8} w={140} h={36} text={'Carbon dioxide\nin the air'} fill="#e3eef8" />
      <Box x={14} y={124} w={104} h={34} text="Green plants" fill="#dcefd2" />
      <Box x={262} y={124} w={104} h={34} text="Animals" fill="#f6e3d3" />
      <Box x={138} y={196} w={104} h={38} text={'Dead remains\nand wastes'} fill="#efe6d2" />
      <Box x={138} y={270} w={104} h={34} text="Fossil fuels" fill="#e0dcd6" />
      {/* photosynthesis takes carbon dioxide in; respiration and burning give it out */}
      <Arrow x1={130} y1={46} x2={74} y2={120} c="#2e7d32" />
      <Arrow x1={86} y1={120} x2={140} y2={50} />
      <Arrow x1={300} y1={120} x2={250} y2={48} />
      <Arrow x1={190} y1={194} x2={190} y2={48} />
      <Arrow x1={122} y1={142} x2={256} y2={142} />
      <Arrow x1={66} y1={160} x2={136} y2={210} />
      <Arrow x1={314} y1={160} x2={244} y2={210} />
      <Arrow x1={190} y1={236} x2={190} y2={266} />
      {/* burning fossil fuels returns carbon dioxide to the air */}
      <Path d="M244 290 L372 290 Q380 290 380 282 L380 34 Q380 26 372 26 L268 26" fill="none" stroke="#c8463d" strokeWidth={1.4} />
      <Head x={262} y={26} dx={-1} dy={0} size={6} fill="#c8463d" />
    </G>
  );
}

// ---------- Human Biology: teeth and the ear ----------

function ToothArt() {
  return (
    <G>
      {/* jaw bone and gum */}
      <Rect x={60} y={150} width={240} height={110} fill="#efe6d2" stroke={O} strokeWidth={1} />
      <Path d="M60 136 C100 124 120 140 132 150 L228 150 C240 140 260 124 300 136 L300 160 L60 160 Z" fill="#e9a3a3" stroke={O} strokeWidth={1.1} />
      {/* molar: enamel crown over dentine, pulp cavity running into the roots */}
      <Path d="M120 70 C120 40 150 36 160 50 C170 36 190 36 200 50 C210 36 240 40 240 70 L236 120 L230 170 L216 240 L198 240 L190 172 L170 172 L162 240 L144 240 L130 170 L124 120 Z" fill="#f4eedc" stroke={O} strokeWidth={1.5} />
      <Path d="M120 70 C120 40 150 36 160 50 C170 36 190 36 200 50 C210 36 240 40 240 70 L238 96 C220 84 140 84 122 96 Z" fill="#ffffff" stroke={O} strokeWidth={1.2} />
      <Path d="M156 96 C158 84 202 84 204 96 L200 150 L196 168 L208 232 L204 234 L190 168 L170 168 L156 234 L152 232 L164 168 L160 150 Z" fill="#f0a6a0" stroke="#b5534a" strokeWidth={1} />
      <Line x1={180} y1={110} x2={180} y2={160} stroke="#c8463d" strokeWidth={1} />
      <Path d="M136 176 L130 230 M224 176 L230 230" stroke="#b7a68f" strokeWidth={3} />
    </G>
  );
}

function EarArt() {
  return (
    <G>
      {/* pinna and ear canal to the eardrum */}
      <Path d="M30 40 C10 60 10 130 30 160 C40 176 60 170 62 150 C64 130 56 120 60 104 L60 96 C56 84 64 70 58 56 C52 40 40 32 30 40 Z" fill="#f0c9a8" stroke={O} strokeWidth={1.3} />
      <Rect x={60} y={96} width={90} height={18} fill="#fbeee2" stroke={O} strokeWidth={1.1} />
      <Line x1={150} y1={86} x2={150} y2={124} stroke="#5a7aa0" strokeWidth={3} />
      {/* ossicles: hammer, anvil, stirrup to the oval window */}
      <Path d="M152 104 L166 88 L174 92 L162 108 Z" fill="#efe6d2" stroke={O} strokeWidth={1} />
      <Path d="M170 86 L184 82 L190 92 L178 98 Z" fill="#efe6d2" stroke={O} strokeWidth={1} />
      <Path d="M188 92 L202 100 L198 108 L186 100 Z" fill="#efe6d2" stroke={O} strokeWidth={1} />
      {/* semicircular canals, cochlea, auditory nerve and Eustachian tube */}
      <Path d="M210 80 C200 40 240 30 246 60 M226 86 C236 46 272 52 262 84 M240 92 C266 80 282 100 262 112" fill="none" stroke="#7a4fb3" strokeWidth={5} strokeLinecap="round" />
      <Path d="M214 120 C204 140 226 160 246 150 C262 142 260 120 244 116 C232 114 226 126 234 134 C240 140 250 134 246 128" fill="none" stroke="#c06a5f" strokeWidth={6} strokeLinecap="round" />
      <Path d="M260 110 C280 108 300 104 330 100" stroke="#e0a43a" strokeWidth={4} />
      <Tube d="M168 116 C176 150 196 176 222 196" w={7} fill="#f3d7c6" />
    </G>
  );
}

const STEM_PT = (r, a) => polar(STEM.cx, STEM.cy, r, a);

export const BIOLOGY_MORE = {
  'digestive-system': {
    title: 'The human alimentary canal and associated organs (front view)',
    w: 360,
    h: 330,
    art: DigestiveArt,
    labels: [
      ['Oesophagus', 80, 40, 172, 40],
      ['Liver', 80, 100, 110, 104],
      ['Gall bladder', 80, 134, 144, 130],
      ['Duodenum', 80, 168, 170, 172],
      ['Small intestine\n(ileum)', 80, 236, 146, 234],
      ['Appendix', 80, 300, 100, 303],
      ['Stomach', 284, 108, 248, 112],
      ['Pancreas', 284, 160, 242, 165],
      ['Large intestine\n(colon)', 284, 222, 250, 230],
      ['Rectum', 284, 300, 198, 300],
      ['Anus', 284, 324, 192, 324],
    ],
  },
  villus: {
    title: 'A villus from the lining of the small intestine',
    w: 300,
    h: 286,
    art: VillusArt,
    labels: [
      ['Microvilli', 86, 40, 116, 58],
      ['Epithelium\n(one cell thick)', 86, 110, 102, 110],
      ['Blood capillary', 86, 170, 118, 170],
      ['Arteriole', 86, 268, 118, 270],
      ['Lacteal (absorbs\nfatty acids)', 214, 130, 150, 130],
      ['Venule', 214, 268, 182, 270],
    ],
  },
  'blood-cells': {
    title: 'Cells and fragments in human blood (stained, high power)',
    w: 380,
    h: 172,
    art: BloodCellsArt,
    labels: [
      ['No nucleus;\nbiconcave', 56, 22, 56, 52],
      ['Lobed nucleus', 150, 22, 150, 64],
      ['Large round\nnucleus', 254, 22, 254, 62],
      ['Cell fragments', 336, 30, 336, 62],
    ],
  },
  'stem-section': {
    title: 'Transverse section through a young dicotyledonous stem',
    w: 340,
    h: 260,
    art: StemArt,
    labels: [
      ['Epidermis', 52, 30, ...STEM_PT(108, -120)],
      ['Cortex', 52, 80, ...STEM_PT(95, -150)],
      ['Pith', 52, 130, ...STEM_PT(20, 180)],
      ['Phloem', 300, 60, ...STEM_PT(80, -22)],
      ['Cambium', 300, 96, ...STEM_PT(70, -16)],
      ['Xylem', 300, 132, ...STEM_PT(56, -22)],
      ['Vascular bundle', 300, 214, ...STEM_PT(66, 67)],
    ],
  },
  'breathing-system': {
    title: 'The human breathing system',
    w: 340,
    h: 262,
    art: BreathingArt,
    labels: [
      ['Larynx', 40, 14, 160, 16],
      ['Trachea', 40, 50, 163, 50],
      ['Bronchus', 40, 92, 152, 106],
      ['Bronchioles', 40, 132, 112, 128],
      ['Rib', 40, 172, 56, 172],
      ['Intercostal\nmuscles', 40, 210, 58, 198],
      ['Cartilage rings', 300, 40, 177, 44],
      ['Right and left\nlungs', 300, 104, 248, 120],
      ['Pleural\nmembranes', 300, 150, 262, 148],
      ['Diaphragm', 300, 244, 268, 240],
    ],
  },
  'skin-section': {
    title: 'Vertical section through human skin',
    w: 380,
    h: 262,
    art: SkinArt,
    labels: [
      ['Hair', 56, 10, 113, 10],
      ['Cornified layer', 56, 34, 70, 35],
      ['Malpighian layer', 56, 52, 70, 52],
      ['Sebaceous gland', 56, 92, 132, 92],
      ['Hair erector muscle', 56, 112, 140, 100],
      ['Hair follicle', 56, 140, 106, 140],
      ['Fat (adipose tissue)', 56, 236, 82, 232],
      ['Sweat pore', 324, 16, 236, 30],
      ['Blood capillary', 324, 62, 300, 73],
      ['Nerve ending', 324, 96, 288, 88],
      ['Sweat duct', 324, 132, 239, 120],
      ['Sweat gland', 324, 190, 248, 190],
    ],
  },
  'endocrine-glands': {
    title: 'The main endocrine glands',
    w: 300,
    h: 340,
    art: EndocrineArt,
    labels: [
      ['Pituitary gland', 70, 42, 147, 42],
      ['Thyroid gland', 70, 86, 140, 85],
      ['Adrenal gland', 70, 138, 132, 143],
      ['Pancreas\n(islets)', 70, 180, 133, 180],
      ['Ovary (female)', 70, 216, 130, 214],
      ['Testis (male)', 70, 266, 141, 260],
      ['Kidney', 236, 158, 179, 158],
    ],
  },
  'synovial-joint': {
    title: 'A synovial joint',
    w: 320,
    h: 256,
    art: JointArt,
    labels: [
      ['Bone', 70, 24, 120, 24],
      ['Ligament', 70, 66, 106, 66],
      ['Cartilage', 70, 108, 124, 100],
      ['Synovial fluid', 70, 132, 132, 132],
      ['Bone marrow', 250, 40, 172, 40],
      ['Synovial membrane\nand capsule', 250, 112, 232, 112],
      ['Cartilage', 250, 160, 196, 164],
    ],
  },
  'female-reproductive': {
    title: 'The human female reproductive system (front view)',
    w: 360,
    h: 236,
    art: FemaleArt,
    labels: [
      ['Funnel of\noviduct', 40, 86, 74, 92],
      ['Ovary', 40, 124, 80, 116],
      ['Oviduct\n(fallopian tube)', 320, 36, 240, 58],
      ['Uterus wall', 320, 94, 206, 96],
      ['Uterus lining', 320, 122, 194, 118],
      ['Cervix', 320, 170, 188, 170],
      ['Vagina', 320, 206, 190, 206],
    ],
  },
  'male-reproductive': {
    title: 'The human male reproductive system (front view)',
    w: 360,
    h: 236,
    art: MaleArt,
    labels: [
      ['Sperm duct', 60, 40, 112, 60],
      ['Seminal vesicle', 60, 80, 126, 76],
      ['Epididymis', 60, 160, 150, 174],
      ['Testis', 60, 200, 122, 198],
      ['Scrotum', 60, 228, 132, 222],
      ['Bladder', 300, 26, 216, 30],
      ['Prostate gland', 300, 92, 200, 92],
      ['Urethra', 300, 150, 180, 150],
      ['Penis', 300, 200, 190, 200],
    ],
  },
  'chromosome-dna': {
    title: 'A chromosome, and part of the DNA it contains',
    w: 360,
    h: 200,
    art: ChromosomeArt,
    labels: [
      ['Gene', 30, 40, 64, 58],
      ['Chromatid', 30, 140, 64, 140],
      ['Centromere', 84, 192, 84, 107],
      ['Sugar-phosphate\nbackbone', 275, 188, 226, 160],
      ['Base pair', 275, 16, 275, 52],
    ],
  },
  'carbon-cycle': {
    title: 'The carbon cycle',
    w: 380,
    h: 310,
    art: CarbonArt,
    labels: [
      ['Photosynthesis', 58, 80],
      ['Respiration', 148, 100],
      ['Respiration', 322, 84],
      ['Feeding', 232, 134],
      ['Death', 80, 196],
      ['Egestion,\ndeath', 320, 200],
      ['Decay by bacteria\nand fungi', 140, 178],
      ['Fossilisation', 236, 252],
      ['Combustion', 344, 252],
    ],
  },
  tooth: {
    title: 'Vertical section through a molar tooth',
    w: 360,
    h: 262,
    art: ToothArt,
    labels: [
      ['Enamel', 70, 60, 124, 60],
      ['Dentine', 70, 110, 138, 112],
      ['Gum', 70, 142, 92, 136],
      ['Jaw bone', 70, 220, 80, 220],
      ['Crown', 290, 40, 236, 50],
      ['Pulp cavity with\nnerves and blood vessels', 290, 116, 190, 116],
      ['Cement', 290, 176, 230, 178],
      ['Root', 290, 222, 216, 222],
    ],
  },
  ear: {
    title: 'Section through the human ear',
    w: 340,
    h: 210,
    art: EarArt,
    labels: [
      ['Pinna', 40, 186, 34, 160],
      ['Ear canal', 96, 140, 96, 114],
      ['Eardrum', 150, 162, 150, 124],
      ['Ossicles', 176, 60, 176, 88],
      ['Semicircular\ncanals', 236, 14, 236, 40],
      ['Cochlea', 300, 140, 254, 132],
      ['Auditory nerve', 318, 72, 308, 101],
      ['Eustachian tube', 252, 200, 222, 196],
    ],
  },
};

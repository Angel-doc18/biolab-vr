// Original vector illustrations used in place of stock imagery.
import Svg, { Circle, ClipPath, Defs, Ellipse, G, LinearGradient, Path, RadialGradient, Rect, Stop } from 'react-native-svg';

// Animal cell cross-section in the brand palette.
export function AnimalCell({ width = '100%', height = '100%' }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <Defs>
        <RadialGradient id="cyto" cx="50%" cy="45%" r="60%">
          <Stop offset="0" stopColor="#e6fbf7" />
          <Stop offset="1" stopColor="#bfeee6" />
        </RadialGradient>
        <RadialGradient id="nuc" cx="40%" cy="38%" r="65%">
          <Stop offset="0" stopColor="#4c8fc0" />
          <Stop offset="1" stopColor="#0b4f7c" />
        </RadialGradient>
        <LinearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#f3f8ff" />
          <Stop offset="1" stopColor="#e2efff" />
        </LinearGradient>
      </Defs>
      <Rect width="320" height="220" fill="url(#bg)" />
      <Path d="M52 112 C48 58 110 22 170 26 C236 30 282 70 276 120 C270 172 214 200 156 196 C92 192 56 164 52 112 Z" fill="url(#cyto)" stroke="#0369a1" strokeWidth="3" />
      <Path d="M58 112 C55 64 112 32 170 35 C230 39 268 74 266 118" fill="none" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="2" />
      {/* endoplasmic reticulum */}
      <G fill="none" stroke="#0d9488" strokeOpacity="0.55" strokeWidth="2.2" strokeLinecap="round">
        <Path d="M190 80 C205 74 220 82 214 94 C208 106 226 110 236 102" />
        <Path d="M186 92 C200 88 210 96 204 106 C198 116 214 122 226 116" />
        <Path d="M96 150 C110 146 118 156 112 164 C106 172 120 178 132 172" />
      </G>
      {/* nucleus */}
      <Circle cx="150" cy="104" r="36" fill="url(#nuc)" />
      <Circle cx="150" cy="104" r="36" fill="none" stroke="#cbe4ff" strokeWidth="2" strokeDasharray="4 5" />
      <Circle cx="142" cy="96" r="11" fill="#14b8a6" fillOpacity="0.85" />
      <Circle cx="139" cy="93" r="3.5" fill="#e6faf7" />
      {/* mitochondria */}
      <G>
        <Ellipse cx="96" cy="84" rx="20" ry="10" fill="#f7b27a" stroke="#955301" strokeWidth="2" transform="rotate(-24 96 84)" />
        <Path d="M82 88 C86 80 90 90 94 82 C98 74 102 86 108 78" fill="none" stroke="#955301" strokeWidth="1.5" transform="rotate(-24 96 84)" />
        <Ellipse cx="222" cy="148" rx="18" ry="9" fill="#f7b27a" stroke="#955301" strokeWidth="2" transform="rotate(18 222 148)" />
        <Path d="M209 150 C213 143 217 152 221 145 C225 138 229 149 234 142" fill="none" stroke="#955301" strokeWidth="1.5" transform="rotate(18 222 148)" />
      </G>
      {/* golgi */}
      <G fill="none" stroke="#006b5f" strokeWidth="2.4" strokeLinecap="round">
        <Path d="M196 128 C204 120 216 120 224 126" />
        <Path d="M194 136 C204 128 218 128 228 134" />
        <Path d="M196 144 C206 138 216 138 224 142" />
      </G>
      {/* ribosomes and vesicles */}
      <G fill="#0369a1">
        {[[120, 60], [178, 58], [212, 70], [86, 128], [118, 170], [182, 176], [240, 110], [72, 104], [204, 186], [250, 84]].map(([x, y], i) => (
          <Circle key={i} cx={x} cy={y} r="2.4" fillOpacity="0.7" />
        ))}
      </G>
      <Circle cx="248" cy="130" r="7" fill="#ffffff" stroke="#4fdbc8" strokeWidth="2" />
      <Circle cx="86" cy="160" r="6" fill="#ffffff" stroke="#4fdbc8" strokeWidth="2" />
    </Svg>
  );
}

// Onion epidermis under the microscope, seen through a circular field of view.
export function MicroscopeField({ width = '100%', height = '100%' }) {
  const cells = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 6; c++) {
      const x = c * 62 - (r % 2) * 28 + 6;
      const y = r * 46 + 4;
      cells.push(
        <G key={`${r}-${c}`}>
          <Rect x={x} y={y} width="58" height="42" rx="4" fill="#f7d58a" fillOpacity="0.55" stroke="#8a5a14" strokeWidth="2" />
          <Circle cx={x + 18 + ((r + c) % 3) * 8} cy={y + 20} r="5" fill="#7a4a0c" fillOpacity="0.75" />
        </G>
      );
    }
  }
  return (
    <Svg width={width} height={height} viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <Rect width="320" height="220" fill="#1a2733" />
      <Defs>
        <RadialGradient id="field" cx="50%" cy="50%" r="50%">
          <Stop offset="0" stopColor="#fff6dc" />
          <Stop offset="1" stopColor="#f3dfa6" />
        </RadialGradient>
      </Defs>
      <Defs>
        <ClipPath id="lens">
          <Circle cx="160" cy="110" r="96" />
        </ClipPath>
      </Defs>
      <Circle cx="160" cy="110" r="96" fill="url(#field)" />
      <G clipPath="url(#lens)">
        <G transform="translate(-10 -10)">{cells}</G>
      </G>
      <Circle cx="160" cy="110" r="96" fill="none" stroke="#0b1620" strokeWidth="3" />
      <Path d="M160 20 L160 200 M70 110 L250 110" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" />
    </Svg>
  );
}

// Mitochondrion cut-away, used for 3D previews before the GL view loads.
export function Mitochondrion({ width = '100%', height = '100%' }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet">
      <Ellipse cx="160" cy="100" rx="130" ry="64" fill="#fde6cf" stroke="#955301" strokeWidth="4" />
      <Ellipse cx="160" cy="100" rx="116" ry="52" fill="#f7b27a" stroke="#733f00" strokeWidth="2.5" />
      <Path
        d="M56 100 C66 70 76 70 80 100 C84 130 94 130 100 100 C106 70 116 70 120 100 C124 130 134 130 140 100 C146 70 156 70 160 100 C164 130 174 130 180 100 C186 70 196 70 200 100 C204 130 214 130 220 100 C226 70 236 70 240 100 C244 130 254 130 262 100"
        fill="none"
        stroke="#733f00"
        strokeWidth="3"
      />
      {[[90, 84], [150, 118], [210, 82], [128, 80], [236, 116]].map(([x, y], i) => (
        <Circle key={i} cx={x} cy={y} r="3" fill="#0369a1" />
      ))}
      <Path d="M170 108 C176 102 184 110 190 104" fill="none" stroke="#006b5f" strokeWidth="2" />
    </Svg>
  );
}

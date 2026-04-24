import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '..', 'public', 'banner-1200x630.png');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <!-- Indiana Blue background -->
  <rect width="1200" height="630" fill="#0047A6"/>

  <!-- Cardinal Crimson top bar -->
  <rect y="0" width="1200" height="14" fill="#E3170A"/>

  <!-- Logo lockup: torch + org name, scaled 2.0x -->
  <g transform="translate(100, 130) scale(2.0)">
    <!-- TORCH BOWL -->
    <polygon points="31,59 61,59 57,70 35,70" fill="rgba(255,255,255,0.55)"/>
    <rect x="43" y="52" width="6" height="9" fill="rgba(255,255,255,0.55)"/>
    <!-- FLAME outer red -->
    <path d="M46,52 C44,44 36,36 40,18 C36,26 30,28 30,38 C26,26 32,10 40,4 C34,12 28,8 30,20 C24,10 30,0 38,0 C30,8 28,20 34,28 C30,20 32,10 38,6 C34,18 36,30 40,38 C36,28 38,16 44,12 C40,22 38,36 42,44 C44,38 46,30 52,28 C48,34 46,42 46,52 Z" fill="#E3170A"/>
    <!-- FLAME inner white highlight -->
    <path d="M46,50 C45,44 42,36 44,28 C42,32 40,38 40,44 C38,36 40,26 44,22 C42,28 42,34 44,38 C44,34 46,28 48,26 C46,32 46,42 46,50 Z" fill="white" opacity="0.45"/>
    <!-- Org name -->
    <text x="74" y="46" font-family="Arial Black,Arial Bold,Arial,sans-serif" font-weight="900" font-size="20" letter-spacing="0.3" fill="#FFFFFF">RELIGIOUS FREEDOM INDIANA</text>
    <!-- Tagline -->
    <text x="74" y="64" font-family="Arial,Helvetica,sans-serif" font-weight="400" font-size="10.5" letter-spacing="1.8" fill="rgba(255,255,255,0.75)">Resisting Christian Nationalism</text>
  </g>

  <!-- Divider -->
  <line x1="100" y1="335" x2="1100" y2="335" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>

  <!-- Tagline -->
  <text x="600" y="430" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="42" fill="#FFFFFF">Hoosiers Working for Religious Freedom</text>

  <!-- Micah verse -->
  <text x="600" y="520" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-style="italic" font-size="30" fill="rgba(255,255,255,0.85)">Act justly, love mercy, walk humbly (Micah 6:8)</text>
</svg>`;

await sharp(Buffer.from(svg))
  .png()
  .toFile(outPath);

console.log('Banner written to', outPath);

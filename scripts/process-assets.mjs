// One-off asset pipeline: takes the raw exports from Brand Assets/ and produces
// web-sized, compressed copies in public/brand/. Brand Assets/ itself is the
// full-resolution source archive, so we don't duplicate originals into
// public/ — anything under public/ ships in every build/export.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("Brand Assets");
const OUT = path.resolve("public/brand");

const logos = [
  { src: "LOGO & graphic-11.png", out: "logos/logo-red.png", width: 1200 },
  { src: "LOGO & graphic-12.png", out: "logos/logo-pink.png", width: 1200 },
];

const illustrations = [
  { src: "Elements-05.png", out: "illustrations/baker-girl-tray-front.png", width: 1400 },
  { src: "Elements-06.png", out: "illustrations/baker-girl-portrait.png", width: 1400 },
  { src: "Elements-07.png", out: "illustrations/baker-girl-hands-tray.png", width: 1400 },
  { src: "Elements-01.png", out: "illustrations/baker-girl-running.png", width: 1200 },
];

const icons = [
  { src: "Elements-26.png", out: "icons/egg-carton-pink.png", width: 600 },
  { src: "Elements-27.png", out: "icons/whisk-bowl-pink.png", width: 600 },
  { src: "Elements-28.png", out: "icons/piping-bag-pink.png", width: 600 },
  { src: "Elements-21.png", out: "icons/whisk-bowl-red.png", width: 600 },
];

const stamps = [
  { src: "Elements-34.png", out: "stamps/stamp-bite-me-red.png", width: 600 },
  { src: "Elements-35.png", out: "stamps/stamp-freshly-baked-red.png", width: 600 },
  { src: "Elements-36.png", out: "stamps/stamp-made-with-love-red.png", width: 600 },
  { src: "Elements-31.png", out: "stamps/stamp-bite-me-pink.png", width: 600 },
  { src: "Elements-32.png", out: "stamps/stamp-freshly-baked-pink.png", width: 600 },
  { src: "Elements-33.png", out: "stamps/stamp-made-with-love-pink.png", width: 600 },
];

const patterns = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  src: `Pattern-0${n}.jpg`,
  out: `patterns/pattern-0${n}.jpg`,
  width: 1100,
}));

// Menu photography, picked from Brand Assets/Photos to match each named
// flavour in the Cookie Card reference sheets.
const menuPhotos = [
  { src: "Photos/35.jpg", out: "menu/lolita.jpg", width: 1200, quality: 78 },
  { src: "Photos/32.jpg", out: "menu/lucy.jpg", width: 1200, quality: 78 },
  { src: "Photos/51.jpg", out: "menu/anna.jpg", width: 1200, quality: 78 },
  { src: "Photos/New Bites-17.jpg", out: "menu/lanna.jpg", width: 1200, quality: 78 },
  { src: "Photos/61.jpg", out: "menu/gigi.jpg", width: 1200, quality: 78 },
  { src: "Photos/64.jpg", out: "menu/sunny.jpg", width: 1200, quality: 78 },
  { src: "Photos/2.jpg", out: "menu/leni.jpg", width: 1200, quality: 78 },
  { src: "Photos/9.jpg", out: "menu/goldie.jpg", width: 1200, quality: 78 },
  { src: "Photos/63.jpg", out: "menu/cindy.jpg", width: 1200, quality: 78 },
  { src: "Photos/55.jpg", out: "menu/bobby.jpg", width: 1200, quality: 78 },
  { src: "Photos/New Bites-001.jpg", out: "menu/suki.jpg", width: 1200, quality: 78 },
  { src: "Photos/33.jpg", out: "menu/carla.jpg", width: 1200, quality: 78 },
  { src: "Photos/New Bites-006.jpg", out: "menu/scarllet.jpg", width: 1200, quality: 78 },
  { src: "Photos/New Bites-013.jpg", out: "menu/sultan.jpg", width: 1200, quality: 78 },
  { src: "Photos/38.jpg", out: "menu/daisy.jpg", width: 1200, quality: 78 },
  { src: "Photos/41.jpg", out: "menu/coco.jpg", width: 1200, quality: 78 },
  { src: "Photos/74.jpg", out: "menu/bella.jpg", width: 1200, quality: 78 },
  { src: "Photos/44.jpg", out: "menu/bianca.jpg", width: 1200, quality: 78 },
  { src: "Photos/1.jpg", out: "menu/ruby.jpg", width: 1200, quality: 78 },
  { src: "Photos/New Bites-18.jpg", out: "menu/ying-yang.jpg", width: 1200, quality: 78 },
  { src: "Photos/New Bites-26.jpg", out: "menu/rosie.jpg", width: 1200, quality: 78 },
];

const all = [...logos, ...illustrations, ...icons, ...stamps];

async function ensureDir(filePath) {
  await mkdir(path.dirname(filePath), { recursive: true });
}

async function processPng({ src, out, width }) {
  const srcPath = path.join(SRC, src);
  const outPath = path.join(OUT, out);
  await ensureDir(outPath);
  await sharp(srcPath)
    .resize({ width, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toFile(outPath);
  console.log("png ->", out);
}

async function processJpg({ src, out, width, quality = 68 }) {
  const srcPath = path.join(SRC, src);
  const outPath = path.join(OUT, out);
  await ensureDir(outPath);
  await sharp(srcPath)
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toFile(outPath);
  console.log("jpg ->", out);
}

for (const item of all) {
  await processPng(item);
}
for (const item of patterns) {
  await processJpg(item);
}
for (const item of menuPhotos) {
  await processJpg(item);
}

// Favicon / app icon: red logo composed on a cream rounded square.
const faviconOut = path.join(OUT, "logos/icon-mark.png");
await ensureDir(faviconOut);
const size = 512;
const cream = "#FBF6EC";
const logoBuf = await sharp(path.join(SRC, "LOGO & graphic-11.png"))
  .resize({ width: Math.round(size * 0.8), withoutEnlargement: true })
  .toBuffer();
const logoMeta = await sharp(logoBuf).metadata();
await sharp({
  create: {
    width: size,
    height: size,
    channels: 4,
    background: cream,
  },
})
  .composite([
    {
      input: logoBuf,
      left: Math.round((size - (logoMeta.width ?? size)) / 2),
      top: Math.round((size - (logoMeta.height ?? size)) / 2),
    },
  ])
  .png()
  .toFile(faviconOut);
console.log("icon ->", "logos/icon-mark.png");

console.log("\nDone.");

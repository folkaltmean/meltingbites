// One-off asset pipeline: takes the raw exports from Brand Assets/ and produces
// web-sized, compressed copies in public/brand/, plus untouched copies in
// public/brand/originals/ for future re-exports.
import sharp from "sharp";
import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("../Brand Assets");
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

  const originalPath = path.join(OUT, "originals", src);
  await ensureDir(originalPath);
  await copyFile(srcPath, originalPath);
  console.log("png ->", out);
}

async function processJpg({ src, out, width }) {
  const srcPath = path.join(SRC, src);
  const outPath = path.join(OUT, out);
  await ensureDir(outPath);
  await sharp(srcPath)
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 68, mozjpeg: true })
    .toFile(outPath);

  const originalPath = path.join(OUT, "originals", src);
  await ensureDir(originalPath);
  await copyFile(srcPath, originalPath);
  console.log("jpg ->", out);
}

for (const item of all) {
  await processPng(item);
}
for (const item of patterns) {
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

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/DELL/.gemini/antigravity/brain/2984f6dc-5608-439b-ade4-0ef01fa74243';
const outDir = 'd:/Dental Clinic/assets/images';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function processAll() {
  console.log('Starting image processing to WebP...');

  // 1. Hero Image: 4:5 ratio, 1000x1250 + srcset (720x900, 480x600)
  const heroSrc = path.join(brainDir, 'dentist_in_dadar_west_mumbai_hero_1792090506379.jpg');
  await sharp(heroSrc)
    .resize(1000, 1250, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'dentist-in-dadar-west-mumbai-hero.webp'));

  await sharp(heroSrc)
    .resize(720, 900, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'dentist-in-dadar-west-mumbai-hero-720.webp'));

  await sharp(heroSrc)
    .resize(480, 600, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'dentist-in-dadar-west-mumbai-hero-480.webp'));
  console.log('✓ Hero images created');

  // 2. Treatment room: 16:9, 1600x900
  const roomSrc = path.join(brainDir, 'treatment_room_1792090706504.jpg');
  await sharp(roomSrc)
    .resize(1600, 900, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'dental-clinic-treatment-room-dadar-west.webp'));
  console.log('✓ Treatment room created');

  // 3. Reception: 3:2, 900x600
  const receptionSrc = path.join(brainDir, 'reception_1792090725937.jpg');
  await sharp(receptionSrc)
    .resize(900, 600, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'dental-clinic-reception-dadar-west-mumbai.webp'));
  console.log('✓ Reception created');

  // 4. Dentist slot: 4:5, 800x1000
  const dentistSrc = path.join(brainDir, 'dentist_examining_1792090742772.jpg');
  await sharp(dentistSrc)
    .resize(800, 1000, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'dentist-examining-patient-dadar-west-mumbai.webp'));
  console.log('✓ Dentist examining created');

  // 5. Checkup tray: 3:2 (900x600) + 16:9 banner (1600x900)
  const checkupSrc = path.join(brainDir, 'checkup_tray_jpg_1792090706865.jpg');
  await sharp(checkupSrc)
    .resize(900, 600, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'dental-checkup-consultation-dadar-west.webp'));
  await sharp(checkupSrc)
    .resize(1600, 900, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'dental-checkup-consultation-banner.webp'));
  console.log('✓ Checkup created');

  // 6. Teeth cleaning: 3:2 (900x600) + 16:9 banner (1600x900)
  const cleaningSrc = path.join(brainDir, 'teeth_cleaning_jpg_1792090726926.jpg');
  await sharp(cleaningSrc)
    .resize(900, 600, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'teeth-cleaning-scaling-dadar-west-mumbai.webp'));
  await sharp(cleaningSrc)
    .resize(1600, 900, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'teeth-cleaning-scaling-banner.webp'));
  console.log('✓ Teeth cleaning created');

  // 7. Fillings: 3:2 (900x600)
  const fillingsSrc = path.join(brainDir, 'fillings_jpg_1792090745781.jpg');
  await sharp(fillingsSrc)
    .resize(900, 600, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'tooth-coloured-fillings-dadar-west.webp'));
  console.log('✓ Fillings created');

  // 8. Root canal: 3:2 (900x600) + 16:9 banner (1600x900)
  const rcSrc = path.join(brainDir, 'root_canal_xray_1792090704858.jpg');
  await sharp(rcSrc)
    .resize(900, 600, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'root-canal-treatment-dadar-west-mumbai.webp'));
  await sharp(rcSrc)
    .resize(1600, 900, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'root-canal-treatment-banner.webp'));
  console.log('✓ Root canal created');

  // 9. Crowns & Dentures: 3:2 (900x600)
  const crownsSrc = path.join(brainDir, 'crowns_model_1792090725461.jpg');
  await sharp(crownsSrc)
    .resize(900, 600, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'dental-crowns-bridges-dentures-dadar-west.webp'));
  console.log('✓ Crowns created');

  // 10. Implants: 3:2 (900x600) + 16:9 banner (1600x900)
  const implantSrc = path.join(brainDir, 'implant_model_1792090743166.jpg');
  await sharp(implantSrc)
    .resize(900, 600, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'dental-implants-dadar-west-mumbai.webp'));
  await sharp(implantSrc)
    .resize(1600, 900, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'dental-implants-banner.webp'));
  console.log('✓ Implants created');

  // 11. Braces & Clear aligners: 3:2 (900x600) + 16:9 banner (1600x900)
  const alignersSrc = path.join(brainDir, 'clear_aligners_1792090704632.jpg');
  await sharp(alignersSrc)
    .resize(900, 600, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'braces-and-clear-aligners-dadar-west.webp'));
  await sharp(alignersSrc)
    .resize(1600, 900, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'braces-and-clear-aligners-banner.webp'));
  console.log('✓ Aligners created');

  // 12. Whitening: 3:2 (900x600) + 16:9 banner (1600x900)
  const whiteningSrc = path.join(brainDir, 'teeth_whitening_1792090723914.jpg');
  await sharp(whiteningSrc)
    .resize(900, 600, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'teeth-whitening-dadar-west-mumbai.webp'));
  await sharp(whiteningSrc)
    .resize(1600, 900, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'teeth-whitening-banner.webp'));
  console.log('✓ Whitening created');

  // 13. Consultation desk: 16:9 (1600x900)
  const deskSrc = path.join(brainDir, 'consultation_desk_1792090741773.jpg');
  await sharp(deskSrc)
    .resize(1600, 900, { fit: 'cover', position: 'center' })
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'dental-consultation-desk-dadar-west.webp'));
  console.log('✓ Consultation desk created');

  // 14. Open Graph Image: 1.91:1, 1200x630 with programmatic navy overlay & text
  const ogSvg = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0B2545" stop-opacity="0.95"/>
          <stop offset="55%" stop-color="#0B2545" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#0B2545" stop-opacity="0.25"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#grad)" />
      <g transform="translate(80, 180)">
        <text x="0" y="40" font-family="Plus Jakarta Sans, sans-serif" font-size="24" font-weight="700" fill="#0FA3B1" letter-spacing="3">DADAR WEST, MUMBAI</text>
        <text x="0" y="110" font-family="Plus Jakarta Sans, sans-serif" font-size="60" font-weight="800" fill="#FFFFFF">Dental Clinic</text>
        <text x="0" y="170" font-family="Inter, sans-serif" font-size="28" font-weight="400" fill="#E2E8F0">Gentle, Expert Dental Care for Healthy Smiles</text>
        <rect x="0" y="220" width="180" height="4" fill="#0FA3B1" rx="2" />
        <text x="0" y="270" font-family="Inter, sans-serif" font-size="20" font-weight="600" fill="#FFFFFF">Check-ups &#8226; Root Canal &#8226; Implants &#8226; Aligners &#8226; Whitening</text>
      </g>
    </svg>
  `);

  await sharp(roomSrc)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .composite([{ input: ogSvg, top: 0, left: 0 }])
    .webp({ quality: 80 })
    .toFile(path.join(outDir, 'dental-clinic-dadar-west-og.webp'));
  console.log('✓ OG image created');

  // 15. Favicons: SVG, 32x32 PNG, 180x180 PNG
  const faviconSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="14" fill="#0B2545"/>
      <path d="M32 10C21.5 10 13 17.5 13 28C13 37.5 17 46.5 21.5 55C23 57.5 27 57.5 28 53.5C29 47.5 30 39.5 32 39.5C34 39.5 35 47.5 36 53.5C37 57.5 41 57.5 42.5 55C47 46.5 51 37.5 51 28C51 17.5 42.5 10 32 10Z" fill="#FFFFFF"/>
      <path d="M24 22C24 19.5 27.5 17.5 32 17.5C36.5 17.5 40 19.5 40 22C40 25.5 35 28 32 28C29 28 24 25.5 24 22Z" fill="#0FA3B1"/>
    </svg>
  `;
  fs.writeFileSync(path.join(outDir, 'favicon.svg'), faviconSvg.trim());

  await sharp(Buffer.from(faviconSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(outDir, 'favicon-32.png'));

  await sharp(Buffer.from(faviconSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(outDir, 'apple-touch-icon.png'));
  console.log('✓ Favicons created');

  console.log('All image processing completed successfully!');
}

processAll().catch(err => {
  console.error('Error during image processing:', err);
  process.exit(1);
});

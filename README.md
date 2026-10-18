# Dental Clinic Website — Dadar West, Mumbai

A high-performance, multi-page, responsive website engineered for **Dental Clinic** located in Dadar West, Mumbai, Maharashtra 400028.

Built with semantic HTML5, modern CSS3 custom properties, and lightweight vanilla JavaScript. No framework, bundler, or build step required.

---

## 1. Quick Specifications
- **Brand Name:** Dental Clinic
- **Location:** Dadar West, Mumbai, Maharashtra 400028, India
- **Phone & WhatsApp:** `+91 12345 67890` (WhatsApp link format: `https://wa.me/911234567890`)
- **Email:** `info@dentalclinic.in`
- **Domain:** `https://www.dentalclinic.in`
- **Language:** English (`lang="en-IN"`)
- **Default Opening Hours:**
  - **Monday – Saturday:** 10:00 AM – 8:00 PM
  - **Sunday:** Closed
- **Web Partner:** Designed with [Noor Web](https://noorweb.in)

---

## 2. Directory & URL Architecture
The website uses clean folder-style URLs (e.g. `/about-us/` serves `/about-us/index.html`):

```
/
├── index.html                          # Homepage
├── about-us/index.html                 # About Us & Clinic Story
├── dental-services/index.html          # Categorised Dental Services Hub
├── root-canal-treatment/index.html     # Service Detail: Root Canal Therapy
├── dental-implants/index.html          # Service Detail: Dental Implants
├── teeth-whitening/index.html          # Service Detail: Teeth Whitening
├── braces-and-clear-aligners/index.html# Service Detail: Braces & Aligners
├── teeth-cleaning-scaling/index.html   # Service Detail: Scaling & Hygiene
├── reviews/index.html                  # Reviews & Consented Gallery Slot
├── faqs/index.html                     # 12-Item Dental FAQ Accordion
├── contact-us/index.html               # Appointment Form, Map & Transit
├── privacy-policy/index.html           # India DPDP Act 2023 Privacy Policy
├── terms-and-conditions/index.html     # Clinic Terms of Use
├── disclaimer/index.html               # Medical Information Disclaimer
├── 404.html                            # Custom Friendly 404 Page
├── sitemap.xml                         # Search Engine XML Sitemap
├── robots.txt                          # Crawler Directives
├── images-manifest.md                  # Comprehensive Image Audit & Specs
├── README.md                           # Documentation & Deployment Guide
└── assets/
    ├── css/style.css                   # Master Stylesheet & Design Tokens
    ├── js/main.js                      # Cursor, Navigation & Interaction Logic
    └── images/                         # WebP Photography & Favicons
```

---

## 3. Placeholders to Update Before Going Live (Part D Checklist)

Search and replace the following placeholder tokens across the HTML files:

| Placeholder | Where Found | What to Replace With |
|---|---|---|
| `+91 12345 67890` | Footer, Contact page, Schema, WhatsApp link | Clinic's verified phone number |
| `911234567890` | WhatsApp floating button `href` across all pages | WhatsApp number without `+` or spaces |
| `[Dr. Full Name]` | About page, Homepage dentist slot, Dentist Schema | Real name of the primary dental surgeon |
| `[BDS, MDS - Conservative Dentistry & Endodontics]` | About page, Homepage dentist slot | Actual academic qualifications and degrees |
| `[Registration No. Maharashtra Dental Council XXXXX]` | About page, Homepage dentist slot | Official state dental council registration number |
| `[X] Years Clinical Experience` | About page, Homepage dentist slot | True number of years in active dental practice |
| `[Sample] ...` | Reviews page, Homepage review slider | Real patient testimonials (obtained with consent) |
| `https://facebook.com/` | Footer social icons | Clinic's actual Facebook Business Page URL |
| `https://instagram.com/` | Footer social icons | Clinic's actual Instagram profile URL |
| `https://youtube.com/` | Footer social icons | Clinic's actual YouTube channel URL |
| `https://maps.google.com/` | Footer & Reviews Google link | Clinic's verified Google Business Profile link |

> **Note on Implants & Clear Aligners:**  
> The site includes complete, ready-to-use clinical detail pages for `/dental-implants/` and `/braces-and-clear-aligners/`. Please confirm whether the clinic provides these specific treatments before launching. If any service is not offered, simply remove the corresponding link from navigation and the sitemap.

---

## 4. How to Replace Stand-In Photos with Real Photos

All images are stored in `/assets/images/` in **WebP** format. To replace any stand-in image with a real clinic or doctor photo:
1. Refer to `images-manifest.md` for exact dimensions and aspect ratios.
2. Crop and resize your genuine photo to match those dimensions.
3. Save the new WebP file with the **exact same filename** in `/assets/images/`.
4. The page will display the real photo immediately without requiring any code modifications.

---

## 5. Deployment Instructions

### A. Netlify (Recommended - Drag & Drop or Git)
1. Log in to [Netlify](https://www.netlify.com/).
2. Drag and drop the entire project folder into the Netlify Sites dashboard, or link your Git repository.
3. Build command: **Leave blank** (No build step).
4. Publish directory: `.` (root directory).
5. Add custom domain `www.dentalclinic.in` in Domain Management and enable free automatic HTTPS.

### B. Vercel
1. Install Vercel CLI: `npm i -g vercel` or import via [vercel.com](https://vercel.com).
2. Run `vercel` from the root directory.
3. Framework preset: **Other** / Static.
4. Output directory: `.` (current directory).
5. Configure custom domain in project settings.

### C. Traditional cPanel / Shared Hosting
1. Log in to your hosting cPanel.
2. Open **File Manager** and navigate to `public_html`.
3. Upload all files and folders maintaining the exact directory structure.
4. Ensure SSL/TLS is enabled via AutoSSL or Let's Encrypt.
5. Verify clean URLs: Apache servers typically handle `/folder/` URLs automatically when an `index.html` file is present in each folder.

---

## 6. Local Development & Preview

You can preview the website locally using any standard static server:

```bash
# Using Node's built-in npx serve:
npx serve .

# Or using Python 3:
python -m http.server 8000
```

Then open `http://localhost:8000` in your web browser.

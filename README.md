# Alia Syafiqah - Portfolio Website

> Modern, SEO-optimized portfolio website showcasing skills, education, projects, and creative works.

## ✨ Features

- 🎨 **Modern Design** - Dark elegant theme with smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🚀 **SEO Optimized** - Complete meta tags and structured data
- ⚡ **Fast Loading** - Optimized performance
- 🎯 **Interactive** - Smooth scrolling, tabs, progress bars
- 🧶 **Creative Corner** - Showcase of crocheting hobby
- 💼 **Professional** - Experience timeline, achievements, testimonials

## 📋 Sections

1. **Hero** - Introduction with social links
2. **About** - Bio, stats, languages
3. **Experience & Education** - Tabbed timeline
4. **Skills** - Progress bars and cards
5. **Achievements** - Certificates and awards
6. **Leadership** - Events and involvement
7. **Creative Corner** - Hobbies (crocheting!)
8. **Testimonials** - Reviews from others
9. **Projects** - Work showcase
10. **Contact** - Form and social links

## 🚀 Quick Start

### 1. Setup Files

```bash
# Create image folder
mkdir picture

# Add your images:
# - logowebsite.png
# - gmbarika.png
# - logo_uitm.png
# - logo_kpm.png
# - logo_smkbtp.png
```

### 2. Update Your Info

Edit `index.html` and replace:
- Email: `alia@example.com`
- LinkedIn: `/aliasyafiqah`
- GitHub: `/aliasyafiqah`
- Instagram: `/aliasyafiqah`
- Internship company name
- Internship dates
- Any other personal details

### 3. Deploy

**Option A: Netlify (Easiest)**
1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag your folder
3. Done! ✨

**Option B: GitHub + Netlify**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```
Then connect to Netlify.

### 4. SEO Setup

1. Register at [Google Search Console](https://search.google.com/search-console)
2. Submit your sitemap
3. Request indexing
4. Share on social media for backlinks!

## 🎨 Customization

### Colors

Edit CSS variables in `style.css`:
```css
:root {
    --color-primary: #6366f1;      /* Main brand color */
    --color-secondary: #ec4899;     /* Accent color */
    --color-accent: #f59e0b;        /* Additional accent */
}
```

### Content

- **Achievements**: Update cards in `#achievements` section
- **Skills**: Adjust progress bar percentages
- **Testimonials**: Replace with real reviews
- **Creative Gallery**: Add your actual crochet photos
- **Experience**: Update internship details

### Resume Download

Add your CV file and update in `script.js`:
```javascript
// Line ~57
window.location.href = 'your-cv.pdf';
```

## 📊 Your Stats

- **CGPA**: 3.57
- **Graduation**: 2026
- **Languages**: Malay (Native), English (Fluent)
- **Skills**: 
  - HTML/CSS: 90%
  - JavaScript: 85%
  - UI/UX Design: 88%
  - React: 75%
  - Database (SQL): 80%
  - Game Development: 70%

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML (1029 lines!)
├── style.css           # Complete styles
├── script.js           # All functionality
├── picture/            # Your images
│   ├── logowebsite.png
│   ├── gmbarika.png
│   ├── logo_uitm.png
│   ├── logo_kpm.png
│   └── logo_smkbtp.png
├── sitemap.xml
├── robots.txt
├── netlify.toml
└── README.md
```

## ⚙️ Technologies

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Google Fonts (Playfair Display, Inter)

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

This portfolio is free to use for personal purposes.

## 🙏 Credits

- Design & Development: Alia Syafiqah
- Fonts: Google Fonts
- Icons: Inline SVG

---

**Made with 💙 and ☕ by Alia Syafiqah**

🧶 Currently crocheting something cute while coding!

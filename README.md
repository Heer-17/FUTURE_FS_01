# FUTURE_FS_01 — Personal Professional Portfolio Website

> Task 1 of the Future Interns Full Stack Web Development Internship

## 🔗 Live Demo
[View Live Site](https://your-username.github.io/FUTURE_FS_01)

---

## 📋 Task Overview
Built a personal portfolio website to showcase skills, projects, and professional profile as part of the Future Interns internship program.

## ✅ Features
- **Responsive Design** — Works on all screen sizes (mobile, tablet, desktop)
- **Interactive Hero** — Animated code card and smooth scroll
- **Custom Cursor** — Smooth trailing cursor effect
- **Skills Section** — Animated progress bars
- **Projects Showcase** — Hover effects, GitHub & live links
- **Working Contact Form** — Integrated with Formspree for email notifications
- **SEO Friendly** — Meta tags for title, description, keywords, and Open Graph
- **Scroll Animations** — Elements reveal on scroll using IntersectionObserver
- **Mobile Menu** — Hamburger nav for small screens

## 🛠️ Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Fonts | Google Fonts (Syne + DM Sans) |
| Form | Formspree (free email integration) |
| Hosting | GitHub Pages / Vercel |

## 📁 Project Structure
```
FUTURE_FS_01/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles + responsive design
├── js/
│   └── main.js         # Interactions, animations, form handling
├── assets/
│   └── resume.pdf      # Your resume (add your own)
└── README.md
```

## 🚀 Setup & Deployment

### Run Locally
```bash
git clone https://github.com/your-username/FUTURE_FS_01.git
cd FUTURE_FS_01
# Open index.html in browser — no build step needed!
```

### Deploy on GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Set source to `main` branch, root `/`
4. Live at: `https://your-username.github.io/FUTURE_FS_01`

### Setup Contact Form (Formspree)
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your Form ID
3. In `index.html`, replace `YOUR_FORM_ID` in the form action:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

## ✏️ Customization Checklist
- [ ] Replace `Your Name` with your actual name in `index.html` and `css/style.css`
- [ ] Replace `YN` initials in nav logo and avatar
- [ ] Update email, LinkedIn, and GitHub links
- [ ] Replace Formspree form ID
- [ ] Add your photo (replace `.image-placeholder` div with `<img>` tag)
- [ ] Add `assets/resume.pdf` with your actual resume
- [ ] Update project cards with your real projects
- [ ] Update skill percentages in the `--w` CSS variables

## 📸 Screenshots
*Add screenshots of your live site here*

---

## 👤 Author
**Your Name**  
Future Interns — Full Stack Web Development Track  
GitHub: [@yourusername](https://github.com/yourusername)  
LinkedIn: [yourname](https://linkedin.com/in/yourname)

## 📄 License
MIT License — feel free to use and modify.

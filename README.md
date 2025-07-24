# Personal Portfolio Website

[![Live Demo](https://img.shields.io/badge/demo-live-green)](https://dhineshcr.github.io)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A modern, responsive portfolio website showcasing my professional journey, skills, and achievements in data analytics and solutions architecture. Built with modern web technologies and featuring interactive elements for an engaging user experience.

> **Note**: The `site_flagship` branch is the main branch used for GitHub Pages deployment. Please make sure to work with this branch for any website-related changes.

![Portfolio Preview](assets/images/portfolio-preview.png)

## 🌟 Features

- **Interactive UI Elements**
  - Particle.js background animation
  - Smooth scroll animations using AOS
  - Dynamic typing effects for role descriptions
  - Responsive design for all devices
  - Modern glassmorphism UI effects

- **Professional Sections**
  - About Me
  - Professional Experience
  - Skills & Technologies
  - Key Strengths
  - Education & Certifications
  - Contact Information

- **Performance Optimized**
  - Lazy loading images
  - Optimized asset delivery
  - Smooth animations
  - Mobile-first approach

## 🛠️ Tech Stack

- **Frontend**
  - HTML5
  - CSS3 (with modern features)
  - JavaScript (ES6+)

- **Libraries & Frameworks**
  - [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll
  - [Particles.js](https://vincentgarreau.com/particles.js/) - Background animation
  - [Typed.js](https://mattboldt.com/demos/typed-js/) - Text typing animation
  - [Font Awesome](https://fontawesome.com/) - Icons

## 📁 Project Structure

```
DhineshCR.github.io/
├── index.html              # Main portfolio page
├── assets/                 # Static assets directory
│   ├── css/               # Stylesheet files
│   │   └── style.css      # Main CSS file
│   ├── js/                # JavaScript files
│   │   └── main.js        # Main JS file
│   ├── images/            # Image assets
│   └── files/             # Downloadable files
├── static/                 # Static content
│   ├── css/               # Additional CSS
│   ├── files/             # Documents (Resume, etc.)
│   └── js/                # Additional JS
└── README.md              # Project documentation
```

## 🚀 Quick Start

### Prerequisites

- Web browser (Chrome, Firefox, Safari, Edge)
- Local development server (choose one):
  - Python (3.x recommended)
  - Node.js
  - VS Code with Live Server

### Running Locally

#### Method 1: Python (Recommended)

```bash
# Navigate to project directory
cd DhineshCR.github.io

# Start server with Python 3
python3 -m http.server 8080

# Or with Python 2
python -m SimpleHTTPServer 8080

# Visit http://localhost:8080
```

#### Method 2: Node.js

```bash
# Install serve globally (if not installed)
npm install -g serve

# Start server
serve

# Or using npx
npx serve
```

#### Method 3: VS Code Live Server

1. Install [VS Code](https://code.visualstudio.com/)
2. Install [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
3. Right-click `index.html` → "Open with Live Server"

## 🔧 Customization

### Content Modification

1. Edit `index.html` for content changes
2. Update styles in `assets/css/style.css`
3. Modify animations in `assets/js/main.js`

### Styling

- Update color scheme in CSS variables
- Modify animation timings
- Adjust responsive breakpoints

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints for all devices:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 🚥 Performance

- Lighthouse scores:
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 90+

## 🔍 SEO Optimization

- Meta tags optimization
- Semantic HTML structure
- Optimized images
- Mobile-friendly design

## 🌐 Deployment

Deployed using GitHub Pages:

1. Fork this repository
2. Rename to `yourusername.github.io`
3. Enable GitHub Pages in repository settings
4. Site will be live at `https://yourusername.github.io`

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use**
```bash
# macOS/Linux
lsof -ti:8080 | xargs kill -9

# Windows (PowerShell)
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

2. **Cache Issues**
- Hard refresh: 
  - Windows/Linux: `Ctrl + Shift + R`
  - Mac: `Cmd + Shift + R`

3. **Assets Not Loading**
- Check browser console (F12)
- Verify file paths
- Clear browser cache

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- **Email**: dhineshcr09@gmail.com
- **LinkedIn**: [Dhinesh C Rajan](https://www.linkedin.com/in/dhinesh-c-rajan/)
- **GitHub**: [@DhineshCR](https://github.com/DhineshCR)

## 🙏 Acknowledgments

- [AOS Library](https://michalsnik.github.io/aos/)
- [Particles.js](https://vincentgarreau.com/particles.js/)
- [Typed.js](https://mattboldt.com/demos/typed-js/)
- [Font Awesome](https://fontawesome.com/)

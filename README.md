# Dhinesh CR's Portfolio

A modern, interactive portfolio website showcasing my professional experience and skills.

## Features

- Interactive particle background
- Smooth scroll animations
- Dynamic typing effects
- Responsive design
- Modern UI with glassmorphism effects

## Tech Stack

- HTML5, CSS3, JavaScript
- Libraries:
  - AOS (Animate On Scroll)
  - Particles.js
  - Typed.js
  - Font Awesome

## Project Structure

```
DhineshCR.github.io/
├── index.html            # Main portfolio page
├── assets/              # Static assets
│   ├── css/            # CSS files
│   ├── js/             # JavaScript files
│   └── files/          # Documents and other files
└── README.md           # Project documentation
```

## Running Locally

There are several ways to run the site locally:

### Using Python (Recommended)

1. Open terminal and navigate to the project directory:
   ```bash
   cd DhineshCR.github.io
   ```

2. If Python 3 is installed:
   ```bash
   python3 -m http.server 8080
   ```
   Then visit: http://localhost:8080

3. If using Python 2:
   ```bash
   python -m SimpleHTTPServer 8080
   ```
   Then visit: http://localhost:8080

### Using Node.js

1. Install Node.js if you haven't already (https://nodejs.org)
2. Run using npx:
   ```bash
   npx serve
   ```
   Then visit the URL shown in the terminal (usually http://localhost:3000)

### Using VS Code

1. Install Visual Studio Code
2. Install the "Live Server" extension
3. Right-click on index.html
4. Select "Open with Live Server"
The site will automatically open in your default browser

### Troubleshooting Local Setup

If you encounter issues:

1. Make sure no other service is using the port:
   ```bash
   # On macOS/Linux
   lsof -ti:8080 | xargs kill -9
   
   # On Windows (in PowerShell)
   netstat -ano | findstr :8080
   taskkill /PID <PID> /F
   ```

2. Clear browser cache:
   - Windows/Linux: Ctrl + Shift + R
   - Mac: Cmd + Shift + R

3. Check browser console (F12) for errors

## Deployment

This site is deployed using GitHub Pages. To deploy your own version:

1. Fork this repository
2. Rename it to `yourusername.github.io`
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io`

## Customization

1. Update content in `index.html`
2. Modify styles in `assets/css/style.css`
3. Adjust animations in `assets/js/main.js`

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- Email: dhineshcr09@gmail.com
- GitHub: [@DhineshCR](https://github.com/DhineshCR)

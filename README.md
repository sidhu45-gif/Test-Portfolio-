# Pottabathini Sidhu - Portfolio Website

A modern, responsive portfolio website with interactive features and stunning visual effects.

## Features

### 🎨 Visual Effects
- **Gradient Background**: Smooth animated gradient flowing from bottom to top
- **Teal Green Theme**: Beautiful teal color scheme with customizable options
- **Smooth Animations**: Fade-in and slide-up effects for all sections
- **Staggered Animations**: Text and cards animate with delays for visual appeal
- **Continuous Typing Effect**: Name and title continuously type and delete in loop

### 🎯 Interactive Elements
- **Typing Effect**: Name and title continuously loop with typing animation
- **Rotating Certifications**: 13 certificates orbit like planets around sun with different speeds and orbits
- **Compact Hamburger Menu**: Small popup menu (not full page) that closes when clicking outside
- **Theme Toggle**: Switch between dark and light themes
- **Color Picker**: Choose from 8 different background colors
- **Auto-scroll Modal**: Click icon to open speed control popup (faster scrolling)

### 📱 Responsive Design
- Fully responsive on all devices (desktop, tablet, mobile)
- Mobile-optimized hamburger menu
- Adaptive layouts for different screen sizes

### 📑 Sections
1. **Hero** - Profile photo in circle, continuous typing name/title, location
2. **About Me** - Personal story and journey
3. **Skills** - Categorized technical and soft skills
4. **Projects** - 3 major projects with details
5. **Experience/Internships** - Timeline of work experience
6. **Education** - Academic qualifications
7. **Certifications** - Interactive solar system style rotating display
8. **Achievements** - Key accomplishments
9. **Resume** - Download section
10. **Contact** - Clickable contact cards with direct links
11. **Footer** - Copyright and credits

## How to Use

### Basic Setup
1. Open `index.html` in a web browser
2. All files (index.html, styles.css, script.js, profile.jpg) must be in the same folder

### Customization

#### Update Resume Link
1. Place your `resume.pdf` file in the same folder as these files
2. In `index.html`, find this line in the Resume section:
```html
<a href="data:application/pdf;base64," download="Sidhu_Resume.pdf" id="resumeDownload" class="download-btn">
```
3. Replace with:
```html
<a href="resume.pdf" download="Sidhu_Resume.pdf" id="resumeDownload" class="download-btn">
```

#### Update Links
All links are already updated with your information:
- **LinkedIn**: https://www.linkedin.com/in/sidhu-pottabathini-b1a746338
- **GitHub**: https://github.com/sidhu45-gif
- **Email**: pottabathinisidhu45@gmail.com
- **Phone**: +91 8186865891

#### Add Your Resume
Place your resume PDF in the same folder and update the link as shown above.

### Interactive Features

#### Background Color
- Click the palette icon (top-left) to open color picker
- Choose from 8 preset colors
- Colors apply instantly

#### Theme Toggle
- Click the moon/sun icon (below palette icon) to switch themes
- Dark theme (default) or Light theme

#### Auto-scroll
- Click the arrows icon (below theme toggle) to open speed control
- Modal popup appears with slider
- Speed from 0 (off) to 10 (fast)
- Click outside to close

#### Hamburger Menu
- Click the hamburger icon (top-right) to open navigation
- Small compact menu appears below the icon
- Click outside or any menu item to close

#### Certifications
- **Pause/Play**: Control rotation with the pause button
- **Speed Control**: Adjust rotation speed (1-10)
- **Click Certificates**: Click any rotating icon to view full details
- **Solar System Style**: Each certificate orbits at different speed and distance like planets around sun
- Certificates rotate continuously with different orbital periods

#### Contact Cards
- Click any contact card to directly open email, phone, LinkedIn, or GitHub
- All links work and open in appropriate apps

#### Continuous Typing
- Name and BCA Graduate title continuously type and delete in loop
- Runs automatically and never stops

### Keyboard Shortcuts
- **ESC**: Close any open modal or menu

## Technical Details

### Technologies Used
- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript (no frameworks)
- Font Awesome Icons
- Google Fonts (Orbitron, Rajdhani)

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

### Performance
- Optimized particle system (80 particles)
- Smooth 60 FPS animations
- Lightweight (total size < 200KB)

## File Structure
```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # All CSS styles and animations
├── script.js       # JavaScript functionality
└── profile.jpg     # Your profile photo
```

## Customization Tips

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #14b8a6;  /* Main color */
    --secondary-color: #0d9488; /* Darker shade */
    --accent-color: #5eead4;    /* Lighter shade */
}
```

### Modify Particle Count
In `script.js`, find:
```javascript
this.particleCount = 80; // Change this number
```

### Adjust Animation Speed
In `styles.css`, find animation durations and modify:
```css
transition: all 0.8s ease; /* Change 0.8s to your preference */
```

## Support

For any issues or customization help:
- Email: pottabathinisidhu45@gmail.com
- LinkedIn: [Sidhu Pottabathini](https://www.linkedin.com/in/sidhupottabathini-b1a746338)

## Credits

Created by Pottabathini Sidhu
BCA Graduate | Web Developer

---

© 2026 Pottabathini Sidhu. All rights reserved.

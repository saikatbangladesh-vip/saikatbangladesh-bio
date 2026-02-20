# Bio Link - Personal Social Media Hub

A modern and professional bio link website that organizes all social media profiles in one place.

## Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Technical Details](#technical-details)
- [File Structure](#file-structure)
- [Installation and Setup](#installation-and-setup)
- [Customization Guide](#customization-guide)
- [Feature Details](#feature-details)
- [Design Highlights](#design-highlights)
- [Responsive Design](#responsive-design)
- [Browser Support](#browser-support)
- [Deployment](#deployment)
- [License](#license)

## About The Project

This is a single-page application that helps users display all their social media links in one place. It can be used as an alternative to platforms like Linktree and Bio.link, but is completely customizable and free.

### Why This Project?

- Complete control and customization
- No subscription fees
- Fast loading and performance optimized
- Modern and attractive design
- Easy to host and deploy

## Key Features

### 1. Profile Section
- Customizable profile image
- Glowing animated border effect
- Name and tagline display
- Floating animation

### 2. Social Media Links
Support for the following platforms:
- YouTube (supports two channels)
- Facebook
- Instagram
- X/Twitter
- TikTok
- Kick
- Twitch
- Reddit
- Pinterest
- WhatsApp
- Telegram
- Discord
- Blogger

Each link includes:
- Custom icon
- Platform name
- Username/handle display
- Hover effect with colorful glow
- Click animation and ripple effect

### 3. Share Functionality
- QR code generation and display
- Social media sharing (Twitter, Facebook, Email)
- Direct link copy feature
- Toast notifications

### 4. Subscription System
- Email subscription modal
- Subscription tracking using LocalStorage
- Repeat subscription prevention
- Beautiful form design and validation

### 5. Animated Background
- Gradient orb animation
- Particle canvas effect
- Connecting line animation
- Smooth floating motion

### 6. User Experience
- Keyboard shortcuts (Esc, S)
- Smooth scroll effect
- Loading animation
- Lazy animation with Intersection Observer
- Toast notification system

## Technical Details

### Technologies Used

#### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling and animations
  - CSS Variables (Custom Properties)
  - Flexbox Layout
  - CSS Grid
  - CSS Animations & Transitions
  - Backdrop Filter
  - Custom Scrollbar
- **Vanilla JavaScript (ES6+)**: Dynamic functionality
  - Class-based OOP
  - Canvas API
  - LocalStorage API
  - Intersection Observer API
  - Clipboard API
  - Event Delegation

#### External Libraries
- **Font Awesome 6.4.0**: Icon library

### Code Architecture

#### 1. Configuration-Driven Design
The project uses centralized configuration in the `config.js` file:
```javascript
CONFIG = {
    profile: { ... },
    socialLinks: [ ... ],
    share: { ... },
    footer: { ... }
}
```

#### 2. Modular JavaScript Structure
- **Particle System**: Canvas-based particle animation
- **Config Loader**: Dynamic content loading
- **Modal Manager**: Subscribe/Share modal handling
- **Event Handlers**: Centralized event management
- **Animation Controller**: Scroll-based animations

#### 3. CSS Architecture
- CSS Variables for theming
- BEM-inspired naming convention
- Mobile-first responsive approach
- Performance-optimized animations

## File Structure

```
Bio Link/
│
├── index.html              # Main HTML file
├── config.js               # Configuration file
├── README.md              # Documentation
│
├── assets/
│   ├── css/
│   │   ├── style.css           # Main stylesheet
│   │   └── style.backup.css    # Backup stylesheet
│   │
│   ├── js/
│   │   └── script.js           # Main JavaScript file
│   │
│   └── images/
│       ├── logo.png            # Profile logo
│       ├── favicon.ico         # Browser icon
│       ├── qrcode.png          # QR code image
│       │
│       └── [social-icons]      # Social media icons
│           ├── youtube.png
│           ├── facebook.png
│           ├── instagram.png
│           ├── x.png
│           ├── tiktok.png
│           ├── kick.png
│           ├── twitch.png
│           ├── reddit.png
│           ├── pinterest.png
│           ├── whatsapp.png
│           ├── telegram.png
│           ├── discord.png
│           └── blogger.png
```

### File Descriptions

#### index.html
- Semantic HTML5 structure
- Meta tags and SEO optimization
- Profile, link and modal sections
- Background animation elements

#### config.js
- Centralized configuration management
- Easy to edit
- Enable/disable social links

#### assets/css/style.css
- 1000+ lines of comprehensive styling
- Theming with CSS Variables
- Responsive design (768px, 480px breakpoints)
- Custom animations and transitions

#### assets/js/script.js
- 460+ lines of JavaScript code
- Particle animation system
- Dynamic content loading
- Event handling and user interactions
- LocalStorage management

## Installation and Setup

### Quick Start

1. **Download the project**
   ```bash
   # Git clone (if repository exists)
   git clone <repository-url>
   
   # Or download ZIP file
   ```

2. **Open the file**
   - Open `index.html` in any browser
   - Or use Live Server (VS Code)

3. **Customize**
   - Edit `config.js` file
   - Add your logo and QR code

### Local Server Setup

#### VS Code Live Server
```bash
1. Open in VS Code
2. Install Live Server Extension
3. Right-click on index.html
4. Select "Open with Live Server"
```

#### Python Simple HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Open in browser: http://localhost:8000
```

#### Node.js HTTP Server
```bash
# Install http-server
npm install -g http-server

# Start server
http-server -p 8000
```

## Customization Guide

### 1. Change Profile Information

In `config.js` file:

```javascript
profile: {
    name: "Your Name",
    tagline: "Your Tagline",
    logo: "assets/images/your-logo.png"
}
```

### 2. Add/Modify Social Links

```javascript
socialLinks: [
    {
        platform: "Platform Name",
        username: "@yourusername",
        url: "https://platform.com/yourusername",
        icon: "assets/images/platform.png",
        enabled: true  // Set to false to hide the link
    }
]
```

### 3. Add New Platform

#### Step 1: Add icon
Place your icon in `assets/images/` folder

#### Step 2: Add to config.js
```javascript
{
    platform: "LinkedIn",
    username: "yourusername",
    url: "https://linkedin.com/in/yourusername",
    icon: "assets/images/linkedin.png",
    enabled: true
}
```

#### Step 3: Add CSS color (Optional)
In `style.css`:
```css
:root {
    --linkedin-color: #0077b5;
}

.social-link.linkedin:hover {
    border-color: var(--linkedin-color);
    box-shadow: 0 10px 40px rgba(0, 119, 181, 0.4);
}
```

### 4. Change Share URL

```javascript
share: {
    websiteUrl: "https://yourdomain.com/",
    displayUrl: "yourdomain.com",
    qrCode: "assets/images/your-qrcode.png"
}
```

### 5. Customize Footer

```javascript
footer: {
    copyrightName: "Your Name",
    creditText: "Made by Your Name"
}
```

### 6. Change Color Theme

Modify CSS Variables in `style.css` file:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --bg-dark: #your-dark-bg;
    --bg-light: #your-light-bg;
    /* More variables... */
}
```

### 7. Change Animation Speed

```css
.gradient-orb {
    animation: float 25s ease-in-out infinite; /* Change 25s */
}

.social-link {
    transition: all 0.4s cubic-bezier(...); /* Change 0.4s */
}
```

## Feature Details

### Particle Animation System

A dynamic particle system built using Canvas API:

- **80 particles** moving randomly
- Particles **connect at 120px distance**
- **Responsive canvas** that adjusts to window resize
- **Performance optimized** using requestAnimationFrame

### Dynamic Content Loading

Content loaded from config via JavaScript:

```javascript
function loadConfigContent() {
    // Profile update
    // Social links generation
    // Share modal update
    // Footer update
}
```

**Benefits:**
- Edit one file (config.js) to update everything
- No need to change HTML code
- Easy to maintain

### Modal System

Two modal systems:

#### Subscribe Modal
- Email subscription form
- Saves to LocalStorage
- Prevents repeat subscriptions
- Validation and error handling

#### Share Modal
- QR code display
- Social share options
- Link copy feature
- Toast notifications

### Toast Notification System

A beautiful toast system for user feedback:

```javascript
function showToast(message) {
    // Shows message for 3 seconds
    // Smooth animation
    // Auto-hide
}
```

### Keyboard Shortcuts

```
Esc   - Close modals
S     - Open Subscribe modal
```

### Intersection Observer

Animates elements when they become visible on scroll:

```javascript
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate element
        }
    });
});
```

### Ripple Effect

Ripple effect on all buttons and links when clicked:

- Detects click position
- Creates dynamic ripple span
- Auto-removes after 600ms

## Design Highlights

### Color Scheme

The project uses a **dark theme**:

- **Background**: Gradient dark (#0f0f0f, #1a1a2e, #16213e)
- **Card Background**: Semi-transparent white (0.05 opacity)
- **Borders**: Glowing white borders
- **Text**: White (#e6edf3) and gray (#8b949e)
- **Accent Colors**: Original colors of each platform

### Typography

- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Heading Size**: 32px (mobile: 22-26px)
- **Body Text**: 14-16px
- **Font Weights**: 400, 600, 700

### Glassmorphism Effect

Modern glassmorphism design:

```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Animations & Transitions

1. **fadeInDown**: Profile section
2. **fadeInUp**: Social links
3. **float**: Profile image
4. **rotate**: Logo border
5. **slideUp**: Modal
6. **ripple**: Click effect

### Box Shadows

Multiple shadow layers:

- **Subtle**: `0 4px 15px rgba(0, 0, 0, 0.2)`
- **Medium**: `0 8px 32px rgba(0, 0, 0, 0.3)`
- **Heavy**: `0 20px 60px rgba(0, 0, 0, 0.4)`
- **Glow**: `0 0 20px rgba(255, 255, 255, 0.5)`

### Hover Effects

For each interactive element:

- **Transform**: scale, translateY
- **Glow**: platform-specific colors
- **Smooth Transitions**: cubic-bezier easing

## Responsive Design

### Breakpoints

```css
/* Desktop: Default (680px container) */

/* Tablet: 768px and below */
@media (max-width: 768px) {
    /* Adjusted padding and sizes */
}

/* Mobile: 480px and below */
@media (max-width: 480px) {
    /* Compact layout */
}
```

### Responsive Features

#### Desktop (>768px)
- Full-size elements
- Horizontal layouts
- Larger spacing

#### Tablet (≤768px)
- Smaller action buttons (38px)
- Reduced profile image (100px)
- Adjusted font sizes
- Column layout for forms

#### Mobile (≤480px)
- Compact spacing
- Smaller toast notifications
- Touch-optimized buttons
- Optimized text sizes

### Mobile Optimization

- **Touch Targets**: 38-48px minimum size
- **Font Readability**: 12-14px minimum
- **Viewport**: Properly configured meta tag
- **Performance**: Optimized animations
- **Gestures**: Scroll and tap optimized

## Browser Support

### Fully Supported

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+

### Features & Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Variables | Yes | Yes | Yes | Yes |
| Backdrop Filter | Yes | Yes | Yes | Yes |
| Canvas API | Yes | Yes | Yes | Yes |
| LocalStorage | Yes | Yes | Yes | Yes |
| Intersection Observer | Yes | Yes | Yes | Yes |
| Clipboard API | Yes | Yes | Yes | Yes |

### Legacy Browser Support

Fallbacks provided for:
- Custom scrollbar (Webkit + Firefox)
- Backdrop filter (graceful degradation)
- CSS Grid (Flexbox fallback)

## Deployment

### GitHub Pages

```bash
1. Create new repository on GitHub
2. Push all files
3. Settings > Pages > Source: main branch
4. URL: https://username.github.io/repo-name/
```

### Netlify

```bash
1. Login to netlify.com
2. "Add new site" > "Deploy manually"
3. Drag folder
4. Get automatic URL
```

**netlify.toml** (Optional):
```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel

```bash
1. Login to vercel.com
2. "New Project" > Import Git Repository
3. Or CLI: npm i -g vercel && vercel
4. Automatic deployment
```

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and init
firebase login
firebase init hosting

# Deploy
firebase deploy
```

**firebase.json**:
```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*"
    ]
  }
}
```

### Custom Domain Setup

1. Add CNAME record at domain provider
2. Add custom domain in hosting service
3. SSL certificate will be automatically enabled

## Performance Optimization

### Implemented Optimizations

1. **CSS Optimization**
   - Minimal specificity
   - No redundant rules
   - Grouped media queries

2. **JavaScript Optimization**
   - Event delegation
   - RequestAnimationFrame for animations
   - Lazy loading with Intersection Observer
   - Debounced scroll events

3. **Image Optimization**
   - PNG icons optimized
   - Favicon included
   - Recommended: WebP format

4. **Loading Performance**
   - CSS before JS
   - External CSS/JS loaded efficiently
   - No render-blocking resources

### Performance Tips

```bash
# Image optimization
# Use tools like:
- TinyPNG (https://tinypng.com)
- ImageOptim
- Squoosh (https://squoosh.app)

# Recommended sizes:
- Logo: 200x200px
- Social Icons: 100x100px
- QR Code: 500x500px
```

## SEO and Meta Tags

### Current Meta Tags

```html
<title>Saikat Bangladesh - Bio Link</title>
<meta name="description" content="...">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" type="image/x-icon" href="assets/images/favicon.ico">
```

### Recommended Additional Tags

```html
<!-- Open Graph -->
<meta property="og:title" content="Your Name - Bio Link">
<meta property="og:description" content="...">
<meta property="og:image" content="assets/images/og-image.jpg">
<meta property="og:url" content="https://yourdomain.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Name - Bio Link">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="assets/images/twitter-image.jpg">

<!-- Additional -->
<meta name="author" content="Your Name">
<meta name="keywords" content="bio link, social media, portfolio">
```

## Troubleshooting

### Common Issues and Solutions

#### 1. Links not working
```
Solution:
- Check if URL is correct in config.js
- Verify enabled: true is set
- Check browser console for errors
```

#### 2. Icons not showing
```
Solution:
- Check if file exists in assets/images/ folder
- Verify path is correct in config.js
- File name is case-sensitive (logo.png ≠ Logo.png)
```

#### 3. Subscription not saving
```
Solution:
- Check if LocalStorage is enabled in browser
- LocalStorage doesn't work in Incognito/Private mode
- Check Browser console > Application > LocalStorage
```

#### 4. Animations are slow
```
Solution:
- Enable hardware acceleration
- Reduce particle count (particleCount = 50 in script.js)
- Increase CSS animation-duration
```

#### 5. Design breaking on mobile
```
Solution:
- Check if viewport meta tag exists
- Clear browser cache
- Test on different devices
```

## Future Improvements

### Planned Features

- [ ] Dark/Light theme toggle
- [ ] Analytics integration
- [ ] Email subscription backend
- [ ] Admin panel for easy editing
- [ ] Multiple language support
- [ ] Custom color picker
- [ ] Drag-and-drop link reordering
- [ ] Link click tracking
- [ ] Visitor counter
- [ ] Social media feed integration

### Potential Enhancements

- PWA (Progressive Web App) support
- Service Worker for offline functionality
- Image lazy loading
- WebP format support
- Advanced animations (GSAP)
- Music player integration
- Blog section
- Contact form

## Contribution

If you want to contribute to this project:

1. Fork it
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## Support

For issues or questions, contact:

- YouTube: @saikatbangladesh
- Facebook: saikatbangladesh
- Email: (add your email)

## License

This project is free and open source. You can use, modify, and distribute it for any purpose.

## Credits

- **Developer**: Saikat Bangladesh
- **Design Inspiration**: Modern Glassmorphism UI
- **Icons**: Custom PNG icons
- **Font Icons**: Font Awesome 6.4.0

---

**Made with love by Saikat Bangladesh**

Copyright 2025 Saikat Bangladesh. All rights reserved.

# Developer Portfolio Website

A modern, responsive, and fully animated developer portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Dark Theme** - Professional dark mode design with accent colors
- **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- **Smooth Animations** - Engaging Framer Motion animations throughout
- **Clean Architecture** - Modular, reusable React components
- **Fast Performance** - Built with Vite for optimal development and production performance
- **Accessibility** - Semantic HTML and keyboard navigation support

## 📋 Sections

1. **Navbar** - Fixed navigation with mobile hamburger menu
2. **Hero** - Full-screen landing section with typing effect
3. **About** - Professional bio with statistics cards
4. **Skills** - Organized skill categories with visual hierarchy
5. **Projects** - Featured projects with detailed cards
6. **Certifications** - Professional credentials and achievements
7. **Achievements** - Timeline of accomplishments
8. **Contact** - Contact form and communication methods
9. **Footer** - Quick links and social connections

## 🎨 Design System

### Color Palette
- **Background**: `#0F172A`
- **Secondary Background**: `#1E293B`
- **Accent**: `#38BDF8`
- **Text Primary**: `#F8FAFC`
- **Text Secondary**: `#94A3B8`

### Typography
- Modern, clean sans-serif fonts
- Responsive text sizing
- Proper contrast ratios for accessibility

### Components
- Glassmorphism cards with blur effects
- Gradient accents and text
- Smooth hover transitions
- Staggered animations

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in your browser**
   - The development server will automatically open at `http://localhost:5173`
   - If not, manually navigate to the URL shown in the terminal

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── AnimatedSection.jsx  # Reusable animation wrapper
│   │   └── TypingEffect.jsx     # Typing animation component
│   ├── data/                # Static data
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── certifications.js
│   │   └── achievements.js
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── .gitignore               # Git ignore rules
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite 4** - Lightning-fast build tool
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion 10** - Animation library
- **React Icons 4** - Icon library
- **PostCSS** - CSS transformation
- **Autoprefixer** - CSS vendor prefixes

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Linting (if configured)
npm run lint         # Lint code
```

## 🎯 Customization

### Update Personal Information

Edit the data files in `src/data/` to update:
- Skills and technologies
- Project details and images
- Certifications
- Achievements and timeline

### Modify Contact Information

Update contact details in:
- `src/components/Hero.jsx` - Social links
- `src/components/Contact.jsx` - Contact methods and form

### Change Colors

Modify the color palette in:
- `tailwind.config.js` - Color definitions
- `src/index.css` - Gradient and accent colors

### Adjust Animations

Fine-tune animation timing in component files:
- `src/components/AnimatedSection.jsx` - Section animations
- `src/components/TypingEffect.jsx` - Typing animation
- Individual components for custom animations

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import the repository
4. Vercel will automatically detect Vite and build settings
5. Deploy with one click

### Deploy to Netlify

1. Build the project: `npm run build`
2. Visit [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Or connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages

Update `vite.config.js`:
```javascript
export default {
  base: '/repository-name/',
  // ... rest of config
}
```

Then use the GitHub Pages deployment workflow.

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast
- Responsive to user preferences

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Best Practices

- Update email addresses with actual contact info
- Add real project links and GitHub repositories
- Replace placeholder images with actual screenshots
- Update all personal information
- Add proper error handling for forms
- Implement form submission (email service integration)

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips

1. **Performance**: Images are loaded from unsplash.com placeholder URLs - replace with optimized local images for production
2. **SEO**: Update meta tags in `index.html` with your information
3. **Analytics**: Consider adding Google Analytics or Vercel Analytics
4. **Forms**: Implement form submission with services like Formspree, Emailjs, or Sendgrid
5. **Resume**: Add your actual resume PDF to the public folder and update the link in Hero.jsx

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

For issues or questions, please check the documentation or create an issue in the repository.

---

**Built with ❤️ using React, Vite, Tailwind CSS & Framer Motion**

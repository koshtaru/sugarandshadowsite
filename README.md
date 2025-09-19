# SweetAndShadow VTuber Website

A beautiful landing page for SweetAndShadow, featuring married VTuber duo Valen Vayne and Viktoriya Vogue streaming on Twitch.

## Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **React TypeScript**: Built with React 18 and TypeScript for type safety
- **Professional Sections**:
  - Hero section with compelling call-to-action
  - Content showcase (Gaming Streams, Creative Content, Wholesome Vibes)
  - About section with skills and experience
  - Contact form with service selection
  - Professional footer

## Technologies Used

- React 18
- TypeScript
- CSS3 with modern features
- Responsive design principles
- Modern web fonts (Inter)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services showcase
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── App.tsx                # Main app component
├── App.css               # Global styles
├── index.tsx             # App entry point
└── index.css             # Base styles
```

## Customization

- Update contact information in the Contact and Footer components
- Modify services in the Services component
- Update personal information in the About component
- Customize colors and styling in the CSS files

## Deployment

The built files in the `build` folder can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any web server

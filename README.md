# Robinson Honour Portfolio - Recreation

A modern, fully responsive portfolio website recreation of [Robinson Honour's portfolio](https://robinsonhonour.me/), built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Smooth Animations**: Framer Motion for fluid page transitions and scroll animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Performance Focused**: Optimized images and lazy loading
- **Clean Code**: Modular component architecture with TypeScript

## 📋 Website Structure

### Sections

1. **Hero Section** - Eye-catching introduction with animated text and profile image
2. **About Section** - Detailed background, experience, and personal info with image gallery
3. **Projects Section** - Showcase of featured projects with hover effects
4. **Experience Section** - Timeline of work experience with company logos
5. **Services Section** - Overview of offered services with icon cards
6. **Contact Section** - Interactive contact form with social links
7. **Footer** - Social media links and additional navigation

### Components

- **Layout Components**

  - `Navigation` - Fixed navigation bar with smooth scroll
  - `Footer` - Social links and copyright information

- **Section Components**
  - `Hero` - Main landing section
  - `About` - About section with images
  - `Projects` - Project showcase grid
  - `Experience` - Work experience timeline
  - `Services` - Services offered cards
  - `Contact` - Contact form

## 🎨 Design Features

### Colors

- Primary: Black (#000000)
- Secondary: White (#ffffff)
- Accent: Blue (#3b82f6)
- Purple: (#8b5cf6)
- Pink: (#ec4899)

### Typography

- **Display Font**: Sora (Google Fonts)
- **Body Font**: Inter (Google Fonts)

### Animations

- Fade-in effects on scroll
- Slide-up animations for sections
- Hover effects on interactive elements
- Smooth page transitions
- Floating animations for decorative elements

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone or navigate to the repository:

```bash
cd final-1
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

### Quick Deployment

1. **Push your code to GitHub** (if not already done):

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Deploy using npm script**:

```bash
npm run deploy
```

This will build your site and push it to the `gh-pages` branch automatically.

3. **Configure GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** > **Pages**
   - Under **Source**, select:
     - Branch: `gh-pages`
     - Folder: `/ (root)`
   - Click **Save**

Your site will be live at: `https://wisdomairey.github.io/portfolio-airey/`

### Automatic Deployment with GitHub Actions

The project includes a GitHub Actions workflow that automatically deploys your site when you push to the `main` branch.

**To enable automatic deployment:**

1. Go to your repository **Settings** > **Pages**
2. Under **Source**, select: **GitHub Actions**
3. Push any changes to the `main` branch, and GitHub will automatically build and deploy

### Deployment Configuration

The following files configure GitHub Pages deployment:

- **`next.config.js`**: Configured with `output: 'export'` for static export and `basePath: '/portfolio-airey'`
- **`.github/workflows/deploy.yml`**: GitHub Actions workflow for automatic deployment
- **`package.json`**: Contains `deploy` script for manual deployment

For detailed deployment instructions and troubleshooting, see [`DEPLOYMENT.md`](./DEPLOYMENT.md).

## 📦 Dependencies

### Core Dependencies

- `next` - React framework for production
- `react` - JavaScript library for building user interfaces
- `react-dom` - React package for working with the DOM
- `typescript` - TypeScript language support
- `framer-motion` - Animation library for React
- `react-icons` - Popular icon library

### Dev Dependencies

- `tailwindcss` - Utility-first CSS framework
- `postcss` - Tool for transforming CSS
- `autoprefixer` - PostCSS plugin to parse CSS
- `eslint` - JavaScript linter
- `eslint-config-next` - ESLint configuration for Next.js

## 📁 Project Structure

```
final-1/
├── public/                 # Static assets
│   ├── profile.jpg        # Profile image (placeholder)
│   ├── about1.png         # About section image 1 (placeholder)
│   ├── about2.png         # About section image 2 (placeholder)
│   ├── doodle.png         # Decorative doodle (placeholder)
│   └── *-logo.png         # Company logos (placeholders)
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   └── components/        # React components
│       ├── layout/        # Layout components
│       │   ├── Navigation.tsx
│       │   └── Footer.tsx
│       └── sections/      # Page sections
│           ├── Hero.tsx
│           ├── About.tsx
│           ├── Projects.tsx
│           ├── Experience.tsx
│           ├── Services.tsx
│           └── Contact.tsx
├── .eslintrc.json         # ESLint configuration
├── next.config.js         # Next.js configuration
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies

```

## 🖼️ Image Assets

The project uses placeholder SVG images. For production, replace these with actual images:

- `public/profile.jpg` - Profile photo (recommended: 512x512px)
- `public/about1.png` - About section image
- `public/about2.png` - About section image
- `public/doodle.png` - Decorative element
- `public/*-logo.png` - Company logos

## 🎯 Key Technical Implementations

### 1. **Framer Motion Animations**

- Scroll-triggered animations using `useInView` hook
- Staggered animations for list items
- Smooth transitions between states

### 2. **Responsive Design**

- Mobile-first approach
- Tailwind CSS breakpoints
- Flexible grid layouts

### 3. **TypeScript Integration**

- Type-safe component props
- Interface definitions
- Enhanced IDE support

### 4. **Performance Optimizations**

- Next.js Image component for optimized images
- Lazy loading of components
- Code splitting with dynamic imports

## 🔧 Configuration Files

### `tailwind.config.js`

Custom theme extensions including:

- Custom color palette
- Custom fonts
- Animation keyframes
- Extended utilities

### `next.config.js`

Next.js configuration with:

- Image domain allowlist
- Remote patterns for external images

### `tsconfig.json`

TypeScript compiler options:

- Path aliases (`@/*`)
- Strict type checking
- Module resolution

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site
- `npm run deploy` - Build and deploy to GitHub Pages

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // ...
    }
  }
}
```

### Modifying Content

Edit section components in `src/components/sections/`

### Adding New Sections

1. Create new component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`

## 🔗 Links & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

This project is for educational and demonstration purposes.

## 👤 Original Portfolio

Visit the original portfolio: [robinsonhonour.me](https://robinsonhonour.me/)

## 🙏 Acknowledgments

- Design inspiration from Robinson Honour's original portfolio
- Icons from React Icons
- Fonts from Google Fonts

---

**Note**: This is a recreation project. All placeholder images should be replaced with actual assets for production use.

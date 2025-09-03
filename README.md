# React Web Application

A modern, responsive web application built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ Fast development with Vite
- 🎨 Beautiful UI components with shadcn/ui
- 🎯 Type-safe development with TypeScript
- 📱 Responsive design with Tailwind CSS
- 🌙 Dark/Light mode support
- 🧩 Modular component architecture

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible React components
- **Lucide React** - Beautiful & consistent icon library
- **React Router** - Client-side routing
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application.

## 📦 Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## 🌐 Deployment

### Deploy to Netlify

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI** (recommended)
   ```bash
   # Install Netlify CLI globally
   npm install -g netlify-cli

   # Login to Netlify
   netlify login

   # Deploy to Netlify
   netlify deploy --prod --dir=dist
   ```

3. **Or deploy via Netlify Web Interface**
   - Go to [Netlify](https://app.netlify.com/)
   - Drag and drop your `dist` folder
   - Or connect your GitHub repository for automatic deployments

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to your package.json:
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # shadcn/ui components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
├── App.tsx             # Main App component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Customization

This project uses a design system built on top of Tailwind CSS and shadcn/ui. You can customize:

- **Colors & Themes**: Edit `src/index.css` for color variables
- **Components**: Modify components in `src/components/ui/`
- **Tailwind Config**: Update `tailwind.config.ts` for custom utilities

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the fast build tool

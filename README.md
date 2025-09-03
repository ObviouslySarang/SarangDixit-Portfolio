A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.

## 🚀 Features

- 💼 Professional portfolio showcase
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎨 Beautiful UI with shadcn/ui components
- 🎯 Type-safe development with TypeScript
- 🌙 Dark/Light mode support
- 📧 Contact form with validation
- 🚀 Smooth scrolling navigation
- 📊 Skills and experience display
- 🎯 Project showcase with live demos

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

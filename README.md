# Circuloconcentrico Website

## 🚀 Features

- **React 18** with TypeScript for type-safe development
- **Webpack 5** for powerful bundling and optimization
- **CSS Modules** support with automatic extraction
- **Hot Module Replacement** for fast development
- **Production builds** with content hashing for caching
- **Source maps** for debugging
- **Asset optimization** for images and fonts

## 📁 Project Structure

```
circuloconcentrico-website/
├── src/                    # Source files
│   ├── index.html         # HTML template
│   ├── index.tsx          # React entry point
│   ├── App.tsx            # Main React component
│   ├── App.css            # Component styles
│   └── index.css          # Global styles
├── dist/                  # Built static files (generated)
├── package.json           # Dependencies and scripts
├── webpack.config.js      # Webpack configuration
├── tsconfig.json          # TypeScript configuration
└── .gitignore            # Git ignore rules
```

## 🛠️ Setup

1. **Install dependencies:**
   ```bash
   yarn install
   ```

2. **Development mode:**
   ```bash
   yarn dev
   ```
   This starts the development server at `http://localhost:3000` with hot reloading.

3. **Build for production:**
   ```bash
   yarn build
   ```
   This generates optimized static files in the `dist/` folder.

4. **Clean build files:**
   ```bash
   yarn clean
   ```

## 📦 Available Scripts

- `yarn dev` - Start development server with hot reloading
- `yarn build` - Build production-ready static files
- `yarn clean` - Remove the dist folder

## 🎯 Build Output

The `yarn build` command

## 🔧 Configuration

- **Webpack**: Configured in `webpack.config.js` with support for TypeScript, CSS, and assets
- **TypeScript**: Configured in `tsconfig.json` with React JSX support
- **Development**: Hot module replacement and source maps enabled
- **Production**: Minification, content hashing, and CSS extraction enabled

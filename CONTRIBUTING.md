# Contributing to Life Dashboard

First off, thank you for considering contributing to Life Dashboard! 🎉

This document provides guidelines and instructions for contributing to the project. Please read through this before submitting issues or pull requests.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description** of the issue
- **Steps to reproduce** the behavior
- **Expected vs actual behavior**
- **Screenshots** if applicable
- **Browser/OS information** if relevant

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title** describing the enhancement
- **Detailed description** of the proposed feature
- **Use case** - why this would be useful
- **Possible implementation** ideas (optional)

### Pull Requests

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes** following the coding standards below

3. **Test your changes** thoroughly
   ```bash
   npm run dev
   ```

4. **Commit your changes** with clear messages
   ```bash
   git commit -m "Add: feature description"
   ```

5. **Push to your fork** and open a Pull Request
   ```bash
   git push origin feature/amazing-feature
   ```

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/life-dashboard.git
   cd life-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Coding Standards

### General Guidelines

- **Use functional components** with hooks (React 18+)
- **Follow existing code style** and patterns
- **Write meaningful variable names**
- **Add comments** for complex logic
- **Keep components small** and focused

### Code Style

- Use **2 spaces** for indentation
- Use **single quotes** for strings
- Use **semicolons** at end of statements
- Use **camelCase** for variables and functions
- Use **PascalCase** for components

### Component Structure

```jsx
// 1. Imports
import { useState } from 'react'
import { Icon } from 'lucide-react'
import './Component.css'

// 2. Component definition
const Component = () => {
  // 3. State and hooks
  const [state, setState] = useState(null)

  // 4. Helper functions
  const handleClick = () => {
    // logic
  }

  // 5. Render
  return (
    <div className="component">
      {/* JSX */}
    </div>
  )
}

export default Component
```

### CSS Guidelines

- Use **CSS variables** for theming (defined in `index.css`)
- Use **component-specific CSS files** (e.g., `Component.css`)
- Follow **BEM-like naming** for complex selectors
- Keep **animations smooth** and performant

## Project Structure

```
life-dashboard/
├── src/
│   ├── components/      # React components
│   ├── data/            # Sample data and utilities
│   ├── App.jsx          # Main app component
│   ├── App.css          # Main app styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## Adding New Features

### Adding a New Dashboard Component

1. Create component file in `src/components/`
   ```bash
   touch src/components/NewComponent.jsx
   touch src/components/NewComponent.css
   ```

2. Follow the existing component pattern:
   - Import necessary dependencies
   - Create component with state management
   - Add styling with matching theme
   - Include animations and transitions

3. Register component in `App.jsx`:
   - Add to tabs array
   - Add to renderContent switch statement
   - Import component

### Adding Data Input Forms

When adding data input capabilities:
- Use controlled inputs (React state)
- Validate user input
- Provide clear feedback
- Save to localStorage (for persistence)
- Consider data structure for future backend integration

## Commit Message Guidelines

Use clear, descriptive commit messages:

- `Add: feature description` - New features
- `Fix: bug description` - Bug fixes
- `Update: what changed` - Updates to existing code
- `Refactor: what was refactored` - Code improvements
- `Style: what was styled` - CSS/styling changes
- `Docs: documentation updates` - Documentation changes

Examples:
```
Add: water intake tracking component
Fix: task deletion not updating progress bar
Update: improve mobile responsiveness
Refactor: extract chart logic to utility function
```

## Testing

Before submitting:
- ✅ Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- ✅ Test on mobile devices
- ✅ Check responsive design
- ✅ Verify animations work smoothly
- ✅ Test localStorage persistence
- ✅ Ensure no console errors

## Questions?

If you have questions about contributing:
- Open an issue with the `question` label
- Check existing issues and discussions
- Review the README for project overview

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Life Dashboard! 🚀


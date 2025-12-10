# Life Dashboard - Folder Structure

This document outlines the project structure and explains the purpose of each directory and file.

```
life-dashboard/
│
├── public/                          # Static assets (if any)
│   └── vite.svg                    # Vite logo
│
├── src/                            # Source code
│   │
│   ├── components/                 # React components
│   │   ├── WelcomePage.jsx        # Login/welcome screen
│   │   ├── WelcomePage.css        # Welcome page styles
│   │   ├── MoodTracker.jsx        # Mood tracking component
│   │   ├── MoodTracker.css        # Mood tracker styles
│   │   ├── HabitsTracker.jsx      # Habits tracking component
│   │   ├── HabitsTracker.css      # Habits tracker styles
│   │   ├── SleepCycles.jsx        # Sleep tracking component
│   │   ├── SleepCycles.css        # Sleep tracker styles
│   │   ├── DailyTasks.jsx         # Task management component
│   │   ├── DailyTasks.css         # Tasks component styles
│   │   ├── WaterIntake.jsx        # Water intake tracker
│   │   ├── WaterIntake.css        # Water tracker styles
│   │   ├── ScreenTime.jsx         # Screen time tracker
│   │   └── ScreenTime.css         # Screen time styles
│   │
│   ├── data/                       # Data and utilities
│   │   └── sampleData.js          # Sample data for dashboard
│   │
│   ├── App.jsx                     # Main application component
│   ├── App.css                     # Main application styles
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles and CSS variables
│
├── index.html                      # HTML template
├── package.json                    # Project dependencies and scripts
├── vite.config.js                  # Vite configuration
├── .gitignore                      # Git ignore rules
├── LICENSE                         # MIT License
├── CONTRIBUTING.md                 # Contribution guidelines
├── FOLDER_STRUCTURE.md             # This file
├── README.md                       # Project documentation
└── DEPLOYMENT.md                   # Deployment guide
```

## Directory Details

### `/src`
Main source directory containing all application code.

### `/src/components`
Individual React components for each dashboard feature. Each component has:
- **Component file** (`.jsx`) - React component logic
- **Style file** (`.css`) - Component-specific styles

**Components:**
- `WelcomePage` - Entry/login screen
- `MoodTracker` - Tracks daily mood and energy levels
- `HabitsTracker` - Monitors habit completion and streaks
- `SleepCycles` - Visualizes sleep patterns
- `DailyTasks` - Task management with add/delete
- `WaterIntake` - Water consumption tracker
- `ScreenTime` - Screen time breakdown by category

### `/src/data`
Data-related files:
- `sampleData.js` - Sample data objects for all dashboard components

### Root Files

- `index.html` - HTML entry point, loads React app
- `package.json` - Node.js dependencies and npm scripts
- `vite.config.js` - Vite bundler configuration
- `.gitignore` - Files/folders ignored by Git

## File Purpose

### `App.jsx`
- Main application component
- Manages routing between welcome page and dashboard
- Handles user authentication state
- Controls tab navigation
- Renders appropriate components based on active tab

### `main.jsx`
- React entry point
- Renders App component into DOM
- Imports global styles

### `index.css`
- Global CSS variables (colors, spacing, etc.)
- Base styles for body and root elements
- Reset and normalization styles

### Component Files

Each component follows a similar structure:
1. **Imports** - React hooks, icons, styles, data
2. **State management** - useState hooks for component data
3. **Event handlers** - Functions for user interactions
4. **Render logic** - JSX with conditional rendering
5. **Styling** - Component-specific CSS classes

## Adding New Components

When adding a new component:

1. Create component file: `src/components/NewComponent.jsx`
2. Create style file: `src/components/NewComponent.css`
3. Import in `App.jsx`
4. Add to tabs array in `App.jsx`
5. Add to renderContent switch statement

Example:
```jsx
// App.jsx
import NewComponent from './components/NewComponent'

const tabs = [
  // ... existing tabs
  { id: 'new', label: 'New Feature', icon: NewIcon, color: '#color' },
]

// In renderContent():
case 'new':
  return <NewComponent />
```

## Data Flow

1. **User enters name** → Stored in localStorage
2. **User navigates tabs** → App.jsx manages activeTab state
3. **Components render** → Based on activeTab state
4. **User interacts** → Components update local state
5. **Data persists** → localStorage (when implemented)

## Styling Architecture

- **Global styles** - `index.css` (CSS variables, base styles)
- **App-level styles** - `App.css` (layout, navigation)
- **Component styles** - `Component.css` (component-specific)

CSS Variables (defined in `index.css`):
- `--bg-primary`, `--bg-secondary`, `--bg-card`
- `--accent-primary`, `--accent-secondary`
- `--text-primary`, `--text-secondary`
- `--border-color`

## Future Considerations

Potential additions:
- `/src/utils` - Utility functions and helpers
- `/src/hooks` - Custom React hooks
- `/src/context` - React Context providers
- `/src/types` - TypeScript type definitions (if migrating)
- `/src/services` - API service functions (if adding backend)
- `/src/storage` - localStorage/data persistence utilities

## Build Output

After `npm run build`, Vite creates:
- `/dist` - Production build files
- Contains optimized HTML, CSS, and JavaScript bundles


# Star Wars Explorer

An interactive Star Wars universe explorer built with React and TypeScript. Browse, search, and manage Star Wars entities with a modern, themed interface.

## ✨ Features

- 🔍 Real-time search across all Star Wars entities
- 🌓 Dark/Light mode with Star Wars themed UI
- 📱 Responsive design for all devices
- ⚡ CRUD operations for entities
- 📊 Data tables with sorting and pagination
- 🎨 Custom Star Wars themed components

## 🚀 Tech Stack

- React 18 + TypeScript
- Vite for build tooling
- Tailwind CSS + Shadcn/UI
- Zustand for state management
- React Router v6
- SWAPI (Star Wars API)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/SpitzN/starwars-app.git

# Navigate to project directory
cd starwars-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📂 Project Structure

```sh
src/
├── components/
│   ├── ui/               # Shadcn UI components
│   ├── shared/          # Common components (LoadingSpinner, ErrorMessage)
│   ├── EntityDetails/   # Single entity view
│   ├── EntityForm/      # Create/Edit forms
│   ├── List/           # Entity listing with DataTable
│   └── Search/         # Search functionality
├── store/
│   ├── entityStore.ts   # Entity CRUD operations
│   └── searchStore.ts   # Search functionality
├── types/
│   ├── entities/       # Entity type definitions
│   ├── store/          # Store type definitions
│   ├── components/     # Component props types
│   └── theme/          # Theme system types
├── utils/
│   └── entityUtils.ts  # Entity helpers and transformers
├── lib/
│   ├── shadcn-plugin.ts    # Shadcn theme configuration
│   └── starwars-plugin.ts  # Custom Star Wars theme
└── pages/              # Route components
```

## 🎯 Components

### **Core Components**

- **EntityDetails**: Displays detailed view of any Star Wars entity.
- **EntityForm**: Universal form for creating/editing entities.
- **List**: Data table with pagination and CRUD operations.
- **SearchResults**: Real-time search results display.

### **Shared Components**

- **LoadingSpinner**: Themed loading indicator.
- **ErrorMessage**: Error state display.
- **FormField**: Reusable form input component.
- **DataTable**: Generic table component with actions.

## Type System

### **Entity Types**

- Raw entity interfaces from SWAPI.
- Transformed entity types with UUID.
- Base entity types and enums.

### **Store Types**

- Entity store state and actions.
- Search store state and actions.

### **Component Types**

- Form props and field configs.
- Table props and configurations.

### **Theme Provider Types**

- Types supporting the custom theme system.

## 🎨 Theme System

**Custom Star Wars-themed design system:**

- Light/Dark mode support Jedi/Sith inspired.
- Lightsaber-inspired colors (Blue/Red).
- Custom fonts (Star Jedi, Orbitron).
- Themed components and animations.

## 🔄 State Management

### **Entity Store (Zustand)**

- CRUD operations.
- Pagination handling.
- Error handling.
- Loading states.

### **Search Store (Zustand)**

- Debounced search.
- Results caching.
- Multi-entity search.

## 🛠️ Scripts

```json
{
  "dev": "vite",
  "build": "tsc && vite build",
  "lint": "eslint . --ext ts,tsx",
  "preview": "vite preview"
}
```

## 📝 API Integration

### **Uses SWAPI (Star Wars API) for data:**

- RESTful endpoints.
- Entity relationships.
- Search functionality.
- Pagination support.

## 🙏 Acknowledgments

- [SWAPI](https://swapi.dev/) for the Star Wars API
- [Shadcn/UI](https://ui.shadcn.com/) for the component system
- [Star Jedi Font](https://www.dafont.com/star-jedi.font) for typography

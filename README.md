# StarWars App

This project is a Star Wars application built using React, TypeScript, Vite, and various other modern web technologies. It allows users to view and manage different Star Wars entities like People, Films, Planets, Starships, Species, and Vehicles.

## Table of Contents

1. [Installation](#installation)
2. [Scripts](#scripts)
3. [Dependencies](#dependencies)
4. [Project Structure](#project-structure)
5. [Components](#components)
6. [Pages](#pages)
7. [Utils](#utils)
8. [Store](#store)

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-repo/starwars-app.git
cd starwars-app
npm install
```

## Scripts

dev: Starts the development server using Vite.
build: Builds the application using TypeScript and Vite.
lint: Runs ESLint on the project.
preview: Previews the built application using Vite.

```bash
{
"scripts": {
"dev": "vite",
"build": "tsc && vite build",
"lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
"preview": "vite preview"
}
}
```

## Dependencies

The project uses the following dependencies:

```bash
@hookform/resolvers
@radix-ui/react-dialog
@radix-ui/react-label
@radix-ui/react-scroll-area
@radix-ui/react-separator
@radix-ui/react-slot
@tanstack/react-table
axios
class-variance-authority
clsx
lucide-react
react
react-dom
react-hook-form
react-icons
react-router-dom
tailwind-merge
tailwindcss-animate
uuid
zod
zustand
```

For development:

```bash
@types/node
@types/react
@types/react-dom
@types/uuid
@typescript-eslint/eslint-plugin
@typescript-eslint/parser
@vitejs/plugin-react
autoprefixer
eslint
eslint-plugin-react-hooks
eslint-plugin-react-refresh
postcss
tailwindcss
typescript
vite
```

## Project Structure

The project structure is organized as follows:

src/
|-- components/
| |-- ui/
| |-- EntityDetails/
| |-- EntityForm/
| |-- List/
| |-- Search/
|-- constants/
|-- hooks/
|-- lib/
|-- pages/
|-- store/
|-- types/
|-- utils/

## Components

### EntityDetails

Displays the details of a single entity.

### EntityForm

Used to create or edit an entity.

### FormField

A reusable form field component.

### List

Displays a list of entities with pagination controls and an option to create a new entity.

### SearchField

Provides a search input and displays search results.

### SearchResults

Displays the search results.

## Pages

### App

Main application component that sets up the routes.

### SearchPage

Provides a search input and displays search results.

### EntityListPage

Displays a list of entities based on the entity type provided in the URL.

### EntityPage

Displays the details of a single entity based on the URL.

### NotFoundPage

Displays a "Page Not Found" message for invalid URLs.

## Utils

### mapStringToEntityType

Maps a string to an EntityType.

### fieldMapping

Defines the fields for each EntityType.

### transformEntity

Transforms a raw entity into a more structured format.

### getDefaultValues

Returns the default values for a given EntityType.

## Store

### API Configuration

Configures the Axios instance with the base URL.

### Entity Store

Manages the state for entities using Zustand.

### Search Store

Manages the state for search using Zustand.

This project is set up with Vite for fast development, TypeScript for static type checking, React for UI development, Zustand for state management, and Tailwind CSS for styling. Additionally, it uses various other libraries for form handling, routing, and data fetching.

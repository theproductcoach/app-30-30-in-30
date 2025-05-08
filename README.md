# 30 in 30 - App Showcase

A modern web application showcasing 30 apps built in 30 days, featuring a beautiful vertical timeline layout and interactive features.

## Features

- **Vertical Timeline Layout**
  - Elegant vertical timeline with alternating cards
  - Central animated line with pulsing effect
  - Responsive design for all screen sizes
  - Mobile-optimized layout with left-aligned timeline

- **Interactive Features**
  - Real-time search functionality
  - Technology stack filtering
  - Smooth animations and transitions
  - Dark mode support

- **Modern UI/UX**
  - Glassmorphism design elements
  - Neon/cyberpunk theme
  - Animated particle background
  - Responsive and accessible

## Tech Stack

- **Frontend**
  - Next.js 13+ (App Router)
  - TypeScript
  - Tailwind CSS
  - Three.js (for background animation)

- **Development**
  - ESLint
  - TypeScript strict mode
  - Modern React patterns (hooks, async components)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
app/
├── apps/              # Individual app pages
├── components/        # Reusable components
├── data/             # App data and types
├── hooks/            # Custom React hooks
└── page.tsx          # Homepage with timeline
```

## Features in Detail

### Timeline Layout

- Vertical timeline with alternating cards
- Central animated line with gradient and pulse effect
- Cards include:
  - App number
  - Title
  - Description
  - Tech stack tags
  - View App button

### Search & Filter

- Real-time search across app titles and descriptions
- Filter by technology stack
- Dynamic results count
- Debounced search input

### Responsive Design

- Mobile-first approach
- Left-aligned timeline on mobile
- Alternating cards on desktop
- Optimized spacing and typography

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.

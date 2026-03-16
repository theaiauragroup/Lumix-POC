# Lumix Studio | Next.js Edition

This is the Lumix Studio website migrated to Next.js.

## Getting Started

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js App Router directory.
- `components/`: Reusable React components.
- `public/`: Static assets (images, videos).
- `app/globals.css`: Global styles migrated from the original design.

## Features Migrated

- **Custom Cursor**: Implemented via `ClientEffects.tsx`.
- **Scroll Reveal**: Interactivity maintained using `IntersectionObserver`.
- **3D Tilt & Magnetic Buttons**: Ported to React for a premium feel.
- **Background Videos**: Fully functional background loops.

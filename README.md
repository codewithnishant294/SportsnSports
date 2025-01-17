# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


//tailwind css

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

//routing
npm install react-router-dom


# Changes made for responsiveness:

Padding adjustments:
Added responsive padding classes (px-4, sm:px-6, lg:px-8) for consistent spacing across devices.
Text sizes:
Used responsive font size classes (text-[36px], sm:text-[52px], etc.) to adjust heading and subheading sizes.
Spacing:
Applied responsive margin and spacing classes (space-y-4, sm:space-y-6) for forms and other elements.
Icon sizes:
Adjusted the sizes of social login icons with responsive width and height classes (w-5, sm:w-6).
Container width:
Set max-w-sm for smaller screens and sm:max-w-md for larger screens to maintain proper proportions.
With these updates, your component should display optimally on all screen sizes.
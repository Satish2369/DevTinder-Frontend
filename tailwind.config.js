import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Include DaisyUI plugin here
  daisyui: {
    themes: ["light", "dark", "cupcake", "emerald", "forest", "business", "valentine"], 
  
  },
};

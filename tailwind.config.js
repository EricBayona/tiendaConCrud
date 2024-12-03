/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: { '50': '12.5rem', // 50 * 0.25rem = 12.5rem (200px)
         '60': '15rem', // 60 * 0.25rem = 15rem (240px) 
         '72': '18rem', // 72 * 0.25rem = 18rem (288px) 
         '80': '20rem', // 80 * 0.25rem = 20rem (320px) 
         '96': '24rem', // 96 * 0.25rem = 24rem (384px) 
         '100': '25rem', // 100 * 0.25rem = 25rem (400px) }
    }
  },
  plugins: [],
}
}
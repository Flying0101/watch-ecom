import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '500px',
      md: '810px',
      lg: '1030px',
      xl: '1520px',
      xxl: '1750px',
      xxxl: '2770px',
    },
    extend: {
      backgroundImage: {
        'custom-image': "url('/content/process.jpg')",
        'cta-image': "url('/content/cta-bg.jpg')",
      },
      boxShadow: {
        white: '10px 0 15px rgba(255, 255, 255, 0.5)',
      },
  },
  },
  plugins: [],
};
export default config;

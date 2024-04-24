import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '810px',
      lg: '1030px',
      xl: '1520px',
      xxl: '1750px',
      xxxl: '2770px',
    },
  },
  plugins: [],
};
export default config;

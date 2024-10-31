import catppuccinTailwind from "@catppuccin/tailwindcss";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [catppuccinTailwind({
    // your plugin configuration
  })],
};

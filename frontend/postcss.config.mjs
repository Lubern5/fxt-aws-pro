// frontend/postcss.config.mjs
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    tailwindcss({
      config: "./tailwind.config.ts", // or .js if you’re using JS
    }),
    autoprefixer,
  ],
};

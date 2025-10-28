// frontend/postcss.config.mjs
import path from "path";

export default {
  plugins: {
    tailwindcss: {
      config: path.resolve("./frontend/tailwind.config.ts"),
    },
    autoprefixer: {},
  },
};

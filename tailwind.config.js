const tailngPreset = require("@tailng-ui/theme/tailwind/tailng.preset.cjs");

module.exports = {
  presets: [tailngPreset],
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/@tailng-ui/ui/**/*.{mjs,js}",
    "./node_modules/@tailng-ui/icons/**/*.{mjs,js}",
  ],
};
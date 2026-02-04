const tailngPreset = require("@tociva/tailng-theme/tailwind/tailng.preset.cjs");

module.exports = {
  presets: [tailngPreset],
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/@tociva/tailng-ui/**/*.{mjs,js}",
    "./node_modules/@tociva/tailng-icons/**/*.{mjs,js}",
  ],
};
// @ts-check

/** @type {import('postcss').Config} */
// IMPORTANT: The file extension MUST be changed to .cjs
// Rename this file locally from 'postcss.config.js' to 'postcss.config.cjs'
module.exports = {
  // Plugins are run in the order they appear here.
  plugins: {
    // 1. Tailwind CSS plugin must be loaded first to recognize @tailwind directives.
    tailwindcss: {},
    // 2. Autoprefixer is typically included after Tailwind to handle vendor prefixes.
    autoprefixer: {},
  },
}

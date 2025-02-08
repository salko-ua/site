import tailwindForms from "@tailwindcss/forms";
import { skeleton, contentPath } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    contentPath(import.meta.url, "svelte"),
  ],

  theme: {
    extend: {
      fontFamily: {
        // from https://systemfontstack.com/
        sans: ["Roboto"],
        serif: [
          '"Iowan Old Style"',
          '"Apple Garamond"',
          "Baskerville",
          '"Times New Roman"',
          '"Droid Serif"',
          "Times",
          '"Source Serif Pro"',
          "serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        mono: [
          "Menlo",
          "Consolas",
          "Monaco",
          '"Liberation Mono"',
          '"Lucida Console"',
          "monospace",
        ],
      },
    },
  },

  plugins: [
    tailwindForms,
    skeleton({
      themes: [themes.concord],
    }),
  ],
};

module.exports = config;

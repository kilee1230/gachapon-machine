import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "festive-red",
      values: [
        {
          name: "festive-red",
          value: "#7f1d1d",
        },
        {
          name: "dark",
          value: "#1a1a1a",
        },
        {
          name: "light",
          value: "#ffffff",
        },
      ],
    },
  },
};

export default preview;

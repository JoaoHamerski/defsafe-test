import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: "#22223B",
        "primary-content": "#F2E9E4",
        secondary: "#4A4E69",
        tertiary: "#C9ADA7",
      },
    },
  },
};

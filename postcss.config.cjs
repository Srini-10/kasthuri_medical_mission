const { nextui } = require("@nextui-org/react");
module.exports = {
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            success: "#34d399",
          },
        },
        dark: {
          colors: {},
        },
      },
    }),
  ],
};

module.exports = {
  plugins: {
    "postcss-preset-mantine": {},
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": "36em",
        "mantine-breakpoint-sm": "48em",
        "mantine-breakpoint-md": "62em",
        "mantine-breakpoint-lg": "75em",
        "mantine-breakpoint-xl": "88em",
      },
    },
  },
};

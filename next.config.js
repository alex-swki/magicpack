/** @type {import('next').NextConfig} */
const path = require("path");

var nextConfig = {};

if (process.env.NEXT_PUBLIC_COLOR_THEME === "DARK") {
  nextConfig = {
    sassOptions: {
      additionalData: `@import "/app/colors.scss";`,
    },
  };
}

if (process.env.NEXT_PUBLIC_COLOR_THEME === "LIGHT") {
  nextConfig = {
    sassOptions: {
      additionalData: `@import "/app/colors.light.scss";`,
    },
  };
}
module.exports = nextConfig;

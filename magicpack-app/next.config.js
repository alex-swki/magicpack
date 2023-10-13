/** @type {import('next').NextConfig} */
var nextConfig = {};

if (process.env.NEXT_PUBLIC_COLOR_THEME == "DARK") {
  console.log("Using Dark Theme");
  nextConfig = {
    sassOptions: {
      additionalData: `@import "/app/colors_dark.scss";@import "/app/breakpoints.scss";`,
    },
  };
}

if (process.env.NEXT_PUBLIC_COLOR_THEME == "LIGHT") {
  console.log("Using Light Theme");
  nextConfig = {
    sassOptions: {
      additionalData: `@import "/app/colors_light.scss";@import "/app/breakpoints.scss";`,
    },
  };
}
module.exports = nextConfig;

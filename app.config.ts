import { ExpoConfig } from "@expo/config-types";

const config: ExpoConfig = {
  name: "my-app111",
  slug: "my-app111",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./src/assets/images/icon.png",
  splash: {
    image: "./src/assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./src/assets/images/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
  },
  web: {
    favicon: "./src/assets/favicon.png",
  },
};

export default config;

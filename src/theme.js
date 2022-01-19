import { Platform } from "react-native";
const os = Platform.OS;
const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#696969",
    textGray: "#909090",
    primary: "#0366d6",
    tabBackground: "#24292e",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: os === "ios" ? "Arial" : os === "android" ? "Roboto" : "System",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;

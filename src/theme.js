import { Platform } from "react-native";
const os = Platform.OS;
const theme = {
  roundness: 5,
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#696969",
    textGray: "#909090",
    primary: "#0366d6",
    tabBackground: "#24292e",
    error: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      ios: "Arial",
      android: "Roboto",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;

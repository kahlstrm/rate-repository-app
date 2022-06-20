import { Platform, TextStyle } from "react-native";

export interface Theme {
  colors: {
    textPrimary: string;
    textSecondary: string;
    primary: string;
    white: string;
    appBarBGColor: string;
    mainBackground: string;
    errorColor: string;
    red: string;
  };
  fontSizes: {
    body: number;
    subheading: number;
    huge: number;
  };
  fonts: {
    main: string;
  };
  fontWeights: {
    normal: TextStyle["fontWeight"];
    bold: TextStyle["fontWeight"];
  };
}

const theme: Theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    white: "white",
    appBarBGColor: "#24292e",
    mainBackground: "lightblue",
    errorColor: "#d73a4a",
    red: "#ff0000",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    huge: 24,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;

import { TextStyle } from "react-native";

export interface Theme {
  colors: {
    textPrimary: string;
    textSecondary: string;
    primary: string;
    white: string;
    appBarBGColor: string;
    mainBackground:string;
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
    mainBackground:"lightblue"
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    huge: 24,
  },
  fonts: {
    main: "System",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;

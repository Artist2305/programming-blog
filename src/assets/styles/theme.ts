import { Colors } from './variables';

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    quoteBackground: string;
  };
}

export const light: Theme = {
  colors: {
    primary: Colors.darkGray,
    secondary: Colors.lightGray,
    quoteBackground: Colors.superLightGray
  }
}
export const dark: Theme = {
  colors: {
    primary: Colors.lightGray,
    secondary: Colors.darkGray,
    quoteBackground: Colors.littleDarkGray
  }
}

export type ThemeType = typeof light | typeof dark;
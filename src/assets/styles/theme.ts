import { Colors } from './variables';

interface Theme {
  colors: {
    primary: string;
    secondary: string;
  };
}

export const light: Theme = {
  colors: {
    primary: Colors.darkGray,
    secondary: Colors.lightGray
  }
}
export const dark: Theme = {
  colors: {
    primary: Colors.darkGray,
    secondary: Colors.lightGray
  }
}

export type ThemeType = typeof light | typeof dark;
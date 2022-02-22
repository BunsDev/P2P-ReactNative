import { DefaultTheme } from '@react-navigation/native';
const theme = {
  colors: {
    primary: '#fc5c65',
    selected: '#eff4f4',
    secondary: '#1ecedc',
    black: '#000',
    white: '#fff',
    medium: '#6e6969',
    light: '#f8f4f4',
    dark: '#0c0c0c',
    divider: '#c3c0c0',
    disabledText: '#bab4b4',
    danger: '#ff5252',
    red: '#FF0000',
  },
  mode: 'dark',
};

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.white,
  },
};

export { theme, navTheme };

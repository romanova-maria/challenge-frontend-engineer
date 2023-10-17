/*
 * Theme is an important part of design system. It should be developed in close collaboration with UI/UX team.
 * Use the same names and structure as designers have, so you can speak the same language with them.
 * Bigger schema can be divided into several files, e.g. colors, components, etc
 * Theme should also contain spacing values, typography and a base section with
 * base font-size, font-color, background-color, etc
 * */

export const MOBILE_SIDE_PADDING = '1rem'; // TODO: should be used as a part of theme spacing values

export const colors = {
  white: '#ffffff', // <- one day the UI/UX team will decide to change this color to "more milky" and you will thank me for that <3
  black: '#000000',
  gray: '#DCDCDCFF',
  theDarkestBlue: '#0277a1',
  red: '#d73434',
  dirtyBlue: '#abccd7',
};
type Colors = Record<keyof typeof colors, string>;
type ColorValue = Colors[keyof typeof colors];

export type Palette = {
  primary: ColorValue;
  danger: ColorValue;
  secondary: ColorValue;
};
export const palette: Palette = {
  primary: colors.dirtyBlue,
  danger: colors.red,
  secondary: colors.gray,
};

type Color = Colors[keyof typeof colors] | Palette;

type Typography = {
  font: {
    size: {
      base: string;
    };
    color: {
      base: Color;
    };
    family: {
      base: string;
    };
  };
};
export const typography: Typography = {
  font: {
    size: {
      base: '14px',
    },
    color: {
      base: colors.black,
    },
    family: {
      base: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    },
  },
};

type Components = {
  button: {
    borderRadius: string;
    colors: {
      primary: Color;
      danger: Color;
      secondary: Color;
    };
    hover: {
      borderColor: Color;
    };
  };
};

const components: Components = {
  button: {
    borderRadius: '8px',
    colors: {
      primary: palette.primary,
      danger: palette.danger,
      secondary: colors.gray,
    },
    hover: {
      borderColor: colors.theDarkestBlue,
    },
  },
};

export interface Theme {
  typography: Typography;
  colors: Record<keyof typeof colors, string>;
  palette: Palette;
  components: Components;
}

const theme: Theme = {
  typography,
  colors,
  palette,
  components,
};

export default theme;

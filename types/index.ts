export interface SvgData {
  text: string;
  date: string;
  theme?: Theme;
}

export const THEMES = ['theme1', 'theme2'] as const;
export type Theme = typeof THEMES[number];

export type CreateSvgFunc = (svgData: SvgData) => string;

export type CreateSvgFuncMap = {
  [key in Theme]: CreateSvgFunc;
};

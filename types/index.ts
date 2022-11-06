export const FORM_ITEM = {
  TEXT: 'text',
  DATE: 'date',
  START_DATE: 'startDate',
  THEME: 'theme',
} as const;

export type FormItem = typeof FORM_ITEM[keyof typeof FORM_ITEM];

export type SvgData = {
  [FORM_ITEM.TEXT]: string;
  [FORM_ITEM.DATE]: string;
  [FORM_ITEM.START_DATE]?: string;
  [FORM_ITEM.THEME]?: Theme;
};

export const THEMES = ['theme1', 'theme2', 'theme3'] as const;
export type Theme = typeof THEMES[number];

export type CreateSvgFunc = (svgData: SvgData) => string;

export type CreateSvgFuncMap = {
  [key in Theme]: CreateSvgFunc;
};

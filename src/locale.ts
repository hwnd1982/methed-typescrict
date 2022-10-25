export const LOCALE_EN = 'en-US';
export const LOCALE_RU = 'ru-RU';

export const LOCALE: {
  readonly RU: 'ru-RU';
  readonly EN: 'en-US';
} = {
  RU: 'ru-RU',
  EN: 'en-US',
}

// конструкция будет объяснена позднее...
export type localeOMG = typeof LOCALE[keyof typeof LOCALE];

export enum locale {
  RU = 'ru-RU',
  EN = 'en-US',
}
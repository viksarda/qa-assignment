export interface Translation {
  searchButton: string;
  getLuckyButton: string;
}

export const slovenia: Translation = {
  searchButton: 'Iskanje Google',
  getLuckyButton: 'Klik na srečo',
};

export const malta: Translation = {
  searchButton: 'Fittex bil-Google',
  getLuckyButton: 'Inhossni Xxurtjat',
};

export const translations: Record<string, Translation> = {
  'sl-SI': slovenia,
  'mt-MT': malta,
};

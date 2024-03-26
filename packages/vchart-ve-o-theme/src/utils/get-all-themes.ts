import type { ITheme, IThemeColorScheme } from '@visactor/vchart';
import { specialDataScheme } from '../common/data-scheme';

export const getAllThemes = (baseTheme: ITheme, getColorScheme: (colors: string[]) => IThemeColorScheme) =>
  [baseTheme].concat(
    Object.keys(specialDataScheme).map(key => {
      const name = `${baseTheme.name}${key[0].toUpperCase()}${key.slice(1)}`;
      return {
        ...baseTheme,
        name,
        description: `${baseTheme.description} - ${specialDataScheme[key].name}`,
        colorScheme: getColorScheme(specialDataScheme[key].colors)
      } as ITheme;
    })
  );

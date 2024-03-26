/**
 * 导出全量 theme json
 */
import fs from 'fs';
import path from 'path';
import { ThemeManager } from '@visactor/vchart';
import { allThemeMap } from '../src';
import { allThemeMap as semiAllThemeMap } from '@visactor/vchart-semi-theme';
import { allThemeMap as arcoAllThemeMap } from '@visactor/vchart-arco-theme';
import { allThemeMap as ttPlatformAllThemeMap } from '@visactor/vchart-tt-platform-theme';
import { allThemeMap as veOAllThemeMap } from '@visactor/vchart-ve-o-theme/cjs/theme-map';

const VCHART_THEME_PROJECT_ROOT = process.cwd();
const targetPaths = [path.resolve(VCHART_THEME_PROJECT_ROOT, './public')];
const allMaps = [
  ThemeManager.themes,
  allThemeMap,
  semiAllThemeMap,
  arcoAllThemeMap,
  ttPlatformAllThemeMap,
  veOAllThemeMap
];

const result: string[] = [];
allMaps.forEach(themeMap =>
  themeMap.forEach((value, key) => {
    let success = true;
    if (!ThemeManager.themeExist(key)) {
      ThemeManager.registerTheme(key, value);
    }
    const theme = ThemeManager.getTheme(key);
    const themeJson = JSON.stringify(theme);
    targetPaths.forEach(targetPath => {
      try {
        const fileName = path.resolve(targetPath, `${key}.json`);
        if (fs.existsSync(fileName)) {
          fs.unlinkSync(fileName);
        }
        fs.writeFileSync(path.resolve(targetPath, `${key}.json`), themeJson);
      } catch {
        success = false;
      }
    });
    if (success) {
      result.push(key);
    }
  })
);

// 自动更新 readme
const readmePath = path.resolve(VCHART_THEME_PROJECT_ROOT, './README.md');
const readme = fs.readFileSync(readmePath, 'utf8');
const startTag = '<!-- ThemeListBegin -->';
const endTag = '<!-- ThemeListEnd -->';
const readmeThemeListStart = readme.indexOf(startTag) + startTag.length;
const readmeThemeListEnd = readme.indexOf(endTag);
const newReadme = `${readme.slice(0, readmeThemeListStart)}\n<!-- 以下为自动生成 -->\n${allMaps
  .reduce<string[]>((list, map) => {
    [...map.keys()].forEach(key => {
      if (!list.includes(key)) {
        list.push(key);
      }
    });
    return list;
  }, [])
  .map(
    key =>
      `- [${key}](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-theme/public/${key}.json) ${
        ThemeManager.getTheme(key)?.description ?? ''
      }`
  )
  .join('\n')}\n<!-- 以上为自动生成 -->\n${readme.slice(readmeThemeListEnd)}`;
fs.writeFileSync(readmePath, newReadme);

console.warn(`\x1B[33m
  主题 ${result.join(', ')} 已导出
\x1B[0m`);

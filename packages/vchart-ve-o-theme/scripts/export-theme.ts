/**
 * 导出全量 theme json
 */
import fs from 'fs';
import path from 'path';
import { ThemeManager } from '@visactor/vchart';
import { allThemeMap } from '../src';

const VCHART_THEME_PROJECT_ROOT = process.cwd();
const targetPaths = [path.resolve(VCHART_THEME_PROJECT_ROOT, './public')];

const result: string[] = [];
allThemeMap.forEach((value, key) => {
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
});

// 自动更新 readme
const readmePath = path.resolve(VCHART_THEME_PROJECT_ROOT, './README.md');
const readme = fs.readFileSync(readmePath, 'utf8');
const startTag = '<!-- ThemeListBegin -->';
const endTag = '<!-- ThemeListEnd -->';
const readmeThemeListStart = readme.indexOf(startTag) + startTag.length;
const readmeThemeListEnd = readme.indexOf(endTag);
const newReadme = `${readme.slice(0, readmeThemeListStart)}\n<!-- 以下为自动生成 -->\n${[...allThemeMap.keys()]
  .map(
    key =>
      `- [${key}](https://raw.githubusercontent.com/VisActor/vchart-theme/main/packages/vchart-ve-o-theme/public/${key}.json) ${
        allThemeMap.get(key)?.description ?? ''
      }`
  )
  .join('\n')}\n<!-- 以上为自动生成 -->\n${readme.slice(readmeThemeListEnd)}`;
fs.writeFileSync(readmePath, newReadme);

console.warn(`\x1B[33m
  主题 ${result.join(', ')} 已导出
\x1B[0m`);

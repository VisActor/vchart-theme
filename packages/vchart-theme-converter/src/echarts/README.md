## VChart Theme

### name?: string;

主题名称，无需转换

### description?: string;

主题描述，无需转换

### type?: 'light' | 'dark';

亮色主题 or 暗色主题，作用含义不明，暂不转换

### background?: string | IGradientColor | IColorKey;

图表背景色

### padding?: ILayoutPaddingSpec;

图表 padding

### fontFamily?: string | ITokenKey;

全局字体

### token?: TokenMap;

样式 token

### colorScheme?: IThemeColorScheme;

离散色板

### mark?: IGlobalMarkThemeByType;

以图元类型，配置图元样式

### markByName?: IGlobalMarkThemeByName;

以图元名称，配置图元样式

### series?: ISeriesTheme;

系列配置

### animationThreshold?: number;

停用动画的数据量阈值

### component?: IComponentTheme;

组件配置

import './style/global.less';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConfigProvider } from '@arco-design/web-react';
import zhCN from '@arco-design/web-react/es/locale/zh-CN';
import enUS from '@arco-design/web-react/es/locale/en-US';
import rootReducer from './store';
import PageLayout from './layout';
import { GlobalContext } from './context';
import changeTheme from './utils/changeTheme';
import useStorage from './utils/useStorage';

const store = createStore(rootReducer);

function Index() {
  const [lang, setLang] = useStorage('arco-lang', 'en-US');
  const [theme, setTheme] = useStorage('arco-theme', 'light');

  function getArcoLocale() {
    switch (lang) {
      case 'zh-CN':
        return zhCN;
      case 'en-US':
        return enUS;
      default:
        return zhCN;
    }
  }

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  const contextValue = {
    lang,
    setLang,
    theme,
    setTheme,
  };

  return (
    <ConfigProvider
      locale={getArcoLocale()}
      componentConfig={{
        Card: {
          bordered: false,
        },
        List: {
          bordered: false,
        },
        Table: {
          border: false,
        },
      }}
    >
      <Provider store={store}>
        <GlobalContext.Provider value={contextValue}>
          <PageLayout />
        </GlobalContext.Provider>
      </Provider>
    </ConfigProvider>
  );
}

const dom = document.querySelector('#root');
const root = createRoot(dom);
root.render(<Index />);

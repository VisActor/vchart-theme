import React from 'react';
import { Layout, Spin } from '@arco-design/web-react';
import cs from 'classnames';
import { useSelector } from 'react-redux';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import useLocale from './utils/useLocale';
import { GlobalState } from './store';
import styles from './style/layout.module.less';
import Workplace from './pages/dashboard/workplace';

const Content = Layout.Content;

function PageLayout() {
  const { settings, userLoading } = useSelector((state: GlobalState) => state);

  const navbarHeight = 60;

  const showNavbar = settings.navbar;
  const showFooter = settings.footer;

  const paddingLeft = {};
  const paddingTop = showNavbar ? { paddingTop: navbarHeight } : {};
  const paddingStyle = { ...paddingLeft, ...paddingTop };

  return (
    <Layout className={styles.layout}>
      <div
        className={cs(styles['layout-navbar'], {
          [styles['layout-navbar-hidden']]: !showNavbar,
        })}
      >
        <Navbar show={showNavbar} />
      </div>
      {userLoading ? (
        <Spin className={styles['spin']} />
      ) : (
        <Layout>
          <Layout className={styles['layout-content']} style={paddingStyle}>
            <div className={styles['layout-content-wrapper']}>
              <Content>
                <Workplace />
              </Content>
            </div>
            {showFooter && <Footer />}
          </Layout>
        </Layout>
      )}
    </Layout>
  );
}

export default PageLayout;

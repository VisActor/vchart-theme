import React from 'react';
import { Nav, Avatar } from '@douyinfe/semi-ui';
import { IconFeishuLogo, IconHelpCircle, IconBell } from '@douyinfe/semi-icons';
import styles from './index.module.less';
import Charts from './charts.jsx';

const Frame = () => {
  return (
    <div className={styles.rootSidenav}>
      <Nav
        mode="horizontal"
        header={{
          text: 'ChartHub Templates'
        }}
        footer={
          <div className={styles.dIV}>
            <IconFeishuLogo size="large" className={styles.semiIconsFeishuLogo} />
            <IconHelpCircle size="large" className={styles.semiIconsHelpCircle} />
            <IconBell size="large" className={styles.semiIconsBell} />
            <Avatar
              size="small"
              src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/avatarDemo.jpeg"
              color="blue"
              className={styles.avatar}
            >
              示例
            </Avatar>
          </div>
        }
        className={styles.nav}
      ></Nav>
      <div className={styles.main}>
        <div className={styles.right}>
          <div className={styles.frame1321317607}>
            <Charts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;

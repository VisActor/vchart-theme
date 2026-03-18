import React, { useState } from 'react';
import { Nav, Avatar } from '@douyinfe/semi-ui';
import { IconSemiLogo, IconFeishuLogo, IconHelpCircle, IconBell } from '@douyinfe/semi-icons';
import styles from './index.module.scss';
import Charts from './charts.jsx';
import { chartCategories, getChartsByCategory } from './chart-list';

const Frame = () => {
  const [selectedKey, setSelectedKey] = useState('bar');

  const currentCharts = getChartsByCategory(selectedKey);

  const getCategoryTitle = key => {
    const category = chartCategories.find(c => c.key === key);
    return category ? category.title : '图表展示';
  };

  return (
    <div className={styles.rootSidenav}>
      <Nav
        mode="horizontal"
        header={{
          logo: (
            <div className={styles.navigationHeaderLogo}>
              <IconSemiLogo className={styles.semiIconsSemiLogo} />
            </div>
          ),
          text: 'VChart Aurora Theme'
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
        <Nav
          mode="vertical"
          footer={{ collapseButton: true }}
          className={styles.left}
          selectedKeys={[selectedKey]}
          onSelect={data => setSelectedKey(data.itemKey)}
        >
          <Nav.Item itemKey="pie" text="饼图" className={styles.navItem3} />
          <Nav.Item itemKey="bar" text="柱状图" className={styles.navItem} />
          <Nav.Item itemKey="area" text="面积图" className={styles.navItem2} />
          <Nav.Item itemKey="line" text="折线图" className={styles.navItem1} />

          {/* <Nav.Item itemKey="radar" text="雷达图" className={styles.navItem4} />
          <Nav.Item itemKey="funnel" text="漏斗图" className={styles.navItem5} /> */}
        </Nav>
        <div className={styles.right}>
          <p className={styles.item}>{getCategoryTitle(selectedKey)}</p>
          <div className={styles.frame1321317607}>
            <Charts charts={currentCharts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;

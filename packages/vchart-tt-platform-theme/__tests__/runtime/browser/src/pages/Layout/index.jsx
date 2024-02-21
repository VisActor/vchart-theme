import React from 'react';
import { Nav, Layout } from '@douyinfe/semi-ui';
import { IconStar } from '@douyinfe/semi-icons';
import Chart from '../Chart';
import Logo from '../logo';
import './index.css';

function App() {
  // Set up Layout's elements
  const { Header, Sider } = Layout;

  return (
    <div className="App">
      <Layout className="components-layout-demo">
        <Sider className="sideNav">
          {/* 绘制导航 */}
          <Nav
            defaultOpenKeys={['chart']}
            defaultSelectedKeys={['chart']}
            items={[{ itemKey: 'chart', text: 'Chart', icon: <IconStar /> }]}
            header={{
              logo: <Logo />
            }}
            footer={{
              collapseButton: true
            }}
          />
        </Sider>
        <Layout className="mainContent">
          <Chart />
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

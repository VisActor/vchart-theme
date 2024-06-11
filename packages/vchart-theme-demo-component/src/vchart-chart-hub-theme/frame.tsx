import React from 'react';
import { Nav, Avatar } from '@douyinfe/semi-ui';
import { IconFeishuLogo, IconHelpCircle, IconBell } from '@douyinfe/semi-icons';
import './style/style';
import Charts from './charts.jsx';

const Frame = () => {
  return (
    <div className="rootSidenav">
      <Nav
        mode="horizontal"
        header={{
          text: 'ChartHub Templates'
        }}
        footer={
          <div className="dIV">
            <IconFeishuLogo size="large" className="semiIconsFeishuLogo" />
            <IconHelpCircle size="large" className="semiIconsHelpCircle" />
            <IconBell size="large" className="semiIconsBell" />
            <Avatar
              size="small"
              src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/avatarDemo.jpeg"
              color="blue"
              className="avatar"
            >
              示例
            </Avatar>
          </div>
        }
        className="nav"
      ></Nav>
      <div className="main">
        <div className="right">
          <div className="frame1321317607">
            <Charts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;

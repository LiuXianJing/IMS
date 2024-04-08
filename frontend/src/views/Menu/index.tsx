import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate, } from 'react-router-dom'
import './index.less'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dash Board Overview', 'dash_board_overview', <MailOutlined />),
  getItem('Issues Table', 'query_table', <MailOutlined />),
  getItem('Technology', 'technology', <MailOutlined />, [
    getItem('Frontend', 'frontend', <MailOutlined />, 
    [getItem('Frame', 'frame'), getItem('Programming Language', 'programming_language'), getItem('Websites', 'websites'),],),
  ]),

  getItem('AIGC', 'aigc', <AppstoreOutlined />, [
    getItem('Introduction', 'introduction'),
    getItem('Business Layout', 'business_layout'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),

  getItem('Entertainment', 'entertainment', <SettingOutlined />, [
    getItem('Character Introduction', 'character_introduction'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
    getItem('Record Video', 'record_vodeo'),
  ]),

  getItem('Foods', 'foods', <SettingOutlined />, [
    getItem('Milk Powder', 'milk_powder'),
  ]),

  getItem('About', 'about', <SettingOutlined />, [
    getItem('Me', 'me'),
    getItem('IMS', 'ims'),
  ]),

  getItem('User Management', 'user-management', <SettingOutlined />)
];

const ProMenu = () => {

    const navigate = useNavigate()

    const onClick: MenuProps['onClick'] = (e) => {
        const path: string = e.keyPath.reverse().join('/')
        navigate(path)
    };

    return <div className="menu-container">
        <Menu 
        mode="inline" 
        items={items}
        onClick={onClick} 
        style={{ width: '100%', height: '100%' }} 
        />
    </div>
}

export default ProMenu
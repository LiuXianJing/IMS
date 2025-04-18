[English](/README.md) | [中文](/README_zh-CN.md) | [Japanese](/README_ja-JP.md) | [German](/README_de.md)

<div align="center">
<img src="https://gw.alipayobjects.com/zos/rmsportal/LyTPSGknLUlxiVdwMWyu.gif" height="150" />
</div>

# Introduction
- IMS is Integrated management system.
- IMS is a project that separates the front and back ends.
- frontend: React.
- backend: Python.
```
Note: Commercial use of this project code is prohibited
```

# Features
- Login and Registration, 
    <img src="./frontend//src//assets/images/pages/sign.png" />
- AIGC, 
    <img src="./frontend//src//assets/images/pages/AIGC_business_layout.png" />
    <img src="./frontend//src//assets/images/pages/AIGC_business_layout_add.png" />
- Dashboard, 
    <img src="./frontend//src//assets/images/pages/dash.png" />
- Entertainment, 
    <img src="./frontend//src//assets/images/pages/e_c.png" />
- Food, 
    <img src="./frontend//src//assets/images/pages/milk.png" />
- Question List, 
    <img src="./frontend//src//assets/images/pages/issues.png" />
- Record Video, 
    <img src="./frontend//src//assets/images/pages/record_video.png" />
- About, 
- User Management, 
    <img src="./frontend//src//assets/images/pages/user_management.png" />
- IP information management,
- Large visualization screen,
    <img src="./frontend//src//assets/images/pages/vusual.png" />
- Chat conversations,
    <img src="./frontend//src//assets/images/pages/chat.png" />
- Play music,
- Game,
- Visual operation, multi-functional collection,
- Other Components
  Water Mark

# Warehouse Address
- [gitee](https://gitee.com/xian-jin/IMS)
- [github](https://github.com/LiuXianJing/IMS)

# Run Project
## frontend
```bash
pnpm i
```
```bash
pnpm run dev
```
## bcakend
```bash
pip install flask
```
```bash
pip install flask-mysqldb
```
```bash
pip install -U flask-cors
```
```bash
pip install jwt
```

### run server
```bash
flask run
```

# Technology Stack
## frontend
<table>
    <thead>
        <th>Technology</th><th>Version</th>
    </thead>
    <tbody>
        <tr>
            <td>react</td><td>18.2.0</td>
        </tr>
        <tr>
            <td>typescript</td><td>5.2.2</td>
        </tr>
        <tr>
            <td>react-redux</td><td>9.1.0</td>
        </tr>
        <tr>
            <td>@reduxjs/toolkit</td><td>2.2.3</td>
        </tr>
        <tr>
            <td>react-router-dom</td><td>6.22.3</td>
        </tr>
        <tr>
            <td>axios</td><td>1.6.8</td>
        </tr>
        <tr>
            <td>vite</td><td>5.2.0</td>
        </tr>
        <tr>
            <td>antd</td><td>5.16.0</td>
        </tr>
        <tr>
            <td>echarts</td><td>5.5.0</td>
        </tr>
        <tr>
            <td>less</td><td>4.2.0</td>
        </tr>
        <tr>
            <td>node.js</td><td>20.11.1</td>
        </tr>
        <tr>
            <td>pnpm</td><td>8.7.6</td>
        </tr>
    </tbody>
</table>

## backend
<table>
    <thead>
        <th>Technology</th><th>Version</th>
    </thead>
    <tbody>
        <tr>
            <td>Python</td><td>3.11.3</td>
        </tr>
        <tr>
            <td>Flask</td><td>3.0.2</td>
        </tr>
        <tr>
            <td>MySQL</td><td>8.0.32</td>
        </tr>
    </tbody>
</table>

# Project FIles Tree

```
IMS
├─ backend
│  ├─ app.py
│  ├─ application.py
│  ├─ db
│  │  ├─ chat.sql
│  │  ├─ users.sql
│  │  └─ visual_list.sql
│  ├─ db.py
│  ├─ README.md
│  ├─ routes
│  │  ├─ chat.py
│  │  ├─ ip_info.py
│  │  ├─ users.py
│  │  ├─ visual_list.py
│  │  └─ __pycache__
│  │     ├─ chat.cpython-311.pyc
│  │     ├─ ip_info.cpython-311.pyc
│  │     ├─ users.cpython-311.pyc
│  │     └─ visual_list.cpython-311.pyc
│  ├─ util
│  │  ├─ get_ip_info.py
│  │  ├─ token.py
│  │  └─ __pycache__
│  │     ├─ get_ip_info.cpython-311.pyc
│  │     └─ token.cpython-311.pyc
│  └─ __pycache__
│     ├─ app.cpython-311.pyc
│     ├─ application.cpython-311.pyc
│     └─ db.cpython-311.pyc
├─ frontend
│  ├─ .eslintrc.cjs
│  ├─ index.html
│  ├─ package.json
│  ├─ pnpm-lock.yaml
│  ├─ public
│  │  └─ vite.svg
│  ├─ README.md
│  ├─ src
│  │  ├─ api
│  │  │  ├─ axios.ts
│  │  │  ├─ index.ts
│  │  │  └─ request
│  │  │     ├─ chat.ts
│  │  │     ├─ ip.ts
│  │  │     ├─ list.ts
│  │  │     └─ sign.ts
│  │  ├─ App.less
│  │  ├─ App.tsx
│  │  ├─ assets
│  │  │  ├─ audio
│  │  │  │  └─ majestic_music.mp3
│  │  │  ├─ images
│  │  │  │  ├─ background
│  │  │  │  │  └─ grasslandScenery.jpg
│  │  │  │  ├─ logo
│  │  │  │  │  └─ technology
│  │  │  │  │     └─ mdn.png
│  │  │  │  └─ pages
│  │  │  │     ├─ AIGC_business_layout.png
│  │  │  │     ├─ AIGC_business_layout_add.png
│  │  │  │     ├─ chat.png
│  │  │  │     ├─ dash.png
│  │  │  │     ├─ e_c.png
│  │  │  │     ├─ issues.png
│  │  │  │     ├─ milk.png
│  │  │  │     ├─ record_video.png
│  │  │  │     ├─ sign.png
│  │  │  │     ├─ user_management.png
│  │  │  │     └─ vusual.png
│  │  │  └─ react.svg
│  │  ├─ components
│  │  │  ├─ Chat
│  │  │  │  ├─ index.less
│  │  │  │  └─ index.tsx
│  │  │  ├─ GraphglGpuLayout
│  │  │  │  ├─ index.less
│  │  │  │  └─ index.tsx
│  │  │  ├─ MultifunctionalInput
│  │  │  │  ├─ index.less
│  │  │  │  └─ index.tsx
│  │  │  ├─ MyInput
│  │  │  │  ├─ index.less
│  │  │  │  └─ index.tsx
│  │  │  ├─ MyList
│  │  │  │  ├─ index.less
│  │  │  │  └─ index.tsx
│  │  │  ├─ SummaryGraph
│  │  │  │  ├─ index.less
│  │  │  │  └─ index.tsx
│  │  │  ├─ SwitchLanguageButton
│  │  │  │  ├─ index.less
│  │  │  │  └─ index.tsx
│  │  │  └─ Video
│  │  │     ├─ index.less
│  │  │     └─ index.tsx
│  │  ├─ hooks
│  │  │  ├─ index.tsx
│  │  │  └─ reduxHook.ts
│  │  ├─ index.css
│  │  ├─ main.tsx
│  │  ├─ store
│  │  │  ├─ index.tsx
│  │  │  └─ slices
│  │  │     ├─ AIGCMechanismSlice.ts
│  │  │     ├─ index.tsx
│  │  │     └─ signSlice.ts
│  │  ├─ types
│  │  │  ├─ aigc.ts
│  │  │  ├─ chat.ts
│  │  │  ├─ entertainment.ts
│  │  │  ├─ foods.ts
│  │  │  ├─ index.ts
│  │  │  ├─ list.ts
│  │  │  ├─ otherInfo.ts
│  │  │  ├─ sign.ts
│  │  │  ├─ technology.ts
│  │  │  └─ user.ts
│  │  ├─ utils
│  │  │  ├─ aigc.ts
│  │  │  ├─ eventBus.ts
│  │  │  ├─ index.ts
│  │  │  ├─ playMusic.ts
│  │  │  └─ sign.ts
│  │  ├─ views
│  │  │  ├─ About
│  │  │  │  ├─ AboutIMS
│  │  │  │  │  ├─ index.less
│  │  │  │  │  └─ index.tsx
│  │  │  │  └─ AboutMe
│  │  │  │     ├─ index.less
│  │  │  │     └─ index.tsx
│  │  │  ├─ AIGC
│  │  │  │  ├─ BusinessLayout
│  │  │  │  │  ├─ AddModal
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  ├─ inex.less
│  │  │  │  │  ├─ MechanismDataForm
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  └─ MechanismTable
│  │  │  │  │     └─ index.tsx
│  │  │  │  └─ Introduction
│  │  │  │     └─ index.tsx
│  │  │  ├─ ChatChat
│  │  │  │  ├─ index.less
│  │  │  │  └─ index.tsx
│  │  │  ├─ DashBoard
│  │  │  │  └─ Overview
│  │  │  │     ├─ index.less
│  │  │  │     └─ index.tsx
│  │  │  ├─ Entertainment
│  │  │  │  └─ CharacterIntroduction
│  │  │  │     ├─ index.less
│  │  │  │     └─ index.tsx
│  │  │  ├─ Foods
│  │  │  │  └─ MilkPowder
│  │  │  │     └─ index.tsx
│  │  │  ├─ Header
│  │  │  │  ├─ index.less
│  │  │  │  └─ index.tsx
│  │  │  ├─ IpInfo
│  │  │  │  └─ index.tsx
│  │  │  ├─ Menu
│  │  │  │  ├─ index.less
│  │  │  │  └─ index.tsx
│  │  │  ├─ Other
│  │  │  │  ├─ index.less
│  │  │  │  └─ index.tsx
│  │  │  ├─ QueryTable
│  │  │  │  └─ index.tsx
│  │  │  ├─ RecordVideo
│  │  │  │  ├─ index.less
│  │  │  │  └─ index.tsx
│  │  │  ├─ SignInOrUp
│  │  │  │  ├─ index.less
│  │  │  │  └─ index.tsx
│  │  │  ├─ Technology
│  │  │  │  └─ Frontend
│  │  │  │     ├─ Frame
│  │  │  │     │  └─ index.tsx
│  │  │  │     ├─ ProgrammingLanguage
│  │  │  │     │  └─ index.tsx
│  │  │  │     └─ Websites
│  │  │  │        ├─ index.less
│  │  │  │        └─ index.tsx
│  │  │  ├─ UsersManagement
│  │  │  │  ├─ EditUserModal
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ index.less
│  │  │  │  └─ index.tsx
│  │  │  └─ VisualLargeScreen
│  │  │     ├─ CustomData
│  │  │     │  ├─ index.less
│  │  │     │  └─ index.tsx
│  │  │     ├─ GaugeData
│  │  │     │  ├─ index.less
│  │  │     │  └─ index.tsx
│  │  │     ├─ index.less
│  │  │     └─ index.tsx
│  │  └─ vite-env.d.ts
│  ├─ tsconfig.json
│  ├─ tsconfig.node.json
│  └─ vite.config.ts
├─ LICENSE
├─ README.md
├─ README_de.md
├─ README_ja-JP.md
└─ README_zh-CN.md

```

[English](/README.md) | [中文](/README_zh-CN.md) | [Japanese](/README_ja-JP.md) | [German](/README_de.md)

# 導入
- IMS は統合管理システムです。
- IMS はフロントエンドとバックエンドを分離したプロジェクトです。
- フロントエンド: React。
- バックエンド: Python。
```
注：このプロジェクトコードの商用利用は禁止されています
```

# 特徴
- ログインと登録、AIGC、ダッシュボード、エンターテイメント、食べ物、質問リスト、ビデオ録画、概要、ユーザー管理
- 視覚的な操作、多機能なコレクション

# 倉庫リンク
- [gitee](https://gitee.com/xian-jin/IMS)
- [github](https://github.com/LiuXianJing/IMS)

# プロジェクトの実行
## フロントエンド
```bash
pnpm i
```
```bash
pnpm run dev
```
## バックエンド
```bash
pip install flask
```
```bash
pip install flask-mysqldb
```
```bash
pip install -U flask-cors
```
### サーバーを実行する
```bash
flask run
```

# テクノロジースタック
## フロントエンド
<table>
    <thead>
        <th>テクノロジー</th><th>バージョン</th>
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
## バックエンド
<table>
    <thead>
        <th>テクノロジー</th><th>バージョン</th>
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
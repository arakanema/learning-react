# Reactのメモ

## 開発前の準備もろもろ

cssのクラス名をモジュールとして使うために
```npm
npm run eject
```

/config 以下の dev と prod の 'css-loader' に設定を追加
```js
modules: true,
localIdentName: '[name]__[local]__[hash:base64:5]',
```
これで名前が被ることが無い、かつ、import classes from 'hoge.css' で割当が可能になる
```react
// App.js
<div classes.Hoge></div>
// App.css
.Hoge { color: #fff; }
```

## ディレクトリ構造
- ２つのディレクトリ
    - src/components
        - ステートレスのコンポーネント = functional component
        - const で作って props を渡す
    - src/containers
        - 基本的にステートフルのコンポーネントを入れる
        - class で作って state を管理
        − setStateメソッドで state を変更していく

## hoc と Aux を使う
- ラッピングするために利用
- hoc ▶ Higher Order Component
- Aux ▶ auxiliary（補助）
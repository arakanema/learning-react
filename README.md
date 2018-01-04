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
これで名前がカブらずcssをモジュールとしてclassNameに割当できる
```js
import classes from 'App.css';
// App.js
<div className={classes.Hoge}></div>
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

## 基本的なこと
class内で this を使えるのはアロー関数の時のみ。  
意外とハマるかもしれないので注意!
```js
const hoge = (props) => {
  return this.props.fugafuga ? 'fuga' : 'hoge';
}
```

## 書く時の考え方
コンポーネントが増えると見通しが悪くなるような印象があるが、実はそんなことは無い。

データはステートフルなコンテナからステートレスなコンポーネントへ、
コンポーネントの動きは、コンポーネント側から遡ってコンテナ内に定義する。

この決まり事を守っている限りは、それなりの規模でもソースを追いやすい✨


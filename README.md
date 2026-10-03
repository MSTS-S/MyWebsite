# MyWebsite
This is the package of my website. All previously released versions are managed by each branch.
<br><br>



## 概要
こちらは，私自身が公開している[webサイト](https://msts-hp.com/)のパッケージに関するリリースノート及び使用方法となっています．branchの名前に含まれる日付が更新日と対応しており，過去の全ての公開バージョンがここから確認することができます．なお，本Webサイトではホスティングサービスとして[firebase](https://firebase.google.com/?hl=ja)を使用しています．バックエンド開発をサポートするプラットフォームであるfirebaseを用いてWebサイトのホスティングを行うと，SSLが自動的に提供されるため，その更新手続きが不必要であるという利点があります．
<br>

公開しているWebサイトは2023年10月16日に初めてデプロイしました．なお，開発当初はWebサイトのTemplateが公開されている[サイト](https://html5up.net/)からTemplateをダウンロード後，編集を加え，公開していました．

<br><br>



## 使用方法
ここでは，本projectの使用方法を順を追って説明します．

**1. repositoryのclone**
  - 作業directoryに遷移後，以下のコマンドでlocal repositoryにcloneしてください．
  ```
  git clone https://github.com/MSTS-S/MyWebsite.git
  ```
  - 特定のbranchをcloneしたい場合には以下のコマンドでcloneしてください([]は消すこと)．
  ```
  git clone -b [branch name] https://github.com/MSTS-S/MyWebsite.git
  ```

**2. node_moduleのinstall**
  - root dirctoryに遷移してください．本projectの場合，MyWebsiteがroot directoryです．
  - 遷移後，Node.jsプロジェクトで使用する依存パッケージのinstallを以下のコマンドで行ってください．
  ```
  npm install
  ```

**3. Visual Studioの起動**
  - 手順2が終了後，cmdからVisual Studioの起動を行ってください．
  ```
  code .
  ```

**4. local serverの立ち上げ**
  - Visual Studio起動後，以下のショートカットキーをたたき，Terminalを開いてください．
  ```
  CTRL + @
  ```
  - terminalを開いた後，以下のコマンドをたたきlocal serverを立ち上げてください．
  ```
  npm start
  ```
<br><br>

## ファイル構成
ここでは，本Projectのファイルツリーを記載しています．

<br>

<pre>
├── node_modules /...
├── public /
│   ├── Unity /...      #Unity Projectで用いられるアプリファイル
│   ├── favicon.ico     
│   ├── Logo.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components /
│   │   ├── img /       # Header image
│   │   ├── Section_AcademicResearch /
│   │   │   ├── AcademicResearch.jsx
│   │   │   ├── PublicationData.jsx
│   │   │   └── PublicationList.jsx
│   │   ├── Section_History /
│   │   │   ├── History.jsx
│   │   │   ├── HistoryStyleComponent.css
│   │   │   └── HistoryStyleComponent.jsx
│   │   ├── Section_LinkContact /
│   │   │   ├── Discord.png
│   │   │   └── LinkContact.jsx
│   │   ├── Section_Profile /
│   │   │   ├── Profile.css
│   │   │   ├── Profile.jsx
│   │   │   ├── ProfilePicture1.jpg
│   │   │   └── ProfilePicture2.jpg
│   │   ├── Section_Programing /
│   │   │   ├── img /...
│   │   │   ├── Priograming.jsx
│   │   │   ├── ProgramingCardStyle.css
│   │   │   └── ProgramingCardStyle.jsx
│   │   ├── Section_Qualification /
│   │   │   ├── Qualification.jsx
│   │   │   ├── QualificationStyleComponent.css
│   │   │   └── QualificationStyleComponent.jsx
│   │   ├── Section_Unity /
│   │   │   ├── img /...
│   │   │   ├── Unity.jsx
│   │   │   ├── UnityCardComponent.css
│   │   │   └── UnityCardComponent.jsx
│   │   ├── Hyperlink.css
│   │   ├── Section_Title.css
│   ├── functions /
│   │   ├── LoginForm /
│   │   │   ├── LoginForm.css
│   │   │   └── LoginForm.jsx
│   │   ├── QRCodeGenerator /
│   │   │   ├── QRCodeGenerator.css
│   │   │   └── QRCodeGenerator.jsx
│   │   └── ReactFunctionContentsStyle.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── index.jsx       # エントリーポイント
├── .firebaserc
├── .gitattributes
├── .gitignore
├── .firebase.json
├── index.html          # メインのHTMLファイル（Viteではroot directoryに置く）
├── LICENSE.txt
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js      # Viteの設定ファイル
</pre>

<br><br>



## 脆弱性について
package.json中でreact-scriptsを指定すると，依存関係にあるファイルとしてnth-checkがinstallされます．versionを指定せずにinstallされたnth-checkには脆弱性が発見されていました．
```
C:\WorkSpace>npm audit
# npm audit report

nth-check  <2.0.1
Severity: high
Inefficient Regular Expression Complexity in nth-check - https://github.com/advisories/GHSA-rp65-9cf3-cjxr
fix available via `npm audit fix --force`
Will install @svgr/plugin-svgo@8.1.0, which is a breaking change
node_modules/@svgr/plugin-svgo/node_modules/nth-check
  css-select  <=3.1.0
  Depends on vulnerable versions of nth-check
  node_modules/@svgr/plugin-svgo/node_modules/css-select
    svgo  1.0.0 - 1.3.2
    Depends on vulnerable versions of css-select
    node_modules/@svgr/plugin-svgo/node_modules/svgo
      @svgr/plugin-svgo  <=5.5.0
      Depends on vulnerable versions of svgo
      node_modules/@svgr/plugin-svgo
        @svgr/webpack  4.0.0 - 5.5.0
        Depends on vulnerable versions of @svgr/plugin-svgo
        node_modules/@svgr/webpack
          react-scripts  >=2.1.4
          Depends on vulnerable versions of @svgr/webpack
          Depends on vulnerable versions of resolve-url-loader
          node_modules/react-scripts
```

この脆弱性に対処するため，package.jsonで依存パッケージの特定のバージョンを強制的に使用するようにする必要があります．以前はyarnのresolutionsフィールドで対応していましたが，npm（v8.3以降）ではoverridesフィールドで同じことができるため，現在はnpmに移行しています．

```
"overrides": {
    "nth-check": "^2.1.1",
  },
```

そこで，このoverridesフィールドをpackage.jsonに追加し，npm installを再び行えば脆弱性は消去されます．

ただし，react-scripts（Create React App）は2025年2月に非推奨となり更新が止まったため，react-scriptsが内部で古いバージョンに固定しているパッケージ（webpack-dev-server等）の脆弱性はoverridesでは解消できなくなりました．そこで，2026年10月にビルドツールをreact-scriptsからViteへ移行しました．これによりreact-scripts由来の脆弱性は全て解消され（npm auditで0件），overridesフィールドやtypescriptの固定も不要になっています．


> **※余談ですが・・・**
> 
> nth-checkに対する脆弱性がある場合，主に以下のような影響が考えられるそうです(GPT-4oの解答)．
> 1. 情報漏洩:
悪意ある攻撃者が、脆弱性を利用してシステム内のデータにアクセスする可能性があります。
> 
> 2. 権限の乗っ取り:
ユーザー権限を不正に取得し、システムを操作されるリスクがあります。
> 
> 3. サービス妨害:
脆弱性を悪用してサービスを停止させる攻撃（DoS攻撃）を受ける可能性があります。

以上のことから，Reactを用いた開発では脆弱性の診断を行い，除去することが重要かもしれません．
なお，脆弱性の診断は以下のコマンドを用いると便利です！

```
/* 脆弱性の診断．どのパッケージに脆弱性が発見されているのか判別可能． */
npm audit

/* パッケージの依存関係の確認が可能．使用する際は[]は消す */
npm ls [the name of the package]
```
<br><br>



## 個人用メモ - Local Serverの構築手法
ここでは，開発したWebサイトを確認するためのローカルサーバ―の構築手法として3種類の方法を説明します．普段は私は1番目の方法でローカルサーバの構築を行っています．
- **VS Code (Visual Studio Code)を用いる場合**
  - [ ]  コマンドプロンプトを起動して作業ディレクトリに移動後，以下のコマンドをたたきVS Codeを立ち上げる．
  ```
  code .
  ```
  - [ ] 上記コマンドでVS Codeを立ち上げた後，ショートカットキー[CTRL] + [@]を用いてTERMINALを開き，以下のコマンドのいずれか一方をたたく．
  ```
  npm start
  ```
  <br>

- **WSL（Windows Subsystem for Linux）を用いる場合**
  - [ ]  Ubuntuを起動して作業ディレクトリに移動後，以下のコマンドをたたきLocal Serverを立てる（NUMBERは任意のポート番号に置き換える）．
  ```
  python3 -m http.server NUMBER
  ```
  - [ ] 上記コマンドでLocal Serverを立てた後，ブラウザで以下のリンクに移動する（NUMBERは先ほど設定したポート番号に置き換える）．
  ```
  http://localhost:NUMBER
  ```
<br>

- **firebaseを用いる場合**
  - [ ] コマンドプロンプトを起動して作業ディレクトリに移動後，以下のコマンドをたたきLocal Serverを立てる．
  ```
  firebase serve
  ```
  - [ ] すると次のような出力が得られる．
  ```
  i  hosting[msts-homapage]: Serving hosting files from: public
  +  hosting[msts-homapage]: Local server: http://localhost:5000
  ```
  - [ ] 上記出力が得られた後にブラウザで以下のリンクに移動する．
  ```
  http://localhost:5000/
  ```



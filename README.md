# MyWebsite
This is the package of my website. All previously released versions are managed by each branch.
<br><br>



## 概要
こちらは，私自身が公開している[webサイト](https://msts-hp.com/)のパッケージに関するリリースノート及び使用方法となっています．branchの名前に含まれる日付が更新日と対応しており，過去の全ての公開バージョンがここから確認することができます．なお，本Webサイトではホスティングサービスとして[firebase](https://firebase.google.com/?hl=ja)を使用しています．バックエンド開発をサポートするプラットフォームであるfirebaseを用いてWebサイトのホスティングを行うと，SSLが自動的に提供されるため，その更新手続きが不必要であるという利点があります．
> [!IMPORTANT]
> masterブランチには，最新のリリースバージョンが含まれています．

<br><br>



## リリースノート
> **ver01 : 2023-10-16 ブランチへのリンクは[こちら](https://github.com/MSTS-S/MyWebsite/tree/ver01-2023/10/16)**

webサイト初公開日です．WebサイトのTemplateが公開されている[サイト](https://html5up.net/)からダウンロード後，編集を加えました．PROFILE，CAREER HISTORY, ACADEMIC REASERCH, PROGRAMING, CERTIFICATIONS, UNITY PROJECT, SNSLINK/CONTACTから構成されています．
<br><br>

> **ver02 : 2024-02-17 ブランチへのリンクは[こちら](https://github.com/MSTS-S/MyWebsite/tree/ver02-2024/02/17)**

ACADEMIC REASERCHに学部における研究 - Research in Bachelor's Degreeを追加しました．ただし，研究内容については新規性保持のため未公開です．また，UNITY PROJECTで公開されている自作のゲームの説明文を一部改変し，ゲーム画面におけるUIを変更しました．
<br><br>

> **ver03 : 2024-02-24 ブランチへのリンクは[こちら](https://github.com/MSTS-S/MyWebsite/tree/ver03-2024/02/24)**

WebサイトのfaviconをMicrosoft PowerPointで作成した新しいデザインに変更しました．また，名刺カードのデザインを変更しました．さらにSNSLINK/Contactにおいて表示されているアプリのアイコンをカラーから白黒の丸形に変更しました．
<br><br>

> **ver04 : 2024-02-28 ブランチへのリンクは[こちら](https://github.com/MSTS-S/MyWebsite/tree/ver04-2024/02/28)**

WebサイトのfaviconをMicrosoft PowerPointで作成した新しいデザインに変更しました．かなり工夫を凝らしたデザインとなっていて，よりブランドのロゴのような印象を与えるものを作成しました．
<br><br>

> **ver05 : 2024-04-02 ブランチへのリンクは[こちら](https://github.com/MSTS-S/MyWebsite/tree/ver05-2024/04/02)**

[東京都立大学院](https://www.tmu.ac.jp/academics/graduate.html)に進学したため，PROFILEに記載されている所属を変更し，名刺のデザイン変更を行いました．また，CAREER HISTORYに記載されている経歴の変更及び追記を行いました．CERTIFICATIONSに学士（情報科学）を追記しました．
<br><br>

> **ver06 : 2024-04-20 ブランチへのリンクは[こちら](https://github.com/MSTS-S/MyWebsite/tree/ver06-2024/04/20)**

UNITY PROJECTにMovie Theaterを追加しました．Webブラウザ上での実行のため，UIに凝って作成しました．なお，こちらの映画館で上映される映像は映像生成AIの[Haiper](https://haiper.ai/)を利用しました．
<br><br>

> **ver07 : 2024-05-26 ブランチへのリンクは[こちら](https://github.com/MSTS-S/MyWebsite/tree/ver07-2024/05/26)**

PROGRAMINGにおけるプログラミング言語や開発環境のアイコンを一部変更しました．また，SNSLINK/CONTACTにGitHubのアイコンを追記し，色を白黒からカラーに変更するなどの一部改変を行いました．
<br><br>

> **ver08 : 2024-08-31（脆弱性検出のため，branch削除済）**

今まではフロントエンド開発のフレームワークやライブラリ等を使用せず，HTMLとCSSをVS Codeにべた書きしていましたが，Reactを用いたWeb開発へと変更しました．それに伴ってWebサイトの機能やUIを大幅に変更いたしました．変更点は以下の通りです．
<br>
- 名刺カードの表示方法
    - 画面遷移によって表示していた名刺カードをポップアップウィンドウに切り替えました．

- 固定ヘッダーの追加
    - 画面上部に固定されるヘッダーを追加し，Webサイトのタイトルが常に表示されるように変更しました．

- ナビゲーションメニューのUI変更
    - 以前のナビゲーションから，レスポンシブ対応のドロワー兼ハンバーガーメニューに変更いたしました．
    - 画面幅が768px以下のデバイスではハンバーガーメニューが，それより大きい画面幅のデバイスではドロワーが適用されます．
    - モバイルデバイスとデスクトップの両方で使いやすいUIを実現しました．

- CAREER HISTORYにおけるタイムラインUIの変更
    - MUIのTimelineテンプレートを用いて，タイムラインにアイコンを表示することにより，内容が一目でわかりやすいように改変しました．

- ACADEMIC RESEARCHのUIの変更
    - MUIのAccordionを用いて，その他の研究活動のUIをシンプルなものに変更しました．

- PROGRAMINGの内容変更
    - MATLABを削除し，代わりにHTML & CSS, React, MUIを追加しました．

<br><br>

> **ver09 : 2024-09-16（脆弱性検出のため，branch削除済）**

モバイルデバイス(画面幅 768px以下)でdrawerを表示後，スクロールを行うとメインコンテンツがスクロールしてしまう問題を修正しました．
<br><br>

> **ver10 : 2024-09-17（脆弱性検出のため，branch削除済）**

WebサイトにTabを追加しました．また，Academic Researchに学会参加のAccordionを追加しました．
<br><br>

> **ver11 : 2024-09-30 ブランチへのリンクは[こちら](https://github.com/MSTS-S/MyWebsite/tree/ver11-2024/09/30)**

QRCodeGeneratorを追加しました．また，Node.jsプロジェクトで使用する依存パッケージがインストールされるディレクトリである，node_moduleに含まれる脆弱性を除去しました．
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
  yarn install
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
  yarn start
  ```
<br><br>

## ファイル構成
ここでは，最新バージョンのファイル構成を記載しています．なお，現在の最新バージョンは**ver11 : 2024-09-30**です．

<br>

<pre>
├── node_modules /...
├── public /
│   ├── Unity /...      #Unity Projectで用いられるアプリファイル
│   ├── favicon.ico     
│   ├── index.html      # メインのHTMLファイル
│   ├── Logo.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components /
│   │   ├── img /       # Header image
│   │   ├── Section_AcademicResearch /
│   │   │   ├── AcademicResearch.jsx
│   │   │   ├── AccordionStyleComponent.css
│   │   │   └──  AccordionStyleComponent.jsx
│   │   ├── Section_BusinessCard /
│   │   │   ├── BusinessCard.css
│   │   │   ├── BusinessCard.jsx
│   │   │   └── MSTS_BusinessCard.png
│   │   ├── Section_Copyright /
│   │   │   └──  Copyright.jsx
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
│   │   │   └── ProgramingCard.jsx
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
│   ├── App.css
│   ├── App.jsx
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTest.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
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

この脆弱性に対処するため，resolutionsフィールドをpackage.jsonに追加し，特定のバージョンを強制的に使用するようにする必要があります．しかし，これはJavaScriptのPackage Managerのうち，npmではなくyarnでしかサポートされていないため，yarnに切り替える必要があります

```
"resolutions": {
    "nth-check": "^2.1.1",
  },
```

そこで，このresolutionsフィールドをpackage.jsonに追加し，yarn installを再び行えば脆弱性は消去されます．


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
yarn audit

/* パッケージの依存関係の確認が可能．使用する際は[]は消す */
yarn list [the name of the package]
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
  yarn star
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



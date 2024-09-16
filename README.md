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

> **ver08 : 2024-08-31 ブランチへのリンクは[こちら](https://github.com/MSTS-S/MyWebsite/tree/ver08-2024/08/31)**

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

> **ver09 : 2024-09-16 ブランチへのリンクは[こちら](https://github.com/MSTS-S/MyWebsite/tree/ver09-2024/09/16)**

モバイルデバイス(画面幅 768px以下)でdrawerを表示後，スクロールを行うとメインコンテンツがスクロールしてしまう問題を修正しました．
<br><br>

## 使用方法
ここでは，master branchをローカルリポジトリにcloneするコマンドを記載します．ローカルでcloneしたいファイルに遷移後，以下のコマンドをたたいてください．
  ```
  git clone https://github.com/MSTS-S/MyWebsite.git
  ```
また，特定のbranchをcloneしたい場合は以下のコマンドをたたいてください([]は消すこと)．
  ```
  git clone -b [branch name] https://github.com/MSTS-S/MyWebsite.git
  ```

## ファイル構成
ここでは，最新バージョンのファイル構成を記載しています．なお，現在の最新バージョンは**ver08 : 2024-08-31**です．

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



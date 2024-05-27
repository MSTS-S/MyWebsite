# MyWebsite
This is the package of my website. All previously released versions are managed by each branch.
<br><br>



## 概要
こちらは，私自身が公開している[webサイト](https://msts-hp.com/)のパッケージに関するリリースノートとなっています．branchの名前に含まれる日付が更新日と対応しており，過去の全ての公開バージョンがここから確認することができます．なお，本Webサイトではホスティングサービスとして[firebase](https://firebase.google.com/?hl=ja)を使用しています．バックエンド開発をサポートするプラットフォームであるfirebaseを用いてWebサイトのホスティングを行うと，SSLが自動的に提供されるため，SSLの更新手続きが不必要であるという利点があります．
<br><br>



## リリースノート
**ver01 : 2023-10-16 ブランチへのリンクは[こちら](https://github.com/MSTS-S/MyWebsite/tree/ver01-2023/10/16)**
> webサイト初公開日です．WebサイトのTemplateが公開されている[サイト](https://html5up.net/)からダウンロード後，編集を加えました．PROFILE，CAREER HISTORY, ACADEMIC REASERCH, PROGRAMING, CERTIFICATIONS, UNITY PROJECT, SNSLINK/CONTACTから構成されています．
<br>

**ver02 : 2024-02-17 ブランチへのリンクは[こちら](https://github.com/MSTS-S/MyWebsite/tree/ver02-2024/02/17)**
> ACADEMIC REASERCHに学部における研究 - Research in Bachelor's Degreeを追加しました．ただし，研究内容については新規性保持のため未公開です．また，UNITY PROJECTで公開されている自作のゲームの説明文を一部改変し，ゲーム画面におけるUIを変更しました．
<br>

**ver03 : 2024-02-24 ブランチへのリンクは[こちら](https://github.com/MSTS-S/MyWebsite/tree/ver03-2024/02/24)**
> WebサイトのfaviconをMicrosoft PowerPointで作成した新しいデザインに変更しました．また，名刺カードのデザインを変更しました．さらにSNSLINK/Contactにおいて表示されているアプリのアイコンをカラーから白黒の丸形に変更しました．
<br>

**ver04 : 2024-02-28 ブランチへのリンクは[こちら](https://github.com/MSTS-S/MyWebsite/tree/ver04-2024/02/28)**
> WebサイトのfaviconをMicrosoft PowerPointで作成した新しいデザインに変更しました．かなり工夫を凝らしたデザインとなっていて，よりブランドのロゴのような印象を与えるものを作成しました．
<br>

**ver05 : 2024-04-02 ブランチへのリンクは[こちら](https://github.com/MSTS-S/MyWebsite/tree/ver05-2024/04/02)**
> [東京都立大学院](https://www.tmu.ac.jp/academics/graduate.html)に進学したため，PROFILEに記載されている所属を変更し，名刺のデザイン変更を行いました．また，CAREER HISTORYに記載されている経歴の変更及び追記を行いました．CERTIFICATIONSに学士（情報科学）を追記しました．
<br>

**ver06 : 2024-04-20 ブランチへのリンクは[こちら](https://github.com/MSTS-S/MyWebsite/tree/ver06-2024/04/20)**
> UNITY PROJECTにMovie Theaterを追加しました．Webブラウザ上での実行のため，UIに凝って作成しました．なお，こちらの映画館で上映される映像は映像生成AIの[Haiper](https://haiper.ai/)を利用しました．
<br>

**ver07 : 2024-05-26 ブランチへのリンクは[こちら](https://github.com/MSTS-S/MyWebsite/tree/ver07-2024/05/26)**
> PROGRAMINGにおけるプログラミング言語や開発環境のアイコンを一部変更しました．また，SNSLINK/CONTACTにGitHubのアイコンを追記し，色を白黒からカラーに変更するなどの一部改変を行いました．

<br>



## 個人用メモ - Local Serverの構築手法
ここでは，開発したWebサイトを確認するためのローカルサーバ―の構築手法として2種類の方法を説明します．
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

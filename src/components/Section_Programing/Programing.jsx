import React from 'react';
import PROGRAMING_CARD_STYLE from './ProgramingCardStyle.jsx';
/* import img */
import Img_Cpp from './Img/cpp.png';
import Img_Unity from './Img/Logo_Unity.png';
import Img_Java from './Img/Java.png';
import Img_Python from './Img/python.png';
import Img_React from './Img/React.png';
import Img_R from './Img/R.png';
/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';

/*
 * img    : 背景に大きく敷くロゴ（透過PNG）。無い場合は mono の文字を表示
 * mono   : ロゴ画像が無いときに代わりに表示する文字
 * years  : 経験年数（任意。入れたカードだけ右上に表示）
 * tags   : カード下部に並べるタグ
 */
const programing_card_data = [
    {
        img: Img_Unity,
        invertIcon: true, // 暗い色のロゴなので反転表示
        title: 'C# / Unity',
        years: '4年',
        content:
            <>
                研究用VR実験環境の構築、アバタ制御、エディタ拡張の開発。趣味のアプリ開発にも使用。
            </>,
        tags: ['Unity', 'VR', 'Editor拡張'],
    },
    {
        img: Img_Java,
        title: 'Java / Spring',
        years: '1年未満',
        content:
            <>
                研修・業務でWebアプリケーションの開発に使用。現在Spring Frameworkを学習中。
            </>,
        tags: ['Spring', 'Servlet', 'JSP'],
    },
    {
        img: Img_Python,
        title: 'Python',
        years: '7年',
        content:
            <>
                GUI・画像処理・スクレイピングなどの自動化ツール開発、カメラ入力のゲーム制作。
            </>,
        tags: ['Tkinter', 'OpenCV', 'スクレイピング'],
    },
    {
        img: Img_React,
        title: 'React',
        years: '2年',
        content:
            <>
                サマーインターンで初めて使用。このサイトもReactで開発し、MUIでタイムラインを実装。
            </>,
        tags: ['React', 'MUI', 'HTML/CSS'],
    },
    {
        img: Img_R,
        title: 'R / RStudio',
        years: '3年',
        content:
            <>
                研究の実験データ解析に使用。前提条件の検定からANOVAまで、厳密に実施。
            </>,
        tags: ['RStudio', '前提検定', 'ANOVA'],
    },
    {
        img: Img_Cpp,
        title: 'C / C++',
        years: '7年',
        content:
            <>
                初めて触ったプログラミング言語。
                <a
                    className='hyperlink'
                    href="https://onlinejudge.u-aizu.ac.jp/"
                    target="_blank"
                    rel="noopener noreferrer external"
                >
                    AOJ
                </a>
                を利用して、勉強していた。
            </>,
        tags: ['AOJ', 'アルゴリズム', 'データ構造'],
    },
];

function Programing() {
    return (
        <div>
            <div className='sectionTitle'>Programming</div>
            <div className='sectionSubtitle'>技術スタック</div>

            <PROGRAMING_CARD_STYLE data={programing_card_data} />
        </div>
    );
}


export default Programing;

import React from 'react';
import ProgramingCard from './ProgramingCard';
/* import img */
import Img_C from './Img/Logo_c.png';
import Img_Cpp from './Img/Logo_cpp.png';
import Img_Csharp from './Img/Logo_cs.png';
import Img_Python from './Img/Logo_py.png';
import Img_Matlab from './Img/Logo_mat.png';
import Img_Unity from './Img/Logo_Unity.png';
import Img_HTMLCSS from './Img/HTML_CSS.png';
import Img_React from './Img/React.png';
import Img_MUI from './Img/MUI.png';
/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';

function Programing() {
    const cards = [
        {
            img: Img_C,
            img_alt: 'Logo of C',
            title: 'C言語',
            content:
                <>
                    主に講義内で使用しました。都立大に入学後、最初に学んだプログラミング言語がC言語でした。
                    当時はコロナの影響でオンライン講義であり、プログラムをWordに書いて提出していました。
                </>,
        },
        {
            img: Img_Cpp,
            img_alt: 'Logo of C plus plus',
            title: 'C++言語',
            content:
                <>
                    <a
                        className='hyperlink'
                        href="https://onlinejudge.u-aizu.ac.jp/"
                        target="_blank"
                        rel="noopener noreferrer external"
                    >
                        AizuOnlineJudge (AOJ)
                    </a>
                    で使用しており、これによりプログラミングスキルが伸びたと実感しています。
                    AOJでは主に入門とアルゴリズムとデータ構造、整数論を課題と自習で解き進めていました。
                </>,
        },
        {
            img: Img_Csharp,
            img_alt: 'Logo of C sharp',
            title: 'C#言語',
            content:
                <>
                    研究補助アルバイトの時にUnityを扱い、そこで初めてC#言語を扱いました。先輩にオススメされた
                    <a
                        className='hyperlink'
                        href="https://www.amazon.co.jp/Unity%E3%81%AE%E6%95%99%E7%A7%91%E6%9B%B8-Unity-2023%E5%AE%8C%E5%85%A8%E5%AF%BE%E5%BF%9C%E7%89%88-%E5%8C%97%E6%9D%91%E6%84%9B%E5%AE%9F/dp/4815621365/ref=sr_1_3?adgrpid=134792865244&hvadid=667882973031&hvdev=c&hvqmt=b&hvtargid=kwd-332695608430&hydadcr=15819_13683006&jp-ad-ap=0&keywords=unity%E3%81%AE%E6%95%99%E7%A7%91%E6%9B%B8&qid=1694847192&s=books&sr=1-3"
                        target="_blank"
                        rel="noopener noreferrer external"
                    >
                        Unityの教科書
                    </a>
                    で基本を学習し、
                    CSVファイルへの出力や、アバタ制御などを扱いました。
                </>,
        },
        {
            img: Img_Python,
            img_alt: 'Logo of Python',
            title: 'Python',
            content:
                <>
                    Tkinter、画像処理、OpenCV、自動化処理など幅広く扱いました。また実験の自由課題では、
                    カメラに対して黒色マーカを入力とするゲーム開発、レベルデザインも行いました。
                </>,
        },
        {
            img: Img_Unity,
            img_alt: 'Logo of Unity',
            title: 'Unity',
            content:
                <>
                    研究補助アルバイトの時にUnityを初めて扱い、そこでゲーム開発の楽しさやVRに興味を持ちました。
                    研究で用いる実験環境の構築や、趣味で行っているアプリ開発の際に使用しています。
                </>,
        },
        {
            img: Img_HTMLCSS,
            img_alt: 'Logo of HTML and CSS',
            title: 'HTML & CSS',
            content:
                <>
                    本Webサイトの開発に用いています。
                    以前はHTMLファイルとCSSファイルにべた書きをしていましたが、現在はjsx形式でHTMLとCSS、Java Scriptを使用しています。
                </>,
        },
        {
            img: Img_React,
            img_alt: 'Logo of React',
            title: 'React',
            content:
                <>
                    インターンに参加した際に初めて使用しました。
                    このJavaScriptライブラリはHTMLとCSSのべた書きと比べファイル管理がしやすく、コンポーネント単位でUIを構築できるので便利です。
                </>,
        },
        {
            img: Img_MUI,
            img_alt: 'Logo of Material UI',
            title: 'Material UI',
            content:
                <>
                    Career HitoryセクションのTimelineやAcademic ResearchセクションのAccordion、ナビゲーションのドロワーの開発などに用いました。
                    シンプルで綺麗なUIの実装ができます。
                </>,
        },
        // {
        //     img: Img_Matlab,
        //     img_alt: 'Card 5 Image',
        //     title: 'MATLAB',
        //     content:
        //         <>
        //             プログラミング実験や音声解析、機械学習などを行う目的で使用しました。
        //             簡易データを用いたクラスタリング等のパターン認識や、実際のデータセットを用いた手書き数字認識を行いました。
        //         </>,
        // },
    ];

    return (
        <div>
            <div className='sectionTitle'>Programing</div>
            <div className='sectionSubtitle'>ー技術スタックー</div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: '0, auto',
                justifyContent: 'center',
                gap: '30px',
            }}>
                {cards.map((card, index) => (
                    <ProgramingCard
                        key={index}
                        img={card.img}
                        img_alt={card.img_alt}
                        title={card.title}
                        content={card.content}
                    />
                ))}
            </div>
        </div>
    );
};

export default Programing;

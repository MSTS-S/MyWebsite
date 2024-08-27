import React from 'react';
import ProgramingCard from './ProgramingCard';
/* import img */
import Img_C from './Img/Logo_c.png';
import Img_Cpp from './Img/Logo_cpp.png';
import Img_Csharp from './Img/Logo_cs.png';
import Img_Python from './Img/Logo_py.png';
import Img_Matlab from './Img/Logo_mat.png';
import Img_Unity from './Img/Logo_Unity.png';
/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';

function Programing() {
    const cards = [
        {
            img: Img_C,
            img_alt: 'Card 1 Image',
            title: 'C言語',
            content: '主に講義内で使用しました。都立大に入学後、最初に学んだプログラミング言語がC言語でした。当時はコロナの影響でオンライン講義であり、プログラムをWordに書いて提出していました。',
        },
        {
            img: Img_Cpp,
            img_alt: 'Card 2 Image',
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
                    で使用しており、これによりプログラミングスキルが伸びたと実感しています。AOJでは主に入門とアルゴリズムとデータ構造、整数論を課題と自習で解き進めていました。
                </>,
        },
        {
            img: Img_Csharp,
            img_alt: 'Card 3 Image',
            title: 'C#言語',
            content: '研究補助アルバイトの時にUnityを扱い、そこで初めてC#言語を扱いました。先輩にオススメされたUnityの教科書で基本を学習し、CSVファイルへの出力や、アバタ制御などを扱いました。',
        },
        {
            img: Img_Python,
            img_alt: 'Card 4 Image',
            title: 'Python',
            content: 'Tkinter、画像処理、OpenCV、自動化処理など幅広く扱いました.。また実験の自由課題では、カメラに対して黒色マーカを入力とするゲーム開発、レベルデザインも行いました。',
        },
        {
            img: Img_Matlab,
            img_alt: 'Card 5 Image',
            title: 'MATLAB',
            content: 'プログラミング実験や音声解析、機械学習などを行う目的で使用しました。簡易データを用いたクラスタリング等のパターン認識や、実際のデータセットを用いた手書き数字認識を行いました．',
        },
        {
            img: Img_Unity,
            img_alt: 'Card 5 Image',
            title: 'Unity',
            content: '研究補助アルバイトの時にUnityを初めて扱い、そこでゲーム開発の楽しさやVRに興味を持ちました。研究で用いる実験環境の構築や、趣味で行っているアプリ開発の際に使用しています。',
        },
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

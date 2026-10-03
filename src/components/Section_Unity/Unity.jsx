import React from 'react';
import UnityCardComponent from './UnityCardComponent';
/* import img */
import AvoidTheAttack from './img/AvoidTheAttack.png'
import HitAndBlow from './img/HitAndBlow.png'
import EscapeFromAncientRoom from './img/EscapeFromAncientRoom.png'
import EscapeFromOffice from './img/EscapeFromOffice.png'
import MovieTheater from './img/MovieTheater.png'
/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';

const UnityData = [
    {
        img: AvoidTheAttack, title: 'Avoid the Attack', j1: '2D', j2: 'アクション', j3: '弾よけ'
        , description:
            <>
                「Unityの教科書」を読み終えた後、初めて1から自作したゲームです。オバケを操作して、右から飛んでくる攻撃をかわし続けます。ライフは5つで、攻撃は10秒ごとに速くなるようにレベルデザインしました。
            </>
        , manipulation: '操作：上下カーソルキー'
        , path: './Unity/N1_AvoidTheAttack/index.html'
    },
    {
        img: HitAndBlow, title: 'HIT & BLOW', j1: '2D', j2: '対戦', j3: '推論'
        , description:
            <>
                コンピュータが選んだ重複なしの4色の並びを、HitとBlowのヒントを頼りに推理するゲームです。理論上は5回で正解にたどり着けます。1人でも対戦でも遊べます。
            </>
        , manipulation: '操作：マウス，キーボード'
        , path: './Unity/N2_HITandBLOW/index.html'
    },
    {
        img: EscapeFromAncientRoom, title: 'Escape from Ancient Room', j1: 'VR', j2: '脱出', j3: '古代遺跡'
        , description:
            <>
                「The Great Escape: Dragon's Dungeon」のギミックに着想を得て、初めて作ったVRゲームです。PC版では、VRでのインタラクションの代わりに、キーボード操作で空間内を移動できるようにしました。
            </>
        , manipulation: '操作：カーソルキー，マウス'
        , path: './Unity/N3_BallLabyrinth/index.html'
    },
    {
        img: EscapeFromOffice, title: 'Escape from Office', j1: 'VR', j2: '脱出', j3: 'オフィス'
        , description:
            <>
                <a
                    className='hyperlink'
                    href="https://www.meta.com/ja-jp/experiences/4173511229391389/"
                    target="_blank"
                    rel="noopener noreferrer external"
                >
                    Escape from Ancient Room
                </a>
                に続いて制作した、より本格的なVR脱出ゲームです。タイトルからゲームへの遷移演出にこだわりました。PC版では、脱出の鍵となるオブジェクトを非表示にしています。
            </>
        , manipulation: '操作：カーソルキー，マウス，キーボード'
        , path: './Unity/N4_EscapeFromOffice/index.html'
    },
    {
        img: MovieTheater, title: 'Movie Theater', j1: 'VR', j2: '映画館', j3: '生成AI'
        , description:
            <>
                <a
                    className='hyperlink'
                    href="https://www.meta.com/ja-jp/experiences/2274617532624269/?item_id=2274617532624269&r=1"
                    target="_blank"
                    rel="noopener noreferrer external"
                >
                    Prime Video VR
                </a>
                での体験をもとに制作したVR映画館です。上映映像は動画生成AIの
                <a
                    className='hyperlink'
                    href="https://haiper.ai/"
                    target="_blank"
                    rel="noopener noreferrer external"
                >
                    Haiper
                </a>
                で作成しました。PCでも視聴できるようにUIを作り込みました。
            </>
        , manipulation: '操作：カーソルキー，マウス'
        , path: './Unity/N5_MovieTheater/index.html'
    },
];

function Unity() {
    return (
        <div>
            <div className='sectionTitle'>Unity Project</div>
            <div className='sectionSubtitle'>自作アプリ</div>
            <UnityCardComponent data={UnityData} />
        </div>
    );
};

export default Unity;

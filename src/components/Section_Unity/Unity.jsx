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

function Unity() {

    const UnityData = [
        {
            img: AvoidTheAttack, title: 'Avoid the Attack', j1: '2D', j2: 'アクション', j3: '回避系'
            , description:
                <>
                    Unityの教科書を読み終えた後に、その知識を活かして1から自分で作成したゲームがこのゲームです。
                    プレイヤーはオバケになって不気味な森の中で右側から飛んでくる攻撃をできるだけ多くかわすゲームです。ライフは5つあり、
                    1度攻撃に当たるとライフは1つ減り、0になるとゲーム終了です。このゲームではレベルデザインも行っており、攻撃は10秒ごとに速度が上がっていきます。
                    操作が単純であるため誰でも楽しめると思います！ぜひプレイしてみてください！
                </>
            , manipulation: '操作：上下カーソルキー'
            , path: './Unity/N1_AvoidTheAttack/index.html'
        },
        {
            img: HitAndBlow, title: 'HIT & BLOW', j1: '2D', j2: '対戦', j3: '推論'
            , description:
                <>
                    6色のボール中から、コンピュータによってランダムに選出された重複しない4つのボールの色と位置を推測するゲームです。
                    色と位置が一致しているとHit、色は一致しているが位置が違うとBlowとなります。
                    4つのボールを選択後、そのボール配置でのHitとBlowの数がヒントとして与えられるので、それをヒントに推測してください。
                    理論的には5回の選択でコンピュータが選出したボールの色と順番を当てることができます！対戦ゲームですが、1人でプレイしても十分に楽しめるゲームです！
                </>
            , manipulation: '操作：マウス，キーボード'
            , path: './Unity/N2_HITandBLOW/index.html'
        },
        {
            img: EscapeFromAncientRoom, title: 'Escape from Ancient Room', j1: 'VR', j2: '脱出', j3: '古代遺跡'
            , description:
                <>
                    AppLabのThe Great Escape: Dragon's Dungeonという脱出ゲームの中のとあるギミックを体験し、
                    この箇所なら自分でも作れると考えUnityを使って初めて作成したVRゲームがこの脱出ゲームです。
                    VRゲームのため物体を掴むなどのインタラクション操作をPC上で行うことはできませんが、キーボード操作でゲーム空間内を移動できるようにプログラムを変更しました。
                    ...をすると...。VR空間での仕掛けがwebブラウザ上でも楽しめるかもしれません！
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
                    を作成したのち、より本格的なVR脱出ゲームを作成したいと思い、作り上げたのがこの Escape from Office です。
                    上のゲームと同様にPCでも少し空間を味わえるようにプログラムを改変しました。
                    やや難易度の高い脱出ゲームとなっていて、タイトルシーンからゲームシーンへの遷移演出もこだわりました。
                    この演出はwebブラウザ上でも楽しめるため、ぜひ体験してみてください。なお、脱出のキーとなるobjectは非表示となっております。予めご了承ください。
                </>
            , manipulation: '操作：カーソルキー，マウス，キーボード'
            , path: './Unity/N4_EscapeFromOffice/index.html'
        },
        {
            img: MovieTheater, title: 'Movie Theater', j1: 'VR', j2: '映画館', j3: '生成AI'
            , description:
                <>
                    Meta Quest公式ストアの
                    <a
                        className='hyperlink'
                        href="https://www.meta.com/ja-jp/experiences/2274617532624269/?item_id=2274617532624269&r=1"
                        target="_blank"
                        rel="noopener noreferrer external"
                    >
                        Prime Video VR
                    </a>
                    でVR映画館を体験し、その後に自らVR映画館を作成したのがこのMovie Theaterです。
                    VRでの体験を前提としていましたが、PCでも映画を視聴できるようプログラムを改変し、UIにもこだわりました。
                    なお本映画館で上映される映像は、動画生成AIの
                    <a
                        className='hyperlink'
                        href="https://haiper.ai/"
                        target="_blank"
                        rel="noopener noreferrer external"
                    >
                        Haiper
                    </a>
                    を用いて作成しました。2024年04月17日時点ではBETA版が公開されており、最長4秒の高クオリティ動画が無料で生成可能です。
                    OpenAIの
                    <a
                        className='hyperlink'
                        href="https://openai.com/sora"
                        target="_blank"
                        rel="noopener noreferrer external"
                    >
                        Sora
                    </a>
                    が一般公開された際はSoraを使用した動画生成も試そうと考えています。
                </>
            , manipulation: '操作：カーソルキー，マウス'
            , path: './Unity/N5_MovieTheater/index.html'
        },
    ];

    return (
        <div>
            <div className='sectionTitle'>Unity Project</div>
            <div className='sectionSubtitle'>ー自作アプリー</div>
            <div style={{ textAlign: 'justify' }}>
                <>
                <br />
                    ※注意
                    <br />
                    Unityで作成した自作のゲーム及びプロジェクトを、WebGLをBuildTargetにしてBuildしました。
                    WebGLでBuildしたものはブラウザで実行されるため、スマホ （ハイエンドデバイスに限る）でも動作可能です。
                    しかし、
                    <a
                        className='hyperlink'
                        href="https://docs.unity3d.com/ja/2023.2/Manual/webgl-browsercompatibility.html"
                        target="_blank"
                        rel="noopener noreferrer external"
                    >
                        2023年2月のUnity公式ドキュメント
                    </a>
                    はWebGLコンテンツをサポートするのに十分なメモリが無い場合があるとして、
                    スマホ等のモバイルデバイスに対するWebGLをサポートしていません。私としましても全てのモバイルデバイスで問題なく実行できることをお約束することができないため、
                    <b style={{ color: 'black' }}><u>モバイルデバイスによる操作は原則非対応</u></b>としました。大変申し訳ありませんが、PCからの実行をお願いします。
                </>
            </div>
            <div className="QulificationContents">
                <UnityCardComponent data={UnityData} />
            </div>
        </div>
    );
};

export default Unity;

import React from 'react';
import AccordionStyleComponent from './AccordionStyleComponent';
/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';

function AcademicResearch() {
    const styles = {
        researchTitle: {
            fontWeight: 'bold',
            fontSize: '1.5em', // ここで文字サイズを調整
            borderBottom: '2px solid black', // 下線を引く
            paddingBottom: '5px', // 下線との間に少し余白を追加
            marginBottom: '20px', // 他のコンテンツとの間に余白を追加
            textAlign: 'left',
        },
        contentText: {
            textAlign: 'left',
            fontSize: '18px',
            lineHeight: '1.8'
        },
        iframe: {
            margin: '0 auto',
            display: 'flex',
            width: '100%',
            maxWidth: '1200px',
            aspectRatio: '16 / 9',
            position: 'relative',
            overflow: 'hidden',
            border: 'none'
        },
    };

    const ActivityData = [
        {
            id: 'AD1'
            , ariaControls: 'content1'
            , title: '研究補助 ー> メタバース内でのE-Commerceの実現に向けた信頼性の高いRealistic-Avatarの研究プロジェクト'
            , date: '2022年09月01日 ～ 2023年02月28日'
            , place: 'Tokyo, Japan'
            , description:
                <>
                    当時、東京都立大学の情報科学科に所属していたヤェムヴィボル先生にお誘いいただき、
                    日本住宅ローンがスポンサー企業となっている研究プロジェクトに研究補助アルバイトとして参加しました。
                    このときに初めてUnityを扱い、アバタのモデリングやアバタの表情変化のためのモーフ設定、アニメーション設定、動的グラフ生成などについて学習しました。
                </>
        },
        {
            id: 'AD2'
            , ariaControls: 'content2'
            , title: '学会参加 ー> 日本人間工学会アーゴデザイン部会コンセプト事例発表会'
            , date: '2023年08月21日'
            , place: 'Tokyo, Japan'
            , description:
                <>
                    私が所属している研究室では、学部4年生がこちらの学会に毎年参加しています。
                    <a
                        className='hyperlink'
                        href="https://ergo-design.org/wp/"
                        target="_blank"
                        rel="noopener noreferrer external"
                    >
                        日本人間工学会アーゴデザイン部会
                    </a>
                    主催のコンセプト事例発表会は研究のコンセプト段階での発表が認められており、研究結果が出ていなくてもその方向性について議論することができます。
                    私はポスター発表形式で参加し、学生や教授の方から様々な意見を得ることができ、研究のその後に役に立ちました。
                </>
        },
        {
            id: 'AD3'
            , ariaControls: 'content3'
            , title: 'デモ展示 ー> URCF（超臨場感コミュニケーション産学官フォーラム）シンポジウム 2023'
            , date: '2023年08月30日'
            , place: 'Tokyo, Japan'
            , description:
                <>
                    東京都立大学,筑波大学, 東京大学．"複数の実空間のVR歩行体験とマルチ視聴が可能なXRメタバース"と題して、
                    <a
                        className='hyperlink'
                        href="https://www.tmu.ac.jp/research/project-5g.html"
                        target="_blank"
                        rel="noopener noreferrer external"
                    >
                        東京都立大学 local-5G project
                    </a>
                    の一環として、実空間において二重身体認知を実現するためのシステムのデモ展示に補佐として参加しました。
                    こちらのシステムはセグウェイ型及び犬型の2台の代理身体ロボットを採用しており、歩行感覚フィードバック及び視点共有機能を備えるシステムです。
                    鋭い質問が多く、私自身も質問を受けて知識を身に付けることが出来ました。
                </>
        },
        {
            id: 'AD4'
            , ariaControls: 'content4'
            , title: 'デモ展示 ー> 第28回日本バーチャルリアリティ学会大会（VRSJ2023）'
            , date: '2023年09月12日 ～ 2023年09月14日'
            , place: 'Tokyo, Japan'
            , description:
                <>
                    小島優希也, 島田匠悟, 米田悠人, 芹澤尚舜, 西内信之, 池井寧, YEM VIBOL. "複数リアル空間を体験するXRメタバース"と題して、
                    <a
                        className='hyperlink'
                        href="https://www.tmu.ac.jp/research/project-5g.html"
                        target="_blank"
                        rel="noopener noreferrer external"
                    >
                        東京都立大学 local-5G project
                    </a>
                    の一環として、上記URCFと類似した内容のデモ展示に補佐として参加しました。
                    URCFとの違いはロボットアームの稼働を行ったことや、代理身体ロボットのロコモーション手法が追加された点です。
                </>
        },
    ];

    return (
        <div>
            <div className='sectionTitle'>Academic Research</div>
            <div className='sectionSubtitle'>ー研究活動ー</div>
            <div className="Contents" >
                <div style={styles.researchTitle}>
                    <br />
                    学部における研究 ― Research in Bachlor's Degree
                    <br />
                </div>
                <br />
                <div style={styles.contentText}>
                    Coming Soon （新規性保持のため未掲載） ...
                    <br />
                    <br />
                </div>
                {/* Microsoft PowerPoint Slide  */}
                {/* <iframe style={styles.iframe}
                    src="https://1drv.ms/p/c/9e323e0c8636d01d/IQMBfhHKjlklQIb_MWLrXoT4AZzXlN7F_aRt1LtYYuzxWH8?em=2&amp;wdAr=1.7777777777777777">
                </iframe> */}
                <div style={styles.researchTitle}>
                    <br />
                    その他の研究活動 ― Other Research Activities
                    <br />
                </div>
                <br />
                <AccordionStyleComponent data={ActivityData} />
            </div>
        </div>
    );
};

export default AcademicResearch;
import React from 'react';
import HistoryStyleComponent from './HistoryStyleComponent';
import ICON_SCHOOL from '@mui/icons-material/School';
import ICON_BUSINESS from '@mui/icons-material/Business';

/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';

function History() {

    const HISTORY_DATA = [
        { date: '2020年 03月', title: '八王子学園八王子高等学校 卒業', icon: ICON_SCHOOL,
            text: '卓球部で部長を務め，部内リーグで優勝を勝ち取った．また，河合模試では理系科目で校内トップや、英語 - 偏差値 : 67.4、数学 - 偏差値 : 70.2を記録．' },
        { date: '2020年 04月', title: '東京都立大学 システムデザイン学部 情報科学科 入学', icon: ICON_SCHOOL,
            text: '3年次にメタバース内でのE-Commerceの実現に向けた信頼性の高い Realistic Avatar の研究プロジェクトに Research Assistant として参加．' },
        { date: '2024年 03月', title: '東京都立大学 システムデザイン学部 情報科学科 卒業', icon: ICON_SCHOOL,
            text: '総計128取得単位を取得し、GPA : 3.24/4.00を記録し、学士（情報科学）を取得。' },
        { date: '2024年 04月', title: '東京都立大学大学院 システムデザイン研究科 情報科学域 入学', icon: ICON_SCHOOL,
            text: '2024年10月に「2024年度大学院生短期派遣・受入支援制度」を利用し，ポーランドへ2週間の留学を経験．' },
        { date: '2026年 03月', title: '東京都立大学大学院 システムデザイン研究科 情報科学域 卒業', icon: ICON_SCHOOL,
            text: '2026年03月にVR分野でのトップカンファレンス「IEEE VR 2026」にて口頭発表を実施．当該論文はIEEE TVCG jounal（Q1 journal）として公開．' },
        { date: '2026年 04月', title: 'BIPROGY 株式会社 入社', icon: ICON_BUSINESS,
            text: '' },
    ];

    return (
        <div>
            <div className='sectionTitle'>Career History</div>
            <div className='sectionSubtitle'>ー経歴ー</div>
            <div className="HistoryContents">
                <HistoryStyleComponent data={HISTORY_DATA} />
            </div>
        </div>
    );
};

export default History;

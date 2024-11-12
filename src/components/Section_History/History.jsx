import React from 'react';
import HistoryStyleComponent from './HistoryStyleComponent';
import SchoolIcon from '@mui/icons-material/School';

/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';

function History() {

    const HistoryData = [
        { date: '2020年 03月', title: '八王子学園八王子高等学校 卒業', icon: SchoolIcon,
            text: '高校では卓球部で部長を務め，部内リーグで優勝を勝ち取った．また，河合模試では理系(英語，数学)で校内順位1位や、英語 - 偏差値 : 67.4、数学 - 偏差値 : 70.2などを記録した。' },
        { date: '2020年 04月', title: '東京都立大学 システムデザイン学部 情報科学科 入学', icon: SchoolIcon,
            text: '3年次には、東京大学で行われているメタバース内でのE-Commerceの実現に向けた信頼性の高いRealistic-Avatarの研究プロジェクトに研究補助アルバイトとして参加。' },
        { date: '2024年 03月', title: '東京都立大学 システムデザイン学部 情報科学科 卒業', icon: SchoolIcon,
            text: '総計、128取得単位を取得し、GPA : 3.24/4.00を記録。また、卒業時に学士号（情報科学）を取得した。' },
        { date: '2024年 04月', title: '東京都立大学大学院 システムデザイン研究科 情報科学域 入学', icon: SchoolIcon,
            text: '後期にポーランドへ短期留学予定。' },
    ];

    return (
        <div>
            <div className='sectionTitle'>Career History</div>
            <div className='sectionSubtitle'>ー経歴ー</div>
            <div className="HistoryContents">
                <HistoryStyleComponent data={HistoryData} />
            </div>
        </div>
    );
};

export default History;

import React from 'react';
import QualificationStyleComponent from './QualificationStyleComponent';

/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';

/*
 * date   : 取得年月日（YYYY.MM.DD）
 * seal   : 右上の丸い印に入れる短い文字（学位 / IT / EN / 免許 など）
 * title  : 資格名
 * issuer : 発行元
 * badge  : 右下に大きく出す文字（任意。級・点数・略称など）
 * score  : スコア詳細（任意）。これがあるカードだけ、ホバーで裏返ってスコアを表示
 *          total / max : 合計点と満点、parts : 内訳（label, value, max）
 * 新しい順に並べてください
 */
const QualificationData = [
    { date: '2026.03.25', seal: '学位', title: '修士（情報科学）', issuer: '東京都立大学大学院' },
    { date: '2024.03.25', seal: '学位', title: '学士（情報科学）', issuer: '東京都立大学' },
    { date: '2023.09.26', seal: 'IT', title: '基本情報技術者試験 合格', issuer: 'IPA 情報処理推進機構', badge: 'FE' },
    {
        date: '2023.03.05', seal: 'EN', title: 'TOEIC L&R', issuer: 'IIBC 国際ビジネスコミュニケーション協会', badge: '875',
        score: {
            label: 'TOEIC L&R SCORE', total: 875, max: 990,
            parts: [
                { label: 'Listening', value: 460, max: 495 },
                { label: 'Reading', value: 415, max: 495 },
            ],
        },
    },
    {
        date: '2023.01.29', seal: 'EN', title: 'TOEIC L&R', issuer: 'IIBC 国際ビジネスコミュニケーション協会', badge: '805',
        score: {
            label: 'TOEIC L&R SCORE', total: 805, max: 990,
            parts: [
                { label: 'Listening', value: 430, max: 495 },
                { label: 'Reading', value: 375, max: 495 },
            ],
        },
    },
    { date: '2020.06.11', seal: '免許', title: '普通自動車運転免許', issuer: '公安委員会' },
    { date: '2019.03.08', seal: 'EN', title: '実用英語技能検定 合格', issuer: '日本英語検定協会', badge: '2級' },
];

function Qualification() {
    return (
        <div>
            <div className='sectionTitle'>Qualifications</div>
            <div className='sectionSubtitle'>資格</div>
            <QualificationStyleComponent data={QualificationData} />
        </div>
    );
};

export default Qualification;

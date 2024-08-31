import React from 'react';
import QualificationStyleComponent from './QualificationStyleComponent';

/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';

function Qualification() {

    const QualificationData = [
        { date: '2019年03月08日', text: '実用英語技能検定 2級 合格' },
        { date: '2020年06月11日', text: '普通自動車運転免許証 取得' },
        { date: '2023年01月29日', text: 'TOEIC Listening & Reading Test TOTAL SCORE 805 （L : 430 & R : 375）' },
        { date: '2023年03月05日', text: 'TOEIC Listening & Reading Test TOTAL SCORE 875 （L : 460 & R : 415）' },
        { date: '2023年09月26日', text: '基本情報技術者試験 合格' },
        { date: '2024年03月25日', text: '学士（情報科学）取得' },
    ];

    return (
        <div>
            <div className='sectionTitle'>Qulifications</div>
            <div className='sectionSubtitle'>ー資格ー</div>
            <div className="QulificationContents">
                <QualificationStyleComponent data={QualificationData} />
            </div>
        </div>
    );
};

export default Qualification;

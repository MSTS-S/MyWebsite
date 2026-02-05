import React from 'react';
import AccordionStyleComponent from './AccordionStyleComponent';
//import { publications } from "./PuclicationData.jsx";
import PublicationList from "./PublicationList";
import { publicationGroups } from "./PublicationData";
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

    return (
        <div>
            <div className='sectionTitle'>Academic Research</div>
            <div className='sectionSubtitle'>ー研究活動ー</div>
            <div className="Contents" >
                <div style={styles.contentText}>
                    <PublicationList groups={publicationGroups} />
                </div>
            </div>
        </div>
    );
};

export default AcademicResearch;

import React from 'react';
import PublicationList from "./PublicationList";
import { publicationData } from "./PublicationData";

/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';

function AcademicResearch() {
    return (
        <div>
            <div className='sectionTitle'>Academic Research</div>
            <div className='sectionSubtitle'>研究活動</div>
            <div className="Contents" >
                <PublicationList items={publicationData} />
            </div>
        </div>
    );
};

export default AcademicResearch;

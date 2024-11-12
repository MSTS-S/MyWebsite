import React from 'react';
import FunctionCardStyle from './FunctionCardStyle';

/* import img */
import QR from './Img/QR-Code.png';

/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';

function Programing() {
    const FunctionData = [
        {
            img: QR,
            img_alt: 'QR-code Generator thumbnail',
            title: 'QR-Code Generator',
            url: '/qrcodegenerator',
        },

        {
            img: QR,
            img_alt: 'QR-code Generator thumbnail',
            title: 'Login Form',
            url: '/loginform',
        },
    ];

    return (
        <div>
            <div className='sectionTitle'>React Functions</div>
            <div className='sectionSubtitle'>ーReactの機能ー</div>
            <div>
                <FunctionCardStyle data={FunctionData} />
            </div>
        </div>
    );
};

export default Programing;

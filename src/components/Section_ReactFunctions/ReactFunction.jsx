import React from 'react';
import FunctionCardStyle from './FunctionCardStyle';

/* import img */
import QR from './Img/QR-Code.png';
import LOGIN_FORM from './Img/LoginForm.png';

/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';

/*
 * component : カード上部のバーに表示するコンポーネント名
 * title     : 機能名
 * desc      : 説明（1〜2文）
 * tags      : 使っているライブラリなど
 * url       : サイト内の遷移先（App.jsx の Route と合わせる）
 */
const FunctionData = [
    {
        img: QR,
        img_alt: 'QR-Code Generator の画面',
        component: '<QRCodeGenerator />',
        title: 'QR-Code Generator',
        desc: 'URLを入力するとQRコードを生成し、PNG画像として保存できます。実装したJSX・CSSのコードも同じページで確認できます。',
        tags: ['qrcode.react', 'react-toastify', 'highlight.js'],
        url: '/qrcodegenerator',
    },
    {
        img: LOGIN_FORM,
        img_alt: 'Login Form の画面',
        component: '<LoginForm />',
        title: 'Login Form',
        desc: 'パスワードの表示／非表示を切り替えられるログインフォームです。実装したJSX・CSSのコードも同じページで確認できます。',
        tags: ['useState', 'react-toastify', 'MUI Icons'],
        url: '/loginform',
    },
];

function ReactFunctions() {
    return (
        <div>
            <div className='sectionTitle'>React Functions</div>
            <div className='sectionSubtitle'>Reactの機能</div>
            <FunctionCardStyle data={FunctionData} />
        </div>
    );
};

export default ReactFunctions;

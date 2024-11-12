import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from "qrcode.react";
import { Bounce, Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import './QRCodeGenerator.css'
import 'react-toastify/dist/ReactToastify.css';

import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Section_Copyright from '../../components/Section_Copyright/Copyright';
import { useNavigate } from 'react-router-dom';

import 'highlight.js/styles/github.css';
import hljs from 'highlight.js';

const jsxCode =
    `import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from "qrcode.react";
import { ToastContainer, Zoom, toast } from 'react-toastify';
import './QRCodeGenerator.css'
import 'react-toastify/dist/ReactToastify.css';

import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

import 'highlight.js/styles/github.css';
import hljs from 'highlight.js';

function QRCodeGenerator() {
    const [inputValue, setInputValue] = useState('');
    const [qrValue, setQrValue] = useState('https://msts-hp.com/');


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const generateQR = () => {
        setQrValue(inputValue);
        toast.success('Generated QRCode', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            transition: Zoom
        });
    };

    const handleDownload = () => {
        const canvas = document.querySelector('.QRCodeCanvas');
        const link = document.createElement('a');
        link.download = 'QR-code.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    useEffect(() => {
        hljs.highlightAll(); // ページロード時にhighlight.jsを使ってハイライト
    }, []);

    return (
        <div>
            <input
                className='textfield'
                type="text" value={inputValue}
                onChange={handleInputChange}
                placeholder="enter URL..."
            />
            <br />
            <QRCodeCanvas
                className='QRCodeCanvas'
                value={qrValue}
                level="H"
                marginSize={2.5}
            />
            <br />
            <div className='downloadButton' onClick={handleDownload}>
                <DownloadForOfflineIcon />
            </div>
            <br />
            <div className='generateButton'>
                <a className="neon" onClick={generateQR}>Generate</a>
            </div>
            <ToastContainer />
        </div>
    );
};

export default QRCodeGenerator;
`;

const cssCode =
    `.textfield {
    justify-content: center;
    width: 80%;
    height: 40px;
    max-width: 750px;
    font-size: 18px;
    padding: 0 20px;
    border: 2px solid #fff694;
    border-radius: 20px;
    background-color: #000;
    color: white;
    margin: 0, auto;
}

.textfield::placeholder {
    color: white;
    opacity: 0.5;
}

.textfield:focus {
    outline: none;
    border-color: white;
}

.QRCodeCanvas {
    width: 250px !important;
    height: 250px !important;
    margin: 30px;
    margin-top: 40px;
}

.downloadButton {
    background-color: #fff694;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 auto;
}

.downloadButton svg {
    color: #000;
    font-size: 50px;
}

.downloadButton:hover {
    background-color: #f0f0f0;
}

.generateButton {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}

.neon {
    width: 250px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff694;
    cursor: pointer;
    border: #fff694 0.125rem solid;
    border-radius: 0.25rem;
}

.neon:hover {
    border: white 0.125rem solid;
    color: white
}
    `;

function QRCodeGenerator() {
    const [inputValue, setInputValue] = useState('');
    const [qrValue, setQrValue] = useState('https://msts-hp.com/');
    const [isCopiedJSX, setIsCopiedJSX] = useState(false);
    const [isCopiedCSS, setIsCopiedCSS] = useState(false);

    const TIME_TO_SHOW_CHECKBOXICON = 1500;

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const generateQR = () => {
        setQrValue(inputValue);
        toast.success('Generated QRCode', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            transition: Zoom
        });
    };

    const handleDownload = () => {
        const canvas = document.querySelector('.QRCodeCanvas');
        const link = document.createElement('a');
        link.download = 'QR-code.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    const handleCopyJSX = () => {
        navigator.clipboard.writeText(jsxCode);
        setIsCopiedJSX(true);
        setTimeout(() => {
            setIsCopiedJSX(false);
        }, TIME_TO_SHOW_CHECKBOXICON);
    };

    const handleCopyCSS = () => {
        navigator.clipboard.writeText(cssCode);
        setIsCopiedCSS(true);
        setTimeout(() => {
            setIsCopiedCSS(false);
        }, TIME_TO_SHOW_CHECKBOXICON);
    };

    useEffect(() => {
        hljs.highlightAll(); // ページロード時にhighlight.jsを使ってハイライト
    }, []);

    /* ページ遷移設定 */
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }

    /* ページ遷移時にスクロール位置を初期化 */
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [navigate]);

    return (
        <div className='QR-code-wrapper'>
            {/* HEADER */}
            <header className="function-header">
                <div className="function-header-left">
                    <div className="function-header-title">
                        QR-Code Generator
                    </div>
                </div>
                <div className="function-header-right"  onClick={handleBack}>
                    <ArrowBackIcon />
                </div>
            </header>
            <div className='QR-code-container'>
                <div className='url-input-field'>
                    <input
                        className='textfield'
                        type="text" value={inputValue}
                        onChange={handleInputChange}
                        placeholder="enter URL..."
                    />
                </div>
                <div className='QR-code-img'>
                    <QRCodeCanvas
                        className='QRCodeCanvas'
                        value={qrValue}
                        level="H"
                        marginSize={2.5}
                    />
                </div>
                <div className='downloadButton' onClick={handleDownload}>
                    <DownloadForOfflineIcon />
                </div>
                <br />
                <div className='generateButton'>
                    <a className="neon" onClick={generateQR}>Generate</a>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className='code-container'>
                <div className='code-section'>
                    <div className='code-title-container'>
                        <div className='code-title'>JSX</div>
                        <div className='copyIcon' onClick={handleCopyJSX}>
                            {isCopiedJSX ? <CheckBoxIcon /> : <ContentCopyIcon />}
                        </div>
                    </div>
                    <div className='code-content-container'>
                        <pre className='code-content'>
                            <code>{jsxCode}</code>
                        </pre>
                    </div>
                </div>
                <div className='code-section'>
                    <div className='code-title-container'>
                        <div className='code-title'>CSS</div>
                        <div className='copyIcon' onClick={handleCopyCSS}>
                            {isCopiedCSS ? <CheckBoxIcon /> : <ContentCopyIcon />}
                        </div>
                    </div>
                    <div className='code-content-container'>
                        <pre className='code-content'>
                            <code>{cssCode}</code>
                        </pre>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <div className='footer'>
                <Section_Copyright />
            </div>
        </div>
    );
};

export default QRCodeGenerator;
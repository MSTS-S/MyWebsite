import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from "qrcode.react";
import { Bounce, Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import './QRCodeGenerator.css'
import 'react-toastify/dist/ReactToastify.css';

import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import 'highlight.js/styles/github.css';
import hljs from 'highlight.js';

const jsxCode =
    `import React, { useState } from 'react';
import { QRCodeCanvas } from "qrcode.react";
import './QRCodeGenerator.css'
        
function QRCodeGenerator() {
    const [inputValue, setInputValue] = useState('');
    const [qrValue, setQrValue] = useState('https://msts-hp.com/');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const generateQR = () => {
        setQrValue(inputValue);
    };

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
            <div className='generateButton'>
                <a className="neon" onClick={generateQR}>生成</a>
            </div>
        </div>
    );
};

export default QRCodeGenerator;
`;

const cssCode =
    `.textfield {
    width: 50%;
    height: 40px;
    max-width: 500px;
    font-size: 18px;
    border-radius: 20px;
    padding: 0 20px;
    border: 2px solid var(--clr-neon);
    background-color: var(--clr-bg);
    color: white;
    transition: border-color 0.3s ease;
}

.textfield::placeholder {
    color: white;
    opacity: 0.5;
}

.textfield:focus {
    outline: none;
    border-color: white;
}

.generateButton {
    margin-top: 20px;
}

.QRCodeCanvas {
    width: 50% !important;
    max-width: 250px !important;
    height: auto !important;
    margin: 30px;
    margin-top: 40px;
}

:root {
    --clr-neon: #fff694;
    --clr-bg: #000000;
}

.neon {
    width: 150px;
    height: 30px;
    text-align: center;
    vertical-align: middle;
    color: var(--clr-neon);
    display: inline-block;
    position: relative;
    cursor: pointer;
    border: var(--clr-neon) 0.125em solid;
    padding: 0.25em 1em;
    border-radius: 0.25em;
    text-shadow:
        0 0 .20em #FFF7,
        0 0 .30em var(--clr-neon);
    box-shadow:
        inset 0 0 .5em var(--clr-neon),
        0 0 .5em var(--clr-neon);
}

.neon::before {
    content: "";
    position: absolute;
    top: 140%;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-neon);
    transform:
        perspective(0.2em) rotateX(10deg) scale(1.3, 0.40);
    filter: blur(1em);
    opacity: 0.3;
    transition: opacity 150ms linear;
}

.neon::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--clr-neon);
    box-shadow: 0 0 2em var(--clr-neon);
    z-index: -1;
    opacity: 1;
    transition: opacity 100ms linear;
}

.neon:hover::after {
    opacity: 1;
}

.neon:hover,
.neon:focus {
    color: white;
}

.neon:hover::before {
    opacity: 1;
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
                        <div className='copyIcon'  onClick={handleCopyCSS}>
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
        </div>
    );
};

export default QRCodeGenerator;
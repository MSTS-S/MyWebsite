import React, { useState, useEffect } from "react";
import { ToastContainer, Zoom, toast } from 'react-toastify';
import "../ReactFunctionContentsStyle.css"
import "./LoginForm.css";
import "react-toastify/dist/ReactToastify.css";

import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Section_Copyright from "../../components/Section_Copyright/Copyright";
import { useNavigate } from "react-router-dom";

import 'highlight.js/styles/github.css';
import hljs from 'highlight.js';

/* ANOVA */
import EXCEL_FILE from './ANOVA-dummyData.xlsx';
import PDF_FILE from './LectureMaterial.pdf'
const presentation_styles = {
    width: '100%',
    maxWidth: '1000px',
    aspectRatio: '16 / 9',
    overflow: 'hidden',
    border: 'none'
};


const jsxCode =
    `import React, { useState } from "react";
import { ToastContainer, Zoom, toast } from 'react-toastify';
import "./LoginForm.css";
import "react-toastify/dist/ReactToastify.css";
/* import Icon */
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [_isPasswordVisible, setPasswordVisiblity] = useState(false);

    /* 設定：ユーザネーム */
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    /* 設定：パスワード */
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // パスワードの可視性を切り替える関数
    const togglePasswordVisibility = () => {
        setPasswordVisiblity(!_isPasswordVisible);
    };

    // 常に[Authentication failed.]を返す
    const handleLogin = (e) => {
        e.preventDefault();
        toast.error('Authentication failed.', {
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

    return (
        <div className="LoginForm-wrapper">
            <div className="LoginForm-container">
                <div className="loginForm-title">MSTS - S</div>

                <br />

                <div className="input-field">
                    <input
                        className="loginForm-textfield"
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="username"
                    />
                    <PersonIcon className="input-icon" />
                </div>

                <br />

                <div className="input-field">
                    <input
                        className="loginForm-textfield"
                        type={_isPasswordVisible ? "text" : "password"}
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="password"
                    />
                    {_isPasswordVisible ? (
                        <VisibilityIcon className="input-icon loginForm-click-icon"  onClick={togglePasswordVisibility} />
                    ) : (
                        <VisibilityOffIcon className="input-icon loginForm-click-icon" onClick={togglePasswordVisibility} />
                    )}
                </div>
                <div className="loginForm-forgot-password">
                    Forgot password?
                </div>

                <br />

                <div className="loginForm-button">
                    <div className="login-button-style" onClick={handleLogin}>
                        Login
                    </div>
                </div>
                <div className="loginForm-registration-message">
                    Not Registered? <span className="loginForm-create-account">Create an account</span>
                </div>
            </div>
            <br />
            <br />
            <ToastContainer />
        </div>
    );
}

export default LoginForm;
`;

const cssCode = 
    `.LoginForm-wrapper {
    margin-top: 100px;
    background-color: rgb(30, 30, 30);
    padding-top: 100px;
    text-align: center;
}

.LoginForm-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(0, 0, 0);
    border-radius: 5px;
    box-shadow: 0 0 15px 2.5px rgba(225, 225, 225);
    width: 325px;
    height: 300px;
    margin: auto;
}

.loginForm-title {
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: x-large;
}

.loginForm-input-field {
    position: relative;
    display: flex;
    align-items: center;
}

.loginForm-input-field .loginForm-textfield {
    width: 100%;
    padding-right: 40px; /* アイコンのスペースを確保 */
}

.loginForm-textfield {
    justify-content: center;
    width: 80%;
    height: 30px;
    max-width: 750px;
    font-size: 18px;
    margin: 0 30px;
    padding: 0 15px;
    border: 2px solid #fff694;
    border-radius: 20px;
    background-color: #000;
    color: white;
    margin: 0, auto;
}

.loginForm-textfield::placeholder {
    color: white;
    opacity: 0.5;
    position: absolute;
    left: 15px;
}

.loginForm-textfield:focus {
    outline: none;
    border-color: rgb(255, 255, 255);
}

.loginForm-input-icon {
    position: absolute;
    right: 40px; /* 右端からの位置 */
    color: #ffffff; /* アイコンの色（必要に応じて変更） */
}

.loginForm-click-icon {
    cursor: pointer;
}

.loginForm-forgot-password {
    color: white;
    width: 150px;
    text-align: center;
    margin-left: 25px;
    cursor: pointer;
}

.loginForm-forgot-password:hover {
    text-decoration: underline;
}

.loginForm-button {
    display: flex;
    justify-content: center;
    margin-top: 0px;
}

.login-button-style {
    width: 150px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff694;
    cursor: pointer;
    border: #fff694 0.125rem solid;
    border-radius: 1rem;
}

.login-button-style:hover {
    border: rgb(255, 255, 255) 0.125rem solid;
    color: rgb(255, 255, 255)
}

.loginForm-registration-message {
    color: white;
    margin-top: 10px;
}

.loginForm-create-account {
    font-weight: bold;
    color: #1b94e0;
}

.loginForm-create-account:hover {
    text-decoration: underline;
    cursor: pointer;
}
`;

function LoginForm() {
    /* ANOVA用特別コード - Start Point*/
    const VALID_USERNAME = "N-Lab";
    const VALID_PASSWORD = "ANOVA-2024";
    const [_isLoggedIn, setIsLoggedIn] = useState(false); // ログイン状態を管理

    const handleDownloadPDF = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = PDF_FILE;
        /* download時のファイル名指定*/
        link.download = '統計解析 – 分散分析の基本概念と実践 –';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const handleDownloadExcel = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = EXCEL_FILE;
        /* download時のファイル名指定*/
        link.download = 'ANOVA-dummyData.xlsx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    /* ANOVA用特別コード - End Point*/



    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [_isPasswordVisible, setPasswordVisiblity] = useState(false);

    /* 設定：ユーザネーム */
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    /* 設定：パスワード */
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // パスワードの可視性を切り替える関数
    const togglePasswordVisibility = () => {
        setPasswordVisiblity(!_isPasswordVisible);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        {/*
        toast.error('Authentication failed.', {
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
        */}

        /* ANOVA用コード*/
        if (username === VALID_USERNAME && password === VALID_PASSWORD)
        {
            /* ログイン状態の変更 */
            setIsLoggedIn(true);

            toast.success('Login successful.', {
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
        }
        else
        {
            toast.error('Authentication failed.', {
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
        }
    };

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    /* Code表示用 - Start Point */
    const TIME_TO_SHOW_CHECK_BOX_ICON = 1500;

    const [isCopiedJSX, setIsCopiedJSX] = useState(false);
    const [isCopiedCSS, setIsCopiedCSS] = useState(false);

    const handleCopyJSX = () => {
        navigator.clipboard.writeText(jsxCode);
        setIsCopiedJSX(true);
        setTimeout(() => {
            setIsCopiedJSX(false);
        }, TIME_TO_SHOW_CHECK_BOX_ICON);
    };

    const handleCopyCSS = () => {
        navigator.clipboard.writeText(cssCode);
        setIsCopiedCSS(true);
        setTimeout(() => {
            setIsCopiedCSS(false);
        }, TIME_TO_SHOW_CHECK_BOX_ICON);
    };

    useEffect(() => {
        hljs.highlightAll(); // ページロード時にhighlight.jsを使ってハイライト
    }, []);
    /* Code表示用 - End Point */

    return (
        <div className="LoginForm-wrapper">
            {/* HEADER */}
            <header className="function-header">
                <div className="function-header-left">
                    <div className="function-header-title">Login Form</div>
                </div>
                <div className="function-header-right" onClick={handleBack}>
                    <ArrowBackIcon />
                </div>
            </header>

            {/* BODY */}
            {!_isLoggedIn ? (
                <div className="LoginForm-container">
                    <div className="loginForm-title">MSTS - S</div>

                    <br />

                    <div className="loginForm-input-field">
                        <input
                            className="loginForm-textfield"
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder="username"
                        />
                        <PersonIcon className="loginForm-input-icon" />
                    </div>

                    <br />

                    <div className="loginForm-input-field">
                        <input
                            className="loginForm-textfield"
                            type={_isPasswordVisible ? "text" : "password"}
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="password"
                        />
                        {_isPasswordVisible ? (
                            <VisibilityIcon className="loginForm-input-icon loginForm-click-icon"  onClick={togglePasswordVisibility} />
                        ) : (
                            <VisibilityOffIcon className="loginForm-input-icon loginForm-click-icon" onClick={togglePasswordVisibility} />
                        )}
                    </div>
                    <div className="loginForm-forgot-password">
                        Forgot password?
                    </div>

                    <br />

                    <div className="loginForm-button">
                        <div className="login-button-style" onClick={handleLogin}>
                            Login
                        </div>
                    </div>
                    <div className="loginForm-registration-message">
                        Not Registered? <span className="loginForm-create-account">Create an account</span>
                    </div>
                </div>
            ) : (
                    <div className="presentation-wrapper">
                        <div className="presentation-title">
                            統計解析「分散分析の基本概念と実践」
                        </div>
                        <iframe style={presentation_styles}
                            title="統計解析「分散分析の基本概念と実践」のプレゼンテーション"
                            frameborder="5px"
                            src="https://1drv.ms/b/c/9e323e0c8636d01d/IQQJp3_5K1-UQoVIAORFisHkAQWZCIMjsMxBvBW7ReAxOCE" 
                        />

                        <br />
                        <br />

                        <div className="loginForm-button2">
                            <div className="excel-download-button-style" onClick={handleDownloadPDF}>
                                講義資料 - PDF形式
                                <br />
                                ダウンロード
                            </div>
                            <div className="excel-download-button-style" onClick={handleDownloadExcel}>
                                ダミーデータ - Excel
                                <br />
                                ダウンロード
                            </div>
                        </div>
                    </div>
            )}

            {/* Code表示用 */}
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
}

export default LoginForm;

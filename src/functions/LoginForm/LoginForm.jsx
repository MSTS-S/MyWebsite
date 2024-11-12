import React, { useState, useEffect } from "react";
import { Bounce, Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import "./LoginForm.css";
import "react-toastify/dist/ReactToastify.css";

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Section_Copyright from "../../components/Section_Copyright/Copyright";
import { useNavigate } from "react-router-dom";

const presentation_styles = {
    margin: '0 auto',
    display: 'flex',
    width: '100%',
    maxWidth: '1200px',
    aspectRatio: '16 / 9',
    position: 'relative',
    overflow: 'hidden',
    border: 'none'
};

function LoginForm() {
    const VALID_USERNAME = "N-Lab";
    const VALIC_PASSWORD = "ANOVA-2024";

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    /* ログイン状態を管理 */
    const [_isLoggedIn, setIsLoggedIn] = useState(false);


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === VALID_USERNAME && password === VALIC_PASSWORD)
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

    const handleDownloadExcel = (e) => {

    }

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

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
                    <h2>MSTS - S</h2>

                    <br />

                    <div className="input-field">
                        <input
                            className="loginform-textfield"
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
                            className="loginform-textfield"
                            type="text"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="password"
                        />
                        <LockIcon className="input-icon" />
                    </div>

                    <br />

                    <div className="loginButton">
                        <div className="login-button-style" onClick={handleLogin}>
                            Login
                        </div>
                    </div>
                </div>
            ) : (
                    <div className="presentation-wrapper">
                        <iframe style={presentation_styles}
                            title="統計解析「分散分析の基本概念と実践」のプレゼンテーション"
                            src="https://1drv.ms/p/c/9e323e0c8636d01d/IQMBfhHKjlklQIb_MWLrXoT4AZzXlN7F_aRt1LtYYuzxWH8?em=2&amp;wdAr=1.7777777777777777"
                        />

                        <br />
                        <br />

                        <div className="loginButton">
                            <div className="excel-download-button-style" onClick={handleDownloadExcel}>
                                ANOVA用  EXCELファイル
                                <br />
                                ダウンロード
                            </div>
                        </div>
                    </div>
            )}

            <br />
            <br />
            <br />
            <br />

            <ToastContainer />
            <div className='footer'>
                <Section_Copyright />
            </div>
        </div>
    );
}

export default LoginForm;

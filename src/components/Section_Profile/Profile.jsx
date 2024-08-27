import React from 'react';
/* import img */
import ProfileImage from './ProfilePicture2.jpg';
/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';
import './Profile.css'

function Programing() {

    return (
        <div>
            <div className='profileTitle'>Profile</div>
            <div className='profileSubtitle'>ープロフィールー</div>
            <div className="ProfileContents">
                <div className="ProfilePicture">
                    <img src={ProfileImage} alt="Logo" />
                </div>
                <div className="ProfileDiscription">
                    <p><font face="HGS明朝E">芹澤尚舜</font> <font face="BIZ UDP明朝 Medium">(Masatoshi SERIZAWA)</font></p>
                    <p>
                        東京都立大学大学院 システムデザイン研究科 情報科学域
                        <br />
                        西内研究室 修士1年
                        <br />
                        <br />
                        生誕 : 2001年 東京都
                    </p>
                </div>
            </div>

            {/* <div class="NameCardDisplay">
                <a href="BusinessCard.html" class="button" onclick="BusinessCard.html"> 名刺 </a>
            </div> */}
        </div>
    );
};

export default Programing;

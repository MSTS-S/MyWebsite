import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
/* import for popup-windouw */
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Section_BusinessCard from '../Section_BusinessCard/BusinessCard';
import CloseIcon from '@mui/icons-material/Close';
/* import img */
import ProfileImage from './ProfilePicture2.jpg';
/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';
import './Profile.css';

import MenuIcon from '@mui/icons-material/Menu';

function Programing() {
    const [openPopup, setOpenPopup] = React.useState(false);

    const handlePopupOpen = () => {
        setOpenPopup(true);
    };

    const handlePopupClose = () => {
        setOpenPopup(false);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className='profileTitle'>Profile</div>
            <div className='profileSubtitle'>ープロフィールー</div>
            <br />
            <br />
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
            <br />
            <Dialog
                open={openPopup}
                onClose={handlePopupClose}
                maxWidth="md"
                fullWidth
                disableEnforceFocus
            >
                <DialogActions className="closeButtonContainer">
                    <Button className="closeButton" onClick={handlePopupClose}>
                        {/* ボタンサイズ、色調整 */}
                        <CloseIcon sx={{ fontSize: '2rem', color: 'black' }} />
                    </Button>
                </DialogActions>
                <DialogContent>
                    <Section_BusinessCard />
                </DialogContent>
            </Dialog>
            <div className='Button' style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Box sx={{ width: '100%', maxWidth: '450px', textAlign: 'center' }}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            width: '80%',
                            backgroundColor: 'black',
                            color: 'white',
                            '&:hover': { backgroundColor: '#333' }
                        }}
                        onClick={handlePopupOpen}
                    >
                        名刺
                    </Button>
                </Box>
            </div>
        </div>
    );
};

export default Programing;

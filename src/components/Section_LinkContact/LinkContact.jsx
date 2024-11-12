import React from 'react';
/* import MUI ICON */
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import { Box, IconButton } from '@mui/material';
/* import img */
import DiscordIcon from './Discord.png';
/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';

function LinkContact() {
    const _iconSize = '50px';

    const iconStyle = {
        width: _iconSize,
        height: _iconSize,
    };

    const handleLinkClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div>
            <div className='sectionTitle'>Link / Contact</div>
            <div className='sectionSubtitle'>ー外部リンク・連絡先ー</div>
            <div className="Contents" >
                <div style={{ textAlign: 'justify', fontSize: '18px', lineHeight: '1.8' }}>
                    <br />
                    Affiliation : 東京都立大学大学院 システムデザイン研究科 情報科学域
                    <br />
                    Email : serizawa-masatoshi[at]ed.tmu.ac.jp
                    <br />
                    ※[at]の部分を@に変えてください。
                </div>
            </div>
            <br />
            <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" gap={5} >
                <IconButton onClick={() => handleLinkClick('https://msts-hp.com/')}>
                    <XIcon style={iconStyle} />
                </IconButton>
                <IconButton onClick={() => handleLinkClick('https://www.instagram.com/m_seri_m/')}>
                    <InstagramIcon style={iconStyle} />
                </IconButton>
                <IconButton onClick={() => handleLinkClick('https://github.com/MSTS-S')}>
                    <GitHubIcon style={iconStyle} />
                </IconButton>
                <IconButton onClick={() => handleLinkClick('https://discord.com/users/719479967397838898')}>
                    <img src={DiscordIcon} style={iconStyle} />
                </IconButton>
                <IconButton onClick={() => handleLinkClick('mailto:serizawa-masatoshi@ed.tmu.ac.jp')}>
                    <MailIcon style={iconStyle} />
                </IconButton>
            </Box>
        </div>
    );
};

export default LinkContact;

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
            <br />
            <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" gap={5} >
                <IconButton onClick={() => handleLinkClick('https://msts-hp.com/')}>
                    <XIcon style={iconStyle} />
                </IconButton>
                <IconButton onClick={() => handleLinkClick('https://www.instagram.com/rn._sts/')}>
                    <InstagramIcon style={iconStyle} />
                </IconButton>
                <IconButton onClick={() => handleLinkClick('https://github.com/MSTS-S')}>
                    <GitHubIcon style={iconStyle} />
                </IconButton>
                <IconButton onClick={() => handleLinkClick('https://discord.com/users/719479967397838898')}>
                    <img src={DiscordIcon} style={iconStyle} />
                </IconButton>
                <IconButton onClick={() => handleLinkClick('https://msts-hp.com/')}>
                    <MailIcon style={iconStyle} />
                </IconButton>
            </Box>
        </div>
    );
};

export default LinkContact;

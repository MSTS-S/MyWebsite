import React from 'react';
import { Box, Button } from '@mui/material';
/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';
import './BusinessCard.css';
/* import img */
import MSTS_BusinessCard from './MSTS_BusinessCard.png';

function BusinessCard() {
    const handleButtonClick = () => {
        const link = document.createElement('a');
        link.href = MSTS_BusinessCard;
        link.download = 'MSTS_BusinessCard.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
            <div style={{ paddingLeft: '5%', paddingRight: '5%', paddingBottom: '5%' }}>
                <div className='sectionTitle'>名刺</div>
                <br />
                <div className="Contents" >
                    <div className="BusinessCard">
                        <img src={MSTS_BusinessCard} alt="Business Card" />
                    </div>
                </div>
                <br />
                <br />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            width: '100%',
                            maxWidth: '450px',
                            backgroundColor: 'black',
                            color: 'white',
                            '&:hover': { backgroundColor: '#333' }
                        }}
                        onClick={handleButtonClick}
                    >
                        ダウンロード
                    </Button>
                </Box>
            </div>
    );
};

export default BusinessCard;

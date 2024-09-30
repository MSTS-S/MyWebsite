import { Height } from '@mui/icons-material';
import React from 'react';

function Copyright() {
    const CopyrightStyle = {
        width: '100%',
        height: '75px',
        backgroundColor: '#ddd',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        margin: '0',
        padding: '0',
    };

    return (
        <div style={CopyrightStyle}>
            © 2024 Masastoshi SERIZAWA. All rights reserved.
        </div>
    );
};

export default Copyright;

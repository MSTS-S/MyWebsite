import React from 'react';
import {
    Card,
    CardHeader,
    Avatar,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
  } from "@material-ui/core";

/* import img */
/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';
import './Qualification.css'

function Qualification() {

    return (
        <div>
            <div className='sectionTitle'>Qulifications</div>
            <div className='sectionSubtitle'>ー資格ー</div>
            <div className="QulificationContents">
            </div>
        </div>
    );
};

export default Qualification;

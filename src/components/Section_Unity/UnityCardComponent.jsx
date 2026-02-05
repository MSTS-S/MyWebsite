import React from 'react';
import Button from '@mui/material/Button';
import './UnityCardComponent.css';

const UnityCardComponent = ({ data }) => {
    const openNewTab = (path) => {
        window.open(path, '_blank');
    };

    return (
        <div className='unity__container'>
            {data.map((item, index) => (
                <div className="unity__cardContainer" key={index}>
                    {/* Left: Project Representative Image */}
                    <div className="unity__projectRepresentativeImage">
                        <img src={item.img} alt="Card" />
                    </div>

                    {/* Right: Project Description */}
                    <div className="unity__projectDescriptionContainer">
                        <div className="unity__projectTitle">
                            <div>{item.title}</div>
                        </div>

                        <div className="unity__underline"></div>

                        <div className="unity__categoryContainer">
                            <div className="unity__categoryName"> {item.j1} </div>
                            <div className="unity__categoryName"> {item.j2} </div>
                            <div className="unity__categoryName"> {item.j3} </div>
                        </div>

                        <div className="unity__projectExplanation">
                            <p>{item.description}</p>
                            <p>{item.manipulation}</p>
                        </div>
                        <div className='unity__playButton' onClick={() => openNewTab(item.path)}>
                            <Button
                                disableRipple
                                disableElevation
                                sx={{
                                    color: '#fff',
                                    fontWeight: 'bold',             
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: 'transparent'
                                    },
                                    minWidth: 0,
                                    padding: 0
                                }}
                            >
                                Click to Play
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default UnityCardComponent;
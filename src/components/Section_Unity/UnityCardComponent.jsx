import React from 'react';
import Button from '@mui/material/Button';
import './UnityCardComponent.css';

const UnityCardComponent = ({ data }) => {
    const openNewTab = (path) => {
        window.open(path, '_blank');
    };

    return (
        <div className='ProjectList'>
            {data.map((item, index) => (
                <div className="gameCard card-radius_02" key={index}>
                    <article className="card_02Game">
                        <div className="cardContent">
                            <div className="card__Gameimage">
                                <img src={item.img} alt="Card" />
                            </div>

                            <div className="card__body_game">
                                <div className="card__gameTitle">
                                    <p>{item.title}</p>
                                </div>

                                <div className="card__gameDiscription">
                                    <div className="gameCard_Small card-radius_02game">
                                        <div className="card_02Game">{item.j1}</div>
                                    </div>
                                    <div className="gameCard_Small card-radius_02game">
                                        <div className="card_02Game">{item.j2}</div>
                                    </div>
                                    <div className="gameCard_Small card-radius_02game">
                                        <div className="card_02Game">{item.j3}</div>
                                    </div>
                                </div>

                                <div className="card__gameDiscription">
                                    <p>{item.description}</p>
                                    <p>{item.manipulation}</p>
                                </div>
                                <div className="NameCardDisplay">
                                    <Button
                                        variant="contained"
                                        sx={{
                                            background: "black",
                                            color: "white",
                                            ":hover": { background: "black" },
                                        }}
                                        onClick={() => openNewTab(item.path)}
                                    >
                                        Click to Play
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            ))}
        </div>

    );
};

export default UnityCardComponent;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FunctionCardStyle.css';

function FunctionCard({ data }) {
  const msg = "Check Function →"
  const navigate = useNavigate();

  const handleCardClick = (url) => {
    navigate(url);
  };

  return (
    <div className='reactFunctions__container'>
      {data.map((item, index) => (
        <div key={index}>
          <div className="reactFunctions__cardContainer" onClick={() => handleCardClick(item.url)}>
            <div className='reactFunctions__thumbnail'>
              <img src={item.img} alt={item.img_alt} />
            </div>
            <div className='reactFunctions__text'>
              <div className='reactFunctions__title'>
                {item.title}
              </div>
              <div className='reactFunctions__msg'>
                {msg}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FunctionCard;
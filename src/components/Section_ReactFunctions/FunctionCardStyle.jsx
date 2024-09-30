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
    <div className='card-wrapper'>
      {data.map((item, index) => (
        <div key={index}>
          <div className="card-container" onClick={() => handleCardClick(item.url)}>
            <div className='function-thumbnail'>
              <img src={item.img} alt={item.img_alt} />
            </div>
            <div className='function-text'>
              <div className='function-title'>
                {item.title}
              </div>
              <div className='function-msg'>
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
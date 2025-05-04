import React from 'react';

import './ProgramingCardStyle.css';

function ProgramingCard({ data = [] }) {
  return (
    <div className='programingCard__wrapper'>
      {data.map((item, index) => (
        <div className='programingCard__container' key={index}>
          {/* Card Image */}
          <img src={item.img} alt={item.img_alt} className='programingCard__image' />
          {/* Card Title */}
          <div className='programingCard__title'>
            {item.title}
          </div>
          <div className='programingCard__underline'></div>
          {/* description*/}
          <div className='programingCard__content'>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProgramingCard;
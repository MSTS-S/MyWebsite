import React from 'react';

import './ProgramingCardStyle.css';

function ProgramingCard({ data = [] }) {
  return (
    <div className='programingCard__wrapper'>
      {data.map((item, index) => (
        <div className='programingCard__container' key={index}>
          {/* Accent bar (extends on hover) */}
          <span className='programingCard__bar' aria-hidden='true'></span>
          {/* Background Icon (image, or text when there is no image) */}
          {item.img ? (
            <img
              src={item.img}
              alt=''
              aria-hidden='true'
              className={
                item.invertIcon
                  ? 'programingCard__bgIcon programingCard__bgIcon--invert'
                  : 'programingCard__bgIcon'
              }
            />
          ) : (
            <span className='programingCard__mono' aria-hidden='true'>
              {item.mono}
            </span>
          )}
          {/* Card Number & Years */}
          <div className='programingCard__head'>
            <span className='programingCard__index'>
              {String(index + 1).padStart(2, '0')}
            </span>
            {item.years && (
              <span className='programingCard__years'>{item.years}</span>
            )}
          </div>
          {/* Card Title */}
          <div className='programingCard__title'>
            {item.title}
          </div>
          {/* description */}
          <div className='programingCard__content'>
            {item.content}
          </div>
          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className='programingCard__tags'>
              {item.tags.map((tag) => (
                <span className='programingCard__tag' key={tag}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ProgramingCard;

import React from 'react';
import { Link } from 'react-router-dom';
import './FunctionCardStyle.css';

function FunctionCard({ data = [] }) {
  return (
    <div className='reactFunctions__grid'>
      {data.map((item) => (
        <div className='reactFunctions__card' key={item.url}>
          {/* ターミナル風のヘッダー */}
          <div className='reactFunctions__bar'>
            <span className='reactFunctions__dot reactFunctions__dot--red' aria-hidden='true'></span>
            <span className='reactFunctions__dot reactFunctions__dot--yellow' aria-hidden='true'></span>
            <span className='reactFunctions__dot reactFunctions__dot--green' aria-hidden='true'></span>
            <span className='reactFunctions__component'>{item.component}</span>
          </div>

          <img className='reactFunctions__thumbnail' src={item.img} alt={item.img_alt} />

          <div className='reactFunctions__body'>
            <span className='reactFunctions__title'>{item.title}</span>
            <span className='reactFunctions__desc'>{item.desc}</span>
            <div className='reactFunctions__tags'>
              {item.tags.map((tag) => (
                <span className='reactFunctions__tag' key={tag}>{tag}</span>
              ))}
            </div>
            <Link className='reactFunctions__button' to={item.url}>
              デモとコードを見る <span className='reactFunctions__arrow' aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FunctionCard;

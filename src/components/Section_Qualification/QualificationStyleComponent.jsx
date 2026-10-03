import React from 'react';
import './QualificationStyleComponent.css';

const percent = (value, max) => `${Math.round((value / max) * 1000) / 10}%`;

/* 表面（すべてのカード共通） */
function CardFront({ item }) {
  return (
    <div className='qualCard__frame'>
      <div className='qualCard__head'>
        <span className='qualCard__kicker'>CERTIFICATE</span>
        <span className='qualCard__seal'>{item.seal}</span>
      </div>
      <div className='qualCard__title'>{item.title}</div>
      <div className='qualCard__issuer'>{item.issuer}</div>
      <div className='qualCard__foot'>
        <span className='qualCard__date'>{item.date}</span>
        {item.badge && <span className='qualCard__badge'>{item.badge}</span>}
      </div>
    </div>
  );
}

/* 裏面（score があるカードのみ） */
function CardBack({ item }) {
  const { score } = item;
  return (
    <div className='qualCard__frame qualCard__frame--back'>
      <div className='qualCard__head'>
        <span className='qualCard__kicker qualCard__kicker--accent'>{score.label}</span>
        <span className='qualCard__date'>{item.date}</span>
      </div>
      <div className='qualCard__score'>
        <span className='qualCard__scoreTotal'>{score.total}</span>
        <span className='qualCard__scoreMax'>/ {score.max}</span>
      </div>
      <div className='qualCard__track'>
        <div className='qualCard__fill' style={{ '--w': percent(score.total, score.max) }}></div>
      </div>
      {score.parts && (
        <div className='qualCard__parts'>
          {score.parts.map((part) => (
            <div className='qualCard__part' key={part.label}>
              <div className='qualCard__partHead'>
                <span>{part.label}</span>
                <span className='qualCard__partValue'>{part.value}</span>
              </div>
              <div className='qualCard__track qualCard__track--thin'>
                <div className='qualCard__fill qualCard__fill--sub' style={{ '--w': percent(part.value, part.max) }}></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function QualificationCards({ data = [] }) {
  return (
    <div className='qualCard__wrapper'>
      {data.map((item, index) =>
        item.score ? (
          /* ホバー（スマホはタップ、キーボードはフォーカス）で裏返るカード */
          <div
            className='qualCard qualCard--flip'
            key={index}
            tabIndex={0}
            aria-label={`${item.title} ${item.badge ?? ''} スコアの詳細`}
          >
            <div className='qualCard__inner'>
              <div className='qualCard__face'>
                <CardFront item={item} />
              </div>
              <div className='qualCard__face qualCard__face--back'>
                <CardBack item={item} />
              </div>
            </div>
          </div>
        ) : (
          /* ホバーで少し傾くカード */
          <div className='qualCard qualCard--tilt' key={index}>
            <div className='qualCard__body'>
              <span className='qualCard__sheen' aria-hidden='true'></span>
              <CardFront item={item} />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default QualificationCards;

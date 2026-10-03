import React from 'react';
import './HistoryStyleComponent.css';

function HistoryStyleComponents({ data = [] }) {
    return (
        <ol className='history__list'>
            {data.map((item, index) => (
                <li
                    className={item.now ? 'history__item history__item--now' : 'history__item'}
                    key={index}
                >
                    {/* 年月 */}
                    <div className='history__date'>{item.date}</div>

                    {/* 縦線の上のアイコン（MUI） */}
                    <div className='history__rail' aria-hidden='true'>
                        <span className='history__icon'>
                            <item.icon />
                        </span>
                    </div>

                    {/* 内容 */}
                    <div className='history__body'>
                        <div className='history__head'>
                            <span className='history__title'>{item.title}</span>
                            {item.now && <span className='history__now'>NOW</span>}
                        </div>
                        {item.text && item.text.split('\n').map((line, i) => (
                            <p className='history__text' key={i}>{line}</p>
                        ))}
                    </div>
                </li>
            ))}
        </ol>
    );
};

export default HistoryStyleComponents;

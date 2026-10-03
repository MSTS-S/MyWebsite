import React, { useEffect, useRef, useState } from 'react';
import './UnityCardComponent.css';

/* スマホ非対応の理由として案内する Unity 公式ドキュメント */
const WEBGL_DOC_URL = 'https://docs.unity3d.com/ja/2023.2/Manual/webgl-browsercompatibility.html';

/* '操作：カーソルキー，マウス' → ['カーソルキー', 'マウス'] */
const toKeys = (manipulation = '') =>
    manipulation.replace(/^操作[：:]/, '').split(/[，,、]/).map((k) => k.trim()).filter(Boolean);

const pad2 = (n) => String(n).padStart(2, '0');

const PlayIcon = ({ size }) => (
    <svg width={size} height={size} viewBox='0 0 24 24' aria-hidden='true'>
        <path d='M8 5v14l11-7z' fill='currentColor' />
    </svg>
);

const UnityCardComponent = ({ data = [] }) => {
    const [current, setCurrent] = useState(0);
    const [phase, setPhase] = useState('idle'); // idle → opening → opened → idle
    const timers = useRef([]);

    useEffect(() => () => timers.current.forEach(clearTimeout), []);

    const clearTimers = () => {
        timers.current.forEach(clearTimeout);
        timers.current = [];
    };

    const select = (index) => {
        clearTimers();
        setPhase('idle');
        setCurrent(index);
    };

    const play = () => {
        // ポップアップブロックを避けるため、クリックと同時に新しいタブを開く
        window.open(data[current].path, '_blank', 'noopener');
        clearTimers();
        setPhase('opening');
        timers.current.push(setTimeout(() => setPhase('opened'), 600));
        timers.current.push(setTimeout(() => setPhase('idle'), 2600));
    };

    if (data.length === 0) return null;
    const item = data[current];
    const label = phase === 'opening' ? '起動中…' : phase === 'opened' ? '開きました ↗' : 'Click to Play';

    return (
        <div className='unityShowcase'>
            {/* スマホ非対応のお知らせ */}
            <div className='unityShowcase__notice'>
                <svg className='unityShowcase__noticeIcon' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' aria-hidden='true'>
                    <circle cx='12' cy='12' r='10' />
                    <path d='M12 8h.01M11 12h1v5h1' />
                </svg>
                <span>
                    WebGLで書き出したゲームをブラウザで遊べます。<strong>PCでのプレイを推奨</strong>しています（スマホは非対応）。
                </span>
                <a className='hyperlink unityShowcase__noticeLink' href={WEBGL_DOC_URL} target='_blank' rel='noopener noreferrer external'>
                    詳細
                </a>
            </div>

            {/* 選択中のゲーム（大きく表示） */}
            <div className='unityShowcase__feature'>
                <div className='unityShowcase__stage'>
                    <img src={item.img} alt={`${item.title} のゲーム画面`} />
                </div>

                <div className='unityShowcase__detail'>
                    <span className='unityShowcase__count'>{pad2(current + 1)} / {pad2(data.length)}</span>
                    <h3 className='unityShowcase__title'>{item.title}</h3>
                    <div className='unityShowcase__tags'>
                        {[item.j1, item.j2, item.j3].filter(Boolean).map((tag) => (
                            <span className='unityShowcase__tag' key={tag}>{tag}</span>
                        ))}
                    </div>
                    <p className='unityShowcase__desc'>{item.description}</p>
                    <div className='unityShowcase__keys'>
                        <span>操作</span>
                        {toKeys(item.manipulation).map((key) => (
                            <kbd key={key}>{key}</kbd>
                        ))}
                    </div>
                    <div className='unityShowcase__actions'>
                        <button
                            type='button'
                            className={`unityShowcase__play${phase !== 'idle' ? ` is-${phase}` : ''}`}
                            onClick={play}
                            aria-label={`${item.title} をプレイ（新しいタブで開きます）`}
                        >
                            <PlayIcon size={18} />
                            <span>{label}</span>
                            <span className='unityShowcase__playBar' aria-hidden='true'></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* ゲーム一覧（押すと上の表示が切り替わる） */}
            <div className='unityShowcase__all'>
                <span className='unityShowcase__allLabel'>ALL GAMES ・ {pad2(data.length)}</span>
                <div className='unityShowcase__list'>
                    {data.map((game, index) => (
                        <button
                            type='button'
                            key={game.title}
                            className={`unityShowcase__mini${index === current ? ' is-active' : ''}`}
                            onClick={() => select(index)}
                            aria-pressed={index === current}
                        >
                            <img src={game.img} alt='' />
                            <span className='unityShowcase__miniBody'>
                                <span className='unityShowcase__miniTitle'>{game.title}</span>
                                <span className='unityShowcase__miniMeta'>{pad2(index + 1)} ・ {game.j1} {game.j2}</span>
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UnityCardComponent;

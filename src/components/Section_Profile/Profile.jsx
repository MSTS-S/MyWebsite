import React from 'react';
/* import img */
import PROFILE_IMAGE from './ProfilePicture2.jpg';
/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';
import './Profile.css';

/* 区切り線の下に並べる項目（ラベル：内容） */
const PROFILE_FACTS = [
    { label: 'DEGREE', value: 'Master of Computer Science' },
    { label: 'BORN', value: '2001' },
    { label: 'BASE', value: 'Tokyo' }, // 活動拠点
    { label: 'FOCUS', value: 'VR研究 ・ Unity ・ Java / Spring' },
];

function Profile() {
    return (
        <div className='profile'>
            <img className='profile__photo' src={PROFILE_IMAGE} alt='芹澤 尚舜' />
            <h1 className='profile__name'>芹澤 尚舜</h1>
            <div className='profile__nameEn'>Masatoshi SERIZAWA</div>
            <hr className='profile__divider' />
            <dl className='profile__facts'>
                {PROFILE_FACTS.map(({ label, value }) => (
                    <React.Fragment key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                    </React.Fragment>
                ))}
            </dl>
        </div>
    );
};

export default Profile;

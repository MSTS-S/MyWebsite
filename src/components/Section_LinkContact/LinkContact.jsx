import React from 'react';
/* import MUI ICON */
import MailIcon from '@mui/icons-material/Mail';
/* CSS */
import '../Section_Title.css';
import '../Hyperlink.css';
import './LinkContact.css';
/* 連絡先・外部リンクのデータ（ヘッダーのメニューと共通） */
import { MAIL, LINKS, linkProps } from './ContactData';

function LinkContact() {
    return (
        <div>
            <div className='sectionTitle'>Link / Contact</div>
            <div className='sectionSubtitle'>外部リンク・連絡先</div>

            <div className='contact'>
                <p className='contact__lead'>お気軽にご連絡ください</p>
                <p className='contact__sub'>お仕事のご相談やご質問は、メールで受け付けています。</p>

                <a className='contact__mail' {...linkProps(MAIL.url)}>
                    <MailIcon />
                    <span>メールを送る</span>
                </a>
                {MAIL.address && <span className='contact__address'>{MAIL.address}</span>}

                <ul className='contact__links'>
                    {LINKS.map((link) => (
                        <li key={link.name}>
                            <a className='contact__link' {...linkProps(link.url)} aria-label={link.name}>
                                <span className='contact__icon'>
                                    {link.img ? <img src={link.img} alt='' /> : link.icon}
                                </span>
                                <span className='contact__name'>{link.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LinkContact;

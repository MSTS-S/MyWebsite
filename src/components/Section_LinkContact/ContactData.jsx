import React from 'react';
/* import MUI ICON */
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
/* import img */
import DiscordIcon from './Discord.png';

/*
 * 連絡先・外部リンクのデータ
 * Link / Contact セクションと、ヘッダーのメニューの両方で使う
 * （ここを変えれば両方に反映される）
 */

/*
 * メール：設定したら url を 'mailto:アドレス' に、address にアドレスを入れる
 *        （address が空のあいだは、アドレスの行は表示されない）
 */
export const MAIL = {
    url: 'https://msts-hp.com/',
    address: '',
};

/* 外部リンク（icon は MUI のアイコン、img は画像） */
export const LINKS = [
    { name: 'GitHub', icon: <GitHubIcon />, url: 'https://github.com/MSTS-S' },
    { name: 'X', icon: <XIcon />, url: 'https://msts-hp.com/' },
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/rn._sts/' },
    { name: 'Discord', img: DiscordIcon, url: 'https://discord.com/users/719479967397838898' },
];

/* mailto: は同じタブ、それ以外は新しいタブで開く */
export const linkProps = (url) =>
    url.startsWith('mailto:') ? { href: url } : { href: url, target: '_blank', rel: 'noopener noreferrer external' };

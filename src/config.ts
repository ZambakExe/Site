import { BsDiscord, BsInstagram, BsSteam, BsGithub, Bs123 } from 'react-icons/bs';
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai'
import { SiTypescript, SiVite } from 'react-icons/si';
import { DiNodejsSmall, DiReact, DiVisualstudio } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';

export default {
    'github': {
        'username': 'ZambakExe'
    },
    'discord': {
        'id': '720322511639674921'
    },
    'social_media_accounts': [
        {
            'label': 'Github',
            'to': 'https://github.com/ZambakExe',
            'icon': BsGithub,
        },
        {
            'label': 'Discord Users',
            'to': 'https://discord.com/users/720322511639674921',
            'icon': BsDiscord,
        },
        {
            'label': 'Instagram',
            'to': 'https://instagram.com/zambak_exe',
            'icon': BsInstagram,
        },
        {
            'label': 'Discord Server',
            'to': 'https://discord.gg/J9yRnzrDhJ',
            'icon': BsDiscord,
        },
        {
            'label': 'Discord Uptime',
            'to': 'https://discord.gg/J9yRnzrDhJ',
            'icon': BsDiscord,
        }
    ],
    'techs': [
        {
            'lang': 'HTML5',
            'icon': AiFillHtml5
        },
        {
            'lang': 'CSS3',
            'icon': IoLogoCss3
        },
        {
            'lang': 'JavaScript',
            'icon': IoLogoJavascript
        },
        {
            'lang': 'TypeScript',
            'icon': SiTypescript
        },
        {
            'lang': 'Node.JS',
            'icon': DiNodejsSmall
        },
        {
            'lang': 'React',
            'icon': DiReact
        },
        {
            'lang': 'Vite',
            'icon': SiVite
        },
        {
            'lang': 'Next.js',
            'icon': TbBrandNextjs
        },
    ]
}

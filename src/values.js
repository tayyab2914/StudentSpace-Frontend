export const PRODUCTION = true;
export const LIVE_MODE = false

let DOMAIN_NAME
if (PRODUCTION) 
{
    DOMAIN_NAME = 'https://admin.studentspace.online';
} 
else 
{ 
  DOMAIN_NAME = 'http://127.0.0.1:8000';
}

export {  DOMAIN_NAME };



const cuteAnimeNames = [
    'Mio', 'Sakura', 'Haru', 'Momo', 'Yuki',
    'Kiki', 'Chika', 'Rin', 'Neko', 'Sora',
    'Luna', 'Koko', 'Miku', 'Yumi', 'Tomo',
    'Fuyu', 'Aya', 'Saki', 'Momo', 'Riko',
    'Kira', 'Nana', 'Maya', 'Suzu', 'Hina',
    'Kane', 'Miyu', 'Riko', 'Ai', 'Hana',
    'Mia', 'Kira', 'Nari', 'Yuri', 'Nori',
    'Mimi', 'Pip', 'Lily', 'Ruri', 'Poko',
    'Luna', 'Mira', 'Coco', 'Tori', 'Rara',
    'Hoshi', 'Momo', 'Luna', 'Nina', 'Yui'
];

export function GET_RANDOM_NAME_COMBINATION() {
    const randomIndex1 = Math.floor(Math.random() * cuteAnimeNames.length);
    let randomIndex2;
    
    do {
        randomIndex2 = Math.floor(Math.random() * cuteAnimeNames.length);
    } while (randomIndex1 === randomIndex2);
    
    return `${cuteAnimeNames[randomIndex1]} ${cuteAnimeNames[randomIndex2]}`;
}

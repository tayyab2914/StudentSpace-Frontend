export const PRODUCTION = true;
export const LIVE_MODE = false

let DOMAIN_NAME
if (PRODUCTION) 
{
    DOMAIN_NAME = 'https://admin.studentspace.website';
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


export const  formatRating = (rating)=> {
    if (Number.isInteger(rating)) {
      return rating.toFixed(1); 
    }
    return rating;
  }

  export const getFacultyName = (key) => {
    const facultyMap = {
      "foit": "Faculty of Information and Technology",
      "foe": "Faculty of Engineering",
      "fohs": "Faculty of Humanities and Social Sciences",
      "foll": "Faculty of Languages and Literature",
      "fol": "Faculty of Law",
      "foms": "Faculty of Management Sciences",
      "fomm": "Faculty of Media and Mass Communication",
      "fop": "Faculty of Pharmacy",
      "fost": "Faculty of Science and Technology"
    };
  
    return facultyMap[key] || "Unknown Faculty"; // Return "Unknown Faculty" if key not found
  };
  
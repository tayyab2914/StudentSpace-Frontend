export const PRODUCTION = true;
export const TESTING = true

let DOMAIN_NAME
let REDIRECT_URI

if(PRODUCTION && TESTING)
{
    REDIRECT_URI = 'https://student-space-frontend.vercel.app/account'
}
else if (PRODUCTION)
{
    REDIRECT_URI = 'https://studentspace.online/account'
}
else
{
    REDIRECT_URI = 'http://localhost:3000/account'
}

DOMAIN_NAME = PRODUCTION ? 'https://admin.studentspace.website':'http://127.0.0.1:8000'


const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_AUTH_CLIENT_ID = "337525075460-6ltsjfmn3f0nl66q2jg3am4qr292981h.apps.googleusercontent.com"
const GOOGLE_AUTH_SCOPE = [ "https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile",  ].join(" ");

export {  DOMAIN_NAME, GOOGLE_AUTH_URL,GOOGLE_AUTH_CLIENT_ID ,GOOGLE_AUTH_SCOPE,REDIRECT_URI};
























const cuteAnimeNames = [ 'Mio', 'Sakura', 'Haru', 'Momo', 'Yuki', 'Kiki', 'Chika', 'Rin', 'Neko', 'Sora', 'Luna', 'Koko', 'Miku', 'Yumi', 'Tomo', 'Fuyu', 'Aya', 'Saki', 'Momo', 'Riko', 'Kira', 'Nana', 'Maya', 'Suzu', 'Hina', 'Kane', 'Miyu', 'Riko', 'Ai', 'Hana', 'Mia', 'Kira', 'Nari', 'Yuri', 'Nori', 'Mimi', 'Pip', 'Lily', 'Ruri', 'Poko', 'Luna', 'Mira', 'Coco', 'Tori', 'Rara', 'Hoshi', 'Momo', 'Luna', 'Nina', 'Yui'];

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
  

  export const getFacultyNameByDepNo = (num)=>{
    const facultyMap = {
        1:"foe",
        2:"fohs" ,
        3:"foit",
        4:"foll",
        5:"fol" ,
        6:"foms",
        7:"fomm",
        8:"fop" ,
        9:"fost",
      };
  
  
    
      return facultyMap[num] || "Unknown Faculty"; 
  }
//   1:"foit",
//   2:"foe" ,
//   3:"fohs",
//   4:"foll",
//   5:"fol" ,
//   6:"foms",
//   7:"fomm",
//   8:"fop" ,
//   9:"fost",

// helpers.js or utils.js
export const calculateAverageRatings = (reviews) => {
    const totalReviews = reviews.length;
  
    if (totalReviews === 0) {
      return {
        averageGradingFairness: 0,
        averageLeniency: 0,
        averageSubjectKnowledge: 0,
      };
    }
  
    // Sum all the ratings for each category
    const totalGradingFairness = reviews.reduce((acc, review) => acc + review.rating_grading_fairness, 0);
    const totalLeniency = reviews.reduce((acc, review) => acc + review.rating_leniency, 0);
    const totalSubjectKnowledge = reviews.reduce((acc, review) => acc + review.rating_subject_knowledge, 0);
  

    const averageGradingFairness = (totalGradingFairness / (totalReviews*5)) * 100;
    const averageLeniency = (totalLeniency / (totalReviews* 5))* 100 ;
    const averageSubjectKnowledge = (totalSubjectKnowledge / (totalReviews* 5))* 100 ;

  
    return {
      averageGradingFairness,
      averageLeniency,
      averageSubjectKnowledge,
    };
  };
  
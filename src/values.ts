export const PRODUCTION = process.env.REACT_APP_PRODUCTION === "true";
export const TESTING = process.env.REACT_APP_TESTING === "true";

export const DOMAIN_NAME = process.env.REACT_APP_BACKEND_DOMAIN_NAME;
export const FRONTEND_DOMAIN_NAME = process.env.REACT_APP_FRONTEND_DOMAIN_NAME;
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

export const GOOGLE_AUTH_CLIENT_ID = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;
export const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
export const GOOGLE_AUTH_SCOPE = [ "https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile",  ].join(" ");

const cuteAnimeNames = [ 'Mio', 'Sakura', 'Haru', 'Momo', 'Yuki', 'Kiki', 'Chika', 'Rin', 'Neko', 'Sora', 'Luna', 'Koko', 'Miku', 'Yumi', 'Tomo', 'Fuyu', 'Aya', 'Saki', 'Momo', 'Riko', 'Kira', 'Nana', 'Maya', 'Suzu', 'Hina', 'Kane', 'Miyu', 'Riko', 'Ai', 'Hana', 'Mia', 'Kira', 'Nari', 'Yuri', 'Nori', 'Mimi', 'Pip', 'Lily', 'Ruri', 'Poko', 'Luna', 'Mira', 'Coco', 'Tori', 'Rara', 'Hoshi', 'Momo', 'Luna', 'Nina', 'Yui'];

export function GET_RANDOM_NAME_COMBINATION() {
    const randomIndex1 = Math.floor(Math.random() * cuteAnimeNames.length);
    let randomIndex2;
    
    do {
        randomIndex2 = Math.floor(Math.random() * cuteAnimeNames.length);
    } while (randomIndex1 === randomIndex2);
    
    return `${cuteAnimeNames[randomIndex1]} ${cuteAnimeNames[randomIndex2]}`;
}

export const formatRating = (rating: number) => {
    if (Number.isInteger(rating)) {
      return rating.toFixed(1); 
    }
    return rating;
}

export const getFacultyName = (key: string) => {
    const facultyMap: { [key: string]: string } = {
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

    return facultyMap[key] || "Unknown Faculty";
};

export const getFacultyNameByDepNo = (num: number) => {
    const facultyMap: { [key: number]: string } = {
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

export const calculateAverageRatings = (reviews: any[]) => {
    const totalReviews = reviews.length;
  
    if (totalReviews === 0) {
      return {
        averageGradingFairness: 0,
        averageLeniency: 0,
        averageSubjectKnowledge: 0,
      };
    }
  
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
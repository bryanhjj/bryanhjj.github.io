// replacing these with devicon for more consistency
const row1 = ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg', 
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg', 
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', 
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',];

const row2 = ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg', 
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg', 
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg', 
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg'];

const row3 = ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg', 
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg', 
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg', 
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-plain-wordmark.svg'];


const getImages = (progName, img) => {
    progName.forEach((string, index) => {
        img.push({
            id: index + 1,
            source:  `${string}`,
            name: index + 1,
        });
    });
};

export const skillImages1 = [];
export const skillImages2 = [];
export const skillImages3 = [];

getImages(row1, skillImages1);
getImages(row2, skillImages2);
getImages(row3, skillImages3);
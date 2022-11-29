const row1 = ['html5', 'css3', 'javascript', 'react',];

const row2 = ['python', 'nodejs', 'expressjs', 'passportjs'];

const row3 = ['sql', 'mongodb', 'github', 'heroku'];


const getImages = (progName, img) => {
    progName.forEach((skillName, index) => {
        img.push({
            id: index + 1,
            source: process.env.PUBLIC_URL + `/skills/${skillName}.png`,
            name: skillName,
        });
    });
};

export const skillImages1 = [];
export const skillImages2 = [];
export const skillImages3 = [];

getImages(row1, skillImages1);
getImages(row2, skillImages2);
getImages(row3, skillImages3);
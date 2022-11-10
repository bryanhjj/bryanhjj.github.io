const progSkills = ['html5', 'css3', 'javascript', 
    'react', 'next', 'python', 'nodejs', 'expressjs', 
    'passportjs' ,'sql', 'mongodb', 'github', 'heroku'
];

const getImages = (progName, img) => {
    progName.forEach((skillName, index) => {
        img.push({
            id: index + 1,
            source: process.env.PUBLIC_URL + `/skills/${skillName}.png`,
            name: skillName,
        });
    });
};

export const skillImages = [];

getImages(progSkills, skillImages);
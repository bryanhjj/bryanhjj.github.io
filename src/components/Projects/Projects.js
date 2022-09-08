import React, { useState } from 'react';
import { Swipeable } from 'react-swipeable';
import { myProjects } from './myProjects'; // to complete

// css setup
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Projects = (props) => {
    const [earlierProj, setEarlierProj] = useState(myProjects[myProjects.length - 1]);
    const [prevProj, setPrevProj] = useState(myProjects[0]);
    const [curProj, setCurProj] = useState(myProjects[1]);
    const [nextProj, setNextProj] = useState(myProjects[2]);
    const [laterProj, setLaterProj] = useState(myProjects[3]);
    const [nextBtn, setNextBtn] = useState(0);
    const [backBtn, setBackBtn] = useState(0);

    let projectName = curProj.name;
    let githubLink = curProj.github;
    let pageLink = curProj.link;

    /* light/dark mode stuff
    const arrow = props.mode === 'light' ? arrowLight : arrowDark;
    const carouselArrow = props.mode === 'light' ? carouselArrowLight : carouselArrowDark;
    */
   
    const pressNextHandler = () => {
        setBackBtn(1);
        setTimeout(() => {
            const prev = {...prevProj};
            const cur = {...curProj};
            const next = {...nextProj};
            const later = {...laterProj};
            console.log(prev);
            console.log(cur);
            console.log(next);
            console.log(later);
            setEarlierProj(prev);
            setPrevProj(cur);
            setCurProj(next);
            setNextProj(later);
            const i = myProjects.findIndex((e) => e.name === later.name);
            let newLater;
            if (i === myProjects.length - 1) {
                newLater = myProjects[0];
            } else {
                newLater = myProjects[i + 1];
            }
            setLaterProj(newLater);
        }, 800);
    };

    const pressBackHandler = () => {
        setNextBtn(1);
        setTimeout(() => {
            const next = {...nextProj};
            const prev = {...prevProj};
            const cur = {...curProj};
            const ear = {...earlierProj};
            setLaterProj(next);
            setNextProj(cur);
            setCurProj(prev);
            setPrevProj(ear);
            const i = myProjects.findIndex((e) => e.name === ear.name);
            let newEarlier;
            if (i === 0) {
                newEarlier = myProjects[myProjects.length - 1];
            } else {
                newEarlier = myProjects[i - 1];
            }
            setEarlierProj(newEarlier);
        }, 800);
    };

    return (
        <Box>
            <Typography variant="h2">
                My Projects
            </Typography>

            <Box>
                <Box>
                    <img
                        goforward={nextBtn}
                        goback={backBtn}
                        onAnimationEnd={() => {
                            setBackBtn(0);
                            setNextBtn(0);
                        }}
                        src={earlierProj.gif}
                        alt=''
                    />
                    <img
                        goforward={nextBtn}
                        goback={backBtn}
                        onAnimationEnd={() => {
                            setBackBtn(0);
                            setNextBtn(0);
                        }}
                        src={prevProj.gif}
                        alt=''
                    />
                    <Swipeable
                        onSwipedLeft = {(eventData) => pressNextHandler()}
                        onSwipedRight = {(eventData) => pressBackHandler()}
                    >
                        <img
                            goforward={nextBtn}
                            goback={backBtn}
                            onAnimationEnd={() => {
                                setBackBtn(0);
                                setNextBtn(0);
                            }}
                            src={curProj.gif}
                            alt=''
                        />
                    </Swipeable>
                    <img
                        goforward={nextBtn}
                        goback={backBtn}
                        onAnimationEnd={() => {
                            setBackBtn(0);
                            setNextBtn(0);
                        }}
                        src={nextProj.gif}
                        alt=''
                    />
                    <img
                        goforward={nextBtn}
                        goback={backBtn}
                        onAnimationEnd={() => {
                            setBackBtn(0);
                            setNextBtn(0);
                        }}
                        src={laterProj.gif}
                        alt=''
                    />
                </Box>

                <Box>
                    <IconButton onClick={pressBackHandler}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <Typography>
                        {projectName}
                    </Typography>
                    <IconButton onClick={pressNextHandler}>
                        <ArrowForwardIcon/>
                    </IconButton>
                </Box>

                <Box>
                    <a href={pageLink}>See live preview</a>
                    <a href={githubLink}>See Github repo</a>
                </Box>
            </Box>
        </Box>
    );
};

export default Projects;
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { myProjects } from './myProjects';

// css setup
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Projects = (props) => {
    const [index, setIndex] = useState(0);

    let githubLink = myProjects[index].github;
    let pageLink = myProjects[index].link;

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Box>
            <Typography variant="h2">
                My Projects
            </Typography>

            <Carousel activeIndex={index} onSelect={handleSelect}>
                {myProjects.map((p) => 
                    <Carousel.Item key={p.name}>
                        <img
                            className="d-block w-100"
                            src={p.screenshot}
                            alt=''  
                        />
                        <Carousel.Caption>
                            <h3>{p.name}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>

            <Box>
                <a href={pageLink}>See live preview</a>
                <a href={githubLink}>See Github repo</a>
            </Box>
        </Box>
    );
};

export default Projects;
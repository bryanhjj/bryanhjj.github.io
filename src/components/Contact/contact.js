import React from 'react';
import './contact.css';

// mui setup
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = (props) => {
    return (
        <Box className='contactContainer'>
            <Box className='emailContainer'>
                <EmailIcon />
                <Typography variant='body2' className='email'>
                    bryan.how@live.com
                </Typography>
            </Box>

            <Box className='githubContainer'>
                <GitHubIcon />
                <Typography variant='body2' className='github'>
                    <a href='https://github.com/bryanhjj'>Github</a>
                </Typography>
            </Box>

            <Typography variant='body2' color='text.secondary' align='center' {...props}>
                Copyright © 69
            </Typography>   
        </Box>  
    );
};

export default Contact;
import React from 'react';
import styles from './contact.css';

// mui setup
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = (props) => {
    return (
        <Box>
            <Box className={styles.Email}>
                <EmailIcon />
                <Typography variant='body2'>
                    <a href='bryan.how@live.com'>bryan.how@live.com</a>
                </Typography>
            </Box>

            <Box className={styles.Github}>
                <GitHubIcon />
                <Typography variant='body2'>
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
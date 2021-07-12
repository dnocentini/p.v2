import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

export default {
    name: 'Dinny Nocentini',
    title: 'Software Engineer',

    contacts:{
        Email: {
            link: 'mailto: dinny0313@gmail.com',
            text: 'dinny0313@gmail.com',
            icon: <EmailIcon />
        },
        LinkedIn: {
            link: 'https://www.linkedin.com/in/dinny-nocentini/',
            text: 'dinny-nocentini',
            icon: <LinkedInIcon />
        },
        GitHub: {
            link: 'https://github.com/dnocentini',
            text: 'dnocentini',
            icon: <GitHubIcon />
        }  
    }
};
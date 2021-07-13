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
    },

    about: 'Hello! My name is Dinny Nocentini. I come from a business background, a field that taught me a lot about resilience, empathy, and teamwork. As a Software Engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging and great user experiences.'
};
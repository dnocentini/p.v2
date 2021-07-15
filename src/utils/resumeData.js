import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { Language } from '@material-ui/icons';


const Data = {
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

    about: 'Hello! My name is Dinny Nocentini. I come from a business background, a field that taught me a lot about resilience, empathy, and teamwork. As a Software Engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging and great user experiences.',

    experiences: [
        {
            title: 'Software Engineering Fellow @General Assembly',
            date: 'Oct 2019 - Jan 2020',
            description: '- Engaged in a full-time and full-stack software engineering program. \n - Acquired the latest front and back-end programming languages, tools, and methodologies including: HTML, CSS, JavaScript, jQuery, NodeJS, ReactJS, Python, Django, SASS, PostgreSQL, MongoDB, Git, GitHub, and more. \n - Developed & deployed in Heroku a Full Stack flashcards game using React, Express.js, Node.js, MongoDB, Mongoose, Token Authentication and Materialize. \n - Constructed a Full Stack application to manage airline flight inventory and ticketing using MongoDB, Mongoose, JavaScript, EJS, Express.js, Node.js and Bootstrap. \n - Created a Full Stack application for an e-commerce artwork website using Python, Django, Django authentication, Bootstrap and deployed to Heroku. \n - Developed & deployed in Heroku a Full Stack application for a to do/shopping list app using JavaScript, EJS, Express.js, Node.js, MongoDB, Mongoose, MongoDB Atlas, OAuth Authentication and Materialize.'
        }
    
    ],

    educations: [
        {
            title: 'Computer Software Engineering Intensive \n General Assembly',
            date: '2019 - 2020'
        },
        {
            title: "Bachelor's Degree, Business Administration \n Universidade Paulista",
            date: '2007 - 2010'
        },
    ],

    skills: [
        {
            title: 'FRONT-END',
            description: [
                'ReactJS',
                'JavaScript',
                'Material UI',
                'Bootstrap',
            ],
        },    
            
        {
            title: 'BACK-END',
            description: [
                'NodeJS',
                'Python',
            ],
        },
        {    
            title: 'DATABASE',
            description: [
                'MongoDB',
                'MySQL',
            ],
        },
        {    
            title: 'SOURCE CONTROL',
            description: [
                'Git',
                'GitHub',
                'SCRUM/Agile',
            ],
        },
    ],

    projects: [
        {
            tag: 'ReactJS',
            image: require('../assets/images/pv2.png').default,
            title: 'Portfolio',
            caption: 'This Portfolio',
            description: 'HTML CSS React.js',
            links: [
                {link: 'https://dnocentini.github.io/p.v2/', icon: <Language />},
                {link: 'https://github.com/dnocentini/p.v2', icon: <GitHubIcon />},
                
            ],
        },
        {
            tag: 'ReactJS',
            image: require('../assets/images/mmassage.png').default,
            title: 'M Massage',
            caption: 'Massage Therapist Website',
            description: 'HTML CSS React.js',
            links: [
                {link: 'https://dnocentini.github.io/mmassage/', icon: <Language />},
                {link: 'https://github.com/dnocentini/mmassage', icon: <GitHubIcon />},
                
            ],
        },
        {
            tag: 'JavaScript',
            image: require('../assets/images/listy.png').default,
            title: 'Listy',
            caption: 'Cute To Do List',
            description: 'JS Node Express MongoDB',
            links: [
                {link: 'https://listy-ga.herokuapp.com/users', icon: <Language />},
                {link: 'https://github.com/dnocentini/GA-Project2', icon: <GitHubIcon />},            ],
        },
        {
            tag: 'ReactJS',
            image: require('../assets/images/pv1.png').default,
            title: 'Portfolio V1',
            caption: 'My First Portfolio',
            description: 'HTML CSS React.js',
            links: [
                {link: 'https://dnocentini.github.io/portfolio-app/', icon: <Language />},
                {link: 'https://github.com/dnocentini/portfolio-app', icon: <GitHubIcon />},            ],
        },
        {
            tag: 'JavaScript',
            image: require('../assets/images/fg.png').default,
            title: 'Flashcard Game',
            caption: 'Math Game for Kids',
            description: 'HTML CSS JavaScript',
            links: [
                {link: 'https://dnocentini.github.io/flashcard-game/', icon: <Language />},
                {link: 'https://github.com/dnocentini/flashcard-game/', icon: <GitHubIcon />},            ],
        },
        {
            tag: 'Python',
            image: require('../assets/images/artw.png').default,
            title: 'Art World',
            caption: 'Art Galery Website',
            description: 'Django Python',
            links: [
                {link: 'https://artworld-sei.herokuapp.com/', icon: <Language />},
                {link: 'https://github.com/dnocentini/artworld', icon: <GitHubIcon />},            ],
        },
        
    ],
};

export default Data;
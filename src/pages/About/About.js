import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import resumeData from '../../utils/resumeData';
import './About.css';


const About = () => {
    return (
        <>
            {/* About me */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <Typography variant='h6' className='section_title_text'>About Me</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
                </Grid>
            </Grid>

            {/* Resume */}
            <Grid container className='section'></Grid>
        </>
    );
};

export default About;

import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import './About.css';


const About = () => {
    return (
        <>
            {/* About me */}
            <Grid container className='section pb_45 pt_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <Typography variant='h6' className='section_title_text'>About Me</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutme_text'>{resumeData.about}{" "}
                        <a href='mailto: dinny0313@gmail.com' rel="noreferrer" target='_blank'>Let's make something special</a>.
                    </Typography>
                </Grid>
            </Grid>

            
        </>
    );
};

export default About;

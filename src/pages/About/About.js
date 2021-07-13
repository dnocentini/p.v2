import React from 'react';
import { TimelineContent, TimelineItem } from '@material-ui/lab';
import { Grid, Typography } from '@material-ui/core';
import ComputerIcon from '@material-ui/icons/Computer';
import SchoolIcon from '@material-ui/icons/School';
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
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
            <Grid container className='section'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <Typography variant='h6' className='section_title_text'>Resume</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className='resume_timeline'>
                        {/* Experiences */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline 
                                title='Relevant Experience' 
                                icon={<ComputerIcon />}>
                                {resumeData.experiences.map(experience => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent>
                                            <Typography className='timeline_title'>{experience.title}</Typography>
                                            <Typography variant='caption' className='timeline_date'>{experience.date}</Typography>
                                            <Typography variant='body2' className='timeline_description'>{experience.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>

                        {/* Education */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline 
                                title='Education' 
                                icon={<SchoolIcon />}>
                                {resumeData.educations.map(education => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent>
                                            <Typography className='timeline_title'>{education.title}</Typography>
                                            <Typography variant='caption' className='timeline_date'>{education.date}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default About;

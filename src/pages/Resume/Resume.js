import React from 'react';
import { TimelineContent, TimelineDot, TimelineItem } from '@material-ui/lab';
import { Grid, Paper, Typography } from '@material-ui/core';
import ComputerIcon from '@material-ui/icons/Computer';
import SchoolIcon from '@material-ui/icons/School';
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
import resumeData from '../../utils/resumeData';
import './Resume.css';

const Resume = () => {
    return (
        <>
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
                                            <Typography variant='body2' className='timeline_title'>{experience.title}</Typography>
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
                                            <Typography variant='body2' className='timeline_title'>{education.title}</Typography>
                                            <Typography variant='caption' className='timeline_date'>{education.date}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Skills */}
            <Grid container className='section graybg pb_45 p_30'>
                <Grid item xs={12}>
                    <Grid container justify='space-between' spacing={3}>
                        {resumeData.skills.map(skill => (
                            <Grid item xs={12} sm={6} lg={3}>
                                <Paper elevation={3} className='skill'>
                                    <Typography variant='h6' className='skill_title'>
                                        {skill.title}
                                    </Typography>
                                    {skill.description.map((element) => (
                                        <Typography variant='body2' className='skill_description'>
                                            <TimelineDot variant={'outlined'} className='timeline_dot' />
                                            {element}
                                        </Typography>
                                    ))}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Resume;

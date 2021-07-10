import { Typography } from '@material-ui/core';
import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopIcon from '@material-ui/icons/Laptop';

import './Timeline.css';

const CustomTimeline = ({ title, children }) => {
    return (
        <Timeline className={'timeline'}>
            {/* Item Header */}
            <TimelineItem className={'timeline_firstItem'}>
                <TimelineSeparator>
                    <TimelineDot className={'timeline_dot_header'}>{<LaptopIcon />}</TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" className={'timeline_header'}>
                        {title}
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            {children}

            {/* Remaining Items */}
            <TimelineItem>
                <CustomTimelineSeparator />
                <TimelineContent>GitHub</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

export const CustomTimelineSeparator = () => (
    <TimelineSeparator className={'separator_padding'}>
        <TimelineDot variant={'outlined'} className={'timeline_dot'}/>
        <TimelineConnector />
    </TimelineSeparator>
);


export default CustomTimeline;

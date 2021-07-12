import { Typography } from '@material-ui/core'
import React from 'react';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

import resumeData from '../../utils/resumeData';

import './Profile.css';

const CustomTimelineItem = ({ title, text}) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>
                <Typography>
                    <span>{title}:</span> {text}
                </Typography>
        </TimelineContent>
    </TimelineItem>
)

const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>

            <figure className="profile_image">
                <img src={require('../../assets/images/me.jpg').default} alt="" />
            </figure>

            <div className="profile_information">
                <CustomTimeline icon={<PersonOutlineIcon />}>
                    <CustomTimelineItem title='Name' text={resumeData.name} />
                    <CustomTimelineItem title='Job' text={resumeData.title} />
                    <CustomTimelineItem title='Email' text={resumeData.email} />
                </CustomTimeline>
                <br />
                <button>Download Cv</button>

            </div>
        </div>
    )
}

export default Profile

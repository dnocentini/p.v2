import { Typography } from '@material-ui/core'
import React from 'react';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import CustomButton from '../Button/Button'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import GetAppIcon from '@material-ui/icons/GetApp';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

import resumeData from '../../utils/resumeData';
import PDF from '../../assets/documents/Resume.pdf'

import './Profile.css';

const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className="timeline_content">
            {link ? (
                <Typography className="timelineItem_text">
                    <span>{title}:</span>{" "}
                    <a href={link} rel="noreferrer" target='_blank'>
                        {text}
                    </a>
                </Typography>
            ) : (
                <Typography className="timelineItem_text">
                    <span>{title}:</span> {text}
                </Typography>
            )}
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

                    {Object.keys(resumeData.contacts).map(key => (
                        <CustomTimelineItem title={key} text={resumeData.contacts[key].text} link={resumeData.contacts[key].link}/>
                    ))}
                </CustomTimeline>
                <div className='button_container'>
                    <CustomButton href={PDF}  text='Download CV' icon={<GetAppIcon />} />
                </div>    
            </div>
        </div>
    )
}

export default Profile

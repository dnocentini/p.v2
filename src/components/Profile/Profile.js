import { Typography } from '@material-ui/core'
import React from 'react';
import CustomTimeline from '../Timeline/Timeline';

import './Profile.css';

const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">Dinny Nocentini</Typography>
                <Typography className="title">Software Engineer</Typography>
            </div>
            <figure className="profile_image"> 
                <img src={require('../../assets/images/me.jpg').default} alt=""/>
            </figure>
            <div className="profile_information">
                <CustomTimeline />
                <br/>
                <button>Download Cv</button>

            </div>
        </div>
    )
}

export default Profile

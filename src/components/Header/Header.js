import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {
    Nav,
    Navbar
} from 'react-bootstrap';
import {
    HomeRounded,
    Telegram,
} from '@material-ui/icons';

import CustomButton from '../Button/Button';
import resumeData from '../../utils/resumeData';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = (props) => {
    const pathName = props.location.pathname;

    return (
        <Navbar expand='lg' sticky='top' className='header'>
            {/*Home link*/}
            <Nav.Link as={NavLink} to='/' className='header_navlink'>
                <Navbar.Brand className='header_home'>
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className='header_left'>
                    {/* About link */}
                    <Nav.Link 
                        as={NavLink} 
                        to='/' 
                        className={pathName === '/' ? 'header_link_active' : 'header_link'}>
                        Resume
                    </Nav.Link>

                    {/* Projects link */}
                    <Nav.Link 
                        as={NavLink} 
                        to='/projects' 
                        className={pathName === '/projects' ? 'header_link_active' : 'header_link'}>
                        Projects
                    </Nav.Link>
                </Nav>

                <div className="header_right">
                    {Object.keys(resumeData.contacts).map((key) => (
                        <a href={resumeData.contacts[key].link} rel="noreferrer" target="_blank">
                            {resumeData.contacts[key].icon}
                        </a>
                    ))}
                    <CustomButton text={"Hire Me"} icon={<Telegram />} />
                </div>
            </Navbar.Collapse>

        </Navbar>
    );
};

export default withRouter(Header);

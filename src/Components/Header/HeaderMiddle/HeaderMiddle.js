import React from 'react';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import { Link } from 'react-router-dom'
import profileImg from '../../../images/profile/profilePic.jpg'
import './HeaderMiddle.css'
import '../../Button.css'
const HeaderMiddle = () => {
    return (
        <section className="header__middle">
            <div className="container align-center">
                <div className="row">
                    <div className="col-md-6 col-sm-6 mr-auto">
                        <img className="img-fluid profile__image" src={profileImg} alt="" />
                    </div>
                    <div className="col-md-6 col-sm-6 d-flex flex-column justify-content-center status">
                        <h2>Hi,</h2>
                        <h4 style={{ color: 'black', fontWeight: 'bold' }}>I am Tamim sakar and </h4>
                        <h4>I am a proffesional <Typed
                            strings={['web Designer', 'Web developer']}
                            typeSpeed={70}
                            backSpeed={50}
                            loop
                        /></h4>
                        <div className='mt-3 '>
                            <Link target="_blank" to="/contact" className="button button-white button-animate ">CONTACT ME</Link>
                            <br />
                            <br />
                            <a href='https://drive.google.com/file/d/1w5CenLTpvF2qk8ydAjXU5OpbhUxk3pNk/view?usp=sharing' rel="noopener noreferrer" target="_blank" className="button button-white button-animate mt-3">DOWNLOAD RESUME</a >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMiddle;



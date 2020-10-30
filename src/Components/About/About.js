import React from 'react';
import HeaderTop from '../Header/HeaderTop/HeaderTop';
import './About.css'
import profile from '../../images/profile/profilePic.jpg'
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
const About = () => {
    return (
        <div>
            <div className="about">
                <HeaderTop />
                <div className="container about_container ">
                    <div className="row justify-center align-items-center">

                        <div className="col-md-6">
                            <img style={{ height: '450px', borderRadius: '5px' }} src={profile} alt="" />
                        </div>
                        <div className="col-md-6 about_status">
                            <h2>Hi,</h2>
                            <h3>I AM TAMIM SARKAR</h3>
                            <h5>A SELF TOUGHT FRONT-END WEB DEVELOPER</h5>
                            <h6>Who <Typed
                                strings={['is Dadicated to his work', ' respects his work', 'has an extreme level of energy to finish his work']}
                                typeSpeed={70}
                                backSpeed={50}
                                loop
                            /></h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <h3>My Skills at</h3>
                <div className="skill__section col-md-6">
                    <img src="https://www.edureka.co/blog/wp-content/uploads/2018/10/How-to-become-a-Full-Stack-Web-Developer--451x300.png" alt="" />
                </div>

                <div className="skill__section col-md-6">
                    <h4>Skills I have</h4>
                    <p>My skills are about the MERN stack.</p>
                    <div className="skills">
                        <p>
                        <span>JAVASCRIPT</span>
                        <span>REACT JS</span>
                        <span>REACT HOOKS</span>
                        <span>HTML 5</span>
                        </p>
                        <p>
                        <span>CSS3</span>
                        <span>FLEXBOX</span>
                        <span>GRID LAYOUT</span>
                        <span>BOOTSTRAP</span>
                        </p>
                        <p>
                        <span>MATERIAL UI</span>
                        <span>REACT BOOTSTRAP</span>
                        <br/>
                        <br/>
                        <span>NODE JS</span>
                        <span>MONGODB</span>
                        </p>
                       <p>
                       <span>EXPRESS</span>
                        <span>API HANDLE</span>
                        <span>API INTEGRETION</span>
                       </p>
                        
                        <p style={{textDecoration:'underline'}}>Note: Continue Learning</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;
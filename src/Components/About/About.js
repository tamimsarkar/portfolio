import React from 'react';
import HeaderTop from '../Header/HeaderTop/HeaderTop';
import './About.css'
import profile from '../../images/profile/profilePic.jpg'
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
const About = () => {
    return (
        <div className="about_page">
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
                <h3 className='text-center mt-4'>My Skills at</h3>
                <div className="skills_page mt-4">
            <div className="container p-4 d-flex justify-center  align-items-center mt-3 mb-3" style={{height:'100%'}}>
                <div className="row ">
               

                <div className="skill__section  col-md-6 ml-4 m-auto">
                    <h4 className="text-center">Skills I have</h4>
                    <p>My skills are about the MERN stack.</p>
                    <div className="skills">
                        <div>
                        <span>JAVASCRIPT</span>
                        <span>REACT JS</span>
                        <span>REACT HOOKS</span>
                        <span>HTML 5</span>
                        </div>
                        <div>
                        <span>CSS3</span>
                        <span>FLEXBOX</span>
                        <span>GRID LAYOUT</span>
                        <span>BOOTSTRAP</span>
                        </div>
                        <div>
                        <span>MATERIAL UI</span>
                        <span>REACT BOOTSTRAP</span>
                        <span>Manage API</span>
                        </div>
                        <p>Familiar skills</p>
                       <div>
                       <span>NODE JS</span>
                       <span>EXPRESS</span>
                        <span>MONGODB</span>
                       </div>
                        
                        <p style={{textDecoration:'underline'}}>Note: Still Learning.I have to learn the whole World.</p>
                    </div>
                </div>
                <div className="skill__section col-md-6 mt-3">
                    <img src="https://www.edureka.co/blog/wp-content/uploads/2018/10/How-to-become-a-Full-Stack-Web-Developer--451x300.png" alt="" />
                </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
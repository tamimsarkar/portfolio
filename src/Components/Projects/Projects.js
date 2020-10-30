import React from 'react';
import HeaderTop from '../Header/HeaderTop/HeaderTop';
import volunteer from '../../images/volunteer.png'
import creative from '../../images/Screenshot_16.png'
import amazon from '../../images/amazon.png'
import covid from '../../images/covid.png'
const Projects = () => {
    // const projects = [
    //     {
    //         project:"Creative Agency",
    //         img:"",
    //         githubClient:"https://github.com/tamimsarkar/creative-agency-client",
    //         liveLink:"https://creative-agency-282e8.web.app/",
    //         githubServer:"https://github.com/tamimsarkar/creative-agency-server",
    //         des:"This is a dummy agency web app.This project is created with MERN.We are using MongoDB for Database,Firebase for Hosting & Authentication,Node JS and express for simple bankend like for CRUD operations."
    //     },
    //     {
    //         project:"Child of Amazon",
    //         githubClient:"https://github.com/tamimsarkar/Amazon-child",
    //         liveLink:"https://child-c22dd.web.app/",
    //         des:"This is a simple version of Amazon e-commerce market.In this project we are specially focused on react JS. And this is an functional component based react app.We build it by React-hooks like useState,useEffect,useReducer and context API.And use firebase Authentication ,",
    //         notAvai:"Server not available for this project"
    //     },
    //     {
    //         project:"Volunteer Network",
    //         githubClient:"https://github.com/tamimsarkar/volunteer-client",
    //         liveLink:"https://volunteer-67c35.web.app/",
    //         githubServer:"https://github.com/tamimsarkar/volunteer-server",
    //         des:"This is a dummy Volunteer Network web app.In this app.We are using here the mongoDB for database,react for user interface,firebase authentication,react router dom to navigate one page to another,Private Route for secure pages and many more features.There is an admin dashboard.admins can add events, delete candidates."
    //     },
    //     {
    //         project:"Covid-19 Tracker",
    //         githubClient:"https://github.com/tamimsarkar/covid-19-tracker",
    //         liveLink:"https://creative-agency-282e8.web.app/",
    //         des:"This is the COVID-19 TRACKER web app.In this app we are covering with the disease API to get all the informations. "
    //     },
    // ];
    return (
        <div style={{ backgroundColor: '#f1f1f1' }}>
            <HeaderTop />

            <h2 className="text-center mt-3">Projects</h2>
            <p className="text-center mb-3">These projects are created with react JS. </p>
            <div className="container m-auto">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div class="card m-4" style={{ width: '18rem' }}>
                            <img class="card-img-top" src={creative} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Creative Agency</h5>
                                <p class="card-text " style={{ fontSize: "14px" }}>This is a dummy agency web app.This project is created with MERN.We are using MongoDB for Database,Firebase for Hosting & Authentication,Node JS and express for simple bankend like for CRUD operations.</p>
                                <div>
                                    <a href="https://github.com/tamimsarkar/creative-agency-client" target="_blank" class="btn btn-primary mr-2" rel="noopener noreferrer">Github</a>
                                    <a href="https://creative-agency-282e8.web.app/" target="_blank" className="btn btn-primary" rel="noopener noreferrer">Live Link</a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div class="card m-4" style={{ width: '18rem' }}>
                            <img class="card-img-top" src={volunteer} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Volunteer Network</h5>
                                <p class="card-text" style={{ fontSize: "14px" }}>This is a dummy Volunteer Network web app.In this app.We are using here the mongoDB for database,react for user interface,firebase authentication,react router dom to navigate one page to another,Private Route for secure pages and many more features.There is an admin dashboard.admins can add events, delete candidates.</p>
                                <div>
                                    <a href="https://github.com/tamimsarkar/volunteer-client" target="_blank" class="btn btn-primary mr-2" rel="noopener noreferrer">Github</a>
                                    <a href="https://volunteer-67c35.web.app/" target="_blank" className="btn btn-primary" rel="noopener noreferrer">Live Link</a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div class="card m-4" style={{ width: '18rem' }}>
                            <img class="card-img-top" src={amazon} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Child of Amazon</h5>
                                <p class="card-text " style={{ fontSize: "14px" }}>This is a simple version of Amazon e-commerce market.In this project we are specially focused on react JS. And this is an functional component based react app.We build it by React-hooks like useState,useEffect,useReducer and context API.And use firebase Authentication</p>
                                <div>
                                    <a href="https://github.com/tamimsarkar/Amazon-child" target="_blank" class="btn btn-primary mr-2" rel="noopener noreferrer">Github</a>
                                    <a href="https://child-c22dd.web.app/" target="_blank" className="btn btn-primary" rel="noopener noreferrer">Live Link</a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div class="card m-4" style={{ width: '18rem' }}>
                            <img class="card-img-top" src={covid} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">COVID-19 TRACKER</h5>
                                <p class="card-text " style={{ fontSize: "14px" }}>This is the COVID-19 TRACKER web app.In this app we are covering with the disease API to get all the informations.</p>
                                <div>
                                    <a href="https://github.com/tamimsarkar/covid-19-tracker" target="_blank" class="btn btn-primary mr-2" rel="noopener noreferrer">Github</a>
                                    <a href="https://covid-tracker-23254.web.app" target="_blank" className="btn btn-primary" rel="noopener noreferrer">Live Link</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Projects;
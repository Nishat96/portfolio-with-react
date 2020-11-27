import React from 'react';
import './Projects.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import doctor from './images/doctor.PNG';
import travel from './images/tourism.PNG';
import emaJohn from './images/ema-john.PNG';
import netflix from './images/netflix.PNG';
import agency from './images/agency.PNG';
import airbnb from './images/airbnb.PNG';
import youTube from './images/youTube.PNG';


const Projects = () => {
    return (
        <div id="project">
        <h2 style={{textAlign: 'center', color: '#c58c0f'}}>Check out my works</h2>
            <Carousel className="carousel-area">
                <div>
                    <img src={doctor} alt='doctor'/>
                   
                    <p className="legend">Doctor's Portal <span> <br/>
                    <a href='https://github.com/saad710/doctors-portal' target='_blank'>
                        <button className="project-link"> Project link </button>
                    </a>
                    <a href='https://doctors-portal-m696.netlify.app/' target='_blank'>
                        <button className="click-here"> Live link </button>
                    </a>
                    </span> </p>
                </div>
                <div>
                    <img src={travel} alt='travel'/>
                    <p className="legend">Travel-site Management System
                    <span> <br/>
                    <a href='https://github.com/saad710/travel-guru' target='_blank'>
                        <button className="project-link"> Project link </button>
                    </a>
                    <a href='https://travel-site-710.web.app/' target='_blank'>
                        <button className="click-here"> Live link </button>
                    </a>
                    </span> 
                    </p>
                </div>
                <div>
                    <img src={emaJohn} alt='emaJohn'/>
                    <p className="legend">Ema-John-E-Commerce
                    <span> <br/>
                    <a href='https://github.com/saad710/ema-john-route' target='_blank'>
                        <button className="project-link"> Project link </button>
                    </a>
                    <a href='https://ema-john-route-saad710.netlify.app/' target='_blank'>
                        <button className="click-here"> Live link </button>
                    </a>
                    </span> 
                    </p>
                </div>
                <div>
                    <img src={agency} alt='agency'/>
                    <p className="legend">Creative-agency
                    <span> <br/>
                    <a href='https://github.com/saad710/travel-guru' target='_blank'>
                        <button className="project-link"> Project link </button>
                    </a>
                    <a href='https://travel-site-710.web.app/' target='_blank'>
                        <button className="click-here"> Live link </button>
                    </a>
                    </span> 
                    </p>
                </div>
                <div>
                    <img src={airbnb} alt='airbnb'/>
                    <p className="legend">Airbnb-clone
                    <span> <br/>
                    <a href='https://github.com/saad710/airbnb-clone' target='_blank'>
                        <button className="project-link"> Project link </button>
                    </a>
                    <a href='https://airbnb-saad-710.netlify.app/' target='_blank'>
                        <button className="click-here"> Live link </button>
                    </a>
                    </span> 
                    </p>
                </div>
                <div>
                    <img src={netflix} alt='netflix'/>
                    <p className="legend">Netflix-clone
                    <span> <br/>
                    <a href='https://github.com/saad710/netflix-clone' target='_blank'>
                        <button className="project-link"> Project link </button>
                    </a>
                    <a href='https://netlflix-clone-710.netlify.app/' target='_blank'>
                        <button className="click-here"> Live link </button>
                    </a>
                    </span> 
                    </p>
                </div>
                <div>
                    <img src={youTube} alt='youTube'/>
                    <p className="legend">YouTube-clone
                    <span> <br/>
                    <a href='https://github.com/saad710/youtube-clone' target='_blank'>
                        <button className="project-link"> Project link </button>
                    </a>
                    <a href='https://utube-clone-710.web.app/' target='_blank'>
                        <button className="click-here"> Live link </button>
                    </a>
                    </span> 
                    </p>
                </div>
            </Carousel>
        </div>
    );
};

export default Projects;
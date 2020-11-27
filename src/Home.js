import React from 'react';
import Header from './Header';
import './Home.css';
import profileImg from './images/propic.jpg';
import { FaLinkedin } from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Footer from './Footer';
import Contact from './Contact';

const Home = () => {
    return (
        <div className="home" id="home">
          <Header/>  
          <div className="d-flex justify-content-center">
            <div>
              <img className="pro-pic" src={profileImg} alt="" srcset=""/>
              <div className="info">
                <h4>Md. Ifrat Hasnat</h4>
                <h5 style={{color: '#694545'}}>Front-end Web Developer</h5>
                <div className="in-line"></div>
                <a href="https://www.linkedin.com/in/ifrat-hasnat-46487a134/" target="_blank">
                <button className="linkedIn-btn"> <FaLinkedin /></button>
             </a>  
             <a href="https://github.com/saad710" target="_blank">
                <button className="github-btn"> <FaGithub/></button>
              </a>
              </div>
            </div>
          </div>
          <About/>
          <Services/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
    );
};

export default Home;<Header/>
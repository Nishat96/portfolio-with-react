import React from 'react';
import './Foooter.css';
import { FaLinkedin } from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="row footer-sec">
            <div className="col-md-12">
            <a href="https://www.linkedin.com/in/ifrat-hasnat-46487a134/" target="_blank">
                <button className="linkedIn-btn"> <FaLinkedin /></button>
             </a>  
             <a href="https://github.com/saad710" target="_blank">
                <button className="github-btn"> <FaGithub/> </button>
              </a>
                <p className="bottom-line">©2020. All rights reserved. Md Ifrat Hasnat. </p>
            </div>
        </div>
    );
};

export default Footer;
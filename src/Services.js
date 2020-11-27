import React from 'react';
import {BsFillBookmarkFill} from 'react-icons/bs';
import {SiWebpack} from 'react-icons/si';
import {FaConnectdevelop, FaSpa} from 'react-icons/fa';
import './Services.css';

const Services = () => {
    return (
        <div> 
            <h3 style={{color: '#c58c0f', textAlign: 'center'}}> <BsFillBookmarkFill/> What I do</h3>
        <div className='row service-section' id='service'>
           
                <div className="col-md-4">
                    <h4 style={{color: '#c58c0f'}}> <SiWebpack/> </h4>
                    <h5 style={{color: '#694545', fontWeight: '700'}}> WEB DESIGN</h5>
                    <p style={{color: 'gray', fontWeight: '500'}}>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing websites for desktop browsers; however, since the mid-2010s, design for mobile and tablet browsers has become ever-increasingly important.</p>
                </div>
                <div className="col-md-4">
                    <h4 style={{color: '#c58c0f'}}> <FaSpa/> </h4>
                    <h5 style={{color: '#694545', fontWeight: '700'}}> SINGLE PAGE APPLICATION</h5>
                    <p style={{color: 'gray', fontWeight: '500'}}>An SPA (Single-page application) is a web app implemention that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.</p>
                </div>
                <div className="col-md-4">
                    <h4 style={{color: '#c58c0f'}}> <FaConnectdevelop/> </h4>
                    <h5 style={{color: '#694545', fontWeight: '700'}}> FRONT END DEVELOPMENT</h5>
                    <p style={{color: 'gray', fontWeight: '500'}}>A front end web developer is the person who implements web designs through coding languages like HTML, CSS, and JavaScript. Though it’s not as common anymore, front end developers are/were sometimes called “client-side developers” to distinguish them from back end developers who program what goes on behind the scenes (like databases).</p>
                </div>
        </div>
        </div>
    );
};

export default Services;
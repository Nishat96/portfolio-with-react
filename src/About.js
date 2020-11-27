import React from 'react';
import { BsBookHalf, BsFillPersonFill } from 'react-icons/bs';
import {MdWork} from 'react-icons/md';
import './About.css';

const About = () => {
    return (
        <div className='row about-me' id="about">
            <div className="col-md-5">
                <h3 style={{color: '#c58c0f'}}> <BsFillPersonFill/> About me</h3>
                <p style={{color: '#694545'}}>A hard working and passionate professional Front-end developer with a keen eye for detail, and a determination to deliver the very highest quality. I take great pride in my work, and I always try to better myself with every project I work on. <br/> <br/> I  like to write semantic, cross browser compatible code by hand that is re-useable, maintainable and easy to understand. I am motivated, enthusiastic and well organised, with a keen eye for beautiful design, primarily based around user interfaces. <br/> <br/> The main areas of my expertise are HTML(5), CSS(3) and JavaScript, Es6, React.js, React Routing. React Hooks, Firebase-auth, Context API. <br/> 
                </p>
            </div>
            <div className="-col-md-3 work-history">
                <h3 style={{color: '#c58c0f'}}> <MdWork/> Work History</h3>
                <p style={{color: '#694545'}}>I have worked on several projects with React.js, <br/> React Routing, React hooks and Firebase-auth. 
                <br/> <span style={{color: 'gray'}}>Wanna see my projects and DOWNLOAD CV?</span>
                </p>
                <button className='click-here'>Download Cv!</button>
            </div>
            <div className="col-md-3">
                <h3 style={{color: '#c58c0f'}}> <BsBookHalf/> Education</h3>
                <div style={{color: '#694545'}}>
                <h6 style={{color: 'gray', fontWeight: '600'}}>2016 – 2019 – Dhaka, Bangladesh </h6>
                <h5>Bachelor in Computer Science and Engineering </h5>
                <h6  style={{color: 'gray', fontWeight: '500'}}>Daffodil International University </h6>
                <p>CGPA: 3.32/4.00(Position: <span style={{color: 'gray'}}> 6th </span>among 26 students)</p>
                <br/>
                <h6 style={{color: 'gray', fontWeight: '600'}}>2013 – 2014 – Chittagong, Bangladesh</h6>
                <h5>Higher Secondary School Certificate  </h5>
                <h6  style={{color: 'gray', fontWeight: '500'}}>Hajera Taju University College</h6>
                <p>GPA: 3.92/5.00</p>
                <br/>
                <h6 style={{color: 'gray', fontWeight: '600'}}>2011 – 2012 – Chittagong, Bangladesh</h6>
                <h5>Secondary School Certificate  </h5>
                <h6 style={{color: 'gray', fontWeight: '500'}}>Nasirabad Govt. Boys High School</h6>
                <p>GPA: 5.00/5.00</p>
                </div>
            </div>
                   
                   
            </div>
    );
};

export default About;
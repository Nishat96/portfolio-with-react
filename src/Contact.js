import React from 'react';
import { MdEmail } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_7gp298p', 'template_2ef7xfa', e.target, 'user_z65cWOrlERE9Me68nX2k6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }

    return (
        <div className="contact-section" id="contact">
            <h4 style={{color: '#c58c0f', textAlign: 'center'}}>Want to Discuss A Project?</h4>
            <h6 style={{color: '#694545', textAlign: 'center'}}>Just Drop a Message Below and I'll Get In Touch</h6>
            <div className="row queries d-flex justify-content-center">
                <div style={{textAlign: 'center'}} className="col-md-3">
                    <h3 style={{color: '#c58c0f'}}><MdEmail/></h3> 
                    <h5 style={{color: '#c58c0f'}}>QUERIES</h5>
                    <h6 style={{color: '#694545'}}>ifrathasnat2@gmail.com</h6>
                    <h6 style={{color: '#694545'}}>ifrathasnat28@gmail.com</h6>
                </div>
                <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" Placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" Placeholder="Email Address" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" Placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" cols="30" rows="8" Placeholder="Your Message" name="message"/>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className='click-here' Value="Send Message"/>
                    </div>
                </div>

           </form>
            </div>
        
        </div>
    );
};

export default Contact;
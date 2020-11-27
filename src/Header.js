import React from 'react';
import logo from '../src/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="row">
          <div className="header col-md-12 d-flex justify-content-around">
            <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#">
              {/* <img src={logo} alt="" srcset=""/> */}
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">About me</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#service">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#project">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact" >Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          </div>
        </div>
              );
          };
export default Header;
import React from "react";
// import {fafacebook} from '@fortawesome/react-fontawesome';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                mpartial, a 4D Schematics Company. Copyright 2020 all rights
                reserved
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                

                <li>
                  <a className="facebook" href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <FaLinkedin />
                  </a>
                </li>

                <li>
                  <a className="" href="#">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

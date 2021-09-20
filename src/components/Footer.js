import React from "react";
import {
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TelegramShareButton,
    TelegramIcon
} from "react-share";

const Footer = () => {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="d-flex">
                <p>Alpha II, Greater Noida, Uttar Pradesh</p>
              </div>
              <div className="d-flex">
                <a href="tel: 7355297815">+91 7355297815</a>
              </div>
              <div className="d-flex">
                <p>ashwanitiwari573@gmail.com</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-6">
              <div className="row">
                <div className="col">
                  <a className="footer-nav">Home</a>
                  <br />
                  <a className="footer-nav">About Me</a>
                  <br />
                  <a className="footer-nav">Services</a>
                </div>
                <div className="col">
                  <a className="footer-nav">Experience</a>
                  <br />
                  <a className="footer-nav">Portfolio</a>
                  <br />
                  <a className="footer-nav">Contacts</a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
              <div className="d-flex justify-content-center">
                <LinkedinShareButton
                  url={"https://www.linkedin.com/in/ashwani573/"}
                >
                  <LinkedinIcon className="mx-3" size={36}></LinkedinIcon>
                </LinkedinShareButton>
                <WhatsappShareButton url={"https://wa.me/917355297815"}>
                  <WhatsappIcon className="mx-3" size={36}></WhatsappIcon>
                </WhatsappShareButton>
                <TelegramShareButton url={"https://t.me/Ashwani_Kumar_Tiwari"}>
                  <TelegramIcon className="mx-3" size={36}></TelegramIcon>
                </TelegramShareButton>
              </div>
              {/* <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nsp;New Horizan | All Rights Reserved
                        </p> */}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer

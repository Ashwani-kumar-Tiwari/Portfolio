import React from "react";
import {
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    InstapaperShareButton,
    InstapaperIcon,
    FacebookShareButton,
    FacebookIcon
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
              <div className="socialMedia d-flex justify-content-center">
                  <LinkedinShareButton
                    url={"https://www.linkedin.com/in/ashwani573/"}>
                    <LinkedinIcon className="mx-3" size={36}></LinkedinIcon>
                  </LinkedinShareButton>

                  <TwitterShareButton
                    url={"https://twitter.com/Ashwani_573"}>
                    <TwitterIcon className="mx-3" size={36}></TwitterIcon>
                  </TwitterShareButton>

                  <WhatsappShareButton url={"https://wa.me/917355297815"}>
                    <WhatsappIcon className="mx-3" size={36}></WhatsappIcon>
                  </WhatsappShareButton>
                </div>
              {/* </div> */}
              {/* <div className="col-lg-5 col-md-5 col-sm-6 align-items-center"> */}
                <div className="socialMedia d-flex justify-content-center">
                  <InstapaperShareButton
                    url={"https://www.instagram.com/_ashwani.tiwari_/"}>
                    <InstapaperIcon className="mx-3" size={36}></InstapaperIcon>
                  </InstapaperShareButton>

                  <TelegramShareButton url={"https://t.me/the_geek_ninja"}>
                    <TelegramIcon className="mx-3" size={36}></TelegramIcon>
                  </TelegramShareButton>

                  <FacebookShareButton url={"https://www.facebook.com/profile.php?id=100008661013777"}>
                    <FacebookIcon className="mx-3" size={36}></FacebookIcon>
                  </FacebookShareButton>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
}

export default Footer

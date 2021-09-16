import React from "react";
import author from "../me.jpg";
import result from "../Result.pdf";
import resume from "../Ashwani_Kumar_Tiwari.pdf";

const AboutMe = () => {
  function onDocumentLoadSuccess() {}

  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author......." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            Hi, My name is Ashwani Kumar Tiwari. I was a software developer at
            Xorlabs. I have worked in 8-10 different models for Avaya in CML
            (Configuration Modeling language). Currently, I am learning MERN
            Stack from Pepcoding. I have worked on a few projects, which I have
            listed below. I have completed my bachelor's degree from ITS
            Engineering college with 7.7 CGPA.
            <br />
            <p>
              <a href={result} target="_blank">
                See my result here
              </a>
              &nbsp; &nbsp; &nbsp;
              <a href={resume} target="_blank">
                See my resume here
              </a>
            </p>
          </p>
          <p>
            <b>My Skills : </b>C Programming, Core Java, JavaScript, CML,
            Node.js, Recat.js, HTML, CSS, Bootstrap
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe

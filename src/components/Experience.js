import React from "react";

const Experience = () => {
    return (
      <div id="experience" className="experience">
        <div className="d-flex justify-content-center my-5">
          <h1>Experience</h1>
        </div>
        <div className="container experience-wrapper">
          {/* <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2020-2021</h3>
              <p>I will add it later</p>
            </div>
          </div> */}
          {/* - */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2020-2021</h3>
              <p>
                I was a software developer at Xorlabs. I have worked in 8-10
                different models for Avaya in CML (Configuration Modeling
                language). I have optimized code effectiveness by creating
                global terms and implemented Footprints for connecting the one
                model with another. I have also deployed all of the NPI updates
                at the end of every week and fixed all the ALMs within the time
                period.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2021-2022</h3>
              <p>
                For the past six months, I am lerning Mern stack and data
                structures & algorithms from pepcoding. I have created few
                projects in the guidence of pepcondig techers. I have also
                submited 200+ DSA questions of pepcding website.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Experience

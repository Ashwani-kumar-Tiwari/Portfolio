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
                distinct models for Avaya in CML (Configuration Modeling
                language). By defining global terms and using Footprints to
                connect one model to another, I was able to improve the
                efficiency of my code. I've also delivered all of the NPI
                updates at the end of each week and repaired all of the ALMs
                within the specified time frame.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2021-2022</h3>
              <p>
                I've been learning Mern stack and data structures & algorithms
                from pepcoding for the past six months. I've worked on a couple
                projects with the help of pepcoding professors. In addition, I
                have 200+ DSA questions from the pepcoding website were
                submitted.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Experience

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
                language).
                <p></p>
                <p>
                <ul>
                  <li>
                    Handled and deployed NPI updates of eleven models for Avaya in 
                    CML for every month.
                  </li>
                  <li>
                    Optimized code effectiveness by creating global terms and connected
                    all models with the help of Footprints.
                  </li>
                  <li>
                    Implemented and fixed all Application Life-Cycle Management
                    (ALM) issues within the time period.
                  </li>
                  <li>
                    Supported Quality Assurance (QA) team about model rules and 
                    guided them to troubleshoot their case scenarios.
                  </li>
                  <li>
                    Maintained script files used for generating the support material codes.
                  </li>
                  <li>
                    Deployed all updates on the testing server for the QA team to verify 
                    the test cases using remote access.
                  </li>
                  <li>
                    Discussed and assisted the OSC model team in resolving model rule 
                    conflicts.
                  </li>
                  <li>
                    Conducted KT sessions for my fellow engineers about the 
                    development process of CML and reading models rules.
                  </li>
                  <li>
                    Conducted KT sessions for my fellow engineers about the 
                    development process of CML and reading models rules.
                  </li>
                </ul>
                </p>
                {/* I was a software developer at Xorlabs. I have worked in 8-10
                distinct models for Avaya in CML (Configuration Modeling
                language). By defining global terms and using Footprints to
                connect one model to another, I was able to improve the
                efficiency of my code. I've also delivered all of the NPI
                updates at the end of each week and repaired all of the ALMs
                within the specified time frame. */}
              </p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2021-2022</h3>
              {/* <p>
                I've been learning Mern stack and data structures & algorithms
                from pepcoding form March 01, 2021 to September 30, 2021. I've worked on a couple
                projects with the help of pepcoding professors. I have completed level-1 algorithms questions and submitted them on pepcoding portal.
              </p> */}
              <p>
              I have completed Mern stack and data structures & algorithms training course
                from pepcoding (Training duration : March 01, 2021 to September 30, 2021). I have completed level-1 algorithms questions and submitted them on pepcoding portal.
                <p></p>
                <p>
                <b>Excel Clone : </b>
                <ul>
                  <li>
                    A  Web Application that stores & manages data in multiple excel 
                    sheets, which can be styled and manipulated by using different 
                    formula sets and styling tools in applications.
                  </li>
                  <li>
                    Tools & technology: Node.js, Browser API, HTML and CSS.
                  </li>
                </ul>

                <b>Netflix Clone : </b>
                <ul>
                  <li>
                    Designed a Netflix clone that displays movies and TV shows based 
                    on their genre, trailer of the movies and TV shows can be played by 
                    clicking on their posters.
                  </li>
                  <li>
                    Tools & technology: React.js, React-YouTube API, Bootstrap CSS.
                  </li>
                </ul>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Experience

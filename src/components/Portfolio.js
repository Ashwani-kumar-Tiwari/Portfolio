import React from "react";
import project1 from "../images/project1.png";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";

//Font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// react popup box
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    //project 1
    const openPopupboxProject1 = () => {
        const content = (
            <>
            
                <img className="portfolio-image-popupbox" src={project1} alt="Project1" />
                <p>I will add it later</p>
                <b>Github: </b>
                <a className="hyper-link"
                    onClick={() => window.open("https://ashwani-kumar-tiwari.github.io/Excel_Clone/")}
                >
                    https://ashwani-kumar-tiwari.github.io/Excel_Clone/
                </a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigProject1 = {
        titleBar: {
            enable: true,
            text: "Project 1"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //project 2
    const openPopupboxProject2 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={project2} alt="Project2" />
                <p>I will add it later</p>
                <b>Github: </b>
                <a className="hyper-link"
                    onClick={() => window.open("https://ashwani-kumar-tiwari.github.io/Excel_Clone/", "_blank")}
                >
                    https://ashwani-kumar-tiwari.github.io/Excel_Clone/
                </a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigProject2 = {
        titleBar: {
            enable: true,
            text: "Project 2"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //project 3
    const openPopupboxProject3 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={project3} alt="Project3" />
                <p>I will add it later</p>
                <b>Github: </b>
                <a className="hyper-link"
                    onClick={() => window.open("https://ashwani-kumar-tiwari.github.io/Excel_Clone/", "_blank")}
                >
                    https://ashwani-kumar-tiwari.github.io/Excel_Clone/
                </a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigProject3 = {
        titleBar: {
            enable: true,
            text: "Project 3"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //project 4
    const openPopupboxProject4 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={project4} alt="Project4" />
                <p>I will add it later</p>
                <b>Github: </b>
                <a className="hyper-link"
                    onClick={() => window.open("https://ashwani-kumar-tiwari.github.io/Excel_Clone/", "_blank")}
                >
                    https://ashwani-kumar-tiwari.github.io/Excel_Clone/
                </a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigProject4 = {
        titleBar: {
            enable: true,
            text: "Project 4"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <div className='row'>
                    <h1 className="text-uppercase text-center py-5">portfolio</h1>
                    {/* <div className="image-box-wrapper row justify-content-center"> */}
                    <div className='col'>
                        <div className="portfolio-image-box" onClick={openPopupboxProject1}>
                            <img className="portfolio-image" src={project1} alt="Project1" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    <div className='col'>
                        <div className="portfolio-image-box" onClick={openPopupboxProject2}>
                            <img className="portfolio-image" src={project2} alt="Project2" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    <div className='col'>
                        <div className="portfolio-image-box" onClick={openPopupboxProject3}>
                            <img className="portfolio-image" src={project3} alt="Project3" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    <div className='col'>
                        <div className="portfolio-image-box" onClick={openPopupboxProject4}>
                            <img className="portfolio-image" src={project4} alt="Project4" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    {/*  */}

                    {/*  */}

                    {/*  */}

                    {/* </div> */}
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigProject1} />
            <PopupboxContainer {...popupboxConfigProject2} />
            <PopupboxContainer {...popupboxConfigProject3} />
            <PopupboxContainer {...popupboxConfigProject4} />
        </div>
    )
}

export default Portfolio

{/*
import React from "react";
import project1 from "../images/project1.png";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";

//Font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// react popup box
import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
 
const Portfolio = () => {

    //project 1
    const openPopupboxProject1 = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={project1} alt="Project1" />
            <p>I will add it later</p>
            <b>Github: </b> 
            <a className="hyper-link" 
                onClick={() => window.open("https://ashwani-kumar-tiwari.github.io/Excel_Clone/")}
                >
                https://ashwani-kumar-tiwari.github.io/Excel_Clone/
            </a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigProject1 = {
        titleBar: {
            enable: true,
            text: "Project 1"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //project 2
    const openPopupboxProject2 = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={project2} alt="Project2" />
            <p>I will add it later</p>
            <b>Github: </b> 
            <a className="hyper-link" 
                onClick={() => window.open("https://ashwani-kumar-tiwari.github.io/Excel_Clone/", "_blank")}
                >
                https://ashwani-kumar-tiwari.github.io/Excel_Clone/
            </a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigProject2 = {
        titleBar: {
            enable: true,
            text: "Project 2"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //project 3
    const openPopupboxProject3 = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={project3} alt="Project3" />
            <p>I will add it later</p>
            <b>Github: </b> 
            <a className="hyper-link" 
                onClick={() => window.open("https://ashwani-kumar-tiwari.github.io/Excel_Clone/", "_blank")}
                >
                https://ashwani-kumar-tiwari.github.io/Excel_Clone/
            </a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigProject3 = {
        titleBar: {
            enable: true,
            text: "Project 3"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //project 4
    const openPopupboxProject4 = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={project4} alt="Project4" />
            <p>I will add it later</p>
            <b>Github: </b> 
            <a className="hyper-link" 
                onClick={() => window.open("https://ashwani-kumar-tiwari.github.io/Excel_Clone/", "_blank")}
                >
                https://ashwani-kumar-tiwari.github.io/Excel_Clone/
            </a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigProject4 = {
        titleBar: {
            enable: true,
            text: "Project 4"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <div className='row'>
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                {/* <div className="image-box-wrapper row justify-content-center"> 
                <div className='col'>
                <div className="portfolio-image-box" onClick={openPopupboxProject1}>
                        <img className="portfolio-image" src={project1} alt="Project1" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
                <div className='col'>
                <div className="portfolio-image-box" onClick={openPopupboxProject2}>
                        <img className="portfolio-image" src={project2} alt="Project2" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
                <div className='col'>
                <div className="portfolio-image-box" onClick={openPopupboxProject3}>
                        <img className="portfolio-image" src={project3} alt="Project3" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    </div>
                    <div className='col'>
                    <div className="portfolio-image-box" onClick={openPopupboxProject4}>
                        <img className="portfolio-image" src={project4} alt="Project4" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    </div>
                    {/*  */}

{/*  */ }

{/*  */ }

{/* </div> 
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigProject1} />
            <PopupboxContainer {...popupboxConfigProject2} />
            <PopupboxContainer {...popupboxConfigProject3} />
            <PopupboxContainer {...popupboxConfigProject4} />
        </div>
    )
}

export default Portfolio

*/}
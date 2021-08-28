import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//avatars import
import project1 from "../images/avatars/project1.png";
import project2 from "../images/avatars/project2.jpg";
import project3 from "../images/avatars/project3.png";
import project4 from "../images/avatars/project4.png";

const CertificatesCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <>
                <img src={project1} alt="Project 1" />
                <div className="myCarousel">
                    <h3>Project 1</h3>
                    <p> I will add it later</p>
                </div>
            </>
            <>
                <img src={project2} alt="Project 2" />
                <div className="myCarousel">
                    <h3>Project 2</h3>
                    <p> I will add it later</p>
                </div>
            </>
            <>
                <img src={project3} alt="Project 3" />
                <div className="myCarousel">
                    <h3>Project 3</h3>
                    <p> I will add it later</p>
                </div>
            </>
            <>
                <img src={project4} alt="Project 4" />
                <div className="myCarousel">
                    <h3>Project 4</h3>
                    <p> I will add it later</p>
                </div>
            </>
        </Carousel>
    )
}

export default CertificatesCarousel

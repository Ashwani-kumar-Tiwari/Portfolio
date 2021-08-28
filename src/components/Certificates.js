import React from "react";
import CertificatesCarousel from "./CertificatesCarousel";

const Certificates = () => {
    return (
        <div className="certificates">
            <h1>My Cerficates</h1>
            <div className="container">
                <div className="certificates-content">
                    <CertificatesCarousel />
                </div>
            </div>
        </div>
    )
}

export default Certificates

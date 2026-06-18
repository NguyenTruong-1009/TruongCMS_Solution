import React from "react";

const HeroBanner = () => {
    return (
        <div
            id="carouselExample"
            className="carousel slide">

            <div className="carousel-inner">

                <div className="carousel-item active">

                    <img
                        src="/banner1.jpg"
                        className="d-block w-100"
                        alt=""
                    />

                </div>

                <div className="carousel-item">

                    <img
                        src="/banner2.jpg"
                        className="d-block w-100"
                        alt=""
                    />

                </div>

            </div>

        </div>
    );
};

export default HeroBanner;
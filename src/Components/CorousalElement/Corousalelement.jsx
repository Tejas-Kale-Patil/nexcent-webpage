/** @format */

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../../assets/Pic1.png";
import pic2 from "../../assets/Pic2.png";
import pic3 from "../../assets/Pic3.png";
import "./Slider.scss";

function Corousalelement() {
    return (
        <>
            <Carousel className="container mt-5">
                <Carousel.Item>
                    <div className="row">
                        <div className="col-lg-7 col-12 align-self-center">
                            <h2 className="heroText">Lessons and insights</h2>
                            <h2 className=" heroText text-success">
                                {" "}
                                from 8 years
                            </h2>
                            <p>
                                Where to grow your business as a photographer:
                                site or social media?
                            </p>
                            <button className="btn btn-success">
                                Register
                            </button>
                        </div>
                        <div className="col-lg-5 text-center col-12">
                            <img
                                src={pic1}
                                className="sliderImg text-center"
                                alt=""
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-lg-7 col-12 align-self-center">
                            <h2 className="heroText">Lessons and insights</h2>
                            <h2 className=" heroText text-success">
                                {" "}
                                from 8 years
                            </h2>
                            <p>
                                Where to grow your business as a photographer:
                                site or social media?
                            </p>
                            <button className="btn btn-success">
                                Register
                            </button>
                        </div>
                        <div className="col-lg-5 text-center col-12">
                            <img
                                src={pic2}
                                className="sliderImg text-center"
                                alt=""
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-lg-7 col-12 align-self-center">
                            <h2 className="heroText">Lessons and insights</h2>
                            <h2 className=" heroText text-success">
                                {" "}
                                from 8 years
                            </h2>
                            <p>
                                Where to grow your business as a photographer:
                                site or social media?
                            </p>
                            <button className="btn btn-success">
                                Register
                            </button>
                        </div>
                        <div className="col-lg-5 col-12">
                            <img src={pic3} className="sliderImg " alt="" />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Corousalelement;

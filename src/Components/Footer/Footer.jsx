/** @format */

import React from "react";
import "./Footer.scss";
import logo from "../../assets/footerLogo.png";
import insta from "../../assets/instgram.png";
import web from "../../assets/web.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import send from "../../assets/send.png";
function Footer() {
    return (
        <div className="footer" style={{ backgroundColor: "#263238" }}>
            <div className="container footerContainer py-5">
                <div className="text-white my-3">
                    <img src={logo} className="py-3" alt="logo" />
                    <div className="my-5">
                        <div>Copyright © 2020 Nexcent ltd.</div>
                        <div>All rights reserved</div>
                    </div>
                    <div>
                        <span className="socialIcon">
                            <img src={insta} alt="insta" />
                        </span>
                        <span className="socialIcon">
                            <img src={web} alt="web" />
                        </span>
                        <span className="socialIcon">
                            <img src={twitter} alt="twitter" />
                        </span>
                        <span className="socialIcon">
                            <img src={youtube} alt="yt" />
                        </span>
                    </div>
                </div>

                <div className="my-3 text-white">
                    <p className="fw-semibold text-lg-start text-end ">
                        Company
                    </p>
                    <div className="text-lg-start text-end">
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                </div>

                <div className="my-3 text-white">
                    <p className="fw-semibold">Support</p>
                    <div>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                </div>

                <div className="my-3 text-white">
                    <p className="fw-semibold">Stay up to date</p>
                    <div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control text-white"
                                placeholder="Enter email address"
                                aria-label="Enter email address"
                                aria-describedby="basic-addon2"
                                style={{ backgroundColor: "#3c474c" }}
                            />
                            <div className="input-group-append">
                                <img src={send} className="sendBtn" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

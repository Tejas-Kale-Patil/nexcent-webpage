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
                    <div className="py-4">
                        <div className="smallTextFooter">
                            Copyright © 2020 Nexcent ltd.
                        </div>
                        <div className="smallTextFooter">
                            All rights reserved
                        </div>
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
                        <p className="smallTextFooter">About us</p>
                        <p className="smallTextFooter">Blog</p>
                        <p className="smallTextFooter">Contact us</p>
                        <p className="smallTextFooter">Pricing</p>
                        <p className="smallTextFooter">Testimonials</p>
                    </div>
                </div>

                <div className="my-3 text-white">
                    <p className="fw-semibold">Support</p>
                    <div>
                        <p className="smallTextFooter">Help center</p>
                        <p className="smallTextFooter">Terms of service</p>
                        <p className="smallTextFooter">Legal</p>
                        <p className="smallTextFooter">Privacy policy</p>
                        <p className="smallTextFooter">Status</p>
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

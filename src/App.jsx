/** @format */

import "./App.scss";
import Corousalelement from "./Components/CorousalElement/Corousalelement";
import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import { FaArrowRight } from "react-icons/fa6";

import clientLogo1 from "./assets/Logo (7).png";
import clientLogo2 from "./assets/Logo (1).png";
import clientLogo3 from "./assets/Logo (2).png";
import clientLogo4 from "./assets/Logo (3).png";
import clientLogo5 from "./assets/Logo (4).png";
import clientLogo6 from "./assets/Logo (5).png";
import clientLogo7 from "./assets/Logo (6).png";

import communityLogo1 from "./assets/communityImg1.png";
import communityLogo2 from "./assets/communityImg2.png";
import communityLogo3 from "./assets/communityImg3.png";

import reinventIcon1 from "./assets/reinventIcon1.png";
import reinventIcon2 from "./assets/reinventIcon2.png";
import reinventIcon3 from "./assets/reinventIcon3.png";
import reinventIcon4 from "./assets/reinventIcon4.png";

import cardImg1 from "./assets/cardImg1 (1).png";
import cardImg2 from "./assets/cardImg1 (2).png";
import cardImg3 from "./assets/cardImg1 (3).png";

import pixelGradeImg from "./assets/pixelGrade.png";
import pana from "./assets/pana.png";
import teslaImg from "./assets/teslaImg.png";
import Footer from "./Components/Footer/Footer";
import colorLogo from "./assets/coloredLogo.png";
function App() {
    return (
        <>
            <div style={{ backgroundColor: "#F5F7FA" }}>
                <NavbarComponent />
                <Corousalelement />
            </div>
            <div className=" container mt-5">
                <div className="my-2">
                    <h3 className="text-center headText">Our Clients</h3>
                    <p className="mediumText text-center py-2">
                        We have been working with some Fortune 500+ clients
                    </p>
                </div>
                <div className="logoContainer text-center py-4">
                    <img src={clientLogo1} alt="" />
                    <img src={clientLogo2} alt="" />
                    <img src={clientLogo3} alt="" />
                    <img src={clientLogo4} alt="" />
                    <img src={clientLogo5} alt="" />
                    <img src={clientLogo6} alt="" />
                    <img src={clientLogo7} alt="" />
                </div>
                <div className="py-3">
                    <h3 className="text-center headText">
                        Manage your entire community
                    </h3>
                    <h3 className="text-center headText">in a single system</h3>
                    <p className="mediumText text-center py-2">
                        Who is Nextcent suitable for?
                    </p>
                </div>
                <div className="row cardContainer">
                    <div className="col-lg-4 col-12 p-4">
                        <div
                            className="card border-0 align-items-center"
                            style={{ height: "230px" }}
                        >
                            <img
                                className="communityImg "
                                src={communityLogo1}
                                alt="img"
                            />
                            <div className="card-body text-center">
                                <h5 className="cardTitleText">
                                    Membership Organisations
                                </h5>
                                <p className="cardPara">
                                    Our membership management software provides
                                    full automation of membership renewals and
                                    payments
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 p-4">
                        <div
                            className="card border-0 align-items-center"
                            style={{ height: "230px" }}
                        >
                            <img
                                className="communityImg "
                                src={communityLogo2}
                                alt="img"
                            />
                            <div className="card-body text-center">
                                <h5 className="cardTitleText">
                                    National Associations
                                </h5>
                                <p className="cardPara">
                                    Our membership management software provides
                                    full automation of membership renewals and
                                    payments
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 p-4">
                        <div
                            className="card border-0 align-items-center"
                            style={{ height: "230px" }}
                        >
                            <img
                                className="communityImg "
                                src={communityLogo3}
                                alt="img"
                            />
                            <div className="card-body text-center">
                                <h5 className="cardTitleText">
                                    Clubs And Groups
                                </h5>
                                <p className="cardPara">
                                    Our membership management software provides
                                    full automation of membership renewals and
                                    payments
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row py-4">
                    <div className="col-lg-6 text-center col-12">
                        <img src={pixelGradeImg} alt="" />
                    </div>
                    <div className="col-lg-6 m-0 col-12 align-self-center">
                        <h3 className="headText">
                            The unseen of spending three years at Pixelgrade
                        </h3>
                        <p className="cardPara py-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed sit amet justo ipsum. Sed accumsan quam
                            vitae est varius fringilla. Pellentesque placerat
                            vestibulum lorem sed porta. Nullam mattis tristique
                            iaculis. Nullam pulvinar sit amet risus pretium
                            auctor. Etiam quis massa pulvinar, aliquam quam
                            vitae, tempus sem. Donec elementum pulvinar odio.
                        </p>
                        <button className="btn btn-success px-3">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: "#F5F7FA" }}>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-6 col-12 align-self-center">
                            <h2 className="headText text-lg-start text-center">
                                Helping a local{" "}
                            </h2>
                            <h2
                                className="headText text-lg-start text-center"
                                style={{ color: "#4CAF4F" }}
                            >
                                business reinvent itself
                            </h2>
                            <p className="text-lg-start text-center">
                                We reached here with our hard work and
                                dedication
                            </p>
                        </div>
                        <div className="col-lg-6 col-12 align-self-center">
                            <div className="row">
                                <div className="col-lg-6 col-12 text-center d-flex my-3 justify-content-lg-start justify-content-center align-items-center">
                                    <img
                                        src={reinventIcon1}
                                        className="reinventImg"
                                        alt="reinvent"
                                    />
                                    <div className="px-3">
                                        <h1 className="headText p-0 m-0">
                                            2,245,341
                                        </h1>
                                        <p className="mediumText p-0 m-0 text-lg-start text-center">
                                            Members
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-12 justify-content-lg-start justify-content-center text-center d-flex my-3 align-items-center">
                                    <img
                                        src={reinventIcon2}
                                        className="reinventImg"
                                        alt="reinvent"
                                    />
                                    <div className="px-3">
                                        <h1 className="headText p-0 m-0">
                                            46,328
                                        </h1>
                                        <p className="mediumText p-0 m-0 text-lg-start text-center">
                                            Clubs
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-12 justify-content-lg-start justify-content-center text-center d-flex my-3 align-items-center">
                                    <img
                                        src={reinventIcon3}
                                        width={32}
                                        height={36}
                                        alt="reinvent"
                                    />
                                    <div className="px-3">
                                        <h1 className="headText p-0 m-0">
                                            828,867
                                        </h1>
                                        <p className="mediumText p-0 m-0 text-lg-start text-center">
                                            Event Bookings
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-12 justify-content-lg-start justify-content-center text-center d-flex my-3 align-items-center">
                                    <img
                                        src={reinventIcon4}
                                        className="reinventImg"
                                        alt="reinvent"
                                    />
                                    <div className="px-3">
                                        <h1 className="headText p-0 m-0">
                                            1,926,436
                                        </h1>
                                        <p className="mediumText p-0 m-0 text-lg-start text-center">
                                            Payments
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center col-12">
                        <img src={pana} alt="" />
                    </div>
                    <div className="col-lg-6 m-0 col-12 align-self-center">
                        <h3 className="headText">
                            How to design your site footer like we did
                        </h3>
                        <p className="cardPara py-2">
                            Donec a eros justo. Fusce egestas tristique
                            ultrices. Nam tempor, augue nec tincidunt molestie,
                            massa nunc varius arcu, at scelerisque elit erat a
                            magna. Donec quis erat at libero ultrices mollis. In
                            hac habitasse platea dictumst. Vivamus vehicula leo
                            dui, at porta nisi facilisis finibus. In euismod
                            augue vitae nisi ultricies, non aliquet urna
                            tincidunt. Integer in nisi eget nulla commodo
                            faucibus efficitur quis massa. Praesent felis est,
                            finibus et nisi ac, hendrerit venenatis libero.
                            Donec consectetur faucibus ipsum id gravida.
                        </p>
                        <button className="btn btn-success px-3">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className="my-4" style={{ backgroundColor: "#F5F7FA" }}>
                <div className="container">
                    <div className="row py-3">
                        <div className="col-lg-4 text-center align-self-center col-12">
                            <img src={teslaImg} alt="" />
                        </div>
                        <div className="col-lg-8 m-0 col-12 align-self-center">
                            <p className="cardPara py-2">
                                Maecenas dignissim justo eget nulla rutrum
                                molestie. Maecenas lobortis sem dui, vel rutrum
                                risus tincidunt ullamcorper. Proin eu enim
                                metus. Vivamus sed libero ornare, tristique quam
                                in, gravida enim. Nullam ut molestie arcu, at
                                hendrerit elit. Morbi laoreet elit at ligula
                                molestie, nec molestie mi blandit. Suspendisse
                                cursus tellus sed augue ultrices, quis tristique
                                nulla sodales. Suspendisse eget lorem eu turpis
                                vestibulum pretium. Suspendisse potenti. Quisque
                                malesuada enim sapien, vitae placerat ante
                                feugiat eget. Quisque vulputate odio neque, eget
                                efficitur libero condimentum id. Curabitur id
                                nibh id sem dignissim finibus ac sit amet magna.
                            </p>
                            <p className="text-success fw-semibold">
                                Tim Smith
                            </p>
                            <p
                                className="mediumText"
                                style={{ color: "#89939E" }}
                            >
                                British Dragon Boat Racing Association
                            </p>
                            <div className="teslaLogo align-content-center py-4">
                                <img src={colorLogo} alt="" />
                                <img src={clientLogo2} alt="" />
                                <img src={clientLogo3} alt="" />
                                <img src={clientLogo4} alt="" />
                                <img src={clientLogo5} alt="" />
                                <img src={clientLogo6} alt="" />
                                <span
                                    className="text-success fw-semibold"
                                    style={{ color: "#4CAF4F" }}
                                >
                                    Meet all customers <FaArrowRight />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="text-center d-flex flex-column align-items-center">
                    <h1 className="headText">Caring is the new marketing</h1>
                    <p className="mediumText marketingText">
                        The Nexcent blog is the best place to read about the
                        latest membership insights, trends and more. See who's
                        joining the community, read about how our community are
                        increasing their membership income and lot's more.​
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-12 row justify-content-center p-3">
                        <div className="card border-0">
                            <img src={cardImg1} alt="" />
                        </div>

                        <div className="col-10 upCardContainer">
                            <div
                                className="card p-2 border-0 justify-content-between"
                                style={{
                                    backgroundColor: "#F5F7FA",
                                    height: "200px",
                                    boxShadow: " #ABBED166 0px 8px 16px 0px",
                                }}
                            >
                                <p
                                    className="card-text text-center textInsideCard"
                                    style={{ color: "#717171" }}
                                >
                                    Creating Streamlined Safeguarding Processes
                                    with OneRen
                                </p>
                                <p className="text-center textInsideCard text-success py-2">
                                    Read More <FaArrowRight />{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-12 row justify-content-center p-3">
                        <div className="card border-0">
                            <img src={cardImg2} alt="" />
                        </div>
                        <div className="col-10 upCardContainer">
                            <div
                                className="card p-3 border-0 justify-content-between"
                                style={{
                                    backgroundColor: "#F5F7FA",
                                    height: "200px",
                                    boxShadow: " #ABBED166 0px 8px 16px 0px",
                                }}
                            >
                                <p
                                    className="card-text text-center textInsideCard"
                                    style={{ color: "#717171" }}
                                >
                                    What are your safeguarding responsibilities
                                    and how can you manage them?
                                </p>
                                <p className="text-center textInsideCard text-success py-2">
                                    Read More <FaArrowRight />{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-12 row justify-content-center p-3">
                        <div className="card border-0">
                            <img src={cardImg3} alt="" />
                        </div>
                        <div className="col-10 upCardContainer">
                            <div
                                className="card p-3 border-0 justify-content-between"
                                style={{
                                    backgroundColor: "#F5F7FA",
                                    height: "200px",
                                    boxShadow: " #ABBED166 0px 8px 16px 0px",
                                }}
                            >
                                <p
                                    className="card-text text-center textInsideCard"
                                    style={{ color: "#717171" }}
                                >
                                    Revamping the Membership Model with
                                    Triathlon Australia
                                </p>
                                <p className="text-center textInsideCard text-success py-2">
                                    Read More <FaArrowRight />{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: "#F5F7FA" }}>
                <div className="container d-flex flex-column justify-content-center align-items-center py-5">
                    <h1 className="heroText heroTextAtBtm text-center">
                        Pellentesque suscipit fringilla libero eu.
                    </h1>
                    <button className="px-4 py-2 mt-5 btn btn-success">
                        Get a Demo <FaArrowRight />
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default App;

import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../Hooks/useData';
import Banner from './Banner/Banner';
// import Banner from './Banner/Banner';
import './Home.css';
import Services from './Services/Services';

const Home = () => {
    const services = useData();

    return (
        <div>
            {/* display a banner wish carousel */}
            <Banner></Banner>


            {/* services section start */}
            <div className="my-5">
                <div className="services-heading text-center">
                    <h6>HEALTHY SKIN AND NATURAL</h6>
                    <h1>Treatments & Services</h1>
                </div>
                <div className="container row mx-auto">
                    <div className="col-lg-4 col-md-4 col-12 find-doctor">
                        <span><i className="fas fa-user-md service-icon"></i></span>
                        <h4 className="text-light">FIND A DOCTOR</h4>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 hospital-services">
                        <span><i className="fas fa-hand-holding-medical service-icon"></i></span>
                        <h4 className="text-light">HOSPITAL SERVICES</h4>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 sergery-services">
                        <span><i className="fas fa-capsules service-icon"></i></span>
                        <h4 className="text-light">SERGERY PACKAGES</h4>
                    </div>
                </div>

                <div className="container row mx-auto mt-3">
                    <div className="col-lg-4 col-md-4 col-12 sergery-services">
                        <span><i className="fas fa-vials service-icon"></i></span>
                        <h4 className="text-light">DIAGONOSTIC SERVICES</h4>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 hospital-services">
                        <span><i className="far fa-clock service-icon"></i></span>
                        <h4 className="text-light">CARDIAC SERVICE</h4>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 find-doctor">
                        <span><i className="fas fa-heartbeat service-icon"></i></span>
                        <h4 className="text-light">HEALTH CHECK UP</h4>
                    </div>
                </div>
            </div>


            {/* services section in card */}
            <hr className="border border-1 w-50 mx-auto border-dark" />
            <div className="my-5">
                {/* service card */}
                <Container>
                    <Row xs={1} md={3} sm={2} className="g-4">
                        {
                            services?.map(service => <Services
                                service={service}
                                key={service.key}
                            ></Services>)
                        }
                    </Row>
                </Container>
            </div>

            {/* contact us with hospital  */}
            <div className="bg-light py-5">
                <div className="row container mx-auto">

                    <div className="col-lg-6 col-md-6 col-12">
                        <div className=" p-lg-4 p-1">
                            <div className="text-center border p-4">
                                <h3 className="text-primary bg-light p-2">Contact Us</h3>
                                <input className="form-control" type="text" name="" placeholder="Name" id="" /> <br />
                                <input className="form-control" type="email" name="" placeholder="Email" id="" /> <br />
                                <textarea className="form-control" name="" placeholder="Message" id="" cols="20" rows="3"></textarea> <br />
                                <button type="submit" className="btn-primary w-100">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 p-lg-4 p-2 about-us-home">
                        <h3 className=" fw-bold about-us-home-title">The Office</h3>
                        <hr className="mb-3 border border-1 w-25 border-dark" />
                        <p><span><i className="fas fa-map-marker-alt contact-icon"></i></span> <b>Address:</b> Jatrabari Medico Clinic Hospital</p>
                        <p><span><i className="fas fa-clinic-medical contact-icon"></i></span> HOUSE # 16, ROAD # 1, JATRABARI, DHAKA-1236.</p>
                        <p> <span><i className="fas fa-phone-alt contact-icon"></i></span><b>Phone:</b> +8801625360571</p>
                        <p><span><i className="far fa-envelope contact-icon"></i></span><b>Email:</b> developeremdad@gmail.com</p>
                        <br /> <br />
                        <h3 className="mb-3 fw-bold about-us-home-title">Business Hours</h3>
                        <p><span><i className="far fa-clock"></i></span>  7 AM - 11 PM (Everyday)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
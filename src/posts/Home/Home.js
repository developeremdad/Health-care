import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../Hooks/useData';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import './Home.css';
import Services from './Services/Services';

const Home = () => {
    const services = useData();
    // console.log(services);
    return (
        <div>
            <Header></Header>
            {/* <Banner></Banner> */}

            {/* Treatment and Services section  */}
            <div>
                <div className="services-heading text-center">
                    <h6>HEALTHY SKIN AND NATURAL</h6>
                    <h1>Treatments & Services</h1>
                </div>
                {/* service card */}
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {
                            services?.map(service => <Services
                                service={service}
                                key={service.key}
                            ></Services>)
                        }
                    </Row>
                </Container>
            </div>
            {/* <Services></Services> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;
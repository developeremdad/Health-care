import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../Hooks/useData';
// import Banner from './Banner/Banner';
import './Home.css';
import Services from './Services/Services';

const Home = () => {
    const services = useData();
    // console.log(services);
    return (
        <div>
            {/* <Banner></Banner> */}

            <div className="mb-5">
                <div className="services-heading text-center">
                    <h6>HEALTHY SKIN AND NATURAL</h6>
                    <h1>Treatments & Services</h1>
                </div>
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
        </div>
    );
};

export default Home;
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../../Hooks/useData';
import Services from '../Services/Services';

const AllServices = () => {
    const services = useData();
    return (
        <div className="pb-5">
            <div style={{ background: '#ddd' }} className=" py-5 mb-3 text-center">
                <h1 className="">Our Services</h1>
                <p>Service that provides medical treatment and care to the public or to a particular group</p>

            </div>
            {/* display all services section  */}
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
    );
};

export default AllServices;
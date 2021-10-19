import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../../Hooks/useData';
import Services from '../Services/Services';

const AllServices = () => {
    const services = useData();
    return (
        <div>
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
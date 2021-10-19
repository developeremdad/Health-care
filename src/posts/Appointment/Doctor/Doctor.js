import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
    const { dept, name, img, degre, call, mail } = props.doctor;
    return (
        <div>
            <Col>
                <Card className="shadow-sm border-0 p-3">
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="card-body-custom">
                        <Card.Title className="card-title-custom">{name}</Card.Title>
                        <hr className="divider" />
                        <Card.Text className="card-description-custom">Dept: {dept}</Card.Text>
                        <Card.Text className="card-description-custom">Degree: {degre}</Card.Text>
                        <Card.Text className="card-description-custom">Call: {call}</Card.Text>
                        <Card.Text className="card-description-custom">Email: {mail}</Card.Text>
                    </Card.Body>

                    <div className="card-custom-footer text-center">
                        <Link to="/services"><button>Appointment</button></Link>
                    </div>

                </Card>
            </Col>
        </div>
    );
};

export default Doctor;
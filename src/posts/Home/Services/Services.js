import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = (props) => {
    const { title, description, photoUrl } = props.service;
    return (
        // <div>

        //     <img src={photoUrl} alt="" />
        //     <h2>{title}</h2>
        //     <p>{description}</p>
        // </div>
        <Col>
            <Card className="shadow-sm border-0">
                <Card.Img variant="top" src={photoUrl} />
                <Card.Body>
                    <Card.Title className="card-title-custom">{title}</Card.Title>
                    <hr className="divider" />
                    <Card.Text className="card-description-custom">{description.slice(0, 130)} <span className="text-warning">read more</span></Card.Text>
                </Card.Body>

                <div className="card-custom-footer text-center">
                    <Link to=""><button>Get Service</button></Link>
                </div>

            </Card>
        </Col>
    );
};

export default Services;
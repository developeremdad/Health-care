import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from './Doctor/Doctor';
import banner from '../../images/appoint-bg.jpg';

const Appointment = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/dortorFakeData.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <img src={banner} alt="" />
            <h1 className="text-center bg-black py-3 text-light">Appointment Now</h1>
            <div className="row w-100">
                <div className="col-lg-4 col-md-6 col-12 p-4">
                    <div className="text-center border p-4">
                        <h3 className="text-success bg-light p-2">Appointment</h3>
                        <input className="form-control" type="text" name="" placeholder="Name" id="" /> <br />
                        <input className="form-control" type="email" name="" placeholder="Email" id="" /> <br />
                        <input className="form-control" type="number" name="" placeholder="Number" id="" /> <br />
                        <input className="form-control" type="date" name="" placeholder="Date" id="" /> <br />
                        <textarea className="form-control" name="" placeholder="Message" id="" cols="20" rows="3"></textarea> <br />
                        <button type="submit" className="btn-primary">Book Now</button>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6 col-12">
                    <Container>
                        <Row xs={1} md={2} sm={1} className="g-4 p-4">
                            {
                                doctors?.map(doctor => <Doctor
                                    doctor={doctor}
                                    key={doctor.id}
                                ></Doctor>)
                            }
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
import React from 'react';
import { useParams } from 'react-router';
import useData from '../../../Hooks/useData';

const DetailsService = () => {
    const { Id } = useParams();
    const services = useData();
    const service = services.find(service => parseInt(service.key) === parseInt(Id))

    return (
        <div className="container row text-center mt-3 mx-auto">
            <div className="col-lg-6 col-md-12 col-12 mx-auto border p-3">
                <img className="img-fluid" src={service?.photoUrl} alt="" />
                <h2 className="mt-2 text-success">{service?.title}</h2>
                <hr className="border-2" />
                <p>{service?.description}</p>
                <div className="card-custom-footer text-center">
                    <button>Get Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsService;
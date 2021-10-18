import React from 'react';
import { useParams } from 'react-router';
import useData from '../../../Hooks/useData';

const DetailsService = () => {
    const { Id } = useParams();
    const services = useData();
    const service = services.find(service => parseInt(service.key) === parseInt(Id))

    return (
        <div>
            <img src={service?.photoUrl} alt="" />
            <h2>{service?.title}</h2>
            <p>{service?.description}</p>
        </div>
    );
};

export default DetailsService;
import React, { useEffect, useState } from 'react';
import './ManageServices.css'
import Services from '../Home/Services/Services';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services/')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service => <div key={service._id} className="service-container-manage">
                    <h3>{service.name}</h3>
                    <h4>Price:{service.price}</h4>
                    <button>Delete</button>
                </div>
                )
            }
        </div>
    );
};

export default ManageServices;
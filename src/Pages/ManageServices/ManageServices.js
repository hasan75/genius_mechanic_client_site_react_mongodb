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

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert('SuccessFully Deleted the service')
                const remainingServices = services.filter(service => service._id !== id);
            setServices(remainingServices)
            }
            
        })
    }

    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service => <div key={service._id} className="service-container-manage">
                    <h3>{service.name}</h3>
                    <h4>Price:{service.price}</h4>
                    <button onClick={()=> handleDelete(service._id)}>Delete</button>
                </div>
                )
            }
        </div>
    );
};

export default ManageServices;
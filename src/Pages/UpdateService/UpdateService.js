import React, { useEffect, useState } from 'react';
import './UpdateService.css'
import { useParams } from 'react-router';

const UpdateService = () => {
    const [service, setService] = useState({})
    const {serviceId} = useParams();

    useEffect(()=>{
        const url = `http://localhost:5000/services/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    //update user
    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedService = {...service}
        updatedService.name = updatedName;
        setService(updatedService);
    } 

    const handlePriceChange = e => {
        const updatedPrice = e.target.value;
        const updatedService = {...service}
        updatedService.price = updatedPrice;
        setService(updatedService);
    } 

    const handleDesChange = e => {
        const updatedDescription = e.target.value;
        const updatedService = {...service}
        updatedService.description = updatedDescription;
        setService(updatedService);
    } 

    const handleImgChange = e => {
        const updatedImg = e.target.value;
        const updatedService = {...service}
        updatedService.img = updatedImg;
        setService(updatedService);
    } 
    
    //update service
    const handleUpdateService = e => {
        const url = `http://localhost:5000/services/${serviceId}`;
        fetch(url, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Updated Successfully')
                setService({})
            }
        })

        e.preventDefault();

    }
    return (
        <div>
            <h2>Update Service: <span className="text-success"> {service.name}</span></h2>

            <form className="service-update-form" onSubmit={handleUpdateService}>
                <input type="text" onChange={handleNameChange} value={service.name || ''} />
                <input type="number" onChange={handlePriceChange} value={service.price || ''} />
                <input type="text" onChange={handleDesChange} value={service.description || ''} />
                <input type="url" onChange={handleImgChange} value={service.img || ''} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateService;
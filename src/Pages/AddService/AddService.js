import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h2>Please Add A Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description"/>
                <input type="number" {...register("price")} placeholder="Price"/>
                <input {...register("img")} placeholder="Image URL Link"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;
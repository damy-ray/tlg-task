import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom';


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post("https://api.escuelajs.co/api/v1/auth/login", data)
            if (res.data.access_token) {
                localStorage.setItem("token", JSON.stringify(res.data.access_token));
                //o una qualsiasi pagina che vogliamo mostrare come prima
                navigate('/feed')
            }
        } catch (error) {
            console.log(error.response)

        }
    }

    return (
        <div className="p-5 w-25 h-100 m-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-3">
                <input placeholder="insert an email" {...register("email")} />
                <input type="password" placeholder="insert a password" {...register("password")} />
                <input type="submit" className="btn btn-primary" value="Login" />{' '}
            </form>
            <div className="mt-3">
                <Link  to="/register">Or register</Link>
            </div>
        </div>
    )
}

export default Login
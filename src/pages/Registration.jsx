import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';

const Registration = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      data.avatar = "https://api.lorem.space/image/face?w=640&h=480&r=867";
      const res = await axios.post("https://api.escuelajs.co/api/v1/users", data)
      navigate('/login')
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <div className="p-5 w-50 h-100 m-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-3">
        <input placeholder="insert a name" {...register("name")} />
        <input placeholder="insert an email" {...register("email")} />
        <input placeholder="insert a password" {...register("password", {
          required: "Inserisci una password",
          minLength: {
            value: 8,
            message: "La password deve contenere almeno 8 caratteri"
          },
          pattern: {
            value: /^(?=.*[A-Z])(?=.*\d).+$/,
            message: "Inserisci almeno una lettera maiuscola ed un numero"
          }
        })} />
        <input type="submit" />
      </form>
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ message }) => <p>{message}</p>}
      />
    </div>
  )
}

export default Registration

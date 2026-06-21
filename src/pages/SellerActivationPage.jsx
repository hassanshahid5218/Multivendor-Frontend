import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { frontend_url } from '../server';
import { server } from '../server';
const SellerActivationPage = () => {
    const {activation_token}=useParams();
    const [message,setMessage]=useState('');
    const [error,setError]=useState(false)

    useEffect(() => {
        if(activation_token){
            const activationEmail =async()=>{
                try {
                    const res=await axios.post(`${server}/shop/activation`,{
                        activation_token
                    })
                    setMessage(res.data.message || 'Your account has been created successfully!');
                } catch (error) {
                    setError(true);
                    setMessage(error.response?.data?.message || 'Your token is expired!');
                }
            }
            activationEmail()
        }
    }, [activation_token])
    
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{message || (error ? 'Your token is expired!' : 'Your account has been created successfully!')}</p>
    </div>
  )
}

export default SellerActivationPage

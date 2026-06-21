import React from 'react'
import ShopLogin from '../components/Shop/shoplogin.jsx'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadSeller } from '../redux/action/user.js';

export default function Loginpage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSeller,isLoading,seller } = useSelector((state) => state.seller);
  
  useEffect(() => {
    dispatch(loadSeller());
  }, [dispatch]);

  useEffect(() => {
    if(isSeller === true && seller?._id){
      navigate(`/dashboard`);
    }
  }, [isLoading, isSeller, seller, navigate])
  return (
    <div>
      <ShopLogin />
    </div>
  )
}
 
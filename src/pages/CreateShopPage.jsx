import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopCreate from "../components/Shop/ShopCreate.jsx";
import { loadSeller } from '../redux/action/user.js';

const ShopCreatePage = () => {
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
        <ShopCreate />
    </div>
  )
}

export default ShopCreatePage
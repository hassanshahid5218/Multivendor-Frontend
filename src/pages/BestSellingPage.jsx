import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/header'
import Footer from '../components/Layout/Footer'
import { useSearchParams } from 'react-router-dom'
import { productData } from '../static/data';
import ProductCard from '../components/Route/ProductCard/ProductCard';
import styles from '../styles/styles';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions/product';
import { useDispatch } from 'react-redux';
export default function ProductsPages() {
  const dispatch=useDispatch();
    const [data, setData] = useState([]);
    useEffect(()=>{
      dispatch(getAllProducts())
    },[dispatch])
    const { products = [], allProducts = [] } = useSelector((state) => state.products);
     const Products = allProducts || products ;
     console.log("Products",Products)
  useEffect(() => {
    const sortedProducts = [...Products].sort(
      (a, b) => (b.sold_out || 0) - (a.sold_out || 0)
    );

    setData(sortedProducts);
  }, [Products]);
  return (
    <div>
      <Header activeHeading={2}/>
       <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

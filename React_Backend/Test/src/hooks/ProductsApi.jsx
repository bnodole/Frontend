import React, { useEffect, useState } from 'react'

const ProductsApi = () => {
    const [productsData,setProductsData] = useState([]);

    useEffect(()=>{
        async function fetchProductsInfo() {
            let res = await fetch("https://dummyjson.com/products");
            let json = await res.json();

            setProductsData(json.products);
        }
        fetchProductsInfo();
    },[]);
    console.log(productsData);
  return (
    <div>ProductsApi</div>
  )
}

export default ProductsApi
import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";

const Browse = () => {
    const [products,setProducts] = useState([]);
    const [searchProducts,setSearchProducts] = useState([]);
    const [searchVal,setSearchVal] = useState("");
    useEffect(()=>{
        async function fetchProducts() {
            let res = await fetch("https://dummyjson.com/products");
            let json = await res.json();

            setProducts(json.products);
            setSearchProducts(json.products);
        }
        fetchProducts();
    },[]);

    function filterData(){
        let searchResult = products.filter((items)=>items.title.toLowerCase().includes(searchVal.toLowerCase()));
        setSearchProducts(searchResult);
        console.log(searchProducts);
    }
    let data = (searchVal === "") ? products : searchProducts;
  return (
    <>
        <div className='h-15 flex justify-between items-center px-10 py-5'>
            <h1 className='font-extrabold text-4xl'>Browse Items</h1>
            <div className='border border-black h-7'>
                <input type="text" name="search" id="search" placeholder='Search Item' onChange={(e)=>(setSearchVal(e.target.value))} className='bg-white h-6 p-3' />
                <button onClick={filterData} className='bg-green-500 h-7'><FaSearch /></button>
            </div>
        </div>
        <div className='grid grid-cols-5 gap-5 p-10'>
            {
                data.map(product=>(
                    <div key={product.id} className='p-5 flex flex-col justify-center items-center space-y-3 border rounded-2xl'>
                        <img src={product.thumbnail} />
                        <h2 className='font-bold text-2xl'>{product.title}</h2>
                        <p>{product.description.slice(0,50)}...</p>
                        <button className='h-10 w-[80%] bg-black text-white font-bold border rounded-3xl'>${product.price}</button>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Browse
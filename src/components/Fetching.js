import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Fetching.css"

const Fetching = () => {
  const [products, setProducts] = useState([]);
  const [loading,setLoading]=useState(false)
  async function getApi() {
    try {
      setLoading(true)
      const response = await axios.get(`https://fakestoreapi.com/products`);
      console.log(response.data);
      setProducts(response.data);
      setLoading(false)
    } catch (error) {
      console.log(`something went`); // this is the main part. Use the response property from the error object
      return error.response;
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
   
     <>
      {products.map((product) => (
         <div className="cardDisplay">
          <img src={product.image}/>
         <div className="card">
         <h3>{product.title}</h3>
         <p>{product.description}</p>
       </div>
     </div>
      ))}:<h3 className="Loading">Loading....</h3>

</>

   
  );
};

export default Fetching;

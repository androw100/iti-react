import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../axiosConfig/instance";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosInstance 
      .get(`/products`,{          //hya di el btgyyb products mn fakesapi docs
        params:{
          limit:50                //kam montag
        }
      })
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosConfig/instance";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosInstance 
      .get(`/products`,{          //hya di el btgyyb products mn fakesapi docs
        params:{
          limit:10                //kam montag
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
    <>
      <div>Products component</div>
      <div className="row">
        {products.map((item) => {         //hya di el btlf 34an n3rdhom 
          return (
            <Link to={`/details/${item.id}`} key={item.id}>   
            <div className="col-md-6 col-lg-4 col-xl-4" >
              <div className="card text-black">
                <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                <img
                  src={item.image}
                  className="card-img-top cardImg"
                  alt="Apple Computer"
                />
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="text-muted mb-4">{item.description}</p>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>${item.price}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Categoty</span>
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Products;

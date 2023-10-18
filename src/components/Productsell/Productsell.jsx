import React from "react";
import '../Productsell/Productsell.css';

const ProductSell=()=>{
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class=" praductsellname navbar-brand ps-5 text-dark fs-6" href="#">Product Sell</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="search__box" class=" bg-light">
          <input type="text" class=" serchboxin bg-light " placeholder="search or type" />
          <span class=" bg-light">
            <i class="ri-search-line"></i>
          </span>
        </div>
    </div>
<div class="btn-group me-5 pe-5">
  <button type="button" class="btn dropdown-toggle text-dark-emphasis" data-bs-toggle="dropdown" aria-expanded="false">
    Last 30 Days
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Aaa</a></li>
    <li><a class="dropdown-item" href="#">Bbb</a></li>
    <li><a class="dropdown-item" href="#">Ccc</a></li>
    <li><a class="dropdown-item" href="#">Ddd</a></li>
  </ul>
</div>
    </nav>
    <div className=" container">
     <div className="row text-dark-emphasis justify-content-center productinform">
        <div className=" col-9"><h6>Product Name</h6></div>
        <div className=" col-1"><h6>Stock</h6></div>
        <div className=" col-1"><h6>Price</h6></div>
        <div className=" col-1 fs-6"><h6>Total Sell</h6></div>
     </div>
    <hr/>
    <div className="row text-dark-emphasis productselldata">
        <div className=" col-9 d-flex">
            <img src="logo192.png" alt="abstract"/>
            <h5 className=" ps-5">Abstract 3D
            <p>Lorem epsom lorem loremloerm</p></h5>
            
        </div>
        <div className=" col-1"><h6> 32 in stock</h6></div>
        <div className=" col-1 text-dark"><h6>$ 45.99</h6></div>
        <div className=" col-1 fs-6"><h6>20</h6></div>
     </div>
     <hr/>
    <div className="row text-dark-emphasis productselldata">
        <div className=" col-9 d-flex">
        <img src="logo192.png" alt="Sarphens" />
            <h5 className=" ps-5">Sarphens illustration  <p>Lorem epsom lorem loremloerm</p></h5>
           
        </div>
        <div className=" col-1"><h6>32 in stock</h6></div>
        <div className=" col-1 text-dark"><h6>$ 45.99</h6></div>
        <div className=" col-1 fs-6"><h6>20</h6></div>
     </div>
    </div>
    </>
    )
}
export default ProductSell;
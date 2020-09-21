 import React from 'react';
 //import phones from '../images/';
 import "bootstrap/dist/css/bootstrap.min.css";

 const Slider = () => {
     return(
        <div className='Slider'>
            <div class="carousel slide-inner" >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src='/images/phones.jpg' class="d-block w-100" alt="phones" />
                    </div>
                    <div class="carousel-item">
                        <img src="/images/tv.jpg" class="d-block w-100" alt="tv" />
                    </div>
                    <div class="carousel-item">
                        <img src="/images/notebooks.jpg" class="d-block w-100" alt="notebooks" />
                    </div>
                </div>
            
            </div> 
                  <button Link to='/products' >Bienvenidos</button> 
        </div>      
    );
    
 }

export default Slider;
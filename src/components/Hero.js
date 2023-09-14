import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-20">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
          </div>
          <br/>
          <br/>
          <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4" style={{ color: 'white'} }>Classy Threads<br />
          <span className="font-light">Collection</span></h1>
          <Link to={'/Goshop'} className='self-start uppercase font-semibold border-b-2 border-primary' style={{ color: '#008B8B' }} >Go Shop Now</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

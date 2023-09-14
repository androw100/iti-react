import React from "react";

const Footer = () => {

  return (
    <>
      <div className='bg-slate-800 p-10'>
        <div className="AboutUs" >
          <i><b>About Us:</b></i>
        </div>
        <div class="btn-group">
          <a href="https://www.instagram.com/accounts/login/?hl=en">
            <button>Instagram</button>
          </a>
          <a href="https://www.facebook.com/login/">
            <button>Facebook</button>
          </a>
          <a href="https://twitter.com/i/flow/login">
            <button>Twitter</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";

const Contacts = () => {
  return (
    <>
      <div
        className="footer flex gap-x-[10rem] lg:gap-x-[32rem] text bg-gradient-to-br from-[#FF6366] to-[#cf4143] py-[3rem]"
        id="contact-section"
      >
        <div className="footer-logo">
          <img
            className="h-[5rem] lg:ml-[5rem] ml-[3rem]"
            src="./images/logo.svg"
            alt="Logo"
          />
        </div>
        <div className="social text-[#3F3D56] ">
          <div className="soc-icons ">
            <a
              className="text-[2.5rem] hover:text-[#252533] mr-[30px]"
              href="https://www.linkedin.com/feed/"
              target="_blank"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a
              className="text-[2.5rem] hover:text-[#252533] mr-[30px]"
              href="https://github.com/syed-ibrahim-shikalgar"
              target="_blank"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a
              className="text-[2.5rem] hover:text-[#252533] mr-[30px]"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a
              className="text-[2.5rem] hover:text-[#252533] mr-[30px]"
              href="https://www.findcoder.io/u/ibbu"
              target="_blank"
            >
              <ion-icon name="code-slash-outline"></ion-icon>
            </a>
          </div>
          <div className="last">
            <h5 className="font-[700]">
              Syed-Ibrahim-Shikalgar <span>&copy;</span> 2023
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;

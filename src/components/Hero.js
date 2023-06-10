import React from "react";

function Hero() {
  return (
    <>
      <div className="head1 bg-[#ea9d9e] flex flex-col-reverse text-center pt-[4rem] lg:pt-[2rem] lg:flex lg:flex-col">
        <div className="image1 mt-[30px] lg:mt-[0] flex justify-center">
          <img
            className="h-[18rem] lg:h-[20rem]"
            src="./images/main1.svg"
            alt="code"
          />
        </div>
        <div className="context lg:mt-[15px]">
          <h1 className="text-[#2F2E41] lg:text-[60px] text-[50px] font-[1000]">
            Syed Ibrahim
          </h1>
          <h1 className="font-[800] lg:text-[40px] text-[#444453] text-[33px]">
            Designer, Front-end Developer
          </h1>
          <p className="mt-[10px] lg:text-[25px] lg:pb-[22px] lg:px-[13rem] text-[18px] text-[#444453] px-[80px]">
            I specialize in crafting beautifully simple designs and translating
            them into elegant code. With a deep passion for my work, I find joy
            in creating seamless and visually appealing digital experiences.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;

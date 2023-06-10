import React from "react";
import TechnologiesCard from "./TechnologiesCard";

const Technologies = () => {
  const Technologies = [
    {
      imgSrcs: "./images/htmlfinal.svg",
      tag: "HTML",
    },
    {
      imgSrcs: "./images/css.png",
      tag: "CSS",
    },
    {
      imgSrcs: "./images/java1.svg",
      tag: "JAVASCRIPT",
    },
    {
      imgSrcs: "./images/logo192.png",
      tag: "REACTJS",
    },
    {
      imgSrcs: "./images/tailwindcss.png",
      tag: "TAILWIND CSS",
    },
    {
      imgSrcs: "./images/bootstrap.png",
      tag: "BOOTSTRAP",
    },
    {
      imgSrcs: "./images/gti.png",
      tag: "GIT",
    },
    {
      imgSrcs: "./images/github.png",
      tag: "GITHUB",
    },
  ];
  return (
    <div className="mb-[60px]" id="technology">
      <div className="text mt-[30px] flex flex-col text-center">
        <h1 className="text-[#2F2E41] text-[50px] font-[800]">Technologies</h1>
        <p className="text-[#2F2E41] text-[25px] mb-[30px]">
          I'm familiar with
        </p>
      </div>
      <div className="flex justify-center flex-wrap px-[5%] gap-x-[90px] text-center gap-y-[30px]">
        {Technologies?.map((obj) => {
          return (
            <TechnologiesCard
              key={obj.imgSrcs}
              imgSrcs={obj.imgSrcs}
              tag={obj.tag}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;

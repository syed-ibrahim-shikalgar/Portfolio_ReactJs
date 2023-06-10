import React from "react";

const BlogCard = ({ heading, date, dplylink }) => {
  return (
    <>
      <div className="blog1 bg-[#CCCCCC] mb-[30px] border-[2px] hover:shadow-3xl hover:border-dashed border-[#FF636D] border-[solid] rounded-[5px] pl-[30px] py-[30px] lg:w-[40%] mt-[20px]">
        <h1 className="text-[30px] text-[#3F3D56] font-[700]">{heading}</h1>
        <p className="text-[#514F6A] text-[17px] mt-[5px]">{date}</p>
        <a href={dplylink} target="_blank">
          <button className="mt-[20px] bg-[#EDA3A5] px-[20px] py-[15px] rounded-[5px] mt-[30px] text-[18px] font-[700] text-[#444453] hover:bg-[#CF4143] hover:text-[#2F2E41] hover:shadow-3xl">
            Read Blog
          </button>
        </a>
      </div>
    </>
  );
};

export default BlogCard;

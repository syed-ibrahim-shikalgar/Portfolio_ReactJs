import React from "react";

const TechnologiesCard = ({ imgSrcs, tag }) => {
  return (
    <>
      <div>
        <div className="bg-[#EDA3A5] px-[38px] py-[38px] rounded-[50%]">
          <img className="h-[10rem] " src={imgSrcs} alt="" />
        </div>
        <h2 className="textt-[#3F3D56] mt-[10px] text-[30px] font-[700]">
          {tag}
        </h2>
      </div>
    </>
  );
};

export default TechnologiesCard;

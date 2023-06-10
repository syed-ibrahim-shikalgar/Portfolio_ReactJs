import React from "react";

const ProjectCard = ({ imgSrc, srcCode, dplyLink, tag }) => {
  return (
    <>
      <div className="project-card mb-[30px] lg:h-[50%] lg:pb-[20px] flex flex-col items-center bg-[#EDA3A5] px-[30px] pt-[40px] pb-[30px] hover:shadow-3xl">
        <div className="text-[20px] text-[#444453] font-[700] mb-[20px]">
          <h1>{tag}</h1>
        </div>
        <div>
          <img
            src={imgSrc}
            className="street h-[20rem] w-[35rem]"
            alt="project-1"
          />
        </div>

        <div className="links flex justify-between w-[85%] pt-[30px] text-[20px] font-[700] text-[#444453] ">
          <a
            className="source hover:text-[#2F2E41] hover:underline"
            href={srcCode}
            target="_blank"
          >
            Source Code
          </a>

          <a
            className="deployed hover:text-[#2F2E41] hover:underline"
            href={dplyLink}
            target="_blank"
          >
            Deployed Link
          </a>
        </div>
      </div>
      {/* <div className="project-card mb-[50px] lg:h-[50%] lg:pb-[20px] flex flex-col items-center bg-[#EDA3A5] px-[30px] pt-[40px] pb-[30px] hover:shadow-3xl">
          <div>
            <img
              src={imgSrc}
              className="street h-[20rem] w-[35rem]"
              alt="project-1"
            />
          </div>

          <div className="links flex justify-between w-[85%] pt-[30px] text-[20px] font-[700] text-[#444453] ">
            <a
              className="source hover:text-[#2F2E41] hover:underline"
              href={srcCode}
              target="_blank"
            >
              Source Code
            </a>

            <a
              className="deployed hover:text-[#2F2E41] hover:underline"
              href={dplyLink}
              target="_blank"
            >
              Deployed Link
            </a>
          </div>
        </div> */}
    </>
  );
};

export default ProjectCard;

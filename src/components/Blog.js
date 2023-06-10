import React from "react";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import Contacts from "./Contacts";

const Blog = ({ isfromHome }) => {
  const Blogs = [
    {
      heading: "How JavaScript Works",
      date: "May 24",
      dplylink:
        "https://syed-ibrahim.hashnode.dev/title-understanding-the-flow-of-code-execution-in-javascript-a-journey-through-execution-contexts",
    },
    {
      heading: "JavScript Functions",
      date: "May 24",
      dplylink:
        "https://syed-ibrahim.hashnode.dev/title-mastering-javascript-functions-unlocking-the-power-of-modular-and-reusable-code",
    },
    {
      heading: "JavaScript Object CheatSheet",
      date: "May 24",
      dplylink:
        "https://syed-ibrahim.hashnode.dev/title-exploring-javascript-objects-harnessing-the-power-of-data-organization",
    },
    {
      heading: "JavaScript Array CheatSheet",
      date: "May 24",
      dplylink:
        "https://syed-ibrahim.hashnode.dev/title-mastering-javascript-arrays-unlocking-powerful-data-manipulation",
    },
    {
      heading: "Responsive Web Design",
      date: "May 24",
      dplylink:
        "https://syed-ibrahim.hashnode.dev/title-responsive-web-design-with-media-queries-creating-adaptive-user-experiences",
    },
    {
      heading: "CSS Grid",
      date: "May 24",
      dplylink:
        "https://syed-ibrahim.hashnode.dev/title-mastering-css-grid-a-powerful-layout-system-for-web-design",
    },
    {
      heading: "HTML Input Elements",
      date: "May 17",
      dplylink:
        "https://syed-ibrahim.hashnode.dev/title-mastering-the-html-input-element-a-comprehensive-guide-with-examples",
    },
    {
      heading: "HTML Elements",
      date: "May 16",
      dplylink:
        "https://syed-ibrahim.hashnode.dev/html-elements-a-beginners-guide",
    },
    {
      heading: "CSS Box Model",
      date: "May 16",
      dplylink:
        "https://syed-ibrahim.hashnode.dev/css-box-model-understanding-the-fundamentals-of-web-layouts",
    },
    {
      heading: "CSS Flexbox",
      date: "May 15",
      dplylink:
        "https://syed-ibrahim.hashnode.dev/title-the-power-of-flexbox-streamlining-css-layouts",
    },
    {
      heading: "Positions in CSS",
      date: "July 18",
      dplylink: "https://syed-ibrahim.hashnode.dev/positions-in-css",
    },
    {
      heading: "CSS Selectors",
      date: "July 17",
      dplylink: "https://syed-ibrahim.hashnode.dev/css-selectors",
    },
  ];

  return (
    <>
      <h2 className="text-center text-[#2F2E41] mt-[30px] text-[50px] font-[800] mb-[30px]">
        Blogs
      </h2>
      {!isfromHome && (
        <div className="flex justify-center">
          <img
            className="h-[20rem] mt-[20px] lg:h-[25rem]"
            src="./images/bm1.svg"
            alt=""
          />
        </div>
      )}
      {/* <div className="projects pt-[30px]" id="project-section"> */}
      <div className="blog flex flex-col lg:flex lg:flex-row lg:justify-center lg:gap-x-[5rem] px-[15%] lg:px-[0]  flex-wrap">
        {Blogs?.slice(0, isfromHome ? 4 : Blogs.length)?.map((ele) => {
          return (
            <BlogCard
              key={ele.heading}
              heading={ele.heading}
              date={ele.date}
              dplylink={ele.dplylink}
            />
          );
        })}
      </div>

      {isfromHome && (
        <div className="flex justify-center">
          <Link
            to="/Blog"
            className="see-more-btn bg-[#EDA3A5] px-[20px] py-[15px] rounded-[5px] mt-[30px] mb-[30px] text-[25px] font-[700] text-[#444453] hover:bg-[#CF4143] hover:text-[#2F2E41] hover:shadow-3xl"
          >
            See More
          </Link>
        </div>
      )}
      {!isfromHome && <Contacts />}
      {/* </div> */}
    </>
  );
};

export default Blog;

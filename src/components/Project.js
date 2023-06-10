import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import Contacts from "./Contacts";

const Project = ({ isFromHome }) => {
  // console.log(isFromHome);
  const Projects = [
    {
      imgSrc: "./images/rode.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/Rode-clone",
      dplyLink: "https://clone-of-rode.netlify.app/",
      tag: "Rode Clone",
    },
    {
      imgSrc: "./images/tic-tac-toe.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/TIC-TAC-TOE",
      dplyLink: "https://flourishing-starlight-c45214.netlify.app/",
      tag: "Tic-Tac-Toe",
    },
    {
      imgSrc: "./images/RGB-Conversion.png",
      srcCode:
        "https://github.com/syed-ibrahim-shikalgar/JavaScript-Assignments/tree/main/rgb%20conversion",
      dplyLink: "https://rgb-conversion-program.netlify.app/",
      tag: "R G B Conversions",
    },
    {
      imgSrc: "./images/project15.png",
      srcCode:
        "https://github.com/syed-ibrahim-shikalgar/Product-design-landingpage",
      dplyLink: "https://landingpage-of-product-design.netlify.app/",
      tag: "Product Landing Page",
    },
    {
      imgSrc: "./images/themeswitcher.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/ThemeSwitcher",
      dplyLink: "https://dark-theme-js-react.netlify.app/",
      tag: "Theme-Switcher",
    },
    {
      imgSrc: "./images/todoreact.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/TODO-Reactjs",
      dplyLink: "https://gentle-marzipan-43a58b.netlify.app/",
      tag: "TODO-ReactJs",
    },
    {
      imgSrc: "./images/paytm.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/Paytm-Clone",
      dplyLink: "https://paytm-clone-using-tailwindcss.netlify.app/",
      tag: "Paytm Clone",
    },
    {
      imgSrc: "./images/accordion.png",
      srcCode:
        "https://github.com/syed-ibrahim-shikalgar/JavaScript-Assignments/tree/main/Accordion",
      dplyLink: "https://accordion-program.netlify.app/",
      tag: "Accordian Page",
    },
    {
      imgSrc: "./images/colorchanger.png",
      srcCode:
        "https://github.com/syed-ibrahim-shikalgar/JavaScript-Assignments/tree/main/colorChanger",
      dplyLink: "https://color-changer-program.netlify.app/",
      tag: "Color-Changer",
    },
    {
      imgSrc: "./images/shopify.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/Shopify-clone",
      dplyLink: "https://colne-of-shopify.netlify.app/",
      tag: "Shopify Clone",
    },
    {
      imgSrc: "./images/jokegenerator.png",
      srcCode:
        "https://github.com/syed-ibrahim-shikalgar/JavaScript-Assignments/tree/main/jokes%20generator",
      dplyLink: "https://jokes-generator-program.netlify.app/",
      tag: "Joke Generator",
    },
    {
      imgSrc: "./images/nameconversion.png",
      srcCode:
        "https://github.com/syed-ibrahim-shikalgar/JavaScript-Assignments/tree/main/NameConversion",
      dplyLink: "https://name-conversion-program.netlify.app/",
      tag: "Name Conversion",
    },
    {
      imgSrc: "./images/passwordgenerator.png",
      srcCode:
        "https://github.com/syed-ibrahim-shikalgar/JavaScript-Assignments/tree/main/password%20generator",
      dplyLink: "https://password-generator-program.netlify.app/",
      tag: "Password Generator",
    },
    {
      imgSrc: "./images/qrgenerator.png",
      srcCode:
        "https://github.com/syed-ibrahim-shikalgar/JavaScript-Assignments/tree/main/QR%20generator",
      dplyLink: "https://qr-generator-program.netlify.app/",
      tag: "QR Generator",
    },
    {
      imgSrc: "./images/project13.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/SAAS-Landingpage",
      dplyLink: "https://landingpage-of-saas.netlify.app/",
      tag: "SAAS Landingpage",
    },
    {
      imgSrc: "./images/rpsgame.png",
      srcCode:
        "https://github.com/syed-ibrahim-shikalgar/JavaScript-Assignments/tree/main/rock%20paper%20scissor%20game",
      dplyLink: "https://rock-paper-scissor-game-program.netlify.app/",
      tag: "Rock-Paper-Scissor Game",
    },
    {
      imgSrc: "./images/wordcount.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/Word-Count",
      dplyLink: "https://word-count-program.netlify.app/",
      tag: "Word Count",
    },
    {
      imgSrc: "./images/typinggame.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/Typing-game",
      dplyLink: "https://typing-game-program.netlify.app/",
      tag: "Typing Game",
    },
    {
      imgSrc: "./images/todojs.png",
      srcCode:
        "https://github.com/syed-ibrahim-shikalgar/Todo-Add-Edit-Delete-Task",
      dplyLink: "https://todo-add-edit-delete-task.netlify.app/",
      tag: "TODO JavaScript",
    },
    {
      imgSrc: "./images/stopwatch.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/Stopwatch",
      dplyLink: "https://stopwatch-app-program.netlify.app/",
      tag: "Stopwatch",
    },
    {
      imgSrc: "./images/palindromechecker.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/Palindrome-Checker",
      dplyLink: "https://palindrome-checker-game-program.netlify.app/",
      tag: "Palindrome Checker",
    },
    {
      imgSrc: "./images/countdown.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/countdown",
      dplyLink: "https://countdown-program.netlify.app/",
      tag: "Countdown App",
    },
    {
      imgSrc: "./images/cfv.png",
      srcCode:
        "https://github.com/syed-ibrahim-shikalgar/Complete-Form-validation",
      dplyLink: "https://complete-form-validation-program.netlify.app/",
      tag: "Complete-Form-Validation",
    },
    {
      imgSrc: "./images/colorjs.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/Color-Game",
      dplyLink: "https://primary-color-game-prediction.netlify.app/",
      tag: "Color-Game JS",
    },
    {
      imgSrc: "./images/calculator.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/Calculator",
      dplyLink: "https://calculator-application-calculation.netlify.app/",
      tag: "Calculator",
    },
    {
      imgSrc: "./images/project14.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/Dance-Homepage",
      dplyLink: "https://homepage-of-dancing.netlify.app/",
      tag: "Dance Homepage",
    },
    {
      imgSrc: "./images/project12.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/Business-Landingpage",
      dplyLink: "https://landingpage-of-business.netlify.app/",
      tag: "Business Landingpage",
    },
    {
      imgSrc: "./images/project11.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/Hosting-Landingpage",
      dplyLink: "https://landingpage-of-hosting.netlify.app/",
      tag: "Hosting Landingpage",
    },
    {
      imgSrc: "./images/project10.png",
      srcCode:
        "https://github.com/syed-ibrahim-shikalgar/Interior-Design-Landingpage",
      dplyLink: "https://landingpage-of-interior-design.netlify.app/",
      tag: "Interior Landingpage",
    },
    {
      imgSrc: "./images/project9.png",
      srcCode:
        "https://github.com/syed-ibrahim-shikalgar/Developer-Landing-Page",
      dplyLink: "https://landingpage-of-developer.netlify.app/",
      tag: "Developer Landingpage",
    },
    {
      imgSrc: "./images/project8.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/Web-Design-Homepage",
      dplyLink: "https://web-desingn-landingpage.netlify.app/",
      tag: "Web-Design Landingpage",
    },
    {
      imgSrc: "./images/project7.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/Product-Homepage",
      dplyLink: "https://homepage-of-product.netlify.app/",
      tag: "Product Homepage",
    },
    {
      imgSrc: "./images/project6.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/Plant-Homepage",
      dplyLink: "https://homepage-of-plant-company.netlify.app/",
      tag: "Plant Homepage",
    },
    {
      imgSrc: "./images/project5.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/Crypto-Landing-page",
      dplyLink: "https://landing-page-of-crypto.netlify.app/",
      tag: "Crypto Landingpage",
    },
    {
      imgSrc: "./images/project4.png",
      srcCode:
        "https://github.com/syed-ibrahim-shikalgar/Digital-Marketing-Homepage",
      dplyLink: "https://homepage-of-digital-marketing.netlify.app/",
      tag: "Digital Marketing Homepage",
    },
    {
      imgSrc: "./images/project3.png",
      srcCode: "https://github.com/syed-ibrahim-shikalgar/Law-Home-Page",
      dplyLink: "https://home-page-of-law.netlify.app/",
      tag: "Law Homepage",
    },
    {
      imgSrc: "./images/project2.png",
      srcCode:
        "https://github.com/syed-ibrahim-shikalgar/Food-Restaurant-Home-Page",
      dplyLink: "https://food-page-of-restaurant.netlify.app/",
      tag: "Food Homepage",
    },
    {
      imgSrc: "./images/project1.png",
      srcCode:
        "https://github.com/syed-ibrahim-shikalgar/Street-Style-Landing-Page",
      dplyLink: "https://landingpage-street-style.netlify.app/",
      tag: "Street-Style Homepage",
    },
  ];
  // const JavaScriptProjects = [
  //   {
  //     imgSrc: "./images/project1.png",
  //     srcCode:
  //       "https://github.com/syed-ibrahim-shikalgar/Street-Style-Landing-Page",
  //     dplyLink: "https://landingpage-street-style.netlify.app/",
  //   },
  //   {
  //     imgSrc: "./images/project1.png",
  //     srcCode:
  //       "https://github.com/syed-ibrahim-shikalgar/Street-Style-Landing-Page",
  //     dplyLink: "https://landingpage-street-style.netlify.app/",
  //   },
  //   {
  //     imgSrc: "./images/project1.png",
  //     srcCode:
  //       "https://github.com/syed-ibrahim-shikalgar/Street-Style-Landing-Page",
  //     dplyLink: "https://landingpage-street-style.netlify.app/",
  //   },
  //   {
  //     imgSrc: "./images/project1.png",
  //     srcCode:
  //       "https://github.com/syed-ibrahim-shikalgar/Street-Style-Landing-Page",
  //     dplyLink: "https://landingpage-street-style.netlify.app/",
  //   },
  // ];
  return (
    <>
      <div className="projects pt-[50px]" id="project-section">
        <h2 className="text-center text-[#2F2E41] text-[50px] font-[800] mb-[30px]">
          Projects
        </h2>
        {/* {isFromHome ? (
          Projects.map((obj) => {
            return (
              <ProjectCard
                imgSrc={obj.imgSrc}
                srcCode={obj.srcCode}
                dplyLink={obj.dplyLink}
              />
            );
          }).slice(0, 2)
        ) : (
          <>
            {Projects.map((obj) => {
              return (
                <ProjectCard
                  imgSrc={obj.imgSrc}
                  srcCode={obj.srcCode}
                  dplyLink={obj.dplyLink}
                />
              );
            })}
            <h2>JavaScript Projects</h2>
            {JavaScriptProjects.map((obj) => {
              return (
                <ProjectCard
                  imgSrc={obj.imgSrc}
                  srcCode={obj.srcCode}
                  dplyLink={obj.dplyLink}
                />
              );
            })}
          </>
        )} */}
        <div className="flex flex-col justify-center lg:flex lg:flex-row flex-wrap lg:gap-[50px] px-[30px]">
          {Projects?.slice(0, isFromHome ? 4 : Projects.length)?.map((obj) => {
            return (
              <ProjectCard
                key={obj.imgSrc}
                tag={obj.tag}
                imgSrc={obj.imgSrc}
                srcCode={obj.srcCode}
                dplyLink={obj.dplyLink}
              />
            );
          })}
        </div>

        {/* {!isFromHome && (
          <>
            <h2>JavaScript Projects</h2>
            {JavaScriptProjects.map((obj) => {
              return (
                <ProjectCard
                  imgSrc={obj.imgSrc}
                  srcCode={obj.srcCode}
                  dplyLink={obj.dplyLink}
                />
              );
            })}
          </>
        )} */}

        {isFromHome && (
          <>
            <div className="flex justify-center">
              <Link
                to="/Project"
                className="see-more-btn  bg-[#EDA3A5] px-[20px] py-[15px] rounded-[5px] mt-[30px] mb-[30px] text-[25px] font-[700] text-[#444453] hover:bg-[#CF4143] hover:text-[#2F2E41] hover:shadow-3xl"
              >
                See More
              </Link>
            </div>
          </>
        )}
        {!isFromHome && <Contacts />}
      </div>
    </>
  );
};

export default Project;

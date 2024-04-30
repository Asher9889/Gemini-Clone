import React, { useContext } from "react";

import Nav from "./Nav";
import Welcome from "./Welcome";
import Cards from "./Cards";
import Input from "./Input";
import Terms from "./Terms";
import { DataContext } from "../../context/Context";
import loader from "../../assets/loader.png"

const MainContent = () => {
  const { getResult, output, previousInput, loading } = useContext(DataContext);
  return (
    <>
      <div className="main h-screen  w-full overflow-y-auto   px-4 py-4">
        <Nav />
        {!getResult ? (
          <>
            <Welcome />
            <Cards />
          </>
        ) : (
          <>
            <div className="output w-[80%] h-[70%]  mb-5 mx-auto overflow-y-auto  ">
              {loading ? (
                <>
                  <div className="flex  gap-5">
                    <img
                      className="w-8 h-8 rounded-full object-cover object-top "
                      src="https://img.freepik.com/free-vector/portrait-boy-with-brown-hair-brown-eyes_1308-146018.jpg?w=360&t=st=1712392710~exp=1712393310~hmac=e0f3debfa5d3c0653fe72f29b291acb5ff26e6ab796cc4b8d18c38cd514f1f4d"
                      alt=""
                    />
                    <h1 className="text-lg font-semibold font-sen-serif">{previousInput}</h1> 
                  </div>

                  <div className="mt-8 flex gap-10 ">
                    <div className="">
                      <img className="w-10"
                      style={{
                        animation: "spin",
                        animationDuration: "5s",
                        animationIterationCount: "infinite",
                        animationDirection: "linear"
                      }}
                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png" alt="" />
                    </div>

                    <div  className=" w-[80%] h-20  ">
                      <div className="colorSlide" ></div>
                      <div className="colorSlide"></div>
                      <div className="colorSlide"></div   >
                      {/* <img src={loader} alt="" /> */}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-5">
                    <img
                      className="w-8 h-8 rounded-full object-cover object-top "
                      src="https://img.freepik.com/free-vector/portrait-boy-with-brown-hair-brown-eyes_1308-146018.jpg?w=360&t=st=1712392710~exp=1712393310~hmac=e0f3debfa5d3c0653fe72f29b291acb5ff26e6ab796cc4b8d18c38cd514f1f4d"
                      alt=""
                    />
                    <h1 className="text-lg font-semibold font-sen-serif">{previousInput}</h1>
                  </div>
                  <div className=" relative pl-12 mt-8 ">
                  <img className="w-10 absolute top-0 left-0  -mr-10"
                     
                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png" alt="" />
                    
                    
                    <p className="leading-7 font-outfit opacity-80   " dangerouslySetInnerHTML={{ __html: output }}></p>
                  </div>
                </>
              )}
            </div>
          </>
        )}

        <Input />
        <Terms />
      </div>
    </>
  );
};

export default MainContent;

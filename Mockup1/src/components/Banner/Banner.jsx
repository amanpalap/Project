import Card from "./cards/Card";
import React from "react";
import Logo from "../images/logo.png";
import CardB from "./cards/CardB";
import hl from "../images/hl.png";
import hr from "../images/hr.png";
import Slide from "./cards/Slide";

function Banner() {
  
  return (
    <>
      <div className="bg-black flex sticky flex-wrap">
        <div className="py-20 ml-48 w-1/2 flex flex-wrap items-center">
          <div className="block w-full max-w-lg text-white py-1">
            <h1 className="text-6xl">Turn Your Judiciary Dream Into Reality</h1>
          </div>
          <div className="w-full max-w-md  pb-6 text-white text-lg">
            <p>
              Revolutionize Your Prelims + Mains + Interview Preparation in an
              Integrated Manner.
            </p>
          </div>
          <div className="w-full max-w-sm text-black text-center text-lg">
            <p className="bg-white rounded-xl py-2">
              #1 Most Downloaded Judicial Services App
            </p>
          </div>
          <div className="flex w-full flex-wrap mt-5">
            <div className="block w-36 mr-10 rounded-xl bg-white">
              <img src={Logo} alt="" />
            </div>
            <div className="block w-36 rounded-xl bg-white">
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-slate-800 text-white py-1.5">
        <p>Why Edzorb Law App is ❤ by Over 10,000+ Users. Read Reviews</p>
      </div>
      <div className="flex flex-wrap justify-center py-16 items-center">
        <div className="w-full max-w-sm mx-4">
          <Card />
        </div>
        <div className="w-full max-w-sm mx-4">
          <Card />
        </div>
        <div className="w-full max-w-sm mx-4">
          <Card />
        </div>
      </div>
      <div className="">
        <div className="flex w-full bg-blue-300 backdrop-blur-3xl bg-opacity-50 py-4 justify-center items-center">
          <img className="w-28" src={hl} alt="" />
          <h1 className="text-5xl">The Edzorb Law Difference</h1>
          <img className="w-28" src={hr} alt="" />
        </div>
      </div>
      <div>
        <div>
          <CardB />
        </div>
        <div>
          <CardB />
        </div>
        <div>
          <CardB />
        </div>
        <div>
          <CardB />
        </div>
        <div>
          <CardB />
        </div>
      </div>
      <div>
        <div className="flex w-full bg-blue-300 backdrop-blur-3xl bg-opacity-50 py-4 mt-4 justify-center items-center">
          <img className="w-28" src={hl} alt="" />
          <h1 className="text-5xl">Strike Rate</h1>
          <img className="w-28" src={hr} alt="" />
        </div>
      </div>
      <div className="px-52 my-8">
        <Slide/>
      </div>
      <div>
        <div className="flex w-full bg-blue-300 backdrop-blur-3xl bg-opacity-50 py-4 mt-4 justify-center items-center">
          <img className="w-28" src={hl} alt="" />
          <h1 className="text-5xl">Testimonials</h1>
          <img className="w-28" src={hr} alt="" />
        </div>
      </div>
      <div className="px-52 my-8">
        <Slide/>
      </div>
    </>
  );
}

export default Banner;

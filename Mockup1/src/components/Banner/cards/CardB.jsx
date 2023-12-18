import React from "react";
import poster from "../../images/poster.jpeg";

function CardB() {
  return (
    <div className="w-full flex flex-wrap py-4 px-8 justify-center">
      <div className="w-full max-w-5xl flex rounded-[70px] shadow-2xl py-12 px-12 justify-evenly flex-wrap">
        <div className="w-5/12 pr-8 block">
          <div className="">
            <img className="rounded-3xl shadow-2xl" src={poster} alt="" />
          </div>
        </div>
        <div className="w-7/12 block py-16">
          <div className="flex flex-wrap justify-center">
            <h1 className="text-xl font-bold">
              Prelims QBank with Explanations in Visual Learning Format
            </h1>
          </div>
          <div className="text-xs/6 font-extralight pl-5">
            <li>High Yield Prelims Questions with Mains Explanations</li>
            <li>Visual Learning Format, Stories, Animations</li>
            <li>
              Precise, Qualitative & Effective with Proven Track Record Across
              Multiple Prelims
            </li>
            <li>Extensive Subject Wise Coverage of Questions</li>
            <li>Goldmine for Your Success in Judiciary Exams</li>
          </div>
          <div className="bg-blue-800 text-center py-3 rounded-xl my-4 text-white w-48">
            <button className="text-xl">Download Free</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardB;

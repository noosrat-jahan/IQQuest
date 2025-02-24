import React from "react";

const Category = () => {
  return (
    <div className="my-14 z-10">
      <h1 className="font-bold text-3xl text-teal-800 text-center">
        Popular Quiz Categories
      </h1>
      <div className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-10 w-10/12 mx-auto">
        <div className="border border-blue-900 p-6 text-lg shadow-lg  flex items-center gap-5 rounded-lg">
          <img src="/images/knowledge.png" alt="" className="w-10" />
          General Knowledge
        </div>
        <div className="border border-blue-900 p-6 text-lg shadow-lg  flex items-center gap-5 rounded-lg">
          <img src="/images/science.png" alt="" className="w-10" />
          Science & Technology
        </div>
        <div className="border border-blue-900 p-6 text-lg shadow-lg  flex items-center gap-5 rounded-lg">
          <img src="/images/geography.png" alt="" className="w-10" />
          History & Geography
        </div>
        <div className="border border-blue-900 p-6 text-lg  shadow-lg flex items-center gap-5 rounded-lg">
          <img src="/images/sports.png" alt="" className="w-10" />
          Sports & Games
        </div>
        <div className="border border-blue-900 p-6 text-lg shadow-lg  flex items-center gap-5 rounded-lg">
          <img src="/images/math.png" alt="" className="w-10" />
          Math & Logic
        </div>
        <div className="border border-blue-900 p-6 text-lg  shadow-lg flex items-center gap-5 rounded-lg">
          <img src="/images/entertain.png" alt="" className="w-10" />
          Entertainment & Pop Culture
        </div>
        <div className="border border-blue-900 p-6 text-lg shadow-lg  flex items-center gap-5 rounded-lg">
          <img src="/images/literature.png" alt="" className="w-10" />
          Literature & Language
        </div>
        <div className="border border-blue-900 p-6 text-lg  shadow-lg flex items-center gap-5 rounded-lg">
          <img src="/images/riddles.png" alt="" className="w-10" />
          Brain Teasers & Riddles
        </div>
      </div>
    </div>
  );
};

export default Category;

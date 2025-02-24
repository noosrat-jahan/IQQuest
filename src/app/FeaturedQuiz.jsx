import Image from "next/image";
import React from "react";

const FeaturedQuiz = () => {
  return (
    <div className="my-10 w-10/12 mx-auto">
      <h1 className="font-bold text-3xl text-teal-800 text-center">
        Featured Quizes
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
        <div className="max-w-xs bg-white shadow-lg rounded-2xl overflow-hidden p-4 text-center hover:shadow-2xl transition duration-300">
          <div className="relative w-full h-40">
            <Image
              src="/images/logic.jpg" // Place the image inside the public/images folder
              alt="logic"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h2 className="text-lg font-bold text-blue-600 mt-3">
            Logic Puzzles
          </h2>
          <p className="text-gray-600">
            Can you solve these tricky logic puzzles? Test your critical
            thinking skills!
          </p>
        </div>
        <div className="max-w-xs bg-white shadow-lg rounded-2xl overflow-hidden p-4 text-center hover:shadow-2xl transition duration-300">
          <div className="relative w-full h-40">
            <Image
              src="/images/world.jpg" // Place the image inside the public/images folder
              alt="world"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h2 className="text-lg font-bold text-blue-600 mt-3">
          World Capitals
          </h2>
          <p className="text-gray-600">
          How well do you know the capitals of different countries? Let’s find out!
          </p>
        </div>
        <div className="max-w-xs bg-white shadow-lg rounded-2xl overflow-hidden p-4 text-center hover:shadow-2xl transition duration-300">
          <div className="relative w-full h-40">
            <Image
              src="/images/space.jpg" // Place the image inside the public/images folder
              alt="space"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h2 className="text-lg font-bold text-blue-600 mt-3">
          Space Exploration
          </h2>
          <p className="text-gray-600">
          From the Moon landing to Mars missions, test your space knowledge!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedQuiz;

"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [questionset, setQuestionset] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => setQuestionset(data));
  }, []);

  const questionbyId = questionset.find(
    (idquestion) => idquestion.id === parseInt(id)
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);

  const handleAnswerSubmit = (option) => {
    if (option === questionbyId?.questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questionbyId?.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer("");
    } else {
      setIsQuizOver(true);
    }
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">
            {questionbyId?.name} Quiz
          </h1>

          {!isQuizOver ? (
            <>
              <div className="mb-4">
                <p className="text-lg font-semibold">
                  {questionbyId?.questions[currentQuestionIndex]?.question}
                  {/* {questions[currentQuestionIndex].question} */}
                </p>
              </div>

              <div className="space-y-4">
                {questionbyId?.questions[currentQuestionIndex]?.options.map(
                  (option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSubmit(option)}
                      className="w-full p-3 text-left bg-teal-200 text-gray-800 rounded hover:bg-teal-600 focus:outline-none"
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
            </>
          ) : (
            <div className="text-center bg-amber-500">
              <h2 className="text-2xl font-bold mb-4">Quiz Over!</h2>
              <p className="text-lg">
                Your Score: {score} / {questionbyId?.questions.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;

import React, { useState } from "react";

const Start = () => {
  const [step, setStep] = useState(1);

  // Array containing quiz questions, options, and correct answers
  const questions = [
    {
      question: "What is communication?",
      options: [
        { label: "(a) The process of exchanging information", value: "a" },
        { label: "(b) The ability to understand others' thoughts", value: "b" },
        { label: "(c) The skill of speaking clearly", value: "c" },
        { label: "(d) The act of sending and receiving messages", value: "d" },
      ],
      answer: "a",
    },
    {
      question: "Which of the following is a barrier to communication?",
      options: [
        { label: "(a) Noise", value: "a" },
        { label: "(b) Language differences", value: "b" },
        { label: "(c) Cultural differences", value: "c" },
        { label: "(d) All of the above", value: "d" },
      ],
      answer: "d",
    },
    {
      question: "What is the best way to improve your communication skills?",
      options: [
        { label: "(a) Practice", value: "a" },
        { label: "(b) Listen actively", value: "b" },
        { label: "(c) Be respectful", value: "c" },
        { label: "(d) All of the above", value: "d" },
      ],
      answer: "d",
    },
  ];

  // Function to handle option selection
  const handleOptionSelect = (selectedOption) => {
    // Logic to handle selected option
    console.log("Selected Option:", selectedOption);
  };

  return (
    <>
      <div className="w-[95%] mx-auto my-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-700">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-100">
            Physics Quiz
          </h1>
          <div className="w-full h-1 mx-auto mb-4 bg-blue-500 rounded-full dark:bg-blue-300"></div>
          <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
            Step {step} of {questions.length}
          </div>
        </div>
        {step <= questions.length && (
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4">
              <div className="w-1/3 h-2 mx-auto mt-1 mb-6 bg-gray-200 rounded-full dark:bg-gray-600">
                <div
                  className={`w-${
                    (step - 1) / questions.length
                  }/4 h-full text-center text-white bg-green-600 rounded-full dark:bg-green-400`}
                ></div>
              </div>
              <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                {questions[step - 1].question}
              </label>
              <div className="text-sm text-center">
                {questions[step - 1].options.map((option) => (
                  <div key={option.value}>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio h-5 w-5 text-blue-600"
                        name={`question${step}`}
                        value={option.value}
                        onChange={() => handleOptionSelect(option.value)}
                      />
                      <span className="ml-2">{option.label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 font-medium text-gray-500 bg-transparent rounded-lg shadow-none hover:text-gray-700 dark:text-gray-300"
                >
                  Previous
                </button>
              )}
              {step < questions.length && (
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-4 py-2 font-medium text-white bg-[#3B7BD3] border rounded-lg shadow-none focus:outline-none hover:bg-[#3B7BD3]/80"
                >
                  Next &nbsp; &rarr;
                </button>
              )}
              {step === questions.length && (
                <button
                  className="px-4 py-2 font-medium text-white bg-green-600 border rounded-lg shadow-none focus:outline-none hover:bg-green-700 dark:bg-green-400"
                  type="submit"
                >
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                  ></div>{" "}
                  Submit
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Start;

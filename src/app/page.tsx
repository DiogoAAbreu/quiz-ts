'use client'

import QuestionItem from "@/components/QuestionItem";
import { questionList } from "@/data/questionList";
import { OptionType } from "@/types/Question";
import { useState } from "react";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answersList, setAnswersList] = useState<OptionType[]>([]);

  const selectedQuestion = questionList[currentQuestion];

  console.log(answersList)

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black">
        <div>
          <h1 className="text-3xl font-bold p-5 border-b-1 border-gray-300">Quiz de Culinária</h1>
        </div>
        <div>
          <QuestionItem
            currentQuestion={currentQuestion}
            selectedQuestion={selectedQuestion}
            setCurrentQuestion={setCurrentQuestion}
            setAnswersList={setAnswersList}
            answersList={answersList}
          />
        </div>
        <div className="p-5 text-center text-xl font-semibold text-gray-800">
          {currentQuestion + 1} de {questionList.length} pergunta{questionList.length > 1 ? 's' : ''}
        </div>
      </div>
    </div>
  );
}

'use client'

import Image from "next/image";
import { questionList } from "@/data/questionList";
import OptionItem from "@/components/OptionItem";
import { useState } from "react";

export default function Home() {
  const question = questionList[0]

  const [selected, setSelected] = useState<boolean>(false)

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black">
        <div>
          <h1 className="text-3xl font-bold p-5 border-b-1 border-gray-300">Quiz de Culinária</h1>
        </div>
        <div>
          <p className="text-3xl font-bold p-5">1. {question.question}</p>
          <ul className="px-5 pb-5 border-b-1 border-gray-300">
            {question.options.map((item, index) =>
              <OptionItem key={index}
                option={item.option}
                correct={item.correct}
                selected={selected}
                setSelected={setSelected} />)}
          </ul>
        </div>
        <div className="p-5 text-center text-xl font-semibold text-gray-800">1 de {questionList.length} perguntas</div>
      </div>
    </div>
  );
}

import { OptionType, Question } from "@/types/Question";
import React from "react";
import OptionItem from "./OptionItem";

type Props = {
    currentQuestion: number;
    selectedQuestion: Question;
    setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>
    setAnswersList: React.Dispatch<React.SetStateAction<OptionType[]>>
    answersList: OptionType[]
}

const QuestionItem = ({ currentQuestion, selectedQuestion, setCurrentQuestion, setAnswersList, answersList }: Props) => {

    return (
        <div>
            <p className="text-3xl font-bold p-5">{currentQuestion + 1}. {selectedQuestion.question}</p>
            <ul className="px-5 pb-5 border-b-1 border-gray-300">
                {selectedQuestion.options.map((item, index) =>
                    <OptionItem key={index}
                        idQuestion={selectedQuestion}
                        option={item.option}
                        correct={item.correct}
                        setCurrentQuestion={setCurrentQuestion}
                        setAnswersList={setAnswersList}
                        answersList={answersList}
                        currentQuestion={currentQuestion}
                    />)}
            </ul>
        </div>
    )
}

export default QuestionItem;
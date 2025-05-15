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
    const { options, question } = selectedQuestion;

    return (
        <div>
            <p className="text-3xl font-bold p-5">{currentQuestion}. {question}</p>
            <ul className="px-5 pb-5 border-b-1 border-gray-300">
                {options.map((item, index) =>
                    <OptionItem key={index}
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
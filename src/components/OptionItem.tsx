import { OptionType, Question } from "@/types/Question"
import { useState } from "react";

type Props = {
    idQuestion: Question;
    option: string;
    correct: boolean;
    setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
    currentQuestion: number;
    setAnswersList: React.Dispatch<React.SetStateAction<OptionType[]>>;
    answersList: OptionType[];
}

const OptionItem = ({ idQuestion, option, correct, setCurrentQuestion, currentQuestion, setAnswersList, answersList, }: Props) => {

    const [optionSelected, setOptionSelected] = useState<boolean>(false);

    const handleResponse = (idQuestion: number) => {
        const questionAnswered = answersList.find(item => item.idQuestion === idQuestion)
        if (!questionAnswered) {
            setAnswersList([
                ...answersList,
                { idQuestion, option, correct }
            ])
            setOptionSelected(true);

            //setCurrentQuestion(currentQuestion);
        }

    }

    return (
        <>
            <li
                onClick={() => handleResponse(idQuestion.id)}
                className={`p-2 rounded-md bg-blue-200 border-1 border-blue-400 font-bold text-xl mb-4
                 ${(optionSelected && correct) && 'bg-green-200 border-1 border-green-400'}
                 ${(optionSelected && !correct) && 'bg-red-200 border-1 border-red-400'}
                 ${currentQuestion == answersList.length ? 'cursor-default' : 'cursor-pointer hover:opacity-70'}
                `}>{option}</li>
        </>
    )
}

export default OptionItem
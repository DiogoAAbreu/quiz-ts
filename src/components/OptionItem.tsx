import { OptionType } from "@/types/Question"

type Props = {
    option: string;
    correct: boolean;
    setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>
    setAnswersList: React.Dispatch<React.SetStateAction<OptionType[]>>
    answersList: OptionType[]
}

const OptionItem = ({ option, correct, answersList, setCurrentQuestion, setAnswersList }: Props) => {

    const handleResponse = () => {
        setAnswersList([
            ...answersList,
            { option, correct }
        ])

        setCurrentQuestion(1);
    }

    return (
        <>
            <li
                onClick={handleResponse}
                className={`p-2 rounded-md bg-blue-300 border-1 border-blue-400 font-bold text-xl mb-4 cursor-pointer`}>{option}</li>
        </>
    )
}

export default OptionItem
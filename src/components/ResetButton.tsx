import { OptionType } from "@/types/Question";

type Props = {
    setAnswersList: React.Dispatch<React.SetStateAction<OptionType[]>>;
    setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
}

const ResetButton = ({ setAnswersList, setCurrentQuestion }: Props) => {
    const resetQuiz = () => {
        setAnswersList([]);
        setCurrentQuestion(0);
    }

    return (
        <button
            onClick={resetQuiz}
            className="bg-blue-700 text-white p-3 rounded-md cursor-pointer mt-5 hover:opacity-70">
            Reiniciar Quiz
        </button>
    )
}

export default ResetButton;
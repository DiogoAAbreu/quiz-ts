import { questionList } from "@/data/questionList";
import { OptionType } from "@/types/Question";

type Props = {
    answersList: OptionType[]
}

const EndScreen = ({ answersList }: Props) => {

    return (
        <div className="px-5 pb-5 text-xl border-b-1 border-gray-300">
            {answersList.map((answer, index) =>
                <div key={index}>
                    <p className="font-bold mt-5">
                        {index + 1}. {questionList[index].question}
                    </p>
                    <p>
                        {answer.correct ? '(Acertô)' : '(Erou)'} - {answer.option}
                    </p>
                </div>)}
        </div>
    )
}

export default EndScreen;
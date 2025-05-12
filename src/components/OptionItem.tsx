import { OptionType } from "@/types/Question"

const OptionItem = ({ option, correct, selected, setSelected }: OptionType) => {
    const selectItem = () => {
        if (!selected) {
            setSelected(true);
        }
    }
    return (
        <>
            <li className="p-2 rounded-md bg-blue-300 border-1 border-blue-400 font-bold text-xl mb-4 cursor-pointer">{option}</li>
        </>
    )
}

export default OptionItem
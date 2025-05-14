import { Dispatch, SetStateAction } from "react";

export type Question = {
    question: string;
    options: {
        option: string;
        correct: boolean;
    }[]
}

export type OptionType = {
    option: string;
    correct: boolean;
}
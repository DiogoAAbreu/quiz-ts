export type Question = {
    id: number;
    question: string;
    options: {
        option: string;
        correct: boolean;
    }[]
}

export type OptionType = {
    idQuestion: number;
    option: string;
    correct: boolean;
}
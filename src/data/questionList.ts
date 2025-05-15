import { Question } from "@/types/Question"

export const questionList: Question[] = [
    {
        id: 1,
        question: 'Qual ingrediente não pode faltar?',
        options: [
            { option: 'Farinha', correct: false },
            { option: 'Água', correct: true },
            { option: 'Ovo', correct: false },
            { option: 'Corante', correct: false },
            { option: 'Manteiga', correct: false }
        ]
    },
    {
        id: 2,
        question: 'Qual alimento tem mais proteína?',
        options: [
            { option: 'Frango', correct: false },
            { option: 'Água', correct: false },
            { option: 'Ovo', correct: false },
            { option: 'Leite', correct: false },
            { option: 'Whey da Growth', correct: true }
        ]
    }
]
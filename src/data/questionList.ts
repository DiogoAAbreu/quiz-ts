import { Question } from "@/types/Question"

export const questionList: Question[] = [
    {
        question: 'Qual ingrediente não pode faltar?',
        options: [
            { option: 'Farinha', correct: false },
            { option: 'Água', correct: true },
            { option: 'Ovo', correct: false },
            { option: 'Corante', correct: false },
            { option: 'Manteiga', correct: false }
        ]
    }
]
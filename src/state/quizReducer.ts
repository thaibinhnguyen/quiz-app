import { QUIZ } from "../data/questions"
import type { QuizState } from "../types/quiz"

export type Action = { type: "START" } | { type: "ANSWER", index: number } |
                        { type: "TIMEOUT"} | { type: "NEXT" } | { type: "RESTART"}

export const initialState: QuizState = {
    status: "idle",
    currentQuestion: 0,
    answer: null,
    score: 0,
    results: []
}

export function quizReducer(state: QuizState, action: Action): QuizState {
    switch (action.type) {
        case "START": {
            const startState: QuizState = {...initialState, status: "active"}   
            return startState
        }
        case "ANSWER": {
            if (state.answer !== null) return state;
            const { index } = action
            const question = QUIZ.questions[state.currentQuestion]
            const isCorrect = question.answers[index].isCorrect
            return {
                ...state,
                answer: index,
                score: isCorrect ? state.score + 1 : state.score,
                results: [...state.results, {
                    questionId: question.id,
                    selected: index,
                    status: isCorrect ? 'right' as const : 'wrong' as const
                }]
            }
        }  
        case "TIMEOUT": {
            if (state.answer !== null) return state;
            const question = QUIZ.questions[state.currentQuestion]
            return {
                ...state,
                score: state.score - 1,
                results: [...state.results, {
                    questionId: question.id,
                    selected: null,
                    status: 'skipped'
                }]
            }
        }
        case "NEXT": {
            const next = state.currentQuestion + 1
            if(next >= QUIZ.questions.length) {
                return {
                    ...state,
                    status: "finished"
                }
            }
            return {
                ...state,
                currentQuestion: next,
                answer: null
            }
        }
        case "RESTART": return initialState
    }
}
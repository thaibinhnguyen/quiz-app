export type Question = {
    id: number,
    prompt: string,
    answers: Array<{ text: string, isCorrect: boolean}>
}

export type QuizStatus = "idle" | "active" | "finished"

export type QuizState = {
    status: QuizStatus
    currentQuestion: number,
    answer: number | null,
    score: number,
    results: Array<{ questionId: number, 
                     selected: number | null,
                     status: 'right'|'wrong'|'skipped' }>
}
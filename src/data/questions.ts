import type { Question } from "../types/quiz"

type Quiz = {
    title: string,
    blurb: string,
    questions: Question[]
}
export const QUIZ: Quiz = {
    title: "The Polyglot Quiz",
    blurb:
        "Five questions across code, space, and language. Each one gives you 60 seconds — answer it or it slips away and costs you a point. Pick wisely.",
    questions: [
        {
            id: 1,
            prompt: "In JavaScript, what does `typeof null` evaluate to?",
            answers: [{text: '"null"', isCorrect: false}, {text: '"object"', isCorrect: true}, {text: '"undefined"', isCorrect: false}, {text: '"boolean"', isCorrect: false}],
        },
        {
            id: 2,
            prompt: "Which data structure uses LIFO (last-in, first-out) ordering?",
            answers: [{text: "Queue", isCorrect: false}, {text: "Stack", isCorrect: true}, {text: "Linked list", isCorrect: false}, {text: "Hash map", isCorrect: false}]
        },
        {
            id: 3,
            prompt: "What is the time complexity of binary search on a sorted array?",
            answers: [{text: "O(n)", isCorrect: false}, {text: "O(n log n)", isCorrect: false}, {text: "O(log n)", isCorrect: true}, {text: "O(1)", isCorrect: false}]
        },
        {
            id: 4,
            prompt: "Which planet in our solar system has the most moons?",
            answers: [{text: "Jupiter", isCorrect: false}, {text: "Saturn", isCorrect: true}, {text: "Neptune", isCorrect: false}, {text: "Uranus", isCorrect: false}]
        },
        {
            id: 5,
            prompt: 'The word "algorithm" derives from the name of a 9th-century scholar from where?',
            answers: [{text: "Athens", isCorrect: false}, {text: "Baghdad / Khwarazm", isCorrect: true}, {text: "Alexandria", isCorrect: false}, {text: "Rome", isCorrect: false}]
        },
    ],
}
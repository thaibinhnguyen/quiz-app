import React from 'react'
import { QUIZ } from '../data/questions'
import type { QuizState } from '../types/quiz'
import type { Action } from '../state/quizReducer'
import Timer from './Timer'

interface QuestionCardProps {
    quizState: QuizState,
    dispatch: (a: Action) => void
}

const QuestionCard: React.FC<QuestionCardProps> = ({quizState, dispatch}) => {
    const { currentQuestion } = quizState
    const question = QUIZ.questions[currentQuestion]
    const TIME_PER_QUESTION = 60;
    const total = QUIZ.questions.length;
    const currentResult = quizState.results.find(r => r.questionId === question.id)

  return (
    <div className="qz-card">
        <div className="qz-meta">
            <span className="qz-step">
            Question {quizState.currentQuestion + 1} / {total}
            </span>
            <span className="qz-score">Score · {quizState.score}</span>
        </div>
        <Timer key={question.id} paused={quizState.answer !== null} onExpire={() => dispatch({type: "TIMEOUT"})} seconds={TIME_PER_QUESTION} />
       
        <h2 className="qz-prompt qz-serif">{question.prompt}</h2>
        {question.answers.map((answer, i) => {
            let cls = "qz-answer";
            if (quizState.answer !== null) {
                if (question.answers[i].isCorrect) cls += " right";
                else if (i === quizState.answer) cls += " wrong";
                else cls += " faded";
            }
            return (
                <button
                key={i}
                className={cls}
                disabled={!!currentResult}
                onClick={() => dispatch({ type: "ANSWER", index: i })}
                >
                <span className="qz-tag">{String.fromCharCode(65 + i)}</span>
                {answer.text}
                </button>
        )
        })}
        {currentResult && (
        <div className="qz-feedback">
          {currentResult.status=== 'skipped' ? (
            <span className="qz-verdict no">Time's up — that one cost you a point.</span>
          ) : currentResult.status === 'right' ? (
            <span className="qz-verdict ok">Correct.</span>
          ) : (
            <span className="qz-verdict no">Not quite.</span>
          )}
          <button className="qz-btn" onClick={() => dispatch({ type: "NEXT" })}>
            {quizState.currentQuestion + 1 === total ? "See results" : "Next"}
          </button>
        </div>
      )}
    </div>
  )
}

export default QuestionCard
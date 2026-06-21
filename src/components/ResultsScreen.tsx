import type React from "react";
import type { Action } from "../state/quizReducer";
import type { QuizState } from "../types/quiz";
import { QUIZ } from "../data/questions";

interface ResultsScreenProps {
  quizState: QuizState;
  dispatch: (a: Action) => void;
}
const ResultsScreen: React.FC<ResultsScreenProps> = ({
  quizState,
  dispatch,
}) => {
    const total = QUIZ.questions.length
  return (
    <div className="qz-card">
      <p className="qz-eyebrow">Quiz complete</p>
      <h1 className="qz-title qz-serif">You scored</h1>
      <p className="qz-bignum qz-serif" style={{ marginBottom: 8 }}>
        {quizState.score}
        <span style={{ fontSize: 28, color: "var(--muted)" }}> / {total}</span>
      </p>
      <p className="qz-blurb" style={{ marginTop: 16 }}>
        Here's how each question went.
      </p>

      <div>
        {quizState.results.map((r) => {
          const q = QUIZ.questions.find((x) => x.id === r.questionId);
          const correctAnswer = q?.answers.find(ans => ans.isCorrect)
          return (
            <div className="qz-result-row" key={r.questionId}>
              <span className={`qz-dot ${r.status}`} />
              <div>
                <p className="qz-result-q">{q?.prompt}</p>
                <p className="qz-result-a">
                  Correct answer: <b>{correctAnswer?.text}</b>
                  {r.status === "skipped" && " · you ran out of time"}
                  {r.status === "wrong" && (
                    <>
                      {" "}
                      · you picked <b>{r.selected !== null ? q?.answers[r.selected].text : ""}</b>
                    </>
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="qz-btn"
        style={{ marginTop: 28 }}
        onClick={() => dispatch({ type: "RESTART" })}
      >
        Play again
      </button>
    </div>
  );
};

export default ResultsScreen;

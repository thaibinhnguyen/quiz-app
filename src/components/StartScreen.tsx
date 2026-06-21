import type React from "react"
import { QUIZ } from "../data/questions"

interface StartScreenProps {
    onStart: () => void
}
const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="qz-card">
        <p className="qz-eyebrow">A 5-question challenge</p>
        <h1 className="qz-title qz-serif">{QUIZ.title}</h1>
        <p className="qz-blurb">{QUIZ.blurb}</p>
        <button className="qz-btn" onClick={onStart}>
            Start the quiz →
        </button>
    </div>
  )
}

export default StartScreen
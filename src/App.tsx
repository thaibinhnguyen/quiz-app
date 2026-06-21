import { useReducer } from 'react'
import { initialState, quizReducer } from './state/quizReducer'
import StartScreen from './components/StartScreen'
import QuestionCard from './components/QuestionCard'
import ResultsScreen from './components/ResultsScreen'

const App = () => {
    const [state, dispatch] = useReducer(quizReducer, initialState)
  return (
    <div className="qz-root">
      <div className="qz-shell">
        {state.status === "idle" && <StartScreen onStart={() => dispatch({ type: "START" })} />}
        {state.status === "active" && <QuestionCard quizState={state} dispatch={dispatch} />}
        {state.status === "finished" && <ResultsScreen quizState={state} dispatch={dispatch} />}
      </div>
    </div>
  )
}

export default App
# The Polyglot Quiz

A timed multiple-choice quiz built with React, TypeScript, and `useReducer`. Five questions, 60 seconds each — answer or lose a point.
Project based on [Quiz App](https://roadmap.sh/projects/quiz-app) from [Roadmap Ideas Frontend Projects](https://roadmap.sh/frontend/projects)

**[Live demo →](https://thaibinhnguyen.github.io/quiz-app/)**

## Features

- 60-second countdown per question with a visual progress bar
- Correct answer revealed on selection — green for right, red for wrong
- Score penalty (−1) for unanswered questions
- Results screen with a per-question breakdown
- Custom `useCountdown` hook for the timer logic

## Tech stack

- React 18 + TypeScript
- Vite
- `useReducer` for state management (no external library)

## Run locally

```bash
npm install
npm run dev
```

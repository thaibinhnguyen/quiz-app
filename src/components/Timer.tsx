import React from 'react'
import { useCountdown } from '../hooks/useCountdown';

interface TimerProps {
  paused: boolean,
  onExpire: () => void,
  seconds: number
}

const Timer: React.FC<TimerProps> = ({paused, onExpire, seconds}) => {
  const [left, pct] = useCountdown(seconds, paused, onExpire)
  return (
    <>
      <div className="qz-meta">
        <span className="qz-step">{left}s left</span>
      </div>
      <div className="qz-timer-track">
        <div className={`qz-timer-fill ${left <= 10 ? "low" : ""}`} style={{ width: `${pct}%` }} />
      </div>
    </>
  );
}

export default Timer
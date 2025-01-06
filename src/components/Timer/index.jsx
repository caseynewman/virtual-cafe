// pomodoro style timer
// counts down
// 25 minute work, or 5-10 minute break?
// buttons at top for work + short break (5min) + long break (10min)

import { useEffect } from "react";
import { useState } from "react";
import './style.css';

export default function PomodoroTimer() {
    const WORK_TIME = 25 * 60;
    const BREAK_TIME = 5 * 60;

    const [timeLeft, setTimeLeft] = useState(WORK_TIME);
    const [isActive, setIsActive] = useState(false);
    const [isWorkSession, setIsWorkSession] = useState(true);

    useEffect(() => {
        let timer;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsWorkSession((prev) => !prev);
            setTimeLeft(isWorkSession ? BREAK_TIME : WORK_TIME);
        }
        return () => clearInterval(timer);
    }, [isActive, timeLeft, isWorkSession]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`
    };

    return (
        <div className="timer-container">
            <h2>{isWorkSession ? "Working" : "Taking a break"}</h2>
            <h3>{formatTime(timeLeft)}</h3>
            <div className="timer-buttons">
                <button onClick={() => setIsActive(!isActive)}>
                    {isActive ? "Pause" : "Start"}
                </button>
                <button onClick={() => {
                    setIsActive(false);
                    setTimeLeft(isWorkSession ? WORK_TIME : BREAK_TIME);
                }}>
                    Reset
                </button>
            </div>
        </div>
    )
}
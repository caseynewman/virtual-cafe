// pomodoro style timer
// counts down
// 25 minute work, or 5-10 minute break?

import { useEffect } from "react";
import { useState } from "react";

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

    return (
        <>
        
        </>
    )
}
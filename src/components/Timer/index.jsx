// pomodoro style timer
// counts down
// 25 minute work, or 5-10 minute break?

import { useState } from "react";

export default function PomodoroTimer() {
    const WORK_TIME = 25 * 60;
    const BREAK_TIME = 5 * 60;

    const [timeLeft, setTimeLeft] = useState(WORK_TIME);
    const [isActive, setIsActive] = useState(false);
    const [isWorkSession, setIsWorkSession] = useState(true);

    

    return (
        <>
        
        </>
    )
}
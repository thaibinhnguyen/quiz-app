import { useEffect, useRef, useState } from "react";



export const useCountdown = (seconds: number, paused: boolean, onExpire: () => void): [number, number] => {
    const [left, setLeft] = useState(seconds)
    const expired = useRef(false);

    useEffect(() => {
        if(paused) return

        if(left <= 0) {
        if(!expired.current) {
            expired.current = true
            onExpire()
        }
        return;
        }
        const t = setTimeout(() => setLeft((s) => s - 1), 1000);
        return () => clearTimeout(t);
    }, [left, paused, onExpire])
    
    const pct = (left / seconds) * 100;
    return [left, pct]
}
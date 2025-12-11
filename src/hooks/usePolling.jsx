// src/hooks/usePolling.js
import { useEffect, useRef } from "react";

/**
 * usePolling(callback, intervalMs, active)
 * - callback: async function to run
 * - intervalMs: ms between runs
 * - active: boolean whether to poll
 */
export default function usePolling(callback, intervalMs = 5000, active = true) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!active) return;

        let mounted = true;
        const tick = async () => {
            if (!mounted) return;
            try {
                await savedCallback.current();
            } catch (e) {
                // swallow: individual component handles errors
            }
        };

        // run immediately, then interval
        tick();
        const id = setInterval(tick, intervalMs);
        return () => {
            mounted = false;
            clearInterval(id);
        };
    }, [intervalMs, active]);
}

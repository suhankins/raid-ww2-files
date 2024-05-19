import { useEffect, useRef, type RefObject } from 'react';

export default function useAutoScroller(ref: RefObject<HTMLDivElement>) {
    const timerId = useRef<NodeJS.Timeout | undefined>(undefined);
    useEffect(() => {
        const container = ref.current;
        const startScrollingDown = () => {
            if (timerId.current) {
                clearInterval(timerId.current);
                clearTimeout(timerId.current);
            }
            timerId.current = setInterval(() => {
                if (!container) {
                    return;
                }
                if (
                    container?.scrollTop ===
                    container.scrollHeight - container.clientHeight
                ) {
                    clearInterval(timerId.current);
                    timerId.current = setTimeout(() => {
                        startScrollingUp();
                    }, 5000);
                }
                container?.scrollBy({
                    top: 10,
                    behavior: 'smooth',
                });
            }, 100);
        };

        const startScrollingUp = () => {
            if (timerId.current) {
                clearInterval(timerId.current);
                clearTimeout(timerId.current);
            }
            timerId.current = setInterval(() => {
                if (container?.scrollTop === 0) {
                    clearInterval(timerId.current);
                    timerId.current = setTimeout(() => {
                        startScrollingDown();
                    }, 5000);
                }
                container?.scrollBy({
                    top: -10,
                    behavior: 'smooth',
                });
            }, 100);
        };

        const onMouseOut = () => {
            if (timerId.current) return;
            timerId.current = setTimeout(() => {
                startScrollingDown();
            }, 5000);
        };

        const onMouseIn = () => {
            clearTimeout(timerId.current);
            clearInterval(timerId.current);
            timerId.current = undefined;
        };

        container?.addEventListener('pointerover', onMouseIn);
        container?.addEventListener('pointerdown', onMouseIn);
        container?.addEventListener('pointerleave', onMouseOut);
        container?.addEventListener('pointerup', onMouseOut);

        onMouseOut();

        return () => {
            container?.removeEventListener('pointerover', onMouseIn);
            container?.removeEventListener('pointerdown', onMouseIn);
            container?.removeEventListener('pointerleave', onMouseOut);
            container?.removeEventListener('pointerup', onMouseOut);
        };
    }, [ref]);
}

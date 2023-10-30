import { useEffect, useRef } from 'react';
import useEPGScroll from './useEPGScroll';
import { calculateCurrentTimeInEm } from '../utils/time';

const useTimeLine = () => {
    const { programsGridWidth } = useEPGScroll();
    const fontSize = 16;

    const currentTimeInEm = calculateCurrentTimeInEm();
    const timeLineRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!timeLineRef) return;

        const calculateTimelineStyles = () => {
            const parentElement = timeLineRef?.current?.parentElement;

            if (parentElement && timeLineRef.current) {
                const extraWidth = Math.max(4.25 * fontSize, 60) / fontSize;

                timeLineRef.current.style.width = `${
                    programsGridWidth / fontSize - currentTimeInEm + extraWidth
                }em`;
                timeLineRef.current.style.left = `${currentTimeInEm}em`;
            }
        };

        calculateTimelineStyles();
        window.addEventListener('resize', calculateTimelineStyles);

        return () => {
            window.removeEventListener('resize', calculateTimelineStyles);
        };
    }, [programsGridWidth, currentTimeInEm, fontSize]);

    return { timeLineRef };
};

export default useTimeLine;

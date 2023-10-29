/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { calculateCurrentTimeInPixels } from '../utils/dataProcessing';
import { EPGConsumer } from '../store/EPGContext';

const useEPGScroll = () => {
    const {
        channels,
        updateProgramsGridWidth,
        programsGridWidth,
        programsGridRef,
        timeScaleRef,
    } = EPGConsumer();

    const synchronizeProgramsGridAndTimeScalePosition = (e: Event) => {
        const { scrollLeft } = e.currentTarget as HTMLDivElement;
        if (programsGridRef.current)
            programsGridRef.current.scrollLeft = scrollLeft;
        if (timeScaleRef.current) timeScaleRef.current.scrollLeft = scrollLeft;
    };

    const synchronize = synchronizeProgramsGridAndTimeScalePosition;

    const listenOrIgnoreScroll = (action: string) => {
        if (action === 'listen' && programsGridRef.current) {
            programsGridRef.current.addEventListener('scroll', synchronize);
        } else if (action === 'ignore' && programsGridRef.current) {
            programsGridRef.current.removeEventListener('scroll', synchronize);
        }
        return;
    };

    const listenScroll = () => listenOrIgnoreScroll('listen');
    const ignoreScroll = () => listenOrIgnoreScroll('ignore');

    useEffect(() => {
        listenScroll();
        return () => {
            ignoreScroll();
        };
    }, []);

    useEffect(() => {
        if (!programsGridRef.current) return;
        updateProgramsGridWidth(programsGridRef.current.scrollWidth - 60);
    }, [channels]);

    const scrollToTimeLine = () => {
        const currentTimeInPixels = calculateCurrentTimeInPixels();

        const halfScreenWidth = window.innerWidth / 2;

        const scrollPosition = currentTimeInPixels - halfScreenWidth;

        if (programsGridRef.current && timeScaleRef.current) {
            programsGridRef.current.scrollLeft = scrollPosition;
            timeScaleRef.current.scrollLeft = scrollPosition;
        }
    };

    return {
        programsGridWidth,
        programsGridRef,
        timeScaleRef,
        scrollToTimeLine,
    };
};

export default useEPGScroll;

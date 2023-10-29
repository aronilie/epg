import { createContext, useContext, useRef, useState } from 'react';
import { Channels } from '../models/Channel';

const useEPGStore = () => {
    const [channels, setChannels] = useState<Channels | undefined>();
    const [apiError, setApiError] = useState<Error | undefined>();
    const [programsGridWidth, setProgramsGridWidth] = useState<number>(0);

    const programsGridRef = useRef<HTMLDivElement | null>(null);
    const timeScaleRef = useRef<HTMLDivElement | null>(null);

    const updateChannels = (newChannels: Channels) => {
        setChannels(newChannels);
    };

    const updateApiError = (error: Error) => {
        setApiError(error);
    };

    const updateProgramsGridWidth = (newWidth: number) => {
        setProgramsGridWidth(newWidth);
    };

    return {
        updateChannels,
        updateApiError,
        updateProgramsGridWidth,
        channels,
        apiError,
        programsGridWidth,
        programsGridRef,
        timeScaleRef,
    };
};

interface EPGContextValue {
    updateChannels: (newChannels: Channels) => void;
    updateApiError: (error: Error) => void;
    updateProgramsGridWidth: (newWidth: number) => void;
    channels: Channels | undefined;
    apiError: Error | undefined;
    programsGridWidth: number;
    programsGridRef: React.RefObject<HTMLDivElement>;
    timeScaleRef: React.RefObject<HTMLDivElement>;
}

const EPGContext = createContext<EPGContextValue | undefined>(undefined);

export const EPGConsumer = () => {
    const context = useContext(EPGContext);
    if (context === undefined) {
        throw new Error('EPGConsumer must be used within an EPGProvider');
    }
    return context;
};

interface EPGProviderProps {
    children: React.ReactNode;
}

export const EPGProvider = ({ children }: EPGProviderProps) => {
    const EPGStore = useEPGStore();

    return (
        <EPGContext.Provider value={EPGStore}>{children}</EPGContext.Provider>
    );
};

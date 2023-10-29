import React from 'react';
import { getTimeScaleIntervals } from '../../utils/dataProcessing';
import TimeScaleStyled from './TimeScaleStyled';

const TimeScale = React.forwardRef<HTMLDivElement>(({}, ref) => {
    const times = getTimeScaleIntervals();
    return (
        <TimeScaleStyled>
            <div className="scale--container" ref={ref}>
                {(() => {
                    return times.map((time, index) => {
                        return (
                            <div key={index}>
                                <div className="scale--time">{time}</div>
                                <div className="scale--separator">|</div>
                            </div>
                        );
                    });
                })()}
            </div>
        </TimeScaleStyled>
    );
});

TimeScale.displayName = 'TimeScale';

export default TimeScale;

import useTimeLine from '../../hooks/useTimeLine';
import TimeLineStyled from './TimeLineStyled';

const TimeLine = () => {
    const { timeLineRef } = useTimeLine();

    return (
        <TimeLineStyled ref={timeLineRef} className="query-timeline">
            <div className="timeline" />
        </TimeLineStyled>
    );
};

export default TimeLine;

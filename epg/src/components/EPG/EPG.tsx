import TimeScale from '../TimeScale/TimeScale';
import useEPGScroll from '../../hooks/useEPGScroll';
import Channels from '../Channels/Channels';
import Button from '../Button/Button';
import EPGStyled from './EPGStyled';
import Programs from '../Programs/Programs';

const EPG = () => {
    const { timeScaleRef, scrollToTimeLine } = useEPGScroll();

    return (
        <EPGStyled>
            <TimeScale ref={timeScaleRef} />
            <div className="grid">
                <Channels />
                <Programs />
                <Button onClick={() => scrollToTimeLine()}>NOW</Button>
            </div>
        </EPGStyled>
    );
};

export default EPG;

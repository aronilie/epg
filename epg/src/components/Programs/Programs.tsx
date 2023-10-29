import useChannels from '../../hooks/useChannels';
import useEPGScroll from '../../hooks/useEPGScroll';
import { Channel } from '../../models/Channel';
import ChannelPrograms from '../ChannelPrograms/ChannelPrograms';
import TimeLine from '../TimeLine/TimeLine';

const Programs = (): JSX.Element => {
    const { channels } = useChannels();
    const { programsGridRef } = useEPGScroll();

    return (
        <div className="grid--list" ref={programsGridRef}>
            <TimeLine />
            {Array.isArray(channels) &&
                channels.map((channel: Channel) => {
                    const programs = channel.schedules;
                    return (
                        <div className="grid--list--item" key={channel.id}>
                            <ChannelPrograms programs={programs} />
                        </div>
                    );
                })}
        </div>
    );
};

export default Programs;

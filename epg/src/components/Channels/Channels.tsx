import ChannelsStyled from './ChannelsStyled';
import { Channel } from '../../models/Channel';
import useChannels from '../../hooks/useChannels';

const Channels = () => {
    const { channels } = useChannels();

    return (
        <ChannelsStyled>
            {Array.isArray(channels) &&
                channels.map((channel: Channel) => {
                    return (
                        <div className="channel" key={channel.id}>
                            <img
                                src={channel.images.LOGO}
                                className="channel__logo"
                                alt=""
                                width={60}
                                height={60}
                            />
                        </div>
                    );
                })}
        </ChannelsStyled>
    );
};

export default Channels;

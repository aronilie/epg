import { EPGConsumer } from '../store/EPGContext';
import { getAllChannelsAndPrograms } from '../utils/EPGApi';

const useChannels = () => {
    const { channels, updateChannels, apiError, updateApiError } =
        EPGConsumer();

    return {
        getChannelsAndPrograms: async () => {
            try {
                const response = await getAllChannelsAndPrograms();

                updateChannels(response.data);
            } catch (error) {
                updateApiError(error as Error);
            }
        },

        channels,
        apiError,
    };
};

export default useChannels;

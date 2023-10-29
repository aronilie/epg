/* eslint-disable react-hooks/exhaustive-deps */
import EPG from './components/EPG/EPG';
import useChannels from './hooks/useChannels';
import Error from './components/Error/Error';
import { useEffect } from 'react';

const App = (): JSX.Element => {
    const { getChannelsAndPrograms, apiError } = useChannels();

    useEffect(() => {
        (async () => await getChannelsAndPrograms())();
    }, []);

    return apiError ? <Error /> : <EPG />;
};

export default App;

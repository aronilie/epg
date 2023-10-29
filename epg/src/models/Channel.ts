import { Programs } from './Program';

export interface Channel {
    id: string;
    title: string;
    images: { LOGO: string };
    schedules: Programs;
}

export interface Channels {
    channels: Channel[];
}

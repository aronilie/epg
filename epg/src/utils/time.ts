import { PROGRAM_PIXELS_PER_HOUR } from "../constants/sizes";

export const calculateCurrentTimeInEm = (baseFontSize = 16) => {
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();

    const totalHoursInDecimal = currentHours + currentMinutes / 60;
    const emPosition =
        totalHoursInDecimal * (PROGRAM_PIXELS_PER_HOUR / baseFontSize);

    return emPosition;
};

export const calculateCurrentTimeInPixels = () => {
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();

    const totalHoursInDecimal = currentHours + currentMinutes / 60;
    const pixelPosition = totalHoursInDecimal * PROGRAM_PIXELS_PER_HOUR;

    return pixelPosition;
};

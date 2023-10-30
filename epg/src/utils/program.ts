import { Program } from '../models/Program';
import { PROGRAM_PIXELS_PER_HOUR } from '../constants/sizes';

export const isProgramPlayingNow = (program: Program) => {
    if (!program) {
        console.error("Invalid program object: It's null or undefined.");
        return false;
    }

    const startDateTime = new Date(program.start);
    const endDateTime = new Date(program.end);
    const currentDateTime = new Date();

    const startHours = startDateTime.getHours();
    const startMinutes = startDateTime.getMinutes();
    const endHours = endDateTime.getHours();
    const endMinutes = endDateTime.getMinutes();
    const currentHours = currentDateTime.getHours();
    const currentMinutes = currentDateTime.getMinutes();

    if (
        (startHours < currentHours ||
            (startHours === currentHours && startMinutes <= currentMinutes)) &&
        (endHours > currentHours ||
            (endHours === currentHours && endMinutes >= currentMinutes))
    ) {
        return true;
    }
};

export const getProgramTimeRange = (program: Program) => {
    if (!program) {
        console.error("Invalid program object: It's null or undefined.");
        return '';
    }

    const startTime = new Date(program.start);
    const endTime = new Date(program.end);

    const startHours = startTime.getHours().toString().padStart(2, '0');
    const startMinutes = startTime.getMinutes().toString().padStart(2, '0');

    const endHours = endTime.getHours().toString().padStart(2, '0');
    const endMinutes = endTime.getMinutes().toString().padStart(2, '0');

    return `${startHours}:${startMinutes}-${endHours}:${endMinutes}`;
};

export const calculateProgramPixelLength = (
    program: Program,
    baseFontSize = 16
) => {
    const programStartTime = new Date(program.start).getTime();
    const programEndTime = new Date(program.end).getTime();

    const durationInMilliseconds = programEndTime - programStartTime;

    const durationInHours = durationInMilliseconds / (1000 * 60 * 60);

    const pixelLength =
        (PROGRAM_PIXELS_PER_HOUR / baseFontSize) * durationInHours;

    return pixelLength;
};

export const calculateProgramStartPosition = (
    program: Program,
    baseFontSize = 16
) => {
    const programStartTime = new Date(program.start).getTime();
    const startTimeInDate = new Date(programStartTime);

    const hours = startTimeInDate.getHours();
    const minutes = startTimeInDate.getMinutes();

    const hoursInDecimal = hours + minutes / 60;

    const pixelStartPosition =
        hoursInDecimal * (PROGRAM_PIXELS_PER_HOUR / baseFontSize);

    return pixelStartPosition;
};

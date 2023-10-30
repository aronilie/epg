export const getTimeScaleIntervals = () => {
    const intervalInMinutes = 30;
    const timeArray = [];
    let totalMinutes = 0;
    const amPmPeriods = ['AM', 'PM'];

    for (let i = 0; totalMinutes < 24 * 60; i++) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const period = amPmPeriods[Math.floor(hours / 12)];
        const formattedTime =
            ('0' + (hours % 12)).slice(-2) +
            ':' +
            ('0' + minutes).slice(-2) +
            period;
        timeArray[i] = formattedTime;
        totalMinutes += intervalInMinutes;
    }

    timeArray.push(timeArray[0]);
    return timeArray;
};
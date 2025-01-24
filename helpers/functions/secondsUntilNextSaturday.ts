export const secondsUntilNextSaturday = (): number => {
    const now: Date = new Date();
    const daysUntilNextSaturday: number = (6 - now.getDay()) > 0 ? 6 - now.getDay() : 7;
    const nextSaturday: Date = new Date(now);
    nextSaturday.setDate(now.getDate() + daysUntilNextSaturday);
    nextSaturday.setHours(1, 0, 0, 0);
    return Math.floor((nextSaturday.getTime() - now.getTime()) / 1000);
};


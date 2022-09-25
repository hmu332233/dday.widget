export const getDaysDiffBetweenDates = (dateInitial: Date, dateFinal: Date) =>
  Math.ceil((dateFinal.getTime() - dateInitial.getTime()) / (1000 * 3600 * 24));
export const getDDayText = (date: string) => {
  const ddayNumber = getDaysDiffBetweenDates(new Date(date), new Date()) - 1;
  switch (true) {
    case ddayNumber > 0:
      return `D+${ddayNumber}`;
    case ddayNumber < 0:
      return `D${ddayNumber}`;
    default:
      return 'D-Day';
  }
};

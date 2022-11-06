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

export const getDDayPercent = (startDate: string, date: string) => {
  const ddayNumber = getDaysDiffBetweenDates(new Date(date), new Date()) - 1;
  const baseDdayNumber =
    getDaysDiffBetweenDates(new Date(startDate), new Date(date)) - 1;

  return 100 - Math.abs((ddayNumber / baseDdayNumber) * 100);
};

type QueryParameters = { [key: string]: any };
export const objectToQueryString = (queryParameters: QueryParameters) => {
  return queryParameters
    ? Object.entries(queryParameters).reduce((queryString, [key, value]) => {
        const encodedValue = encodeURIComponent(value);
        const symbol = queryString.length === 0 ? '?' : '&';
        queryString += encodedValue ? `${symbol}${key}=${encodedValue}` : '';
        return queryString;
      }, '')
    : '';
};

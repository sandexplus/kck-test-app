export default function convertDateFormat(rawDate) {
  const date = new Date(rawDate);
  const time = rawDate.split('T')[1];
  return `${new Intl.DateTimeFormat('ru').format(date)} ${time.slice(0, 8)}`;
}

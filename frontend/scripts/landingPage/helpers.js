export function formatDate(date) {
  const [datePart] = date.split("T");
  const [year, month, day] = datePart.split("-");
  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;
}

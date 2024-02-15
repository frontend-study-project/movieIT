export const getPreviousMonthsData = () => {
  const monthsData = [];
  const currentDate = new Date();

  for (let i = 0; i < 10; i++) {
    const previousMonth = new Date();
    previousMonth.setMonth(currentDate.getMonth() - i);

    const year = previousMonth.getFullYear();
    const month = previousMonth.getMonth() + 1;

    const formattedDate = `${year}년 ${month}월`;
    monthsData.push(formattedDate);
  }

  return monthsData;
};

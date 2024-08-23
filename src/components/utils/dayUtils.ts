// utils/dateUtils.ts
export const getWeekDates = (): string[] => {
  const today = new Date();
  const firstDayOfWeek = today.getDate() - today.getDay();
  const weekDates: string[] = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(firstDayOfWeek + i);
    weekDates.push(currentDate.toDateString().slice(0, 3));
  }

  return weekDates;
};


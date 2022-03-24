function calculateDaysBetweenDates(beginDate, endDate) {
    var daysBetween = 0;
    var currentDate = beginDate;
    while (currentDate <= endDate) {
        daysBetween++;
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return daysBetween;
}
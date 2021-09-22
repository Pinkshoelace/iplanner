const beginHours = [8, 9, 11, 12, 14, 14];
const beginMinutes = [45, 50, 5, 5, 0, 55];

const beginHoursAndMinutes = beginHours.map((currentValue, index) => {
  let hourAndMinute = {};
  hourAndMinute.hour = currentValue;
  hourAndMinute.minute = beginMinutes[index];
  return hourAndMinute;
});

const finalHours = [9, 10, 12, 13, 14, 15];
const finalMinutes = [40, 45, 0, 0, 55, 50];

const finalHoursAndMinutes = finalHours.map((currentValue, index) => {
  let hourAndMinute = {};
  hourAndMinute.hour = currentValue;
  hourAndMinute.minute = finalMinutes[index];
  return hourAndMinute;
});

const hoursAndMinutesRanges = beginHoursAndMinutes.map((currentValue, index) => {
    let range = {};
    range.begin = currentValue;
    range.final = finalHoursAndMinutes[index];
    return range;
  }
);

let randomMoment = new Date()
let hourAndMinute = {};
hourAndMinute.hour = randomMoment.getHours();
hourAndMinute.minute = randomMoment.getMinutes();

const evaluateMoment = (hourAndMinute, hoursAndMinutesRanges) => {
  for (let i = 0; i < hoursAndMinutesRanges.length; i++) {
    // hourAndMinute.hour && hourAndMinute.minute
    const { begin, final } = hoursAndMinutesRanges[i];
    if (hourAndMinute.hour === begin.hour) {
        if(hourAndMinute.minute >= begin.minute){
            return i + 1;
        }
    } else if(hourAndMinute.hour === final.hour){
        if(hourAndMinute.minute <= begin.minute){
            return i + 1;
        }
    }
  }
  return -1;
};

let period = 1

export {
  period
}
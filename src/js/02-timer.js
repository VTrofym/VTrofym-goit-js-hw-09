import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputRef = document.querySelector('#datetime-picker')
const btnStart = document.querySelector('button[data-start]')
const timeDaysRef = document.querySelector('span[data-days]')
const timeHoursRef = document.querySelector('span[data-hours]')
const timeMinutesRef = document.querySelector('span[data-minutes]')
const timeSecondsRef = document.querySelector('span[data-seconds]')
let selectedTimeMs = null;
let timerInterval;
btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onOpen() {
    timerInterval && clearInterval(timerInterval);
    updateTimer();
  },
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      alert('Please choose a date in the future')
    } else {
      btnStart.disabled = false
      selectedTimeMs = selectedDates[0].getTime()
    }
  },
};

let selectedDay = flatpickr(inputRef, options)

btnStart.addEventListener('click', onBtnStartClick);

function updateTimer({ days = '00', hours = '00', minutes = '00', seconds = '00'} = {}) {
  timeDaysRef.textContent = addLeadingZero(days);
    timeHoursRef.textContent = addLeadingZero(hours);
    timeMinutesRef.textContent = addLeadingZero(minutes);
    timeSecondsRef.textContent = addLeadingZero(seconds);
}

function onBtnStartClick(event) {
  btnStart.disabled = true
  let deltaTime = selectedTimeMs - Date.now();
  timerInterval = setInterval(() => {
    const time = convertMs(deltaTime);
    updateTimer(time);
    deltaTime -= 1000;
    if (deltaTime < 0) {
    clearInterval(timerInterval);
  }
  }, 1000)
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0')
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
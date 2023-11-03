

function startCountdown(): void {
  const second: number = 1000,
    minute: number = second * 60,
    hour: number = minute * 60,
    day: number = hour * 24;

  let today: Date = new Date(),
    dd: string = String(today.getDate()).padStart(2, '0'),
    mm: string = String(today.getMonth() + 1).padStart(2, '0'),
    yyyy: number = today.getFullYear(),
    nextYear: number = yyyy + 1,
    dayMonth: string = '11/11/',
    birthday: string = dayMonth + yyyy;

  today = new Date(mm + '/' + dd + '/' + yyyy);
  if (today > new Date(birthday)) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown: number = new Date(birthday).getTime(),
    x: number = window.setInterval(function () {
      const now: number = new Date().getTime(),
        distance: number = countDown - now;

      const daysElem: HTMLElement | null = document.getElementById('days'),
        hoursElem: HTMLElement | null = document.getElementById('hours'),
        minutesElem: HTMLElement | null = document.getElementById('minutes'),
        secondsElem: HTMLElement | null = document.getElementById('seconds'),
        headlineElem: HTMLElement | null = document.getElementById('headline'),
        countdownElem: HTMLElement | null = document.getElementById('countdown'),
        contentElem: HTMLElement | null = document.getElementById('content');

      if (daysElem) daysElem.innerText = Math.floor(distance / day).toString();
      if (hoursElem) hoursElem.innerText = Math.floor((distance % day) / hour).toString();
      if (minutesElem) minutesElem.innerText = Math.floor((distance % hour) / minute).toString();
      if (secondsElem) secondsElem.innerText = Math.floor((distance % minute) / second).toString();

      //do something later when date is reached
      if (distance < 0) {
        if (headlineElem) headlineElem.innerText = "It's my birthday!";
        if (countdownElem) countdownElem.style.display = 'none';
        if (contentElem) contentElem.style.display = 'block';
        clearInterval(x);
      }
      //seconds
    }, 0);
}

startCountdown();








class Timer{

  constructor({ targetDate, selector }) {
    this.targetDate = targetDate.getTime();
      this.selector = selector.slice(1);


    this.timer = document.querySelector(".timer");
    this.days = document.querySelector('[data-value="days"]');
    this.hours = document.querySelector('[data-value="hours"]');
    this.mins = document.querySelector('[data-value="mins"]');
      this.secs = document.querySelector('[data-value="secs"]');


    this.start();
  }


        start() {
         this.timer.setAttribute("id", this.selector);
        // diferenceTimeMs( this.targetDate )
        if (this.targetDate < Date.now()) {
            return refs.timer.textContent = `Время вышло ! Приходи на следующий год =)`;
        }


            setInterval(() => {
              const currentTime = Date.now();
            const differenceTime = this.targetDate  - currentTime;
                const { days, hours, mins, secs } = this.getTimeComponents(differenceTime);
                
    this.days.textContent = days;
      this.hours.textContent = hours;
      this.mins.textContent = mins;
      this.secs.textContent = secs;
        }, 1000);
    }

 getTimeComponents(time){
const days = this.repeta(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = this.repeta(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = this.repeta(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.repeta(Math.floor((time % (1000 * 60)) / 1000));
    return {days, hours, mins, secs };
}
 
repeta(value) {
    return String(value).padStart(2, '0');
}
}



const timer = new Timer({
  selector: "#timer-1",
  targetDate: new Date('Nov 13, 2021'),
});




// function upodateClockface({ days, hours, mins, secs }) {

//                refs.only.days.textContent = days;
//             refs.only.hours.textContent = hours;
//             refs.only.mins.textContent = mins;
//             refs.only.secs.textContent = secs;
// }




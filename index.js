//  new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2022'),
//  });

// const countdownTimer = CountdownTimer();
const refs = {
    timer: document.querySelector("#timer-1"),
    only: {
    days: document.querySelector("[data-value='days']"),
    hours: document.querySelector("[data-value='hours']"),
    mins: document.querySelector("[data-value='mins']"),
    secs: document.querySelector("[data-value='secs']"),

    }

};
// refs.timer.textContent = 'wait 1s please'
// console.log(refs.only)
//         refs.daysTimer.textContent = '-';
//         refs.hoursTimer.textContent = '-';
//         refs.minsTimer.textContent = '-';
//         refs.secsTimer.textContent = '-';


class Timer{
    constructor() {

    }
}


const timer = {

    start() {
                   const dateF = new Date('Nov 13, 2021')
        this.targetDate = Date.parse(dateF);

        if (this.targetDate < Date.now()) {
            return refs.timer.textContent = `Время вышло ! Приходи на следующий год =)`;

        }
          
        const dateFinalY = dateF.getTime()
   
        
        // console.log(dateFinalY)
        setInterval(() => {
            const currentTime = Date.now();
            const differenceTime = dateFinalY - currentTime;
            const time = getTimeComponents(differenceTime);
       
          return upodateClockface(time);



        }, 1000);
   
    }
}


timer.start();


function upodateClockface({ days, hours, mins, secs }) {

               refs.only.days.textContent = days;
            refs.only.hours.textContent = hours;
            refs.only.mins.textContent = mins;
            refs.only.secs.textContent = secs;
}

function repeta(value) {
    return String(value).padStart(2, '0');
}
repeta()

function getTimeComponents(time){
const days = repeta(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = repeta(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = repeta(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = repeta(Math.floor((time % (1000 * 60)) / 1000));
    return {days, hours, mins, secs };
}
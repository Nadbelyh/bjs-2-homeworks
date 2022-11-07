class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (!id) throw new Error(`error text`);

    const findId = this.isClockExist(id);
    if (findId) return console.error(`Такой будильник уже существует`);

    time = time.split(":");
    const clock = { time, callback, id };
    this.alarmCollection.push(clock);
  }

  isClockExist(id) {
    return this.alarmCollection.some((item) => item.id === id);
  }

  removeClock(id) {
    const findIndex = this.alarmCollection.findIndex((item) => item.id === id);
    if (findIndex === -1) return false;
    this.alarmCollection.splice(findIndex, 1);
    return true;
  }

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }

  checkClock(clock) {
    const currentTime = this.getCurrentFormattedTime();
    if (clock.time === currentTime) clock.callback();
  }

  start() {
    if (this.timerId === null)
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach((item) => this.checkClock(item));
      }, 60000);
  }

  stop() {
    if (this.timerId !== null) clearInterval(1);
    this.timerId = null;
    console.log(`Будильник остановлен!`);
  }

  printAlarms() {
    this.alarmCollection.forEach((item) =>
      console.log(`Будильник id: ${item.id} установлен на ${item.time}.`)
    );
  }

  clearAlarms() {
    stop();
    this.alarmCollection = [];
  }
}

(function testcase() {
  const clock = new AlarmClock();
  clock.addClock("12:11", () => console.log(`Пора вставать!`), 1);
  clock.addClock("12:12", () => console.log(`Вставай, а то проспишь`), 2);
  clock.addClock("12:12", () => console.log(`Вставай, а то проспишь`), 3);
  clock.printAlarms();
  clock.addClock("12:05", () => console.log(`Иди умываться!`), 1);
  clock.removeClock(2);
  clock.printAlarms();
  clock.start();
  setTimeout(clock.stop, 300000);
  setTimeout(clock.clearAlarms, 305000);
})();

const countdown = document.querySelector('.countdown-display');

let count = 4;

const intervalID = setInterval(() => {
  function updateHeading() {
    if (count === 0) {
      countdown.textContent = '~Earth Beeeelooowww Us~';
    } else {
      countdown.textContent = count;
      count--;
    }
    if (count === -1) {
      clearInterval(intervalID);
    }
  }
  updateHeading();
}, 1000);

let COLOR_LIST = [
   '#FF6633',
   '#FFB399',
   '#FF33FF',
   '#FFFF99',
   '#00B3E6',
   '#E6B333',
   '#3366E6',
   '#999966',
   '#99FF99',
   '#B34D4D',
   '#80B300',
   '#809900',
   '#E6B3B3',
   '#6680B3',
   '#66991A',
   '#FF99E6',
   '#CCFF1A',
   '#FF1A66',
   '#E6331A',
   '#33FFCC',
   '#66994D',
   '#B366CC',
   '#4D8000',
   '#B33300',
   '#CC80CC',
   '#66664D',
   '#991AFF',
   '#E666FF',
   '#4DB3FF',
   '#1AB399',
   '#E666B3',
   '#33991A',
   '#CC9999',
   '#B3B31A',
   '#00E680',
   '#4D8066',
   '#809980',
   '#E6FF80',
   '#1AFF33',
   '#999933',
   '#FF3380',
   '#CCCC00',
   '#66E64D',
   '#4D80CC',
   '#9900B3',
   '#E64D66',
   '#4DB380',
   '#FF4D4D',
   '#99E6E6',
   '#6666FF',
];

const p = document.querySelector('p');
const btn = document.querySelector('button');
const partyBtn = document.querySelector('.party');

let random = () => Math.floor(Math.random() * COLOR_LIST.length);

function defaultRender() {
   const randNum = random();
   p.textContent = `Background-color: ${COLOR_LIST[randNum]}`;
   document.body.style.backgroundColor = COLOR_LIST[randNum];
}

function changeBackround() {
   let rand = Math.floor(Math.random() * COLOR_LIST.length);
   p.textContent = `Background-color: ${COLOR_LIST[rand]}`;
   document.body.style.backgroundColor = COLOR_LIST[rand];
}

function partyMode() {
   let timerId = setInterval(() => {
      let randNum = Math.floor(Math.random() * COLOR_LIST.length);
      document.body.style.backgroundColor = COLOR_LIST[randNum];
      p.textContent = `Background-color: ${COLOR_LIST[randNum]}`;
   }, 500);
   setTimeout(() => {
      clearInterval(timerId);
   }, 10000);
}

function main() {
   defaultRender();
   const confirmed = confirm('Are you an epileptic?');

   if (confirmed) {
      partyBtn.disabled = true;
      btn.addEventListener('click', changeBackround);
   } else {
      btn.addEventListener('click', changeBackround);
      partyBtn.addEventListener('click', partyMode);
   }
}

main();

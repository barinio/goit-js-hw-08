import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

let iframe = document.querySelector('#vimeo-player');
const KEY_TIME = 'videoplayer-current-time';
let lastTime = 0;

const player = new Player(iframe, {});

player.ready().then(() => {
  setCurrentTime();
  player.setCurrentTime(lastTime);

  player.on('timeupdate', throttle(onTimeupdate, 1000));
});

function onTimeupdate(data) {
  const currentTime = data.seconds;
  localStorage.setItem(KEY_TIME, currentTime);
}

function setCurrentTime() {
  lastTime = localStorage.getItem(KEY_TIME) ?? 0;
}

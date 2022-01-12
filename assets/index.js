import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
const video = document.querySelector("video");
const PlayPause = document.querySelector(".PlayPause");
const MuteUnmute = document.querySelector(".MuteUnmute");

const player = new MediaPlayer({el:video, plugins: [new AutoPlay()]});
PlayPause.onclick = ()=> player.togglePlay();
MuteUnmute.onclick = ()=> player.toggleMute();

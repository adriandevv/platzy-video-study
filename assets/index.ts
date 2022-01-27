import MediaPlayer from './mediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector("video");
const PlayPause:HTMLElement = document.querySelector(".PlayPause");
const MuteUnmute:HTMLElement = document.querySelector(".MuteUnmute");

const player = new MediaPlayer({el:video, plugins: [new AutoPlay(),new AutoPause(),]
});
PlayPause.onclick = ()=> player.togglePlay();
MuteUnmute.onclick = ()=> player.toggleMute();

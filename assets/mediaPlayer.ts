class MediaPlayer {
  media:HTMLMediaElement;
  plugins:Array<any>;
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlugins();
  }
  mute() {
    this.media.muted = true;
  }
  unMute() {
    this.media.muted = false;
  }
  private initPlugins() {

    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  pause() {
    this.media.pause();
  }
  play() {
    this.media.play();
  }
  toggleMute() {
    this.media.muted = !this.media.muted;
  }
  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
}

  export default MediaPlayer;
function MediaPlayer(config){
    this.media = config.el
    this.plugins = config.plugins || [];

    this._initPlugins();
  }
  MediaPlayer.prototype.mute = function(){
      this.media.muted = true;
  }
  MediaPlayer.prototype.unMute = function(){
    this.media.muted = false;
}
  MediaPlayer.prototype._initPlugins = function(){
      this.plugins.forEach(plugin => {
        plugin.run(this);
      });
  };
  MediaPlayer.prototype.pause = function (){
      this.media.pause();
  };
  MediaPlayer.prototype.play =function (){
      this.media.play();
  };
  MediaPlayer.prototype.toggleMute = function (){
      this.media.muted = !this.media.muted;
  }
  MediaPlayer.prototype.togglePlay = function(){
      if(this.media.paused){
          this.play();
        }else{
          this.pause();
        }
  };

  export default MediaPlayer;
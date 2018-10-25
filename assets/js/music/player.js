
var Player = function(track){
    this.track = track;
};

Player.prototype.track = null;
Player.prototype.element = null;

Player.prototype.Show = function(parent) {
    this.CreatePlayer(parent);
};

Player.prototype.CreatePlayer = function(parent) {
    let instance = this;
    Gen.Create('audio',function(audio) {
        audio.className='player_audio';
        audio.setAttribute('controls',null);
        audio.setAttribute('preload','none');
        instance.CreateSource(audio);
    }, null, parent);
};

Player.prototype.CreateSource = function(audio){
    let instance = this;
    Gen.Create('source',function(source) {
        source.setAttribute('src',instance.track.file);
        source.setAttribute('type',"audio/mp3");
    }, null, audio);
};

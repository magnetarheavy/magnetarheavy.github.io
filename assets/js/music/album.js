
var Album = function(album) {
    this.album  = album;
};

Album.prototype.album   = null;
Album.prototype.element = null;

Album.prototype.Show = function(parent) {
    let instance = this;
    this.element = Gen.Create('div',function(element) {
        element.className='album';
        instance.CreateTitle(element);
        instance.CreateImage(element);
        instance.album.tracks.forEach(function(track,i) {
            instance.CreateTrack(element,track,i);
        });
    }, null, parent,150);
};

Album.prototype.CreateTitle = function(albumElement) {
    let title = document.createElement('div');
    title.className = 'album_title';
    title.innerHTML = this.album.name;

    let date = document.createElement('div');
    date.className = 'album_date';
    date.innerHTML = 'Release date: '+this.album.date;
    title.appendChild(date);

    albumElement.appendChild(title);
};

Album.prototype.CreateImage = function(albumElement) {
    let image = document.createElement('img');
    image.className = 'album_image';
    image.setAttribute('src',this.album.image);
    albumElement.appendChild(image);
};

Album.prototype.CreateTrack = function(albumElement, track, i) {
    let instance = this;
    Gen.Create('div',function(trackElement){
        trackElement.setAttribute('align','center');
        trackElement.className='album_track';
        instance.CreateTrackTitle(trackElement,track,i);
        instance.CreateTrackPlayer(trackElement,track,i);
        instance.CreateTrackButtons(trackElement,track,i);
        instance.CreateTrackDescription(trackElement,track,i);
    }, null, albumElement, i*250);
};

Album.prototype.CreateTrackTitle = function(trackElement, track, i) {
    Gen.Create('div',function(title){
        title.className = 'album_track_title';
        title.setAttribute('align','left');
        title.innerHTML = track.name;
    }, null, trackElement, i*300);
};

Album.prototype.CreateTrackPlayer = function(trackElement, track) {
    new Player(track).Show(trackElement);
};

Album.prototype.CreateTrackButtons = function(trackElement, track, i) {
    let instance = this;
    Gen.Create('div',function(buttons){
        buttons.className = 'album_track_buttons';
        instance.CreateTrackButtonDownload(buttons,track);
    }, null,trackElement, i*350);
};

Album.prototype.CreateTrackButtonDownload = function(buttons, track) {
    Gen.Create('div',function(button){
        button.className = 'album_track_button album_track_button_download';
        button.onclick = function() {
            openTab(track.file);
        };
    }, null, buttons, 200);
};

Album.prototype.CreateTrackDescription = function(trackElement, track, i) {
    Gen.Create('div',function(description){
        description.className = 'album_track_description';
        description.setAttribute('align','center');
        description.innerHTML = track.description;
    }, null, trackElement, i*300);
};

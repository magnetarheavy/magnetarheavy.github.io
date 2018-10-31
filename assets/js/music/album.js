
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
        instance.CreateDescription(element);
        instance.album.tracks.forEach(function(track,i) {
            instance.CreateTrack(element,track,i);
        });
    }, null, parent,150);
};

Album.prototype.CreateTitle = function(albumElement) {
    let title = document.createElement('div');
    title.className = 'album_title';

    let ruName = document.createElement('div');
    ruName.innerHTML = this.album.name;
    ruName.className = 'album_title_ru';
    let enName = document.createElement('div');
    enName.innerHTML = '&nbsp;| '+this.album.en_name;
    enName.className = 'album_title_en';

    title.appendChild(ruName);
    title.appendChild(enName);

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

Album.prototype.TrackCount = function() {
    let trackCount = 0;
    this.album.tracks.forEach(function(){ trackCount++; });
    return trackCount;
};

Album.prototype.CreateDescription = function(albumElement) {
    let description = document.createElement('div');
    description.className = 'album_description';
    description.innerHTML = this.album.description+'Album includes '+this.TrackCount()+' tracks:';
    albumElement.appendChild(description);
};

Album.prototype.CreateTrack = function(albumElement, track, i) {
    let instance = this;
    return Gen.Create('div',function(trackElement){
        trackElement.setAttribute('align','center');
        trackElement.className='album_track';
        instance.CreateTrackTitle(trackElement,track,i);
        instance.CreateTrackPlayer(trackElement,track,i);
        instance.CreateTrackButtons(trackElement,track,i);
        instance.CreateTrackDescription(trackElement,track,i);
    }, null, albumElement, 200);
};

Album.prototype.CreateTrackTitle = function(trackElement, track, i) {
    return Gen.Create('div',function(title){
        title.className = 'album_track_title';
        title.setAttribute('align','left');

        let ruName = document.createElement('div');
        ruName.innerHTML = track.name;
        ruName.className = 'album_track_title_ru';
        let enName = document.createElement('div');
        enName.innerHTML = '&nbsp;| '+track.en_name;
        enName.className = 'album_track_title_en';

        title.appendChild(ruName);
        title.appendChild(enName);

    }, null, trackElement, 200);
};

Album.prototype.CreateTrackPlayer = function(trackElement, track) {
    new Player(track).Show(trackElement);
};

Album.prototype.CreateTrackButtons = function(trackElement, track, i) {
    let instance = this;
    return Gen.Create('div',function(buttons){
        buttons.className = 'album_track_buttons';
        instance.CreateTrackButtonDownload(buttons,track);
        instance.CreateTrackButtonTabs(buttons,track);
    }, null, trackElement, 300);
};

Album.prototype.CreateTrackButtonDownload = function(buttons, track) {
    return Gen.Create('div',function(button){
        button.className = 'album_track_button album_track_button_download';
        button.title = 'download track';
        button.onclick = function() {
            openTab(track.file);
        };
    }, null, buttons, 200);
};

Album.prototype.CreateTrackButtonTabs = function(buttons, track) {
    return Gen.Create('div',function(button){
        button.className = 'album_track_button album_track_button_tabs';
        button.title = 'download tabs';
        button.onclick = function() {
            openTab(track.tabs);
        };
    }, null, buttons, 200);
};


Album.prototype.CreateTrackDescription = function(trackElement, track, i) {
    let instance = this;
    return Gen.Create('div',function(description){
        description.className = 'album_track_description';
        description.setAttribute('align','center');
        description.innerHTML = 'press for show/hide music text';
    }, function(description){
        let text = instance.CreateTrackText(description,track,i);
        description.onclick=function(){
            text.className = text.className==='album_track_text_hide'?'album_track_text':'album_track_text_hide';
        };
    }, trackElement, 200);
};

Album.prototype.CreateTrackText = function(descriptionElement, track, i) {
    return Gen.Create('div',function(textElement){
        textElement.className = 'album_track_text_hide';
        textElement.setAttribute('align','left');
        readText(track.text, function(text){
            textElement.innerHTML = text;
        });
    }, null, descriptionElement, 200);
};

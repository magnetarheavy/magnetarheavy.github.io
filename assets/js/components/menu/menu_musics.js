
const MusicsMenu = {
    caption: 'Musics',
    description: 'go to musics page',
    event:
        function(){
            showPage(
                window._content,
                'musics',
                function() {
                    Albums.forEach(function (album) {
                        new Album(album).Show(document.getElementById('album_container'));
                    });
                });
        }
};

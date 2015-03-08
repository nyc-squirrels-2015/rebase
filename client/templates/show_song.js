Template.show_song.helpers({
  display_songs: function(){
    var songs = Songs.find().fetch()

    return songs
  }

});
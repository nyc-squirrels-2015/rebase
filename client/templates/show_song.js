

Template.show_song.helpers({
  display_songs: function(){

  var songs = Songs.find({bandId: this._id}).fetch()




  thing = $('.band_id').attr("value");
  console.log(thing);




  return songs
  }

});
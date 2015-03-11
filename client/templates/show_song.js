
Template.show_song.helpers({
  display_songs: function(){

  var songs = Songs.find({bandId: this._id}).fetch()

  return songs
  }


});


Template.show_song.events({
	"submit #songName" : function(event){
		event.preventDefault();
		var sessionSongId = this._id  //$("#songNameid").attr("name");
    // console.log("this ", this)
    // console.log("sessionSongId ", sessionSongId);
		Sessions.insert({
			songId : sessionSongId
		});
    Session.set("songId", sessionSongId);

		Router.go("/session")
	}
})


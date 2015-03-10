
Template.show_song.helpers({
  display_songs: function(){

  var songs = Songs.find({bandId: this._id}).fetch()

  return songs
  }


});


Template.show_song.events({
	"submit #songName" : function(event){
		event.preventDefault();
		var sessionSongId = $("#songNameid").attr("name");
		Sessions.insert({
			songId : sessionSongId
		})

		Router.go("/session")
	}
})


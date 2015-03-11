wTemplate.session.events({
	"submit #welcomeRoute" : function(event){
		event.preventDefault();

    Meteor.call('killSession');

		Router.go("/");

	}
})

Template.session.helpers({
  songName: function () {
    var songId = Session.get('songId');
    var song = Songs.findOne({_id: songId});
    return song.name
  }
});
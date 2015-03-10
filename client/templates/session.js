Template.session.events({
	"submit #welcomeRoute" : function(event){
		event.preventDefault();

    Meteor.call('killSession');

		Router.go("/");

	}
})
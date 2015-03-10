Template.session.events({
	"submit #welcomeRoute" : function(event){
		event.preventDefault();


		Sessions.remove();

		Router.go("/");

	}
})
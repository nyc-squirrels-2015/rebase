Snippets = new Mongo.Collection("snippets");

Bands = new Mongo.Collection("bands");

  //ROUTES

    Router.route('/', function() {
      this.render('welcome');
    });

    Router.route('/session', function() {
      this.render('session')
    })



if (Meteor.isClient) {


  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"});

}

  if (Meteor.isServer) {
    Meteor.startup(function () {
      // code to run on server at startup
    });

  }

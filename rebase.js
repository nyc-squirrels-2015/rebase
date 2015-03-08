Snippets = new Mongo.Collection("snippets");

  //ROUTES

    Router.route('/', function() {
      this.render('welcome');
    });

    Router.route('/session', function() {
      this.render('session')
    })

if (Meteor.isClient) {


}

  if (Meteor.isServer) {
    Meteor.startup(function () {
      // code to run on server at startup
    });

  }

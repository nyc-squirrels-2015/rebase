Snippets = new Mongo.Collection("snippets");

  //ROUTES
    Router.route('/', function() {
      this.render('welcome');
    });

    Router.route('/session', function() {
      this.render('session')
    })

if (Meteor.isClient) {

  //TEST
    Template.session.events({

      "submit .new-cue": function(event){
        event.preventDefault();
        var cue = event.target.text.value;

        console.log(cue);
        Snippets.update({"_id" : "RZfK3WvWLqcWpdcho"},
          {$set:{cueIn: cue}}
          );

        console.log(oldcue);
        event.target.text.value = "";

      }
    });

    Template.session.helpers({
      test_snippet: function () {
        return Snippets.findOne({"_id" : "RZfK3WvWLqcWpdcho"}).cueIn;
      }
    });

  }

  if (Meteor.isServer) {
    Meteor.startup(function () {
    // code to run on server at startup
  });
  }

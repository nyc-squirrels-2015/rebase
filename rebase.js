
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

//MODELS

    //SNIPPET
    function Snippet(url, title){
      this.url = url;
      this.title = title;
      this.cueIn = 0;
      this.cueOut = 0
    }

    Snippet.prototype.set_cue_in = function(cue_in_time){
      this.cue_in = cue_in_time;
    };

    Snippet.prototype.set_cue_out = function(cue_out_time){
      this.cue_out = cue_out_time;
    };

    //STUMP
    function Stump(url){
      var stump = new Audio([url]);
      return stump
    }


  //CONTROLLER
    var SnippetController = (function(){
      var createNewSnippet = function(url){
        var snippet = new Audio([url]);
        snippet.controls = true;
        console.log(snippet)
        $("#snippet_list").append(snippet).append("<br>")
      }

      return {
        createNewSnippet: createNewSnippet
      }
    })();


    //VIEEWWWWWSSSS ?
    $(document).ready(function(){
      var $streams = $('audio')
      var initialStream = $streams[0];
      var nextStream = $streams[1];

      $("#new_snippet").on('submit', function(event){
        event.preventDefault();
        var snippetUrl = event.target[0].value;
        SnippetController.createNewSnippet(snippetUrl);
      })

      $("#play_all").on('click', function(event){
        event.preventDefault();
        var $streams = $('audio')
        $streams.each(function(index, el){
          el.play();
        })
      })

      $("#pause_all").on('click', function(event){
        event.preventDefault();
        var $streams = $('audio')
        $streams.each(function(index, el){
          el.pause();
        })
      })


    });

      Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
      });

  }

  if (Meteor.isServer) {
    Meteor.startup(function () {
    // code to run on server at startup
  });
  }

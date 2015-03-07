Snippets = new Mongo.Collection("snippets");


  //ROUTES
    Router.route('/', function() {
      this.render('welcome');
    });

    Router.route('/session', function() {
      this.render('session')
    })


    //TEST SNIPPET IN GLOBAL SCOPE
    snip1 = new Snippet("yoyoyo.mp3", "Best Song")


if (Meteor.isClient) {

    //TEST TEMPLATE EVENT TO CHECK UPDATE OF SNIPPET CUE IN
    Template.session.events({

      "submit .new-cue": function(event){

        console.log('hit')
        var cue = event.target.text.value;

        snip1.cueIn = cue;

        event.target.text.value = "";

        $('.cueview').text(snip1.cueIn)

        return false;

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


  }

  if (Meteor.isServer) {
    Meteor.startup(function () {
    // code to run on server at startup
  });
  }

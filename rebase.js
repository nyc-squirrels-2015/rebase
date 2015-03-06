Snippets = new Mongo.Collection('Snippets')
//test snippet
Snippets.insert({"first" :
                      {"url": "123123", "start_time" : 0, "end_time" : 0, "title" : "inagadadavida"}
                      });


//MODELS

    //SNIPPET

    //js things to note for functions
      //currentTime = start differential of the snippet relative to it's own zero
        //use for ST and END


      // $('#audio').bind('canplay', function() {
      //   this.currentTime = 29; // jumps to 29th secs
      // });

  //CONTROLLER


if (Meteor.isClient) {

  Template.body.helpers({
    show: function(){
      return Tasks.find()

    }


  });

  Template.body.events({

    "submit #start_time" : function(event){
      console.log('start')

      var new_start = event.target.text.value;

      // Snippets.insert({
      //   start_time:
      // })



    },


    "submit #end_time" : function(event){
      console.log('end')

      var new_end = event.target.text.value;

    }
  });


      function Snippet(url, title){
        this.url = url;
        this.title = title;
        this.cueIn = 0;
        this.cueOut = 0;
        this.start_time = 0;
        this.end_time = 0;
      }

      Snippet.prototype.set_start = function(start_time){
        this.start_time = start_time;
      };

      Snippet.prototype.set_end = function(end_time){
        this.end_time = end_time;
      };

      Snippet.prototype.set_cue_in = function(cue_in_time){
        this.cue_in = cue_in_time;
      };

      Snippet.prototype.set_cue_out = function(cue_out_time){
        this.cue_out = cue_out_time;
      };




}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

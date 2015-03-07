  //ROUTES
    Router.route('/', function() {
      this.render('welcome');
    });

    Router.route('/session', function() {
      this.render('session')
    })








if (Meteor.isClient) {




  //SNIPPET MODEL
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

  //wouldn't work without model here

  var Snippet = function(url, title, songId ){
    this.url = url;
    this.title = title;
    this.cueIn = 0;
    this.cueOut = 0;
    this.createdAt = new Date()
    this.songId = songId;
  };





Template.new_snippet_form.events({

  "submit #new_snippet": function(event){
    event.preventDefault();
    var url = event.target.url.value;
    var songId = Sessions.findOne();
    console.log("songId", songId);
    var title = event.target.title.value;
    new_snip = new Snippet(url, title, songId);
    console.log("snippet info",new_snip)
    Snippets.insert(new_snip);
    // var audio = new Audio([new_snip.url]);
    // audio.controls = "true";
    // audio.preload = "true";
    // audio.loop = "false";
    // $("#snippet_list").append(audio);


    //make method that adds new <src> to the audio element with the given url (string interp twerK)
  }


});
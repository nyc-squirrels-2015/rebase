  //wouldn't work without model here

  var Snippet = function(url, title){
    this.url = url;
    this.title = title;
    this.cueIn = 0;
    this.cueOut = 0
  };





Template.new_snippet_form.events({

  "submit #new_snippet": function(event){
    event.preventDefault();
    var url = event.target.url.value;

    var title = event.target.title.value;
    new_snip = new Snippet(url, title)
    Snippets.insert(new_snip)


    //make method that adds new <src> to the audio element with the given url (string interp twerK)
  }


});
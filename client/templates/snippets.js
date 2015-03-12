Template.snippets.helpers({
  samples: function () {
    var required = Session.get('snippet_list');
    if (required === 'current' || !required) {
      return  Snippets.find({songId: Session.get("songId")}).fetch();
    } else {
      var d = new Date(required);
      console.log(d);
      var snippetsToShow = [];
      Histories.findOne({ts: d}).snippets.forEach(function(ele, index, array){
        if (ele.songId === Session.get("songId")){
          snippetsToShow.push(ele)
        }
      });
      console.log("snippets to show ", snippetsToShow);
      return snippetsToShow

    }
  },

});

Template.snippets.events({
  'submit #update_cues': function (event) {
    event.preventDefault();
    var snippetId = this._id;
    var cueIn = parseInt(event.target[0].value);
    var cueOut = parseInt(event.target[1].value);
    Snippets.update({"_id" : snippetId}, {$set: {cueIn: cueIn, cueOut: cueOut}}
      );
  },

  'play #audio_box > audio': function (event) {
    var snippys = Snippets.find().fetch();
    event.target.ontimeupdate = function() {
      snippys.forEach(function(snip, index, array){
        if (event.target.currentTime >= snip.cueIn) {
          $("#" + snip._id)[0].play();
        }
      })
    };
  },

  'submit #time-history' : function(event){
   event.preventDefault();
   var rebase_date_string = $(event.target).find('input[name=rebase_time]').val();
   console.log('rebase_date_string', rebase_date_string);
   var rebase_date = new Date(rebase_date_string)
   // console.log(rebase_date);
   Session.set('rebase_date', rebase_date);
   console.log(Session.get('rebase_date'))
 },

 'submit #saver': function(event){
  event.preventDefault();


  var currentSnippets = $('audio-snippet')

  var sessionSnippets = [];
  var cueDataSet = [];


  for(var i = 0; i < currentSnippets.length; i++){
      //grab all ids
      //grab all info an object
      var snippetInfoHash = {
        cueIn: currentSnippets[i].dataset.cueIn,
        cueOut: currentSnippets[i].dataset.cueOut,
        src: currentSnippets[i].audio.src,
        songId: currentSnippets[i].dataset.songId}

        var currentSnippetId = currentSnippets[i].id +'';

      //will fill new snippet object with it's info
      var snippet = new Object();
      snippet.id = currentSnippetId;
      snippet.url = snippetInfoHash.src;
      snippet.cueIn = snippetInfoHash.cueIn;
      snippet.cueOut = snippetInfoHash.cueOut;
      snippet.songId = snippetInfoHash.songId;

      sessionSnippets.push(snippet);
      console.log("snippet to be saved ", snippet)
    }

    console.log("sessions snippets ", sessionSnippets)
    var newHistory = new Object();
    newHistory.ts = new Date();
    newHistory.songId = Session.get("songId");
    newHistory.snippets = sessionSnippets

    console.log("new history ", newHistory);
    console.log("new history ID ", newHistory._id)

    //add newHistory to Histories collection
    Histories.insert(newHistory)

  },


  "click .remove_snippets": function(event){
    var snippetId= this._id
    $("#"+snippetId).remove()
    $("#update_cues"+snippetId).remove()
  }

});


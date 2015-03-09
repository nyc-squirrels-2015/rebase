Template.snippets.helpers({
  snippets: function () {
    var snippets = Snippets.find().fetch();
    return snippets
  }
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
  }

});
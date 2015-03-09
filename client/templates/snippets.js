Template.snippets.helpers({
  samples: function () {
    return snips = Snippets.find().fetch()
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
    console.log("this", this)
  }
});
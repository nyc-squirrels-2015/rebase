Template.snippets.helpers({
  samples: function () {
    var snips = Snippets.find().fetch();
    return snips
  },

  snippets_for_rebase_date: function() {
    var snips = Snippets.find({createdAt:{$lt:Session.get('rebase_date')}}).fetch();
    console.log(snips)
    return snips

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
  },

  'submit #time-history' : function(event){
   event.preventDefault();
   var rebase_date_string = $(event.target).find('input[name=rebase_time]').val();
   console.log('rebase_date_string', rebase_date_string);
   var rebase_date = new Date(rebase_date_string)
   // console.log(rebase_date);
   Session.set('rebase_date', rebase_date);
   console.log(Session.get('rebase_date'))
 }

});
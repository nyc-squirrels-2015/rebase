 Template.session.events({

      "submit .new-cueIn": function(event){
        event.preventDefault();
        var cue = event.target.text.value;

        Snippets.update({"_id" : "oACotLmfjPYRKRnjK"},
          {$set:{cueIn: cue}}
          );

        event.target.text.value = "";

      },

       "submit .new-cueOut": function(event){
        event.preventDefault();
        var cue = event.target.text.value;
        Snippets.update({"_id" : "oACotLmfjPYRKRnjK"},
          {$set:{cueOut: cue}}
          );
        event.target.text.value = "";

      }
    });

    Template.session.helpers({
      snippet: function () {
        return snip = Snippets.findOne({"_id" : "oACotLmfjPYRKRnjK"});
      }
});
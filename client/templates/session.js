 Template.session.events({

      "submit .new-cueIn": function(event){
        event.preventDefault();
        var cue = event.target.text.value;

        Snippets.update({"_id" : "e5ibpNWjbm9XZtSWo"},
          {$set:{cueIn: cue}}
          );

        event.target.text.value = "";

      },

       "submit .new-cueOut": function(event){
        event.preventDefault();
        var cue = event.target.text.value;
        Snippets.update({"_id" : "e5ibpNWjbm9XZtSWo"},
          {$set:{cueOut: cue}}
          );
        event.target.text.value = "";

      }
    });

    Template.session.helpers({
      snippet: function () {
        return snip = Snippets.findOne({"_id" : "e5ibpNWjbm9XZtSWo"});
      }
});
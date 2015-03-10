var selectedTimeInHistory

Template.history_selector.helpers({
  ts_from_history: function () {
    var timestamps = Histories.find().fetch()
    return timestamps
  }
});

Template.history_selector.events({
  'change #history-selector': function (event) {
    event.preventDefault();
    console.log("target ", event.target);
    var select = event.target;
    console.log("target value ", event.target.value);
    Session.set('snippet_list', event.target.value)
    //
    //on submit find the snippets in the history collection and display them on the page
    // selectedTimeInHistory = // event target value
  }
});

// Template.snippet_history.helpers({
//   snippets_from_history: function () {
//     var oldSnippets = Histories.find({ts: selectedTimeInHistory})
//   }
// });

// Template.history_temp_container.helpers({
//   whichOne: function () {
//     return Session.get("hist") ? ""
//   }
// });
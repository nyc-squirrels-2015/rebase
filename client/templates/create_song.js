
Template.create_song.events({
  'submit' : function(event){
    event.preventDefault();

    var song_name = event.target.new_song_name.value;

    Songs.insert({
      name: song_name,
      createAt: new Date(),
      creator: Meteor.userId(),
      members: [Meteor.userId()],
      bandId: this._id
    });
  }
});



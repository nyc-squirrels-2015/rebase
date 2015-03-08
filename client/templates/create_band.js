Template.create_band.events({
  'submit' : function(event){
    event.preventDefault();

    var band_name = event.target.new_band_name.value;

    //Creates band in db with band name sent from create_band template form

    Bands.insert({
      name: band_name,
      createAt: new Date(),
      creator: Meteor.userId(),
      // members: [Meteor.userId()]
    });


  }






});
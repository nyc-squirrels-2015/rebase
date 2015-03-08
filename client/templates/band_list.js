Template.band_list.helpers({
    display_bands: function() {

      var created_bands = Bands.find({creator: Meteor.userId()}).fetch();
      console.log

      return created_bands
    }

});



//display band name
//display band songs as link underneath
Template.band_list.helpers({
    display_bands: function() {

    var my_bands = Bands.find({members: {$in: [Meteor.userId()]}}).fetch()
    console.log(my_bands)

    return my_bands
    }
});


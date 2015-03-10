Template.add_band_member.events({
  'submit #add_member':function(event){

    event.preventDefault();

    var new_member_name = event.target.new_member.value;
    var new_member = Meteor.users.findOne({username: new_member_name});
    var current_band_id = event.target.band.value;
    console.log(current_band_id)
    var current_band = Bands.findOne({_id: current_band_id})

    console.log("New User Id ", new_member._id);
    console.log("Members Before", current_band.members);

    if (new_member && current_band){
      console.log('current BANDDD', current_band);
      Bands.update({_id: current_band._id}, {$push:{members: new_member._id}})
      console.log("new member to add", new_member._id);
      console.log('current BANDDD', current_band);
    }

    else{
      console.log("cant find " + new_member_name);
    }

  }

});
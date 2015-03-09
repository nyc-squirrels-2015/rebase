Template.add_band_member.events({
  'submit #add_member':function(event){
    event.preventDefault();

    var new_member = event.target.new_member.value;

    console.log(new_member)


  }



});
Template.add_band_member.events({
  'submit #add_member':function(event){
    event.preventDefault();

    var new_member = event.target.new_member.value;

    var found_users = Meteor.users.find().fetch();

    for(var i = 0; i < found_users.length; i++){
      if(found_users[i].username === new_member){



      }
    }


      //Bands.find({$in: members})


    // if () {

    // }

    //check if name exists in database as user

    //if they do exist add the band_id to the user so the user can visualize the band


    //insert into database


  }



});
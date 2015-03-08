Meteor.publish('allBands', function(){
  var currentUserId = this.userId;
  return Bands.find()
});

Meteor.publish('joinedBand', function(bandId){
  var currentUserId = Meteor.userId();
  return Bands.find({bandId: bandId})
});

Meteor.publish('sessions', function(){
  var currentUserId = this.userId;
  if Band.userId = this.userId;
  return Sessions.find({bandId : bandId});
});

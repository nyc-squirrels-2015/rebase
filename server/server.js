Meteor.publish('allBands', function(){
  var currentUserId = this.userId;
  return Bands.find()
});

Meteor.publish('joinedBand', function(){
  var currentUserId = Meteor.userId();
  return Bands.find({})
});

Meteor.publish('sessions', function()}{
  return Sessions.find()
});

Meteor.publish()

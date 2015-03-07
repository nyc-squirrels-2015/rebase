Snippets = new Mongo.Collection("snippets")
if (Meteor.isServer){
	Meteor.startup(function(){
		Snippets = new Mongo.Collection("snippets")
	})
}
	

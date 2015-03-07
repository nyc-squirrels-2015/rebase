

//MODELS

    //SNIPPET

    //js things to note for functions
      //currentTime = start differential of the snippet relative to it's own zero
        //use for ST and END










      // $('#audio').bind('canplay', function() {
      //   this.currentTime = 29; // jumps to 29th secs
      // });

  //CONTROLLER


if (Meteor.isClient) {
Template.uploadForm.events({
 'submit form': function(event, template) {
  event.preventDefault();
  var input = document.getElementById('file-select');
  var files = input.files;
  for (var i = 0; i < files.length; i++) {
    SnippetFiles.insert(files[i], function(err, fileObj){
      console.log('fileObj', fileObj);
    });
  }
  console.log(files);
  alert('H');
 }
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

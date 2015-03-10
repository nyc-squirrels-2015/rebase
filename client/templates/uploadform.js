Template.uploadForm.events({
  'submit' : function(event){

  fixUploadFileName  = function (file) {
  var fileName = file.name;
  fileName = new Date().getTime() + "_" + fileName.replace(/^.*\\/, "");
  fileName = fileName.replace(/[^0-9a-z.]/ig, "_");
  fileName = fileName.replace(/__+/g, "_");
  return fileName;
  };

    event.preventDefault();
    
      var file = document.getElementById('file-select').files[0];

      if (file) {
        var preferredName = fixUploadFileName(file);
        var metaContext = {preferredName: preferredName }
        var uploader = new Slingshot.Upload("rebase", metaContext);
          uploader.send(file, function (error, downloadUrl) {
          if (error) {
            console.log(error);
            return;
          } else {
            var sessionId = Session.get('sessionSongId')
            console.log(sessionId)
            var snip = {title: preferredName, url:'http://d2j1aentbotvl3.cloudfront.net/' + preferredName, cueIn: 0, cueOut:0, songId: sessionId };
            Snippets.insert(snip);
            console.log('snip', snip);
          }
        });
      }
    }
});
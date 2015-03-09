Slingshot.fileRestrictions("rebase", {
  allowedFileTypes: ["audio/mp3", "audio/mpeg3"],
  maxSize: 40 * 1024 * 1024  
});



if (Meteor.isServer) {
  Meteor.startup(function () {

    Slingshot.createDirective("rebase", Slingshot.S3Storage, {
      bucket: "rebase-audio-samples",  // your amazon s3 bucket
      acl: "public-read",

      authorize: function () {
        // Deny uploads if user is not logged in.
        if (!this.userId) {
          var message = "Please login before posting files";
          throw new Meteor.Error("Login Required", message);
        }
        return true;
      },

      key: function (file, metaContext) {
        return metaContext.preferredName;
      }
    });
  });
}



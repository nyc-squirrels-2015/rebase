AWS.config.update({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET
});

Meteor.methods({
"upload_to_s3":function(fileName, data){
        console.log(fileName);
        //console.log(data);
        s3 = new AWS.S3({endpoint:"s3.amazonaws.com"});
        s3.putObject(
            {
                Bucket: "rebase-audio-samples",
                ACL:'public-read',
                Key: fileName,
                ContentType: "audio/mpeg3",
                Body:data
            },
            function(err, data) {
                if(err){
                    console.log('upload error:',err);
                }else{
                    console.log('upload was succesfull',data);

                }
            }
        );
    }
});
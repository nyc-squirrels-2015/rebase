

if (Meteor.isClient) {

  var context = new AudioContext();
    function loadAudio(object, url) {

      var request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.responseType = 'arrayBuffer';

      request.onload = function(){
        context.decodeAudioData(request.response, function(buffer){
          object.buffer = buffer;
        });
      }
      request.send()
    }

    function addAudioProperties(object) {
      object.name = object.id;
      object.source = $(object).data('sound');
      loadAudio(object, object.source);
      object.play = function () {
          var s = context.createBufferSource();
          s.buffer = object.buffer;
          s.connect(context.destination);
          s.start(0);
          object.s = s;
      }
    }


  $( document ).ready(function(){






  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

//create div with html5 audio tag inside
// add url to html 5 audio tag
// add start time and end time to audio tag
// play multiple urls at once starting at the same time
// play multiple urls starting at different times





//mediaController will hold all the tracks for stump/Session





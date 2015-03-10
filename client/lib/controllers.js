"use strict";

var AudioSnippet = (function() {
  var AudioSnippetProto = Object.create(HTMLElement.prototype);
  var context = new AudioContext();
  var color_arr = ["#00FF00", "00FFFF", "#FF3300", "#FFFF00", "#FF00FF"];
  var rand_color = color_arr[Math.floor(Math.random()*color_arr.length)];
  var frameLooper = function () {
    $("audio-snippet").each(function(index, ele){
      ele.draw();
    });
    window.requestAnimationFrame(frameLooper);
  }

  frameLooper();

  AudioSnippetProto.createdCallback = function() {
    console.log('<audio-snippet>.createdCallback', this);
    var snip = new Audio();
    snip.controls = "true";
    this.analyser = context.createAnalyser();
    this.canvas = document.createElement('canvas');
    this.audio = snip;
    this.appendChild(snip);
    this.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.source = context.createMediaElementSource(this.audio);
    this.source.connect(this.analyser);
    this.analyser.connect(context.destination);
  };

  AudioSnippetProto.attachedCallback = function() {

    //Draggable Functionality to Change CueIn/CueOut
    var currentSnippet = this;
    $( currentSnippet ).draggable(
      {
        drag: function(){
            var offset = $(currentSnippet).offset();
            var newCueIn = (offset.left)/20;
            $('#'+ currentSnippet.id)
            var newCueOut = newCueIn + 2;

            /* var newCueOut = newCueIn + Track Length*/
            currentSnippet.dataset.cueIn = newCueIn;

            currentSnippet.dataset.cueOut = newCueOut;

            // currentSnippet.dataset.cueOut = newCueIn + 20;

        },
        axis: 'x',

        stop: function(){
          $('#currentCue'+ currentSnippet.id).text("Cue In: " + currentSnippet.dataset.cueIn + " Cue Out: " + currentSnippet.dataset.cueOut)

          var duck = $('#'+ currentSnippet.id).children('audio').duration
        }
      }
    );

    console.log('<audio-snippet>.attachedCallback', this);

  };

  AudioSnippetProto.detachedCallback = function() {
    console.log('<audio-snippet>.detachedCallback', this);
  };

  AudioSnippetProto.attributeChangedCallback = function(attr, oldVal, newVal) {
    console.log('<audio-snippet>.attributeChangedCallback', attr, oldVal, newVal);
    switch (attr) {
    case 'src':
      this.audio.src = newVal;
      break;
    }
  };

  AudioSnippetProto.draw = function() {
    var fbc_array = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(fbc_array);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = rand_color // Color of the bars
    var bars = 100;
    for (var i = 0; i < bars; i++) {
      var bar_x = i * 3,
        bar_width = 2,
        bar_height = -(fbc_array[i] / 2);
     this.ctx.fillRect(bar_x, this.canvas.height, bar_width, bar_height);
    }
  };

return document.registerElement('audio-snippet', {prototype: AudioSnippetProto});
})();

//Snippets

// var stump = new Audio(["http://www.noiseaddicts.com/samples/4155.mp3"]);
// stump.controls = true;
// stump.loop = false;
// stump.autoplay = false;

//Analyser

// var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;

//Initialize MP3 player page loads HTML


// function initAudioPlayer() {
//   document.getElementById('audio_box').appendChild(stump);
//   context = new AudioContext();
//   analyser = context.createAnalyser();
//   canvas = document.getElementById('analyser_render');
//   ctx = canvas.getContext('2d');
//   source = context.createMediaElementSource(stump);
//   source.connect(analyser);
//   analyser.connect(context.destination);
//   frameLooper();
// }

// frameLooper() animates any style of graphics to the audio frequency

// function frameLooper() {
//   window.requestAnimationFrame(frameLooper);
//   fbc_array = new Uint8Array(analyser.frequencyBinCount);
//   analyser.getByteFrequencyData(fbc_array);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.fillStyle = "#00CCFF" // Color of the bars
//   bars = 100;
//   for (var i = 0; i < bars; i++) {
//     bar_x = i * 3;
//     bar_width = 2;
//     bar_height = -(fbc_array[i] / 2);
//     ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
//   }
// }

//AudioControls

// $(document).ready(function(){
//   var $streams = $('audio')
//   var initialStream = $streams[0];
//   var nextStream = $streams[1];

//   $("#new_snippet").on('submit', function(event){
//     event.preventDefault();
//     var snippetUrl = event.target[0].value;
//     SnippetController.createNewSnippet(snippetUrl);
//   })

//   $("#play_all").on('click', function(event){
//     event.preventDefault();
//     var $streams = $('audio')
//     $streams.each(function(index, el){
//       el.play();
//     })
//   })

//   $("#pause_all").on('click', function(event){
//     event.preventDefault();
//     var $streams = $('audio')
//     $streams.each(function(index, el){
//       el.pause();
//     })
//   })


// });


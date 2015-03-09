//Snippets

var stump = new Audio(["http://www.noiseaddicts.com/samples/4155.mp3"]);
stump.controls = true;
stump.loop = false;
stump.autoplay = false;

//Analyser

var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;

//Initialize MP3 player page loads HTML

window.addEventListener('load', initAudioPlayer, false);

function initAudioPlayer() {
  document.getElementById('audio_box').appendChild(stump);
  context = new AudioContext();
  analyser = context.createAnalyser();
  canvas = document.getElementById('analyser_render');
  ctx = canvas.getContext('2d');
  source = context.createMediaElementSource(stump);
  source.connect(analyser);
  analyser.connect(context.destination);
  frameLooper();
}

// frameLooper() animates any style of graphics to the audio frequency

function frameLooper() {
  window.requestAnimationFrame(frameLooper);
  fbc_array = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(fbc_array);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00CCFF" // Color of the bars
  bars = 100;
  for (var i = 0; i < bars; i++) {
    bar_x = i * 3;
    bar_width = 2;
    bar_height = -(fbc_array[i] / 2);
    ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
  }
}

//AudioControls

$(document).ready(function(){
  var $streams = $('audio')
  var initialStream = $streams[0];
  var nextStream = $streams[1];

  $("#new_snippet").on('submit', function(event){
    event.preventDefault();
    var snippetUrl = event.target[0].value;
    SnippetController.createNewSnippet(snippetUrl);
  })

  $("#play_all").on('click', function(event){
    event.preventDefault();
    var $streams = $('audio')
    $streams.each(function(index, el){
      el.play();
    })
  })

  $("#pause_all").on('click', function(event){
    event.preventDefault();
    var $streams = $('audio')
    $streams.each(function(index, el){
      el.pause();
    })
  })


});


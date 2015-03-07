//Snippets

var SnippetController = (function(){
  var createNewSnippet = function(url){
    var snippet = new Audio([url]);
    snippet.controls = true;
    console.log(snippet)
    $("#snippet_list").append(snippet).append("<br>")
  }

  return {
    createNewSnippet: createNewSnippet
  }
})();

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


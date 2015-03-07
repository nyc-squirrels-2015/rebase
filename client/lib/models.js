//Snippets

function Snippet(url, title){
  this.url = url;
  this.title = title;
  this.cueIn = 0;
  this.cueOut = 0
}

Snippet.prototype.set_cue_in = function(cue_in_time){
  this.cue_in = cue_in_time;
};

Snippet.prototype.set_cue_out = function(cue_out_time){
  this.cue_out = cue_out_time;
};

//Stumps

function Stump(url){
  var stump = new Audio([url]);
  return stump
}
var timerId // current timer if started

Template.timer.helpers({
  time: function () {
    var time = 0.00;
    return time
  }
});

Template.timer.events({
  'click #start': function (event) {
    event.preventDefault();
    var test = 0.00;
    timerId = setInterval(function(){$("span")[0].innerText = (test += 0.01); console.log(test);snips.each(function(index, ele){
        if (test >= parseInt(ele.dataset.cueIn)) {
          ele.audio.play();
        }
    });}, 10);
    var snips = $("audio-snippet")


  },

  'click #stop': function (event) {
    event.preventDefault();
    clearInterval(timerId);
    timerId = null;

  }
});
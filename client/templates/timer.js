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
    timerId = setInterval(function(){$("span")[0].innerText = (test += 0.01).toFixed(2); snips.each(function(index, ele){
        if (test >= parseInt(ele.dataset.cueIn) && test <= parseInt(ele.dataset.cueOut)) {
          ele.audio.play();
        };
        if (test >= parseInt(ele.dataset.cueOut)) {
          ele.audio.pause();
        }
    });}, 10);
    var snips = $("audio-snippet")



  },

  'click #stop': function (event) {
    event.preventDefault();
    clearInterval(timerId);
    timerId = null;
    $("span")[0].innerText = 0

  }
});
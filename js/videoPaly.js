$(document).ready(function () {
  setTimeout(function () {
    var myPlayer = videojs('my-video');
    videojs("my-video").ready(function () {
      var myPlayer = this;
      myPlayer.play();
      $("#asch-video").css("display", "none");
      $("#my-video").css("display", "block")
    });
  }, 0);

  setTimeout(function () {
    var myPlayer = videojs('asch-video');
    videojs("asch-video").ready(function () {
      var myPlayer = this;
      myPlayer.play();
      $("#asch-video").css("display", "block");
      $("#my-video").css("display", "none")
    });
  }, 19000);
});



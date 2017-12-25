$(document).ready(function () {
  $("#introduction .aschVideo").click(function () {
    $(document).bind('mousewheel', function(event, delta) { return false; });
    // alert(1);
    $(".m").css("display","block");
    setTimeout(function () {
      var myPlayer = videojs('my-video');
      videojs("my-video").ready(function () {
        var myPlayer = this;
        myPlayer.play();
        $("#asch-video").css("display", "none");
        $("#my-video").css("display", "block")
      });
    }, 1000);

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
  $(".m .closedVideo").click(function () {
    $(document).unbind('mousewheel');
    $(".m").css("display","none")
  })

});



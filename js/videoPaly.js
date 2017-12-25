$(document).ready(function () {
  $("#introduction .aschVideo").click(function () {
    setTimeout(function () {
      $(document).bind('mousewheel', function(event, delta) { return false; });
      // $(".m").css("display","block");
      $(".m").show();
      $(".m").removeClass("mClosedVideo").addClass("mOpenVideo");
      $(".vjs-has-started .vjs-control-bar").css("display","none");
    },0);

   setTimeout(function () {
     $(".vjs-has-started .vjs-control-bar").css("display","flex");
   },1000);
    setTimeout(function () {
      var myPlayer = videojs('my-video');
      videojs("my-video").ready(function () {
        var myPlayer = this;
        myPlayer.play();
        $("#asch-video").css("display", "none");
        $("#my-video").css("display", "block")
      });
    }, 100);

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


    setTimeout(function () {
      $(".vjs-has-started .vjs-control-bar").css("display","none");
      $(".m").addClass("mClosedVideo").removeClass("mOpenVideo")
    },0);
    setTimeout(function () {
      $(".vjs-has-started .vjs-control-bar").css("display","flex");
      // $(".m").css("display","none");
      $(".m").hide();
      $(document).unbind('mousewheel');
    },1000);
  })
});



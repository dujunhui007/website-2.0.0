$(document).ready(function () {
  $("#introduction .aschVideo").click(function () {
    setTimeout(function () {
      $(".m .closedVideo").css("display", "block")
    }, 1000);

    setTimeout(function () {
      $(document).bind('mousewheel', function (event, delta) {
        return false;
      });
      $(".m").show();
      $(".m").removeClass("mClosedVideo").addClass("mOpenVideo");
      $(".vjs-has-started .vjs-control-bar").css("display", "none");
      $(".videoBackground").css("display", "block")
      // $(".videoBackground").css("display", "block").removeClass("videoBackgroundAnimate2").addClass("videoBackgroundAnimate1");
    }, 0);

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
      $(".vjs-has-started .vjs-control-bar").css("display", "flex");
    }, 1000);

    // setTimeout(function () {
    //   var myPlayer = videojs('asch-video');
    //   videojs("asch-video").ready(function () {
    //     var myPlayer = this;
    //     myPlayer.play();
    //     $("#asch-video").css("display", "block");
    //     $("#my-video").css("display", "none")
    //   });
    // }, 19000);
  });
  $(".m .closedVideo").click(function () {
    setTimeout(function () {
      $(".vjs-has-started .vjs-control-bar").css("display", "none");
      $(".m").addClass("mClosedVideo").removeClass("mOpenVideo");
      $(".m .closedVideo").css("display", "none");
      $(".videoBackground").css("display", "none")
      // $(".videoBackground").removeClass("videoBackgroundAnimate1").addClass("videoBackgroundAnimate2");
    }, 0);
    setTimeout(function () {
      // $(".videoBackground").css("display", "none");
    },500);
    setTimeout(function () {
      $(".vjs-has-started .vjs-control-bar").css("display", "flex");
      // $(".m").css("display","none");
      $(".m").hide();
      $(document).unbind('mousewheel');
    }, 1000);
  })
});



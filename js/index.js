$(document).ready(
  (function () {
    var userAgent = navigator.userAgent;
    var isEdge = userAgent.indexOf("Edge");
    var isIE = userAgent.indexOf("MSIE");
    // userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera)
    if (isEdge > -1) {
      $("#home .aschLogo").addClass("homeLogoAmimateTwo").removeClass("homeLogoAmimateOne");
    } else if (!!window.ActiveXObject || "ActiveXObject" in window) {
      $("#home .aschLogo").addClass("homeLogoAmimateTwo").removeClass("homeLogoAmimateOne");
    } else {
      $("#home .aschLogo").addClass("homeLogoAmimateOne").removeClass("homeLogoAmimateTwo");
    }
  })(),


  $(window).scroll(function () {
    var winHeight = $(this).height();
    var winWidth = $(this).width();
    var homeHeight = $("home").height();
    var hrLine = $("#advantages hr");
    var sTop = $(this).scrollTop();
    var hrLineTop = $(hrLine).offset().top;
    if ((sTop + winHeight) > (hrLineTop + 200)) {
      $("#advantages hr").addClass("hrAnimate")
    }

    if ($(window).scrollTop() > (homeHeight + 200)) {
      $(".toTop").css("display", "block")
    } else {
      $(".toTop").css("display", "none")
    }


    if ($(window).scrollTop() > 0) {
      $("nav").css("background", "#fff").css("box-shadow", "0 0 5px #ccc");
      $("nav .navRight .downloadWhitePaper").addClass("downloadWhitePaperTwo").removeClass("downloadWhitePaperOne");
      $("nav .navLeft  .navLogo").addClass("replaceLogoOne").removeClass("replaceLogoTwo");
      $("nav .equalThan ").addClass("moreThan").removeClass("equalThan");
    } else {
      $("nav").css("background", "transparent").css("box-shadow", "0 0 0");
      $("nav .navRight .downloadWhitePaper").addClass("downloadWhitePaperOne").removeClass("downloadWhitePaperTwo");
      // $("nav .navRight .downloadWhitePaper").css("color", "#1c49ae");
      $("nav .navLeft  .navLogo").addClass("replaceLogoTwo").removeClass("replaceLogoOne");
      $("nav .moreThan ").addClass("equalThan").removeClass("moreThan");

    }
  }),

  $(".homeLinks .toGit").click(function () {
    // window.location.href = "aschVideo.html";
    window.open("https://github.com/AschPlatform");
  }),

  $(".homeLinks .toExplore").click(function () {
    // window.location.href = "aschVideo.html";
    window.open("https://explorer.asch.io/");
  }),

  $(".homeLinks .toWallet").click(function () {
    // window.location.href = "aschVideo.html";
    window.open("https://mainnet.asch.io/#/home");
  }),

  $(".homeLinks .homeToVideo").click(function () {
    // window.location.href = "aschVideo.html";
    window.open("http://bbs.asch.io/");
  }),

  $("#downloads  .dlist").on("click", "li", function () {
    // 设index为当前点击
    var index = $(this).index();
    // 点击添加样式利用siblings清除其他兄弟节点样式
    $(this).addClass("active").siblings().removeClass("active");
    // 同理显示与隐藏
    $(this).parents(".downloadsContainerLeft").find(".dlsit-list li").eq(index).show().siblings().hide();
  }),


  $("#introduction .introductionContainer .aschVideo").click(function () {
    // window.location.href = "aschVideo.html";
    window.open("aschVideo.html");
  })
);
// search
$(function(){
  $("#searchSelected").click(function(){
    $("#searchTab").show();
    $(this).addClass("searchOpen");
  });

  $("#searchTab li").hover(function(){
    $(this).addClass("selected");
  },function(){
    $(this).removeClass("selected");
  });

  $("#searchTab li").click(function(){
    $("#searchSelected").html($(this).html());
    $("#searchTab").hide();
    $("#searchSelected").removeClass("searchOpen");
  });
});
// banner
$(function() {
        $('#banner').marquee({
            auto: true,
            interval: 5000 ,
            speed: 500,
            showNum: 1,
            stepLen: 1,
            prevElement: $('#u-prev'),
            nextElement: $('#u-next')
        });
    });
// tab
$(function() {
  function tabs(tabTit, on, tabCon) {
    $(tabCon).each(function() {
      $(this).children().eq(0).show();
    });
    $(tabTit).each(function() {
      $(this).children().eq(0).addClass(on);
    });
    $(tabTit).children().hover(function() {
      $(this).addClass(on).siblings().removeClass(on);
      var index = $(tabTit).children().index(this);
      $(tabCon).children().eq(index).show().siblings().hide();
    });
  }
  tabs(".tab-hd-h", "active", ".tab-bd-h");
});
// marquee
$(function() {
    $('#shoplist3-marquee1,#shoplist3-marquee2,#shoplist3-marquee3,#shoplist3-marquee4,#shoplist3-marquee5,#shoplist3-marquee6').marquee({
      auto: true,
      interval: 2000,
      showNum: 3,
      stepLen: 3,
      type: 'vertical'
    });
  });
// tip
$('.shop-tip,.f-concern-on').poshytip({
  className: 'tip-twitter',
  showTimeout: 100,
  showOn: 'hover',
  alignTo: 'target',
  alignX: 'center',
  offsetY: 5,
  // allowTipHover: false,
  // fade: false,
  // slide: false
});
// form tip
$('.register-second-tip').poshytip({
  className: 'tip-twitter',
  showOn: 'focus',
  alignTo: 'target',
  alignX: 'right',
  alignY: 'center',
  offsetX: 12,
  showTimeout: 100
});
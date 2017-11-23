var menulinklength = $(".radialmenu a").length;
for(i=0; i<menulinklength; i++){
  $(".radialmenu a").eq(i).css({top: ((202-$(".radialmenu a").eq(i).height()/2)+(170*Math.sin(i*Math.PI/(menulinklength/2)))), left: ((195-$(".radialmenu a").eq(i).width()/2)+(170*Math.cos(i*Math.PI/(menulinklength/2))))});
}

var active = $(".radialmenu a.active").index()-3;
var activeAngle = getRotationDegrees($("#c1"));

$(".radialmenu svg #c1").css({strokeDasharray: 1070/menulinklength + " 1070"});
$(".radialmenu svg #c2").css({strokeDasharray: 870/menulinklength + " 870"});

activeLink($(".radialmenu a.active"));

$(".radialmenu a").hover(function(){
  $(".radialmenu svg #c1").css("transition","0.3s");
  $(".radialmenu svg #c2").css("transition","0.3s");
  activeLink(this);
},function(){
  $(".radialmenu svg #c1").css("transition","initial");
  $(".radialmenu svg #c2").css("transition","initial");
});



function activeLink(that){
   var index = $(that).index()-3;
  var diff = Math.max(active,index) - Math.min(active, index);
  var half = Math.round(menulinklength/2)
  if(Math.abs(active - index) < half)
  {
    var deg = (index - 1) * (360 / menulinklength);
    $(".radialmenu svg #c1").css({transform: 'rotate('+ (deg - ((360 / menulinklength)/2)) +'deg)'});
    $(".radialmenu svg #c2").css({transform: 'rotate('+ (deg - ((360 / menulinklength)/2)) +'deg)'});
  }
  else {
    if(active - index < 0){
      //zemot
      console.log('zemot');
      var dd = menulinklength - index+1;
      var deg = (1 - dd) * (360 / menulinklength) - (360 / menulinklength);
      $(".radialmenu svg #c1").css({transform: 'rotate('+ (deg - ((360 / menulinklength)/2)) +'deg)'});
      $(".radialmenu svg #c2").css({transform: 'rotate('+ (deg - ((360 / menulinklength)/2)) +'deg)'});
      window.setTimeout(function(){
        $(".radialmenu svg #c1").css("transition","initial");
        $(".radialmenu svg #c2").css("transition","initial");
        deg = (index - 1) * (360 / menulinklength);
        $(".radialmenu svg #c1").css({transform: 'rotate('+ (deg - ((360 / menulinklength)/2)) +'deg)'});
        $(".radialmenu svg #c2").css({transform: 'rotate('+ (deg - ((360 / menulinklength)/2)) +'deg)'});
      },300);
    }
    else {
      //qvemot
      console.log('qvemot');
      var dd = menulinklength + (index);
      var deg = (dd-1) * (360 / menulinklength);
      console.log(deg);
      $(".radialmenu svg #c1").css({transform: 'rotate('+ (deg - ((360 / menulinklength)/2)) +'deg)'});
      $(".radialmenu svg #c2").css({transform: 'rotate('+ (deg - ((360 / menulinklength)/2)) +'deg)'});
      window.setTimeout(function(){
        $(".radialmenu svg #c1").css("transition","initial");
        $(".radialmenu svg #c2").css("transition","initial");
        deg = (index - 1) * (360 / menulinklength);
        $(".radialmenu svg #c1").css({transform: 'rotate('+ (deg - ((360 / menulinklength)/2)) +'deg)'});
        $(".radialmenu svg #c2").css({transform: 'rotate('+ (deg - ((360 / menulinklength)/2)) +'deg)'});
      },300);
    }
  }


  $(".radialmenu .hovertext div").removeClass("active");
  $(".radialmenu .hovertext div").eq(index-1).addClass("active");
  $(".radialmenu a").each(function(){
    $(this).find("img").attr('src',$(this).data('image1'));
  });
  $(that).find("img").attr('src',$(that).data('image2'));
  active = index;
}

function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }

    if(angle < 0) angle +=360;
    return angle;
}

$('.radialtext').circleType({position: 'absolute', dir: 1, radius: 200});

//
// $(".slider .back").click(function(){
//   var width = $(".slider .item").outerWidth() + 60;
//   var size = $(".slider .item").length;
//   if(parseInt($(".slider .item").last().css('left')) !== -(size-1)*width){
//     $(".slider .item").each(function(){
//       $(this).css({left: parseInt($(this).css("left")) - width});
//     });
//   }
// });
// $(".slider .forward").click(function(){
//   var width = $(".slider .item").outerWidth() + 60;
//   var size = $(".slider .item").length;
//   if(parseInt($(".slider .item").first().css('left')) < 0){
//     $(".slider .item").each(function(){
//       $(this).css({left: parseInt($(this).css("left")) + width});
//     });
//   }
// });

function letterize(el){
  var html = "";
  var text = $(el).text();
  var size = $(el).text().length;
  for(i=0; i<size; i++){
    html += '<span>' + text[i] + '</span>';
  }
  $(el).html(html);
}

function curvedText(el){
  var span = $(el).find("span");
  var size = span.length;
  var deg = 6;
  for(i=0; i<size; i++){
    span.eq(i).css({transform: "rotate(" + deg + "deg)"});
    deg+=6;
  }
}


$('.slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 1,
    pagination: false,
    dots: false
})

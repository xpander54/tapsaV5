
var flag = 0;
$(document).ready(function(){

  console.log("doc readyready");

  $('.carousel').carousel({
          interval: 3000,
          pause: "false"
        })

  

  $(window).bind('scroll', function(e){
    parallax();
  });



});


function parallax()
{
  var scrollPosition = $(window).scrollTop();
 
  console.clear();
  console.log(scrollPosition);

  if(scrollPosition > 120)
  {
    console.log("120 scroll");
    loadMenu();
  }
  else if(scrollPosition < 100)
  {
    console.log("menos de 120 scroll");
    unloadMenu(); 
  }
  


}

function loadMenu()
{
  

  if(flag != 1)
  {
    $("#main-nav").css('visibility','visible');
    $("#fixed-bar").css('visibility','visible');
  }
  flag = 1;
}

function unloadMenu()
{
  


    $("#main-nav").css('visibility','hidden');
    $("#fixed-bar").css('visibility','hidden');

  flag = 0;
}


//mobil parallax

(function(){

  var ua = navigator.userAgent,
    isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

  if (isMobileWebkit) {

   //$('html').addClass('mobile', {hideScrollbar: true, momentum: true, bounce: true,});
   $('html').addClass('mobile');

  }



  $(function(){
    var iScrollInstance;

    if (isMobileWebkit) {
      iScrollInstance = new iScroll('wrapper');

      $('#scroller').stellar({
        scrollProperty: 'transform',
        positionProperty: 'transform',
        horizontalScrolling: false,
        verticalOffset: -600
      })
      //alert("mobile");
      ;
    } else {
      console.log("pc");
      $.stellar({
        horizontalScrolling: false,
        verticalOffset: -600
      });
    }

  });

})();

///mobilparallax
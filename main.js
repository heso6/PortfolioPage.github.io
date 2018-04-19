
$(document).ready(function() {

  var $PxLayers = $(document).find(".parallax");

  function Parallax() {
  
    var Top = document.documentElement.scrollTop || document.body.scrollTop;

    for (i = 0; i < $PxLayers.length; i++) {
 
      ActiveLayer = $PxLayers[i];

      ActiveParent = $(ActiveLayer).parent();
     
      Distance = ActiveParent.offset().top;

     
      HeightParent = ActiveParent.height();
      HeightLayer = $(ActiveLayer).height();
      console.log(Top);

     
      Scroll = Math.round((Top - Distance) / $(ActiveLayer).attr("speed"));

      $(ActiveLayer).css({
        transform: "translateY(" + Scroll + "px)",
        "-moz-transform": "translateY(" + Scroll + "px)",
        "-ms-transform": "translateY(" + Scroll + "px)"
  
      });
    }
  }



  $(window).scroll(function() {
    Parallax();
  });
});





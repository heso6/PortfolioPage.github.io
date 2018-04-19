// Author: Jakob Bähr (bambusource.de)

$(document).ready(function() {
  // finde alle Parallax Ebenen
  var $PxLayers = $(document).find(".parallax");

  // --- PARALLAX VERSCHIEBUNG --- \\
  function Parallax() {
    // Abstant bis nach oben (scroll)
    var Top = document.documentElement.scrollTop || document.body.scrollTop;

    // für jede Parallax Ebene
    for (i = 0; i < $PxLayers.length; i++) {
      // definiere Ebene
      ActiveLayer = $PxLayers[i];
      // definire Elternelement
      ActiveParent = $(ActiveLayer).parent();
      // Abstand bis nach oben (von Element)
      Distance = ActiveParent.offset().top;

      // Höhe der Parallax Ebene und des Containers
      HeightParent = ActiveParent.height();
      HeightLayer = $(ActiveLayer).height();
      console.log(Top);

      //Scroll = Math.round( (Top/$(ActiveLayer).attr('speed')) + Distance)
      Scroll = Math.round((Top - Distance) / $(ActiveLayer).attr("speed"));

      $(ActiveLayer).css({
        transform: "translateY(" + Scroll + "px)",
        "-moz-transform": "translateY(" + Scroll + "px)",
        "-ms-transform": "translateY(" + Scroll + "px)"
        /*transform: 'translateY('+Scroll+'px)'*/
      });
    }
  }

  $(window).scroll(function() {
    Parallax();
  });
});



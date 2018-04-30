
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





$(document).ready(function(){
var skillset = {
"languages": [
    {
      "name": "JavaScript",
      "skill": 3
    },
    {
      "name": "HTML",
      "skill": 4
    },
    {
      "name": "CSS",
      "skill": 3
    },
    {
      "name": "C#",
      "skill": 1
    }
  ],
"frameworks": [
    {
      "name": "jQuery",
      "skill": 4
    },
    {
      "name": "Handlebars",
      "skill": 1
    },
    {
      "name": "Bootstrap",
      "skill": 4
    },
    {
      "name": "Sass",
      "skill": 3
    },
    {
      "name": "NodeJS",
      "skill": 2
    },
    {
      "name": "Express",
      "skill": 1
    },
  ],
"databases": [
    {
      "name": "MongoDB",
      "skill": 1
    },
],

"os": [
    {
      "name": "Windows",
      "skill": 5
    },
    {
      "name": "Android",
      "skill": 4
    },
    {
      "name": "macOS",
      "skill": 2
    },
    {
      "name": "iOS",
      "skill": 4
    }],
    "tools": [
        {
          "name": "ChromeDevTools",
          "skill": 4
        },
        {
          "name": "Atom",
          "skill": 4
        },
        {
          "name": "Photoshop",
          "skill": 4
        },
        {
          "name": "Git",
          "skill": 2
        }
  ]
}



for(var i in skillset.languages){
   var percent=(skillset.languages[i].skill*100)/5
  var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.languages[i].name+'</div></div></li>';
   $(str).appendTo($('.languages'));
}
  
for(var i in skillset.frameworks){
   var percent=(skillset.frameworks[i].skill*100)/5
  var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.frameworks[i].name+'</div></div></li>';
   $(str).appendTo($('.frameworks'));
}  
  for(var i in skillset.databases){
   var percent=(skillset.databases[i].skill*100)/5
  var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.databases[i].name+'</div></div></li>';
   $(str).appendTo($('.databases'));
}  
    for(var i in skillset.os){
   var percent=(skillset.os[i].skill*100)/5
  var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.os[i].name+'</div></div></li>';
   $(str).appendTo($('.os'));
}  

for(var i in skillset.tools){
var percent=(skillset.tools[i].skill*100)/5
var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.tools[i].name+'</div></div></li>';
$(str).appendTo($('.tools'));
}
  $('.skillbar').each(function(){
  $(this).animate({
    width:$(this).attr('data-percent')
  },2000);
});
})




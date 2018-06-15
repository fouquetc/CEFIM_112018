$(document).ready(function(){

  // BEGIN ACHIEVEMENTS DETAIL    
  var myClass
  var myPreviousClass
  $(".achievements li").click(function(){
      if (!($("#achievementDetails").is(':visible'))) {
          $("#achievementDetails").show("fast");
      }
      myClass = $(this).children("div:first").attr("class");
      if (myClass!=myPreviousClass) {
          switch(myClass) {
              case "achievement":
                  var myFinalPos = "-33%";
                  break;
              case "activity":
                  var myFinalPos = "0%";
                  break;
              case "skill":
                  var myFinalPos = "33%";
                  break;
              default:
          } 
          $("#achievementDetails").animate({left: myFinalPos}, "fast");
      }
      myPreviousClass = myClass;
      $("#mainAchievements li").css({"font-weight":"normal", "color":"unset"});                 
      $("#mainActivities li").css({"font-weight":"normal", "color":"unset"});                 
      $("#technicalSkills li").css({"font-weight":"normal", "color":"unset"});                 
      $(this).css({"color":"rgb(0,128,255)","font-weight":"bold"});
      $("#achievementDetails #Title").html($(this).find(".Title").html());
      $("#achievementDetails #Detail").html($(this).find(".Detail").html());

  });
  // END ACHIEVEMENTS DETAIL      

  currentSlide(1);
  var slideIndex = 1;
  showSlides(slideIndex);
 

});

  // BEGIN SLIDESHOW 

  // Boutons Next/previous
  function plusSlides(n) {
  showSlides(slideIndex += n);
  }

  // Gestion des Thumbnails 
  function currentSlide(n) {
  showSlides(slideIndex = n);
  }

  function showSlides(n) {
  var i;
  var slides = $(".slideshowImage");
  var dots = $(".slideshowThumbnail");
  var captionText = $("description");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
  } 

  // END SLIDESHOW  





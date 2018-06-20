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

  $("#linksCategoriesList").change(function(){
    var myCategory = $("#linksCategoriesList").val();
    $("#linksTable tr").hide();
    //var myLinks = $("#linksTable tr [data-category="+$('#linksCategoriesList').val()+"]");
    //window.alert(myLinks[0]);
    //myLinks.style.display==="inline";
}); 
 

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
    var images = $(".slideshowImage");
    var thumbnails = $(".slideshowThumbnail");
    if (n > images.length) {slideIndex = 1}
    if (n < 1) {slideIndex = images.length}
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
    images[slideIndex-1].style.display = "block";
    thumbnails[slideIndex-1].className += " active";
    //$("#imgCategory").html(images[slideIndex-1].getElementsByClassName("imageCategory")[0].innerHTML);  
    $("#imageDescription").html(thumbnails[slideIndex-1].alt);
  } 

  // END SLIDESHOW  





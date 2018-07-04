// BEGIN SLIDESHOW ANIMATION FUNCTIONS////////////////////////////////////////////////////////////////////

    // NEXT/PREVIOUS BUTTONS ACTIONS 
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // THUMBNAILS MANAGEMENT 
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // SLIDESHOW CONTENT MANAGEMENT 

    function showSlides(n) {
        var i;
        var thumbnails = $(".slideshowThumbnail");
        if (n > thumbnails.length) {slideIndex = 1}
        if (n < 1) {slideIndex = thumbnails.length}
        for (i = 0; i < thumbnails.length; i++) {
            thumbnails[i].className = thumbnails[i].className.replace(" active", "");
        }
        thumbnails[slideIndex-1].className += " active";
        myType = thumbnails[slideIndex-1].parentNode.getAttribute('data-type')
        $("#slideshowImgCategory").text(thumbnails[slideIndex-1].parentNode.getAttribute('data-category'));  
        $("#imageDescription").text(thumbnails[slideIndex-1].alt);   
        // TOGGLE BETWEEN
        switch(myType) {
            case "image":
                $('#slideshowAudio').trigger("pause");
                $("#slideshowVideo").attr("src", "");
                $("#slideshowImg").attr("src", thumbnails[slideIndex-1].src);
                $("#slideshowAudio").hide();
                $("#slideshowVideo").hide();
                $("#slideshowImg").show();
                break;
            case "audio":       
                $("#slideshowVideo").attr("src", "");
                $("#slideshowImg").attr("src", thumbnails[slideIndex-1].src);
                $("#slideshowAudio").attr("src", thumbnails[slideIndex-1].getAttribute('data-audiosrc'));            
                $("#slideshowVideo").hide();
                $("#slideshowImg").show();
                $("#slideshowAudio").show();
                break;
            case "video":
                $('#slideshowAudio').trigger("pause");        
                $("#slideshowVideo").attr("src", thumbnails[slideIndex-1].getAttribute('data-videosrc'));
                $("#slideshowImg").hide();
                $("#slideshowAudio").hide();
                $("#slideshowVideo").show();
                break;
            default:
        } 

    } 

// END SLIDESHOW ANIMATION FUNCTIONS

// ACHIEVEMENTS DETAIL ANIMATION    
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

// END ACHIEVEMENTS DETAIL ANIMATION



$(document).ready(function(){

//BEGIN LINKS LIST MANAGEMENT
    // FILTER LINKS LIST ACCORDING TO THE SELECTED CATEGORY 
    $("#linksCategoriesList").change(function(){

        if ($("#linksCategoriesList").val()=="*") {
            $("#linksTable tr").show();
            } 
            else {
                $("#linksTable tr").hide();
                $("#linksTable tr[data-category=\"" + $("#linksCategoriesList").val() + "\"]").show();                 
            }
        var rowIndex = 0;
        $('#linksTable tr').each(function() {
            if ($(this).css("display")!=='none') {
                if ((rowIndex % 2) !== 0) {
                    $(this).addClass("linkitemDark");
                }
                else  {
                    $(this).removeClass("linkitemDark");
                }
            rowIndex += 1;                                          
            }
        });
    }); 
    //END LINKS LIST MANAGEMENT

        // SELECT "TOUTES" IN CATEGORY DROPWDOWN LIST TO DISPLAY THE WHOLE LINKS LIST AT PAGE LOADING
        $("#linksCategoriesList").val("*");
        //$("#linksCategoriesList").trigger("change");

        // DISPLAY SLIDESHOW FIRST IMAGE AT PAGE LOADING
        currentSlide(1);
        var slideIndex = 1;
        showSlides(slideIndex);
   
});
  
    
  



    
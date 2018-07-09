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
        let i;
        let thumbnails = $(".slideshowThumbnail");
        if (n > thumbnails.length) {slideIndex = 1}
        if (n < 1) {slideIndex = thumbnails.length}
        for (i = 0; i < thumbnails.length; i++) {
            thumbnails[i].className = thumbnails[i].className.replace(" active", "");
        }
        thumbnails[slideIndex-1].className += " active";
        myType = thumbnails[slideIndex-1].parentNode.getAttribute('data-type')
        $("#slideshowImgCategory").text(thumbnails[slideIndex-1].parentNode.getAttribute('data-category'));  
        $("#imageDescription").text(thumbnails[slideIndex-1].title);   
        // TOGGLE BETWEEN
        switch(myType) {
            case "image":
                $("#slideshowAudio").trigger("pause");
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
                $("#slideshowAudio").trigger("pause");        
                $("#slideshowVideo").attr("src", thumbnails[slideIndex-1].getAttribute('data-videosrc'));
                $("#slideshowImg").hide();
                $("#slideshowAudio").hide();
                $("#slideshowVideo").show();
                break;
            default:
        } 

    } 

// END SLIDESHOW ANIMATION FUNCTIONS

$(document).ready(function(){


// RESIZING THE PARALLAX
$(window).resize(function(){
    let myrefHeight= $("#intro_frame").height();
    myNewHeight=myrefHeight + 100;
    $("#parallaxIntro").height(myNewHeight);
});



// ACHIEVEMENTS DETAIL ANIMATION    
    let myClass;
    let myPreviousClass;
    let myFinalPos;
    $(".achievements li").click(function(){
        if (!($("#achievementDetails").is(':visible'))) {
            $("#achievementDetails").show("fast");
        }
        myClass = $(this).children("div:first").attr("class");
        if (myClass!=myPreviousClass) {
            switch(myClass) {
                case "achievement":
                    myFinalPos = "-33%";
                    break;
                case "activity":
                    myFinalPos = "0%";
                    break;
                case "skill":
                    myFinalPos = "33%";
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

// PROJECT SUBJECTS  MANAGEMENT 
    $(".projectThumbnail").click(function(){
        // HIDE ALL SUBJECTS AND SHOW THE CLICKED THUMB TARGET SUBJECT 
        $(".projectSubject").hide();
        $("" + $(this).attr('data-thumbTarget') +"").show();
        // CHANGE THE THUMBNAIL CSS CLASS TO  HIGHLIGHT THE CLICKED ONE 
        $(".projectThumbnail").removeClass("selProjectThumbnail");
        $(this).addClass("selProjectThumbnail");

    });

// END PROJECT SUBJECTS  MANAGEMENT 

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
        let rowIndex = 0;
        $("#linksTable tr").each(function() {
            if ($(this).css("display")!=='none') {
                if ((rowIndex % 2) !== 0) {
                    $(this).removeClass("linkitem");
                    $(this).addClass("linkitemDark");
                }
                else  {
                    $(this).removeClass("linkitemDark");
                    $(this).addClass("linkitem");
                }
            rowIndex += 1;                                          
            }
        });
    }); 
    //END LINKS LIST MANAGEMENT

        // SELECT "TOUTES" IN CATEGORY DROPWDOWN LIST TO DISPLAY THE WHOLE LINKS LIST AT PAGE LOADING
        $("#linksCategoriesList").val("*");
        $("#linksCategoriesList").trigger("change");

        // DISPLAY SLIDESHOW FIRST IMAGE AT PAGE LOADING
        currentSlide(1);
        let slideIndex = 1;
        showSlides(slideIndex);

});

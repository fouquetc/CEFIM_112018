// BEGIN SLIDESHOW ANIMATION FUNCTIONS////////////////////////////////////////////////////////////////////
// Cyril FOUQUET  - 13/07/2018
    // NEXT/PREVIOUS BUTTONS ACTIONS 
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // THUMBNAILS MANAGEMENT 
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // INTRO RESIZE
    function parallaxResize () {
        $("#parallaxIntro").height($("#intro_frame").height() + 100 );
    }

    //SLIDESHOW RESIZE 
    function slideshowResize () {
        let myNewHeight = $("#slideshowContentImg").width() * 2/3 ;
        $("#slideshowContentImg").outerHeight(myNewHeight);
        
        myNewHeight = $(".slideShowCol:first").width();
        $(".slideshowRow").height(myNewHeight);
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
        // TOGGLE BETWEEN IMAGE, AUDIO AND VIDEO CONTENT
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
// MAIN
$(document).ready(function(){

// RESIZING WINDOW 
$(window).resize(function(){
    parallaxResize (); 
    slideshowResize(); 
    $("#achievementDetailsContainer").hide("fast");
});

// ACHIEVEMENTS DETAIL ANIMATION    
var myPreviousClass;
let myClass;
let myFinalLeftPos;
let myFinalTopPosRef;
let myFinalTopPos;
    $(".achievements li").click(function(){
        if (!($("#achievementDetailsContainer").is(':visible'))) {
            $("#achievementDetailsContainer").show("fast");
            $("#achievementDetailsContainer").css({"display:":"block"});
        }
            myClass = $(this).children("div:first").attr("class");
            if (myClass!=myPreviousClass) {
                switch(myClass) {
                    case "achievement":
                        myFinalLeftPos = "0%";
                        myFinalTopPosRef = "#mainAchievements";
                        break;
                    case "activity":
                        myFinalLeftPos = "33%";
                        myFinalTopPosRef = "#mainActivities";
                        break;
                    case "skill":
                        myFinalLeftPos = "66%";
                        myFinalTopPosRef = "#technicalSkills";
                        break;
                    default:
                }
                if (window.matchMedia("(max-width: 800px)").matches) {
                    myFinalTopPos =  $(myFinalTopPosRef).position().top - 10 ; // -10 -> TO INCLUDE .achievements MARGIN IN #achievementDetails TOP POSITIONING
                    $("#achievementDetails").animate({top : myFinalTopPos }, "fast");
                    $("#achievementDetails").animate({left: 0 }, "fast");     
                }
                else { 
                    $("#achievementDetails").animate({left: myFinalLeftPos}, "fast");                 
                    $("#achievementDetails").animate({top : 0 }, "fast");
                }
                        
            }
        myPreviousClass = myClass;
        $("#mainAchievements li").css({"font-weight":"normal", "color":"unset"});                 
        $("#mainActivities li").css({"font-weight":"normal", "color":"unset"});                 
        $("#technicalSkills li").css({"font-weight":"normal", "color":"unset"});                 
        $(this).css({"color":"rgb(0,128,255)","font-weight":"bold"});
        $("#achievementDetails #Title").html($(this).find(".Title").html());
        $("#achievementDetails #Detail").html($(this).find(".Detail").html());
    });

// PROJECT SUBJECTS CONTENT MANAGEMENT 
    $(".projectThumbnail").click(function(){
        // HIDE ALL SUBJECTS AND SHOW THE CLICKED THUMB TARGET SUBJECT 
        $(".projectSubject").hide();
        $("" + $(this).attr('data-thumbTarget') +"").show();
        // CHANGE THE THUMBNAIL CSS CLASS TO  HIGHLIGHT THE CLICKED ONE 
        $(".projectThumbnail").removeClass("selProjectThumbnail");
        $(this).addClass("selProjectThumbnail");

    });

//LINKS LIST MANAGEMENT
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
  
    // SELECT "TOUTES" IN CATEGORY DROPWDOWN LIST TO DISPLAY THE WHOLE LINKS LIST AT PAGE LOADING
    $("#linksCategoriesList").val("*");
    $("#linksCategoriesList").trigger("change");

// DISPLAY SLIDESHOW FIRST IMAGE AS DEFAULT AT PAGE LOADING
    currentSlide(1);
    let slideIndex = 1;
    showSlides(slideIndex);
    $(window).trigger("resize");
});

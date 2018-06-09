
$(document).ready(function(){
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
        $("#mainAchievements li").css({"font-weight":"normal", "color":"black"});                 
        $("#mainActivities li").css({"font-weight":"normal", "color":"unset"});                 
        $("#technicalSkills li").css({"font-weight":"normal", "color":"black"});                 
        $(this).css({"color":"rgb(0,64,255)","font-weight":"bold"});
        $("#achievementDetails #Title").html($(this).find(".Title").html());
        $("#achievementDetails #Detail").html($(this).find(".Detail").html());

    }); 
});

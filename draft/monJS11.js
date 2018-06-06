
$(document).ready(function(){
    $(".achievements li").click(function(){
        $("#achievementDetails").show();
        $("#mainAchievements li").css({"font-weight":"normal", "color":"black"});                 
        $("#mainActivities li").css({"font-weight":"normal", "color":"unset"});                 
        $("#technicalSkills li").css({"font-weight":"normal", "color":"black"});                 
        $(this).css({"color":"rgb(0,64,255)","font-weight":"bold"});
        $("#achievementDetails #Title").html($(this).find(".Title").html());
        $("#achievementDetails #Detail").html($(this).find(".Detail").html());
        var sss = $(this).parentsUntil('div').attr('id');
        window.alert(sss);
    }); 
});
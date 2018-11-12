/**
 * Created by admin on 2018/9/8.
 */
$(function () {
    $(".ui-whitespace").on("click",".otherIcon", function () {
        $(this).parent().addClass("cur");
        $(this).parent().siblings().removeClass("cur");
    });
    $(".circle").on("click", function () {
        window.open("code.html","_self");
    });
})
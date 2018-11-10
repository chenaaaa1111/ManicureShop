/**
 * Created by admin on 2018/9/8.
 */
$(function () {
    var code = "000000";
    $(".again").on("click", function () {
        alert("重新发送");
    });
    $(".ui-whitespace").on("input","input",function() {
        var val = $(this).val();
        var str = '';
        if($.trim(val) != "") {
            if(val.length == 1) {
                if($(this).parent().next(".ui-col")[0] == undefined) {
                    $(this).blur();
                    $(this).parents(".phoneBox").addClass("boxActive");
                    for(var i=0;i<$(".ui-whitespace").find("input").length;i++) {
                        str += $(".ui-whitespace").find("input").eq(i).val();
                    }
                    console.log(str == code);
                    if(str == code) {
                        $(".circle").show().next().hide();
                        $(".back").show();
                    } else {
                        $(".circle2").show().prev().hide()
                    }
                }
                $(this).parent().next(".ui-col").find("input").focus();
            }else{
                if(val.length == 6){
                    $('.circle').addClass('hasadd');
                }
            }
        }
    });
    $(".circle").on("click", function () {
        window.open("index.html","_self");
    });
    $(".circle2").on("click", function () {
        for(var i=0;i<$(".ui-whitespace").find("input").length;i++) {
            $(".ui-whitespace").find("input").eq(i).val("");
        }
    })
})
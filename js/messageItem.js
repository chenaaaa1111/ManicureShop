$(function () {
    // 返回上一页
    $(".left").click(function () {
        console.log("回退上一页面");
        history.go(-1);
    })
})
$(function () {
    // 点击消息列表跳转至消息详情页
    $(".messageBox").on("click", ".messageList", function () {
        window.open('messageItem.html', '_self')
    });
    // 返回上一页
    $(".left").click(function () {
        console.log("回退上一页面");
        history.go(-1);
    });
})
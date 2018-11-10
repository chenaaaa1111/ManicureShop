function showDialog(options) {
    var defaultOptions = {
        msg: '',
        cancen: function () {

        },
        makeSure: function () {
          
        }
    }
    options = $.extend(defaultOptions, options)

    var html = '<div class="ui-dialog show">\
			    <div class="ui-dialog-cnt">\
			        <div class="ui-dialog-bd">\
			            <p>' + options.msg + '</p>\
			        </div>\
			        <div class="ui-dialog-ft">\
			            <button type="button" class="cancen" onclick=""  data-role="button">取消</button>\
			            <button type="button" class=" makesure " onclick="" data-role="button">确定</button>\
			        </div>\
			    </div>\
			</div>'
    $('body').append(html);
    $('body').on('click', '.makesure', function () {
        $('.ui-dialog').removeClass('show')
        options.makeSure()

    });
    $('body').on('click', '.makesure', function () {
        $('.ui-dialog').removeClass('show')
        options.cancen();

    });
   
}
 
function showPromise(msg, callback) {
    var html = '<div class="ui-dialog show">\
			    <div class="ui-dialog-cnt">\
			        <div class="ui-dialog-bd">\
			            <p>' + msg + '</p>\
			        </div>\
			        <div class="ui-dialog-ft">\
			            <button type="button" class="hide" onclick="" data-role="button">确定</button>\
			        </div>\
			    </div>\
			</div>'
    $('body').append(html);
     $('body').on('click','.hide', function () {
        $('.ui-dialog').removeClass('show')
    });
}

function goback() {
    console.log("回退上一页面");
    history.go(-1);
}

$(function () {

})

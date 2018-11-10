Vue.component('head',{
	template: '<div class="top">\
    <div class="head">\
        <div class="title">购物车</div>\
        <div class="left" onclick="goback()">\
            <svg class="icon" aria-hidden="true">\
                <use xlink:href="#icon-back-m"></use>\
            </svg>\
        </div>\
        <div class="right">\
                          <span onclick="edit(this)">编辑</span>\
          </div>\
    </div>\
</div>'

})
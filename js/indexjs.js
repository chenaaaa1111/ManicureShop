
　　　　 var $num_jia = $(".num-jia");
        var $num_jian = $(".num-jian");
        var input_num = document.getElementById("input-num");

        $('.carList').on('click',"#num-jia",function(e) {//点加号按钮
            var price=parseInt($(e.target).parents('.priceline').find('.oneprice').html());
            var $input_=$(e.target).parent().parent().find("#input-num");
        	var anum=parseInt($input_.val());
        	$(e.target).parent().parent().find("#input-num").val(anum+1);
            var $checkBox=$(e.target).parents('.card').find('.ui-checkbox').find('input[type=checkbox]');
            if($checkBox.is(':checked')){
                var totalNum=parseInt($("#totalprice").html());
                totalNum=price*(anum+1)+totalNum;
                $("#totalprice").html(totalNum)
            }
        })

        $('.carList').on('click',"#num-jian",function(e) {//点减号按钮
            var anum=parseInt($(e.target).parent().parent().find("#input-num").val());
            if(anum <= 1) {
                showPromise('亲，数量不能再减了哦')
               $(e.target).parent().parent().find("#input-num").val(1)
            } else {

                $(e.target).parent().parent().find("#input-num").val(anum-1);
                  var price=parseInt($(e.target).parents('.priceline').find('.oneprice').html());
                    var $input_=$(e.target).parent().parent().find("#input-num");
                    var anum=parseInt($input_.val());
                    var $checkBox=$(e.target).parents('.card').find('.ui-checkbox').find('input[type=checkbox]');
                    if($checkBox.is(':checked')){
                        var totalNum=parseInt($("#totalprice").html());
                        totalNum=totalNum-price;
                        $("#totalprice").html(totalNum)
                    }

            }

        })
$(function(){
    var $priceLines=$(".priceline").find('input:checked').parents('.priceline');
    var totalNum=parseInt($("#totalprice").html());//总价

       $(".chooseAll").change(function(){
        var chooseAll= $(".orderList").attr('data-chooseAll');
        if(!chooseAll||chooseAll=='false'){
            $(".orderList").find('input[type=checkbox]').prop('checked','checked');
            $(".orderList").attr('data-chooseAll',true);
           var totalNum=getTotol('add');//总价
        }else{
           $(".orderList").find('input[type=checkbox]').prop('checked',false);
           $(".orderList").attr('data-chooseAll',false);
           var totalNum=getTotol('ms');//总价       
        }  

        var totolNum=getTotol()  
      });
    $('.input-num').blur(function(e){
        var val=$(e.target).val();
        if(val==0){
            showPromise('亲，数量不能少于1');
            $(e.target).val(1);
            return false;
        }
     
    });
    function getTotol(type){
        var priceTotol=parseInt($("#totalprice").html());

        if(type=='add'){
            var $totolLines=$(".ui-checkbox").find('input:checked').parents('.card').find('.priceline');
             console.log(typeof $totolLines,$totolLines);
            // for(var intem in $totolLines){
            //     console.log(intem);
            // }
             $.each($totolLines,function(key,val){
                console.log(key,val)
            var price=parseInt($(val).find('.oneprice').html());
            var num=parseInt($(val).find('.input-num').val());
            var pricet=price*num;
            priceTotol+=pricet;
            console.log(price,num,pricet);

            })
             $("#totalprice").html(priceTotol)

        }else if(type=='ms'){
        var pricechose=0; 
         var priceTotol=parseInt($("#totalprice").html());
        var $totolLines=$(".ui-checkbox").find('input:checked').parents('.card').find('.priceline');
        $totolLines.each(function(key,val){
            var price=parseInt($(val).find('.oneprice').html());
            var num=parseInt($(val).find('.input-num').val());
            var pricet=price*num;
            priceTotol+=pricet;
            pricechose+=pricet;
            console.log(priceTotol);

            })
          $("#totalprice").html(pricechose)
        }
     
        return priceTotol;
        
    }
    $priceLines.each(function(key,val){
        var price=parseInt($(val).find('.oneprice').html());
        var num=parseInt($(val).find('.input-num').val());
        var pricet=price*num;
        priceTotol+=pricet;
        console.log(pricet);

    })
    $('body').on('click','.carcheck',function(e){//选择商品按钮
        var totolLenth=$('.carcheck').length;
        var xuanzelenth=$(".carcheck:checked").length;
        if(totolLenth==xuanzelenth){
              $(".chooseAll").prop('checked','checked');
            $(".orderList").attr('data-chooseAll',true);
        }
        var totalNum=parseInt($("#totalprice").html());//总价
        var num=$(e.target).parents('.card').find('.input-num').val();
        console.log(num);//数量
        var price=$(e.target).parents('.card').find('.oneprice').html();
        if($(e.target).is(":checked")){
            console.log('选中');
              console.log(price);
            var prices=price*num;
            totalNum+=prices;
            $("#totalprice").html(totalNum);
        }else{
            console.log('取消');
            var prices=price*num;
            totalNum-=prices;
            $("#totalprice").html(totalNum);
            $(".chooseAll").prop('checked',false);
            $(".orderList").attr('data-chooseAll',false);
        }
    

    })
     $('body').on('click','.remove',function(e){//移出购物车
            var $choose=$('.orderList').find('input:checked');
            if($choose.length==0){
              showPromise('请选择商品');
            }else{
                $choose.parents('.orderItem').remove();
                 $('.orderList').trigger("resize");
            }
    })
})
    
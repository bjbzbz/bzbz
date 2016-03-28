//mini购物车商品数量
function loadMiniCartNum() {
    // jquery ie7 load 不能刷新 只执行了一次的问题,在调用load方法前，加入cache:false
    $.ajaxSetup ({ cache: false });
    var response = 0;
    $('span[class=cart-num]').html(response);
            $(".side-cart .num").html(response);
}
//mini购物车商品数量
function loadMiniCart() {
    // jquery ie7 load 不能刷新 只执行了一次的问题,在调用load方法前，加入cache:false
    $.ajaxSetup ({ cache: false });
    //加载迷你购物车
    $('.quick-menu li.cart').html(0);
}
function deleteMini(skuId){
    $.ajax({
        url: getContextPath() + '/cart/delete/' + skuId,
        type: 'GET',
        success: function(responseText) {
            loadMiniCart();
        }
    });
}

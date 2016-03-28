$(function(){
  //商品分类 菜单列表
    $(".categorys-list li").hover( function(){
        $(this).addClass("hover");
    },
        function(){
            $(this).removeClass("hover");
        });

    //商品分类 除了首页隐藏二级页面
    if($(".categorys").hasClass("hover")){
    }else{
      $(".categorys").hover(function(){
        $(this).addClass("hover");
      },
    function(){
       $(this).removeClass("hover");
    })
    }

    //收藏夹 购物车
    $(".quick-menu li.menu").hover( function(){
        $(this).addClass("hover");
    },
        function(){
            $(this).removeClass("hover");
        });

    //搜索 商品 店铺切换
    $(".search-type").hover( function(){
        $(this).addClass("hover");
    },
    function(){
        $(this).removeClass("hover");
    });
    //header搜索切换
    $(".search .search-tab li").click(function(){
      $("#item_head_form").attr("action", $(this).attr("url"));
        $(this).addClass("on").siblings("li").removeClass("on");
        $(this).parents(".search").find(".search-ipt").attr("placeholder","请输入商品名称");
    });
});

//tab标签效果
function setTab(name,cursel,n){
    for(i=1;i<=n;i++){
        var menu=document.getElementById(name+i);
        var con=document.getElementById("con-"+name+"-"+i);
        menu.className=i==cursel?"hover":"";
        con.style.display=i==cursel?"block":"none";
    }
}
  function checkDigits(dig) 
  { 
      var  reg=/^[0-9][-+]?\d*$/;
    if(!reg.test(dig))
      return false;
      return true; 
  }
  function checkEmail(dig) 
  { 
      var  reg=/[A-Za-z0-9_-]+[@](\S*)(net|com|cn|org|cc|tv|[0-9]{1,3})(\S*)/g;
    if(!reg.test(dig))
      return false;
      return true; 
  }

  /**
   * 转义字符
   * @param data
   * @return
   */
  function formatSpecialChar(data){
    if(!data){
      return "";
    }
    return $('<div/>').text(data).html();
  }

  function imageFormat_sys(img){
    if(!img){
      console.error("参数异常！");
      return "";
    }
    if(!img.src){
      console.error("图片路径为空");
      return "";
    }
    if(!img.width || !img.height){
      console.error("未传入图片分辨率参数");
      return img.src;
    }
    var index = img.src.lastIndexOf(".");
    var type = img.src.substring(index*1 + 1, img.src.length);
    if(type == "gif" || type == "GIF"){
      return img.src;
    }
    var REGEX = "jfs";
    var FIRST = "s";
    var DEL = "x";
    var LAST = "_jfs";
    return img.src.replace(REGEX, FIRST+img.width+DEL+img.height+LAST);
  }
  
  
  /**
   * 获取某个分辨率的图片
   * @param _url
   * @param _width 宽
   * @param _height 高
   * @return
   */
  function formatImg(_url, _width, _height){
    if(!_url){
      return "";
    }
    if(!_width || !_height){
      return _url;
    }
    var index = _url.lastIndexOf(".");
    var type = _url.substring(index*1 + 1, _url.length);
    if(type == "gif" || type == "GIF"){
      return _url;
    }
    return _url.replace("jfs", "s"+_width+"x"+_height+"_jfs");
  }

  // input 聚焦和失焦(默认文字使用value方式)

  function setDefault(obj,sText)
  {
      var bDefault = true;
      obj.focus(function(){
          if(bDefault)
          {
              obj.val('');
              obj.css('color','#333333')
          };
      });
      obj.blur(function(){
          var re = /\S/;
          if(!re.test(obj.val()))
          {
              obj.val(sText);
              obj.css('color','#999999');
              bDefault = true;
          }
          else
          {
              bDefault = false;
          }
      });
  }
  // input 聚焦和失焦(默认文字使用placeholder方式)
  function setDefault_2(obj)
  {
      var bDefault = true;
      obj.change(function(){
          var re = /\S/;
          if(!re.test(obj.val()))
          {
              obj.css('color','#999999');
              bDefault = true;
          }
          else
          {
            obj.css('color','#333333')
              bDefault = false;
          }
      });
  }
  //重写alert
  window.alert = function(msg, title){
    popWin2.removePopWin();
    popWin2.showWin(title || "提示信息", msg);
  }
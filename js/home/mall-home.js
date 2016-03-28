  //首页 轮播图
  jQuery(".main-slider").slide({ mainCell: ".bd ul", effect: "fold", autoPlay: true, interTime: 4000, delayTime: 1000 });

  //商品精选
  $(".showcase .item").hover(function() {
      $(this).find("img").stop().animate({ 'left': '-10px' }, 300);
  }, function() {
      $(this).find("img").stop().animate({ 'left': '0' }, 300);
  });


  /**
   * 热销、好评tab标签效果
   * @param _type
   * @param _catId
   */
  function setTab(_type, _catId) {
      if (_type == 1) {
          $("#rankA1_" + _catId).attr("class", "hover");
          $("#con-rankA-1-" + _catId).css("display", "block");

          $("#rankA2_" + _catId).attr("class", "");
          $("#con-rankA-2-" + _catId).css("display", "none");
      } else {
          $("#rankA2_" + _catId).attr("class", "hover");
          $("#con-rankA-2-" + _catId).css("display", "block");

          $("#rankA1_" + _catId).attr("class", "");
          $("#con-rankA-1-" + _catId).css("display", "none");
      }
  }

  /**
   * scroller插件
   */
  (function($) {
      var scroller = function(that, options) {
          this.opts = $.extend({
              start: null,
              end: null,
              startThrehold: 0,
              stopThrehold: 0,
              onStart: function() {},
              onEnd: function() {},
              onScroll: function() {}
          }, options);

          this.$o = $(that);

          this.init();
      };

      scroller.prototype = {
          init: function() {
              this.bindEvent();
              $(window).bind('scroll', function() {
                  $(this).trigger('onscroller');
              });
          },
          bindEvent: function() {
              var _this = this;
              var timer;
              $(window).bind('onscroller', function() {
                  clearTimeout(timer);
                  timer = setTimeout(function() {
                      _this.onScroll();
                      clearTimeout(timer);
                  }, 200);
              });
          },
          onScroll: function(e) {
              var top = $(document).scrollTop();
              var start = this.opts.start || this.$o.offset().top;
              var end = this.opts.end || start + this.$o.outerHeight();
              var wHeight = $(window).height();

              if (top > start + this.opts.startThrehold && top < end - wHeight - this.opts.stopThrehold) {
                  this.opts.onStart(this);
              } else {
                  this.opts.onEnd(this);
              }
              this.opts.onScroll(this);
          }
      };

      $.fn.scroller = function(options, callback) {
          return this.each(function() {
              // 实例化插件对象
              var plugin = new scroller(this, options, callback);

              $(this).data('scroller', plugin);
          });
      };
  })(jQuery);

  /**
  * 返回顶部
  opts {
      id: 'id'  // 外层元素id
      start: 10 // body scrollTop 多少时开始显示
      }
  */
  var BackPanelNew = function(opts) {
      this.id = opts.id || '';
      this.start = opts.start || 10;
      this.fadeIn = opts.fadeIn || 0;
      // 插入位置
      this.dir = opts.dir || 'top';

      this.show = false;
      this.onShow = opts.onShow || function() {};
  };

  BackPanelNew.prototype = {
      init: function(backtop) {
          var wrap = $('<div class="w backpanel hide"></div>');

          wrap.attr('id', this.id);

          this.el = wrap;
          this.el.html('<iframe marginwidth="0" marginheight="0" frameborder="0" scrolling="no" class="backpanel-iframe"></iframe><div class="backpanel-inner"></div>');
          this.wrap = this.el.find('.backpanel-inner');
          this.mask = this.el.find('.backpanel-iframe');

          $('body').eq(0).prepend(this.el);

          // 默认加载项
          if (typeof backtop !== 'undefined') {
              this.add(backtop);
          }
          this.bindScroll();

          return this;
      },
      bindScroll: function() {
          var _this = this;

          $(window).bind('scroll', function() {
              var scrollTop = $('html').scrollTop() || $('body').scrollTop();
              if (scrollTop > _this.start) {
                  _this.el.show(_this.fadeIn);
                  if (!_this.show) {
                      _this.onShow(_this);
                  }
                  if (!_this.resized) {
                      _this.setPosition();
                  }
              } else {
                  _this.el.hide();
                  _this.show = false;
              }
          });
      },
      setPosition: function() {
          var bWidth = $('body').eq(0).width();
          var cWidth = $('body .w').eq(0).width();
          var itemWidth = 38;
          var marginL = 605;

          itemWidth = this.wrap.find('.bp-item').eq(0).outerWidth();
          marginL = parseInt(this.wrap.css('marginLeft'));

          if (!this.resizeMask) {
              this.mask.css({
                  height: this.wrap.outerHeight() - 10,
                  width: this.wrap.outerWidth()
              });
              this.resizeMask = true;
          }

          if ((bWidth - cWidth) / 2 < itemWidth) {
              //this.wrap.add(this.mask).css('marginLeft', marginL - itemWidth );
              this.resized = true;
          }
      },
      add: function(obj) {
          var data = $.extend({
              cName: 'backtop',
              text: '<s></s>顶部',
              href: '#none',
              target: '_self',
              fNum: '',
              newTag: false,
              scrollTo: 0,
              fn: function() {}
          }, obj);

          this.resizeMask = false;
          this.render(data);

          return this;
      },
      render: function(item) {
          var _this = this;
          var itemTPL = '' + '<div class="{if newTag}bp-item-new{/if} bp-item bp-item-${cName}" data-top="${scrollTo}">' + '    <a href="${href}" class="${cName}" clstag="${clstag}" target="${target}">${text}</a><span>${fNum}</span><s></s>' + '</div>';

          var $item = $(itemTPL.process(item));

          this.dir = item.dir;

          if (item.dir === 'bottom') {
              this.wrap.append($item);
          } else {
              this.wrap.prepend($item);
          }

          //this.mask.css('height', );

          $item.unbind('click').bind('click', function() {
              item.fn.apply(_this, [$item]);
          });
      }
  };

  var Floors = {
      getFloorName: function(fid) {
          return smallTitleJson[fid + 1];
      }
  };

  // 初始化
  var backTop = new BackPanelNew({
      id: 'backpanel0708',
      start: 10
  }).init({
      text: '返回顶部',
      clstag: "pageclick|keycount|201601052|52",
      fn: function() {
          $('body,html').animate({ scrollTop: 0 }, 300);
      }
  }).add({
      cName: 'survey',
      text: '在线咨询',
      target: '_blank',
      fNum: '',
      href: 'http://wpa.qq.com/msgrd?v=3&uin=' + webQQ + '&site=qq&menu=yes',
      clstag: "pageclick|keycount|201601052|51"
  });

  // 根据滚动条位置定位楼层高亮
  function floorLocated() {
      var floors = $('#floors-list [data-fid]');
      var goToFloor = $('#backpanel-floor');
      var allTargets = goToFloor.find('.bp-item-floor-links');
      $('body').scroller({
          onScroll: function() {
              var floorsInWindows = [];

              floors.each(function() {
                  if (inWindow($(this))) {
                      floorsInWindows.push($(this));
                  }
              });
              if (floorsInWindows.length > 0) {
                  var fid = floorsInWindows[0].attr('data-fid');
                  allTargets.removeClass('curr');
                  goToFloor.find('.floor-fore' + fid).addClass('curr');
              } else {
                  allTargets.removeClass('curr');
              }
          }
      });
  }

  function addFloor(i, fData) {
      //埋点标识
      var tag = "pageclick|keycount|201601052|50";

      if (smallTitleJson != "") {
          if (Floors.getFloorName(fData[i]) != null && Floors.getFloorName(fData[i]) != "") {
              pageConfig.backTopFloor.add({
                  text: Floors.getFloorName(fData[i]),
                  cName: 'floor-links floor-fore' + fData[i],
                  href: '#none',
                  fNum: fData[i] + 1 + 'F',
                  dataSet: fData[i],
                  clstag: tag,
                  fn: function() {
                      var target = $('#floors-list').find('[data-fid=' + fData[i] + ']');
                      var oTop = target.offset().top;

                      $('body,html').animate({ scrollTop: oTop - 10 }, 500);
                  }
              });
          }
      }
  }

  pageConfig.backTopFloor = new BackPanelNew({
      id: 'backpanel-floor',
      start: 10,
      fadeIn: 500,
      onShow: function(bp) {
          var fData = [0, 1, 2, 3, 4, 5];
          var currFloor;
          if (Floors.cacheData) {
              fData = Floors.cacheData.sort;
          }

          if (!pageConfig.floorsShow) {
              for (var i = fData.length - 1; i >= 0; i--) {
                  addFloor(i, fData);
              }
              pageConfig.floorsShow = true;
              floorLocated();
          }

          bp.el.attr('clstag', 'homepage|keycount|home2013|daohang');
      }
  }).init();

  // 元素是否在窗口内
  function inWindow($el) {
      var wHeight = $(window).height() + 120;
      var bTop = $('body').scrollTop() || $('html').scrollTop();
      var eTop = $el.offset().top + 100;

      return wHeight + bTop > eTop && bTop < eTop;
  }


  /**
   * 展示某楼层的热销和好评商品对应的店铺排行 
   * @param _catId 楼层对应的一级类目id
   */
  function getHotAndEvaluateShops(_catId) {

      var result = window.mock.getHotAndEvaluateShops;
      if (result.flag) {
          var _hotSaleShopList = result.hotSaleShopList;
          var _goodEvaluateShopList = result.goodEvaluateShopList;
          if (_hotSaleShopList != null && _hotSaleShopList.length > 0) {
              var _hotObj = null,
                  _hotContentArr = [],
                  _shopImgUrl = "";
              for (var i = 0, len = _hotSaleShopList.length; i < len; i++) {
                  _hotObj = _hotSaleShopList[i];
                  if (i != 4) {
                      _hotContentArr.push("<li>");
                  } else {
                      _hotContentArr.push("<li class='last'>");
                  }

                  if (_hotObj.shopLogoUrl != null && _hotObj.shopLogoUrl != "") {
                      _shopImgUrl = formatImg(_hotObj.shopLogoUrl, 64, 64);
                  } else {
                      _shopImgUrl = "/images/default-shop.png";
                  }
                  _hotContentArr.push("<div class='img'><a href='" + formatSpecialChar(_hotObj.shopUrl) + "' target='_blank' title='" + formatSpecialChar(_hotObj.shopName) + "' target='_blank'><img src='" + _shopImgUrl + "' width='64' height='64'></a>");
                  _hotContentArr.push("</div>");
                  _hotContentArr.push("<div class='txt'>");
                  _hotContentArr.push("<p><a href='" + formatSpecialChar(_hotObj.shopUrl) + "' target='_blank'>" + formatSpecialChar(_hotObj.shopName) + "</a></p>");
                  _hotContentArr.push("<p>店铺评分：<span class='c-red'>" + _hotObj.shopScore + "</span>分</p>");
                  _hotContentArr.push("<p>成交量：<span class='c-red'>" + _hotObj.saleNum + "</span> 件</p>");
                  _hotContentArr.push("</div></li>");
              }
              $("#ul_floor_rank_hot_" + _catId).html(_hotContentArr.join(""));
          } else {
              $("#ul_floor_rank_hot_" + _catId).html("<li style='color:#999;'>该楼层暂无热销商品！</li>");
          }

          if (_goodEvaluateShopList != null && _goodEvaluateShopList.length > 0) {
              var _evaluateObj = null,
                  _evaluateContentArr = [],
                  _shopImgUrl = "";
              for (var i = 0, len = _goodEvaluateShopList.length; i < len; i++) {
                  _evaluateObj = _goodEvaluateShopList[i];
                  if (i != 4) {
                      _evaluateContentArr.push("<li>");
                  } else {
                      _evaluateContentArr.push("<li class='last'>");
                  }

                  if (_evaluateObj.shopLogoUrl != null && _evaluateObj.shopLogoUrl != "") {
                      _shopImgUrl = formatImg(_evaluateObj.shopLogoUrl, 64, 64);
                  } else {
                      _shopImgUrl = "/images/default-shop.png";
                  }
                  _evaluateContentArr.push("<div class='img'><a href='" + formatSpecialChar(_evaluateObj.shopUrl) + "' target='_blank' title='" + formatSpecialChar(_evaluateObj.shopName) + "' target='_blank'><img src='" + _shopImgUrl + "' width='64' height='64'></a>");
                  _evaluateContentArr.push("</div>");
                  _evaluateContentArr.push("<div class='txt'>");
                  _evaluateContentArr.push("<p><a href='" + formatSpecialChar(_evaluateObj.shopUrl) + "' target='_blank'>" + formatSpecialChar(_evaluateObj.shopName) + "</a></p>");
                  _evaluateContentArr.push("<p>店铺评分：<span class='c-red'>" + _evaluateObj.shopScore + "</span>分</p>");
                  _evaluateContentArr.push("<p>好评数：<span class='c-red'>" + _evaluateObj.goodEvaluateNum + "</span></p>");
                  _evaluateContentArr.push("</div></li>");
              }
              $("#ul_floor_rank_evaluate_" + _catId).html(_evaluateContentArr.join(""));
          } else {
              $("#ul_floor_rank_evaluate_" + _catId).html("<li style='color:#999;'>该楼层暂无好评商品！</li>");
          }
      } else {
          $("#ul_floor_rank_hot_" + _catId).html("<li style='color:#999;'>该楼层暂无热销商品！</li>");
          $("#ul_floor_rank_evaluate_" + _catId).html("<li style='color:#999;'>该楼层暂无好评商品！</li>");
      }
  }


  /**
   * 过滤特殊字符
   * @param data
   * @returns
   */
  function formatSpecialChar(data) {
      if (!data) {
          return "";
      }
      return $('<div/>').text(data).html();
  }


  $(document).ready(function() {
      //页面加载完成后，加载每一楼层的热销和好评商品数据
      var _hotSaleArr = $("ul[id^=ul_floor_rank_hot_]"),
          _goodEvaluateArr = $("ul[id^=ul_floor_rank_evaluate_]");
      var _hotsaleObj = null,
          _goodEvaluateObj = null;
      for (var i = 0, len = _hotSaleArr.length; i < len; i++) {
          _hotsaleObj = _hotSaleArr[i];
          _goodEvaluateObj = _goodEvaluateArr[i];
          if ($(_hotsaleObj).attr("value") == null || $(_hotsaleObj).attr("value") == "") {
              $(_hotsaleObj).html("<li style='color:#999;'>该楼层暂无热销商品！</li>");
              $(_goodEvaluateObj).html("<li style='color:#999;'>该楼层暂无好评商品！</li>");
          } else if (!$(_hotsaleObj).is(":has(div)")) {
              getHotAndEvaluateShops($(_hotsaleObj).attr("value"));
          }
      }
      $("#div_all_cats").show();
      $(".categorys").attr("onmouseout", "");
      //如果是科印版本的系统，在商城首页类目下要展示科印的微信广告图片
      /*if($("#hid_PlatformVersion").val() == 0){
        $("#div_category_ad").show();
      }*/
  });
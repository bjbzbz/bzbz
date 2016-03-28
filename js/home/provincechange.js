/**
 * 切换省份
 */
var provinceChangeJS = {
    get_cookie_province: function(c_name) {
        var c_str = document.cookie;
        c_name += "=";
        var c_start = c_str.indexOf(c_name);
        if (c_start == -1) return "";
        c_start += c_name.length;
        var c_end = c_str.indexOf(";", c_start);
        if (c_end == -1) c_end = c_str.length;
        return decodeURI(c_str.substring(c_start, c_end));
    },

    set_cookie_province: function(code, name) {
        var expires = new Date();
        expires.setDate(expires.getDate() + 365);
        var expires_str = expires.toGMTString();
        var suffix = ";domain=" + this.domain_name + ";expires=" + expires_str + ";path=/";
        document.cookie = "provinceCode=" + code + suffix;
        document.cookie = "provinceName=" + encodeURI(name) + suffix;
    },

    /**
     *
     * @param type
     *     type == 1: no province set - the first time to select
     *     otherwise: province previously set - 切换省份
     * @returns {string}
     */
    get_display_str: function(type) {
        var class_name = (type == 1 ? "area-choose-title" : "s-area-choose-title");
        var cur_prov_code = (type == 1 ? "" : this.get_cookie_province("provinceCode"));
        var str = "<div class='" + class_name + "'>请选择你的收货地区</div>" + "<dl><dt>中国</dt><dd>";
        var arr = this.province_array;
        for (var i = 0; i < arr.length; i++) {
            var prov_code = arr[i][0];
            var prov = arr[i][1];
            if (cur_prov_code != prov_code) {
                str += "<a href='javascript:;' onclick='provinceChangeJS.provinceChange(\"" + prov_code + "\", \"" + prov + "\")'>" + prov + "</a>\n";
            } else {
                str += "<a href='javascript:;'><font color='blue'>" + prov + "</font></a>\n";
            }
        }
        str += "</dd></dl>";
        return str;
    },

    /**
     * 进入卖场首页是否弹框
     */
    provinceDisplayOrNot: function() {
        var result = window.mock.provinces;
        if (!result.flag) {
            //alert("获取省份数据失败");
        }
        provinceChangeJS.domain_name = result.domain_name;

        var m2 = {};
        var arr = [];
        var map = result.areaProvinceMap;
        for (var prov in map) {
            var prov_code;
            if (prov.indexOf("台湾") == 0) {
                prov_code = "71";
            } else if (prov.indexOf("香港") == 0) {
                prov_code = "81";
            } else if (prov.indexOf("澳门") == 0) {
                prov_code = "82";
            } else if (prov.indexOf("钓鱼岛") == 0) {
                prov_code = "83";
            } else {
                prov_code = map[prov][0]['code'].substr(0, 2);
            }
            m2[prov_code] = prov;
            arr.push(prov_code);
        }
        arr.sort();

        var a2 = [];
        for (var i = 0; i < arr.length; i++) {
            a2.push([arr[i], m2[arr[i]]]);
        }
        provinceChangeJS.province_array = a2;

        var provinceCode = provinceChangeJS.get_cookie_province("provinceCode");
        provinceCode = 35;
        // 无provinceCode的Cookie
        if (provinceCode == "") {
            $("#selected_province").html("请选择地区");
            $("#area_choose").html(provinceChangeJS.get_display_str(1));
            $(".popup-area").show();
        } else {
            $(".popup-area").hide();
            //$("input[name=provinceName]").val(provinceName);
            //$("input[name=provinceCode]").val(provinceCode);
            $("#selected_province").html("福建省");
        }

    },

    // huafeng 2015.11.04: code below seems not used.
    //    /**
    //     * 首次进入选择省份
    //     * @param code
    //     */
    //    provinceSelection : function(code, name) {
    //      $("input[name=provinceCode]").val(code);
    //      $("input[name=provinceName]").val(name);
    //      $("#province_selection_Form").submit();
    //      //$("#mask,#maskTop", parent.document).fadeOut();
    //      //$("#mask,#maskTop", parent.document).hide();
    //      $(this).parents(".popup-area").hide();
    //      //$("input[name=provinceCode]", parent.document).val(code);
    //      //$("input[name=provinceName]", parent.document).val(name);
    //      $("#selected_province").html(name);
    //      //$(".area-txt strong").html($(this).text());
    //    },
    //
    //    showWin_cus: function(width, height, title, src) {
    //          var iframeHeight = height - 40;
    //          var marginLeft = width / 2;
    //          var marginTop = height / 2;
    //          var inntHtml = '';
    //          inntHtml += '<div id="mask" class="maskLayer"></div>';
    //          inntHtml += '<div id="maskTop" class="popbox" style="width: ' + width + 'px; height: ' + height + 'px; margin-left: -' + marginLeft + 'px; margin-top: -' + marginTop + 'px; ">';
    //          inntHtml += '<div id="maskTitle" class="pop-title">';
    //          inntHtml += '' + title + '';
    //          inntHtml += '</div>';
    //          inntHtml += '<iframe id="iframe_add_cart" width="' + width + '" height="' + iframeHeight + '" frameborder="0" scrolling="' + this.scrolling + '" src="' + src + '"></iframe>';
    //
    //          $("body").append(inntHtml);
    //      },
    // huafeng 2015.11.04: end of comment

    provinceChange: function(code, name) {
        $(this).unbind("click");
        $(this).bind("click", function() {
            javascript: void(0);
        });
        $(this).parents(".area-tab.hover").removeClass("hover");
        //$("input[name=provinceCode]").val(code);
        //$("input[name=provinceName]").val(name);

        // $("#province_selection_Form").submit();
        provinceChangeJS.set_cookie_province(code, name);
        $("#area_content").hide();
        $(".popup-area").hide();
        $("#selected_province").html(name);
        location.reload();
    },


    /**
     * 鼠标移过
     */
    mouseOver: function() {
        $("#area_content").html(this.get_display_str(2));
        $("#area_content").show();
    },


    /*
     * 鼠标移出
     */
    mouseOut: function() {
        $("#area_content").hide();
    },

    /*
     * 鼠标移过
     */
    mouseOver_con: function() {
        provinceChangeJS.mouseOver();
    },

    /*
     * 鼠标移出
     */
    mouseOut_con: function() {
        $("#area_content").hide();
    }

};

$(function() {
    provinceChangeJS.provinceDisplayOrNot();
});
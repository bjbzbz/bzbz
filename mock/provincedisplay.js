(function() {
    var provinces = {
        "flag": true,
        "areaProvinceMap": {
            "澳门特别行政区": [{
                "code": "8201",
                "name": "澳门",
                "level": 2,
                "region": null
            }],
            "广东省": [{
                "code": "4401",
                "name": "广州市",
                "level": 2,
                "region": null
            }, {
                "code": "4402",
                "name": "韶关市",
                "level": 2,
                "region": null
            }, {
                "code": "4403",
                "name": "深圳市",
                "level": 2,
                "region": null
            }, {
                "code": "4404",
                "name": "珠海市",
                "level": 2,
                "region": null
            }, {
                "code": "4405",
                "name": "汕头市",
                "level": 2,
                "region": null
            }, {
                "code": "4406",
                "name": "佛山市",
                "level": 2,
                "region": null
            }, {
                "code": "4407",
                "name": "江门市",
                "level": 2,
                "region": null
            }, {
                "code": "4408",
                "name": "湛江市",
                "level": 2,
                "region": null
            }, {
                "code": "4409",
                "name": "茂名市",
                "level": 2,
                "region": null
            }, { "code": "4412", "name": "肇庆市", "level": 2, "region": null }, { "code": "4413", "name": "惠州市", "level": 2, "region": null }, { "code": "4414", "name": "梅州市", "level": 2, "region": null }, { "code": "4415", "name": "汕尾市", "level": 2, "region": null }, { "code": "4416", "name": "河源市", "level": 2, "region": null }, { "code": "4417", "name": "阳江市", "level": 2, "region": null }, { "code": "4418", "name": "清远市", "level": 2, "region": null }, { "code": "4419", "name": "东莞市", "level": 2, "region": null }, { "code": "4420", "name": "中山市", "level": 2, "region": null }, { "code": "4451", "name": "潮州市", "level": 2, "region": null }, { "code": "4452", "name": "揭阳市", "level": 2, "region": null }, { "code": "4453", "name": "云浮市", "level": 2, "region": null }],
            "陕西省": [{ "code": "6101", "name": "西安市", "level": 2, "region": null }, { "code": "6102", "name": "铜川市", "level": 2, "region": null }, { "code": "6103", "name": "宝鸡市", "level": 2, "region": null }, { "code": "6104", "name": "咸阳市", "level": 2, "region": null }, { "code": "6105", "name": "渭南市", "level": 2, "region": null }, { "code": "6106", "name": "延安市", "level": 2, "region": null }, { "code": "6107", "name": "汉中市", "level": 2, "region": null }, { "code": "6108", "name": "榆林市", "level": 2, "region": null }, { "code": "6109", "name": "安康市", "level": 2, "region": null }, { "code": "6110", "name": "商洛市", "level": 2, "region": null }],
            "河南省": [{ "code": "4101", "name": "郑州市", "level": 2, "region": null }, { "code": "4102", "name": "开封市", "level": 2, "region": null }, { "code": "4103", "name": "洛阳市", "level": 2, "region": null }, { "code": "4104", "name": "平顶山市", "level": 2, "region": null }, { "code": "4105", "name": "安阳市", "level": 2, "region": null }, { "code": "4106", "name": "鹤壁市", "level": 2, "region": null }, { "code": "4107", "name": "新乡市", "level": 2, "region": null }, { "code": "4108", "name": "焦作市", "level": 2, "region": null }, { "code": "4109", "name": "濮阳市", "level": 2, "region": null }, { "code": "4110", "name": "许昌市", "level": 2, "region": null }, { "code": "4111", "name": "漯河市", "level": 2, "region": null }, { "code": "4112", "name": "三门峡市", "level": 2, "region": null }, { "code": "4113", "name": "南阳市", "level": 2, "region": null }, { "code": "4114", "name": "商丘市", "level": 2, "region": null }, { "code": "4115", "name": "信阳市", "level": 2, "region": null }, { "code": "4116", "name": "周口市", "level": 2, "region": null }, { "code": "4117", "name": "驻马店市", "level": 2, "region": null }],
            "江西省": [{ "code": "3601", "name": "南昌市", "level": 2, "region": null }, { "code": "3602", "name": "景德镇市", "level": 2, "region": null }, { "code": "3603", "name": "萍乡市", "level": 2, "region": null }, { "code": "3604", "name": "九江市", "level": 2, "region": null }, { "code": "3605", "name": "新余市", "level": 2, "region": null }, { "code": "3606", "name": "鹰潭市", "level": 2, "region": null }, { "code": "3607", "name": "赣州市", "level": 2, "region": null }, { "code": "3608", "name": "吉安市", "level": 2, "region": null }, { "code": "3609", "name": "宜春市", "level": 2, "region": null }, { "code": "3610", "name": "抚州市", "level": 2, "region": null }, { "code": "3611", "name": "上饶市", "level": 2, "region": null }],
            "海南省": [{ "code": "4601", "name": "海口市", "level": 2, "region": null }, { "code": "4602", "name": "三亚市", "level": 2, "region": null }, { "code": "4690", "name": "省直辖县级行政单位", "level": 2, "region": null }],
            "上海市": [{ "code": "3101", "name": "市辖区", "level": 2, "region": null }, { "code": "3102", "name": "县", "level": 2, "region": null }],
            "吉林省": [{ "code": "2201", "name": "长春市", "level": 2, "region": null }, { "code": "2202", "name": "吉林市", "level": 2, "region": null }, { "code": "2203", "name": "四平市", "level": 2, "region": null }, { "code": "2204", "name": "辽源市", "level": 2, "region": null }, { "code": "2205", "name": "通化市", "level": 2, "region": null }, { "code": "2206", "name": "白山市", "level": 2, "region": null }, { "code": "2207", "name": "松原市", "level": 2, "region": null }, { "code": "2208", "name": "白城市", "level": 2, "region": null }, { "code": "2224", "name": "延边朝鲜族自治州", "level": 2, "region": null }],
            "安徽省": [{ "code": "3401", "name": "合肥市", "level": 2, "region": null }, { "code": "3402", "name": "芜湖市", "level": 2, "region": null }, { "code": "3403", "name": "蚌埠市", "level": 2, "region": null }, { "code": "3404", "name": "淮南市", "level": 2, "region": null }, { "code": "3405", "name": "马鞍山市", "level": 2, "region": null }, { "code": "3406", "name": "淮北市", "level": 2, "region": null }, { "code": "3407", "name": "铜陵市", "level": 2, "region": null }, { "code": "3408", "name": "安庆市", "level": 2, "region": null }, { "code": "3410", "name": "黄山市", "level": 2, "region": null }, { "code": "3411", "name": "滁州市", "level": 2, "region": null }, { "code": "3412", "name": "阜阳市", "level": 2, "region": null }, { "code": "3413", "name": "宿州市", "level": 2, "region": null }, { "code": "3414", "name": "巢湖市", "level": 2, "region": null }, { "code": "3415", "name": "六安市", "level": 2, "region": null }, { "code": "3416", "name": "亳州市", "level": 2, "region": null }, { "code": "3417", "name": "池州市", "level": 2, "region": null }, { "code": "3418", "name": "宣城市", "level": 2, "region": null }],
            "河北省": [{ "code": "1301", "name": "石家庄市", "level": 2, "region": null }, { "code": "1302", "name": "唐山市", "level": 2, "region": null }, { "code": "1303", "name": "秦皇岛市", "level": 2, "region": null }, { "code": "1304", "name": "邯郸市", "level": 2, "region": null }, { "code": "1305", "name": "邢台市", "level": 2, "region": null }, { "code": "1306", "name": "保定市", "level": 2, "region": null }, { "code": "1307", "name": "张家口市", "level": 2, "region": null }, { "code": "1308", "name": "承德市", "level": 2, "region": null }, { "code": "1309", "name": "沧州市", "level": 2, "region": null }, { "code": "1310", "name": "廊坊市", "level": 2, "region": null }, { "code": "1311", "name": "衡水市", "level": 2, "region": null }],
            "天津市": [{ "code": "1201", "name": "市辖区", "level": 2, "region": null }, { "code": "1202", "name": "县", "level": 2, "region": null }],
            "重庆市": [{ "code": "5001", "name": "市辖区", "level": 2, "region": null }, { "code": "5002", "name": "县", "level": 2, "region": null }, { "code": "5003", "name": "市", "level": 2, "region": null }],
            "甘肃省": [{ "code": "6201", "name": "兰州市", "level": 2, "region": null }, { "code": "6202", "name": "嘉峪关市", "level": 2, "region": null }, { "code": "6203", "name": "金昌市", "level": 2, "region": null }, { "code": "6204", "name": "白银市", "level": 2, "region": null }, { "code": "6205", "name": "天水市", "level": 2, "region": null }, { "code": "6206", "name": "武威市", "level": 2, "region": null }, { "code": "6207", "name": "张掖市", "level": 2, "region": null }, { "code": "6208", "name": "平凉市", "level": 2, "region": null }, { "code": "6209", "name": "酒泉市", "level": 2, "region": null }, { "code": "6210", "name": "庆阳市", "level": 2, "region": null }, { "code": "6211", "name": "定西市", "level": 2, "region": null }, { "code": "6212", "name": "陇南市", "level": 2, "region": null }, { "code": "6229", "name": "临夏回族自治州", "level": 2, "region": null }, { "code": "6230", "name": "甘南藏族自治州", "level": 2, "region": null }],
            "宁夏回族自治区": [{ "code": "6401", "name": "银川市", "level": 2, "region": null }, { "code": "6402", "name": "石嘴山市", "level": 2, "region": null }, { "code": "6403", "name": "吴忠市", "level": 2, "region": null }, { "code": "6404", "name": "固原市", "level": 2, "region": null }, { "code": "6405", "name": "中卫市", "level": 2, "region": null }],
            "山西省": [{ "code": "1401", "name": "太原市", "level": 2, "region": null }, { "code": "1402", "name": "大同市", "level": 2, "region": null }, { "code": "1403", "name": "阳泉市", "level": 2, "region": null }, { "code": "1404", "name": "长治市", "level": 2, "region": null }, { "code": "1405", "name": "晋城市", "level": 2, "region": null }, { "code": "1406", "name": "朔州市", "level": 2, "region": null }, { "code": "1407", "name": "晋中市", "level": 2, "region": null }, { "code": "1408", "name": "运城市", "level": 2, "region": null }, { "code": "1409", "name": "忻州市", "level": 2, "region": null }, { "code": "1410", "name": "临汾市", "level": 2, "region": null }, { "code": "1411", "name": "吕梁市", "level": 2, "region": null }],
            "江苏省": [{ "code": "3201", "name": "南京市", "level": 2, "region": null }, { "code": "3202", "name": "无锡市", "level": 2, "region": null }, { "code": "3203", "name": "徐州市", "level": 2, "region": null }, { "code": "3204", "name": "常州市", "level": 2, "region": null }, { "code": "3205", "name": "苏州市", "level": 2, "region": null }, { "code": "3206", "name": "南通市", "level": 2, "region": null }, { "code": "3207", "name": "连云港市", "level": 2, "region": null }, { "code": "3208", "name": "淮安市", "level": 2, "region": null }, { "code": "3209", "name": "盐城市", "level": 2, "region": null }, { "code": "3210", "name": "扬州市", "level": 2, "region": null }, { "code": "3211", "name": "镇江市", "level": 2, "region": null }, { "code": "3212", "name": "泰州市", "level": 2, "region": null }, { "code": "3213", "name": "宿迁市", "level": 2, "region": null }],
            "四川省": [{ "code": "5101", "name": "成都市", "level": 2, "region": null }, { "code": "5103", "name": "自贡市", "level": 2, "region": null }, { "code": "5104", "name": "攀枝花市", "level": 2, "region": null }, { "code": "5105", "name": "泸州市", "level": 2, "region": null }, { "code": "5106", "name": "德阳市", "level": 2, "region": null }, { "code": "5107", "name": "绵阳市", "level": 2, "region": null }, { "code": "5108", "name": "广元市", "level": 2, "region": null }, { "code": "5109", "name": "遂宁市", "level": 2, "region": null }, { "code": "5110", "name": "内江市", "level": 2, "region": null }, { "code": "5111", "name": "乐山市", "level": 2, "region": null }, { "code": "5113", "name": "南充市", "level": 2, "region": null }, { "code": "5114", "name": "眉山市", "level": 2, "region": null }, { "code": "5115", "name": "宜宾市", "level": 2, "region": null }, { "code": "5116", "name": "广安市", "level": 2, "region": null }, { "code": "5117", "name": "达州市", "level": 2, "region": null }, { "code": "5118", "name": "雅安市", "level": 2, "region": null }, { "code": "5119", "name": "巴中市", "level": 2, "region": null }, { "code": "5120", "name": "资阳市", "level": 2, "region": null }, { "code": "5132", "name": "阿坝藏族羌族自治州", "level": 2, "region": null }, { "code": "5133", "name": "甘孜藏族自治州", "level": 2, "region": null }, { "code": "5134", "name": "凉山彝族自治州", "level": 2, "region": null }],
            "福建省": [{
                "code": "3501",
                "name": "福州市",
                "level": 2,
                "region": null
            }, { "code": "3502", "name": "厦门市", "level": 2, "region": null }, { "code": "3503", "name": "莆田市", "level": 2, "region": null }, { "code": "3504", "name": "三明市", "level": 2, "region": null }, { "code": "3505", "name": "泉州市", "level": 2, "region": null }, { "code": "3506", "name": "漳州市", "level": 2, "region": null }, { "code": "3507", "name": "南平市", "level": 2, "region": null }, { "code": "3508", "name": "龙岩市", "level": 2, "region": null }, { "code": "3509", "name": "宁德市", "level": 2, "region": null }],
            "湖南省": [{ "code": "4301", "name": "长沙市", "level": 2, "region": null }, { "code": "4302", "name": "株洲市", "level": 2, "region": null }, { "code": "4303", "name": "湘潭市", "level": 2, "region": null }, { "code": "4304", "name": "衡阳市", "level": 2, "region": null }, { "code": "4305", "name": "邵阳市", "level": 2, "region": null }, { "code": "4306", "name": "岳阳市", "level": 2, "region": null }, { "code": "4307", "name": "常德市", "level": 2, "region": null }, { "code": "4308", "name": "张家界市", "level": 2, "region": null }, { "code": "4309", "name": "益阳市", "level": 2, "region": null }, { "code": "4310", "name": "郴州市", "level": 2, "region": null }, { "code": "4311", "name": "永州市", "level": 2, "region": null }, { "code": "4312", "name": "怀化市", "level": 2, "region": null }, { "code": "4313", "name": "娄底市", "level": 2, "region": null }, { "code": "4331", "name": "湘西土家族苗族自治州", "level": 2, "region": null }],
            "浙江省": [{ "code": "3301", "name": "杭州市", "level": 2, "region": null }, { "code": "3302", "name": "宁波市", "level": 2, "region": null }, { "code": "3303", "name": "温州市", "level": 2, "region": null }, { "code": "3304", "name": "嘉兴市", "level": 2, "region": null }, { "code": "3305", "name": "湖州市", "level": 2, "region": null }, { "code": "3306", "name": "绍兴市", "level": 2, "region": null }, { "code": "3307", "name": "金华市", "level": 2, "region": null }, { "code": "3308", "name": "衢州市", "level": 2, "region": null }, { "code": "3309", "name": "舟山市", "level": 2, "region": null }, { "code": "3310", "name": "台州市", "level": 2, "region": null }, { "code": "3311", "name": "丽水市", "level": 2, "region": null }],
            "贵州省": [{ "code": "5201", "name": "贵阳市", "level": 2, "region": null }, { "code": "5202", "name": "六盘水市", "level": 2, "region": null }, { "code": "5203", "name": "遵义市", "level": 2, "region": null }, { "code": "5204", "name": "安顺市", "level": 2, "region": null }, { "code": "5222", "name": "铜仁地区", "level": 2, "region": null }, { "code": "5223", "name": "黔西南布依族苗族自治州", "level": 2, "region": null }, { "code": "5224", "name": "毕节地区", "level": 2, "region": null }, { "code": "5226", "name": "黔东南苗族侗族自治州", "level": 2, "region": null }, { "code": "5227", "name": "黔南布依族苗族自治州", "level": 2, "region": null }],
            "台湾省": [{ "code": "7101", "name": "台湾省", "level": 2, "region": null }],
            "钓鱼岛": [{ "code": "8301", "name": "钓鱼岛", "level": 2, "region": null }],
            "辽宁省": [{ "code": "2101", "name": "沈阳市", "level": 2, "region": null }, { "code": "2102", "name": "大连市", "level": 2, "region": null }, { "code": "2103", "name": "鞍山市", "level": 2, "region": null }, { "code": "2104", "name": "抚顺市", "level": 2, "region": null }, { "code": "2105", "name": "本溪市", "level": 2, "region": null }, { "code": "2106", "name": "丹东市", "level": 2, "region": null }, { "code": "2107", "name": "锦州市", "level": 2, "region": null }, { "code": "2108", "name": "营口市", "level": 2, "region": null }, { "code": "2109", "name": "阜新市", "level": 2, "region": null }, { "code": "2110", "name": "辽阳市", "level": 2, "region": null }, { "code": "2111", "name": "盘锦市", "level": 2, "region": null }, { "code": "2112", "name": "铁岭市", "level": 2, "region": null }, { "code": "2113", "name": "朝阳市", "level": 2, "region": null }, { "code": "2114", "name": "葫芦岛市", "level": 2, "region": null }],
            "山东省": [{ "code": "3701", "name": "济南市", "level": 2, "region": null }, { "code": "3702", "name": "青岛市", "level": 2, "region": null }, { "code": "3703", "name": "淄博市", "level": 2, "region": null }, { "code": "3704", "name": "枣庄市", "level": 2, "region": null }, { "code": "3705", "name": "东营市", "level": 2, "region": null }, { "code": "3706", "name": "烟台市", "level": 2, "region": null }, { "code": "3707", "name": "潍坊市", "level": 2, "region": null }, { "code": "3708", "name": "济宁市", "level": 2, "region": null }, { "code": "3709", "name": "泰安市", "level": 2, "region": null }, { "code": "3710", "name": "威海市", "level": 2, "region": null }, { "code": "3711", "name": "日照市", "level": 2, "region": null }, { "code": "3712", "name": "莱芜市", "level": 2, "region": null }, { "code": "3713", "name": "临沂市", "level": 2, "region": null }, { "code": "3714", "name": "德州市", "level": 2, "region": null }, { "code": "3715", "name": "聊城市", "level": 2, "region": null }, { "code": "3716", "name": "滨州市", "level": 2, "region": null }, { "code": "3717", "name": "荷泽市", "level": 2, "region": null }],
            "新疆维吾尔自治区": [{ "code": "6501", "name": "乌鲁木齐市", "level": 2, "region": null }, { "code": "6502", "name": "克拉玛依市", "level": 2, "region": null }, { "code": "6521", "name": "吐鲁番地区", "level": 2, "region": null }, { "code": "6522", "name": "哈密地区", "level": 2, "region": null }, { "code": "6523", "name": "昌吉回族自治州", "level": 2, "region": null }, { "code": "6527", "name": "博尔塔拉蒙古自治州", "level": 2, "region": null }, { "code": "6528", "name": "巴音郭楞蒙古自治州", "level": 2, "region": null }, { "code": "6529", "name": "阿克苏地区", "level": 2, "region": null }, { "code": "6530", "name": "克孜勒苏柯尔克孜自治州", "level": 2, "region": null }, { "code": "6531", "name": "喀什地区", "level": 2, "region": null }, { "code": "6532", "name": "和田地区", "level": 2, "region": null }, { "code": "6540", "name": "伊犁哈萨克自治州", "level": 2, "region": null }, { "code": "6542", "name": "塔城地区", "level": 2, "region": null }, { "code": "6543", "name": "阿勒泰地区", "level": 2, "region": null }, { "code": "6590", "name": "省直辖行政单位", "level": 2, "region": null }],
            "北京市": [{ "code": "1101", "name": "市辖区", "level": 2, "region": null }, { "code": "1102", "name": "县", "level": 2, "region": null }],
            "内蒙古自治区": [{ "code": "1501", "name": "呼和浩特市", "level": 2, "region": null }, { "code": "1502", "name": "包头市", "level": 2, "region": null }, { "code": "1503", "name": "乌海市", "level": 2, "region": null }, { "code": "1504", "name": "赤峰市", "level": 2, "region": null }, { "code": "1505", "name": "通辽市", "level": 2, "region": null }, { "code": "1506", "name": "鄂尔多斯市", "level": 2, "region": null }, { "code": "1507", "name": "呼伦贝尔市", "level": 2, "region": null }, { "code": "1508", "name": "巴彦淖尔市", "level": 2, "region": null }, { "code": "1509", "name": "乌兰察布市", "level": 2, "region": null }, { "code": "1522", "name": "兴安盟", "level": 2, "region": null }, { "code": "1525", "name": "锡林郭勒盟", "level": 2, "region": null }, { "code": "1529", "name": "阿拉善盟", "level": 2, "region": null }],
            "西藏自治区": [{ "code": "5401", "name": "拉萨市", "level": 2, "region": null }, { "code": "5421", "name": "昌都地区", "level": 2, "region": null }, { "code": "5422", "name": "山南地区", "level": 2, "region": null }, { "code": "5423", "name": "日喀则地区", "level": 2, "region": null }, { "code": "5424", "name": "那曲地区", "level": 2, "region": null }, { "code": "5425", "name": "阿里地区", "level": 2, "region": null }, { "code": "5426", "name": "林芝地区", "level": 2, "region": null }],
            "香港特别行政区": [{ "code": "8101", "name": "香港", "level": 2, "region": null }],
            "广西壮族自治区": [{ "code": "4501", "name": "南宁市", "level": 2, "region": null }, { "code": "4502", "name": "柳州市", "level": 2, "region": null }, { "code": "4503", "name": "桂林市", "level": 2, "region": null }, { "code": "4504", "name": "梧州市", "level": 2, "region": null }, { "code": "4505", "name": "北海市", "level": 2, "region": null }, { "code": "4506", "name": "防城港市", "level": 2, "region": null }, { "code": "4507", "name": "钦州市", "level": 2, "region": null }, { "code": "4508", "name": "贵港市", "level": 2, "region": null }, { "code": "4509", "name": "玉林市", "level": 2, "region": null }, { "code": "4510", "name": "百色市", "level": 2, "region": null }, { "code": "4511", "name": "贺州市", "level": 2, "region": null }, { "code": "4512", "name": "河池市", "level": 2, "region": null }, { "code": "4513", "name": "来宾市", "level": 2, "region": null }, { "code": "4514", "name": "崇左市", "level": 2, "region": null }],
            "湖北省": [{ "code": "4201", "name": "武汉市", "level": 2, "region": null }, { "code": "4202", "name": "黄石市", "level": 2, "region": null }, { "code": "4203", "name": "十堰市", "level": 2, "region": null }, { "code": "4205", "name": "宜昌市", "level": 2, "region": null }, { "code": "4206", "name": "襄樊市", "level": 2, "region": null }, { "code": "4207", "name": "鄂州市", "level": 2, "region": null }, { "code": "4208", "name": "荆门市", "level": 2, "region": null }, { "code": "4209", "name": "孝感市", "level": 2, "region": null }, { "code": "4210", "name": "荆州市", "level": 2, "region": null }, { "code": "4211", "name": "黄冈市", "level": 2, "region": null }, { "code": "4212", "name": "咸宁市", "level": 2, "region": null }, { "code": "4213", "name": "随州市", "level": 2, "region": null }, { "code": "4228", "name": "恩施土家族苗族自治州", "level": 2, "region": null }, { "code": "4290", "name": "省直辖行政单位", "level": 2, "region": null }],
            "黑龙江省": [{ "code": "2301", "name": "哈尔滨市", "level": 2, "region": null }, { "code": "2302", "name": "齐齐哈尔市", "level": 2, "region": null }, { "code": "2303", "name": "鸡西市", "level": 2, "region": null }, { "code": "2304", "name": "鹤岗市", "level": 2, "region": null }, { "code": "2305", "name": "双鸭山市", "level": 2, "region": null }, { "code": "2306", "name": "大庆市", "level": 2, "region": null }, { "code": "2307", "name": "伊春市", "level": 2, "region": null }, { "code": "2308", "name": "佳木斯市", "level": 2, "region": null }, { "code": "2309", "name": "七台河市", "level": 2, "region": null }, { "code": "2310", "name": "牡丹江市", "level": 2, "region": null }, { "code": "2311", "name": "黑河市", "level": 2, "region": null }, { "code": "2312", "name": "绥化市", "level": 2, "region": null }, { "code": "2327", "name": "大兴安岭地区", "level": 2, "region": null }],
            "云南省": [{ "code": "5301", "name": "昆明市", "level": 2, "region": null }, { "code": "5303", "name": "曲靖市", "level": 2, "region": null }, { "code": "5304", "name": "玉溪市", "level": 2, "region": null }, { "code": "5305", "name": "保山市", "level": 2, "region": null }, { "code": "5306", "name": "昭通市", "level": 2, "region": null }, { "code": "5307", "name": "丽江市", "level": 2, "region": null }, { "code": "5308", "name": "思茅市", "level": 2, "region": null }, { "code": "5309", "name": "临沧市", "level": 2, "region": null }, { "code": "5323", "name": "楚雄彝族自治州", "level": 2, "region": null }, { "code": "5325", "name": "红河哈尼族彝族自治州", "level": 2, "region": null }, { "code": "5326", "name": "文山壮族苗族自治州", "level": 2, "region": null }, { "code": "5328", "name": "西双版纳傣族自治州", "level": 2, "region": null }, { "code": "5329", "name": "大理白族自治州", "level": 2, "region": null }, { "code": "5331", "name": "德宏傣族景颇族自治州", "level": 2, "region": null }, { "code": "5333", "name": "怒江傈僳族自治州", "level": 2, "region": null }, { "code": "5334", "name": "迪庆藏族自治州", "level": 2, "region": null }],
            "青海省": [{ "code": "6301", "name": "西宁市", "level": 2, "region": null }, { "code": "6321", "name": "海东地区", "level": 2, "region": null }, { "code": "6322", "name": "海北藏族自治州", "level": 2, "region": null }, { "code": "6323", "name": "黄南藏族自治州", "level": 2, "region": null }, { "code": "6325", "name": "海南藏族自治州", "level": 2, "region": null }, { "code": "6326", "name": "果洛藏族自治州", "level": 2, "region": null }, { "code": "6327", "name": "玉树藏族自治州", "level": 2, "region": null }, { "code": "6328", "name": "海西蒙古族藏族自治州", "level": 2, "region": null }]
        },
        "domain_name": "b2b.jcloud.com"
    };
    window.mock = window.mock || {};
    window.mock.provinces = provinces;
})();
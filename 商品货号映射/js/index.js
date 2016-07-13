var creatTR = function(obj) {
	if (!obj) {
		return '';
	}
	var name = obj.name,
		type = obj.type,
		b2bnum = obj.b2bnum,
		ncnum = obj.ncnum,
		isinsale = obj.isinsale;
	return '<tr>' +
				'<td>' + name +'</td>' +
				'<td>' + type +'</td>' +
				'<td>' + b2bnum +'</td>' +
				'<td>' + ncnum +'</td>' +
				'<td>' + isinsale + '</td>' +
			'</tr>';
};
$(document).ready(function() {
	var $tableBody = $('.b2b-nc-tbody');
	$('#b2bsearch').on('click', function() {
		var b2bnum = $('.b2bnum').val();
		var data = globalData[b2bnum];
		$tableBody.html(creatTR(data));
	});
	$('.b2bnum').on('keyup', function() {
		var value;
		var cuValue = $(this).val();
		var count = 0;
		var tbody = '';
		if (cuValue.length >= 5) {
			value = cuValue.slice(0, 5);
			count = globalTypeCount[value] || 0;
			if (count) {
				for (var i = 0; i < count; i++) {
					tbody += creatTR(globalData[value + '-' + (i + 1)]);
				}
				$('.tip').html('');
				$tableBody.html(tbody);
			} else {
				$('.tip').html('没有该编号，请确认！！');
			}
		} else {
			$tableBody.html('');
		}
	});
	$('#sale').on('click', function() {
		var str = '';
		$.each(globalData, function(key, item) {
			if(item.isinsale === '是') {
				str += creatTR(item);
			}
		});
		$tableBody.html(str);
	})



});
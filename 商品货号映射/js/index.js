var createTR = function(obj) {
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

var createTR2 = function(obj) {
	if (!obj) {
		return '';
	}
	var name = obj.name,
		ncnum = obj.ncnum;
	return '<tr>' +
				'<td>' + name +'</td>' +
				'<td>' + ncnum +'</td>' +
			'</tr>';
};
$(document).ready(function() {
	var $tableBody = $('.b2b-nc-tbody');
	$('#b2bsearch').on('click', function() {
		var b2bnum = $('.b2bnum').val();
		var data = globalData[b2bnum];
		$tableBody.html(createTR(data));
		$('.more-display').addClass('hide').removeClass('show');
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
					tbody += createTR(globalData[value + '-' + (i + 1)]);
				}
				$('.tip').html('');
				$tableBody.html(tbody);
			} else {
				$('.tip').html('没有该编号，请确认！！');
			}
		} else {
			$tableBody.html('');
		}
		$('.more-display').addClass('hide').removeClass('show');
	});
	$('#sale').on('click', function() {
		var str = '';
		$.each(globalData, function(key, item) {
			if(item.isinsale === '是') {
				str += createTR(item);
			}
		});
		$tableBody.html(str);
		$('.more-display').addClass('hide').removeClass('show');
	});
	$(document).on('click', '.search', function() {
		var b2bnum = $(this).attr('data-b2bnum');
		var data = globalData[b2bnum];
		var moreTable = $('.more-b2b-nc');
		var str = '';
		$.each(data.ncnums, function(key, value) {
			str += createTR2(data.ncnums[key]);
		});
		$tableBody.html(createTR(data));
		moreTable.html(str);
		$('.more-display').addClass('show').removeClass('hide');
	});





});
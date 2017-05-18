$(function() {
	$('.data ul').mouseover(function() {
		$(this).children('.none').show();
	}).mouseout(function() {
		$('.none').hide();
	})
	$('.language_flag img').click(function(){
		$('.language_flag img').css('height','100%', 'width','100%');
	})
	var sdelay=0;
	function returnTop() {
	 window.scrollBy(0,-100);//Only for y vertical-axis
	 if(document.body.scrollTop>0) { 
	  sdelay= setTimeout('returnTop()',50);
	 }
	}
})
$(function() {
	var vm = new Vue({
		el: '.page',
		data: {
			arr5: [], // server
			allInfo: [], // mock
			match: [],
			item: [],
			lives: [],
		}
	})

	teamList();
	getAllInfo();
	matchList();
	itemList();
	liveList();

	function getAllInfo() {
		$.ajax({
			url: '/getAllInfo',
			dataType: 'json',
			success: function(reply) {
				console.log(reply);
				vm.allInfo = reply;
			}
		});
	}

	/*获取战队列表*/
	function teamList(id, name, country, mmr) {
		$.ajax({
			url: 'http://182.92.236.157:9020/max-api/teamList',
			type: 'GET',
			dataType: 'json',
			success: function(reply) {
				console.log(reply);
				vm.arr5 = reply.data;
			}
		});
	}

	/*获取比赛列表*/
	function matchList() {
		$.ajax({
			url: 'http://182.92.236.157:9020/max-api/matchList',
			type: 'GET',
			dataType: 'json',
			success: function(reply) {
				console.log(reply);
				vm.match = reply.data;
			}
		});
	}

	/*获取比赛列表*/
	function itemList() {
		$.ajax({
			url: 'http://182.92.236.157:9020/max-api/itemList',
			type: 'GET',
			dataType: 'json',
			success: function(reply) {
				console.log(reply);
				vm.item = reply.data;
			}
		});
	}

	/*获取直播列表*/
	function liveList() {
		$.ajax({
			url: 'http://182.92.236.157:9020/max-api/liveList',
			type: 'GET',
			dataType: 'json',
			success: function(reply) {
				console.log(reply);
				vm.lives = reply.data;
			}
		});
	}
})
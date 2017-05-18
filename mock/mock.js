Mock.mock(/\/getAllInfo/, function(options) {
    var a = {
    	item : [
	  	{
	  		"type": 1,
	  		src: 'bg0',
	  		name: '魔导师炽魂',
	  		prize: '15000 M币',
	  	},
	  	{
	  		type: 2,
	  		src: 'bg1',
	  		name: '铭刻 噬魔之王',
	  		prize: '145000 M币',
	  	},
	  	{
	  		type: 1,
	  		src: 'bg2',
	  		name: '脉冲星遗',
	  		prize: '18000 M币',
	  	},
	  	{
	  		type: 1,
	  		src: 'bg3',
	  		name: '倾城之弓',
	  		prize: '14000 M币',
	  	},
	  	{
	  		type: 1,
	  		src: 'bg4',
	  		name: '复仇侍僧面具',
	  		prize: '6300 M币',	
	  	},
	  	{
	  		type: 1,
	  		src: 'bg5',
	  		name: '光穴护腕',
	  		prize: '3500 M币',
	  	},
	  	{
	  		type: 1,
	  		src: 'bg6',
	  		name: '沉睡之惧',
	  		prize: '3200 M币',

	  	},
	  	{
	  		type: 1,
	  		src: 'bg7',
	  		name: '古龙之触长弓',
	  		prize: '3000 M币',
	  	},
	  	{
	  		type: 1,
	  		src: 'bg8',
	  		name: '折翼之愤',
	  		prize: '3000 M币',
	  	},
	  	{
	  		type: 1,
	  		src: 'bg9',
	  		name: '幻影协律',
	  		prize: '18000 M币',
	  	},
	  	{
	  		type: 1,
	  		src: 'bg10',
	  		name: '狂战斧',
	  		prize: '350000 M币',
	  	},
	  	{
	  		type: 2,
	  		src: 'bg11',
	  		name: '铭刻 受刑神杖',
	  		prize: '2500 M币',

	  	},
	  	{
	  		type: 3,
	  		src: 'bg12',
	  		name: '纯正 小飞龙',
	  		prize: '2000 M币',
	  	},
	  	{
	  		type: 1,
	  		src: 'bg13',
	  		name: '龙焰信徒',
	  		prize: '190000 M币',
	  	},
	  	{
	  		type: 3,
	  		src: 'bg14',
	  		name: '纯正 热风袭人',
	  		prize: '3500 M币',
	  	},
	  	],
	  	topic : [
	  	{
	  		src: 'img/39.jpg',
	  	},
	  	{
	  		src: 'img/40.jpg',
	  	},
	  	{
	  		src: 'http://cdn.maxjia.com/@/maxnews/imgs/ac125e69e6bb1c3761482654bd0ab025',
	  	},
	  	],
	  	live : [
	  	{
	  		src: 'livebg0',
	  		biaoti: '冷冷解说LFY vs IG.V',
	  		zhubo: 'PC冷冷',
	  		renshu: '11111',
	  		pintai: 'douyu',
	  	},
	  	{
	  		src: 'livebg1',
	  		biaoti: 'ACE定级赛 VG VS Ehome',
	  		zhubo: 'ACE定级赛',
	  		renshu: '22222',
	  		pintai: 'pandatv',
	  	},
	  	{
	  		src: 'livebg2',
	  		biaoti: '解说ACE定级赛 VG VS Ehome',
	  		zhubo: 'Zippo宝哥',
	  		renshu: '33333',
	  		pintai: 'zhanqi',
	  	},
	  	{
	  		src: 'livebg3',
	  		biaoti: '莉莉直播间',
	  		zhubo: 'lilithxy',
	  		renshu: '44444',
	  		pintai: 'huya',
	  	},
	  	{
	  		src: 'livebg4',
	  		biaoti: 'DC boy解说ACE定级赛',
	  		zhubo: '单车比dc讲道理',
	  		renshu: '55555',
	  		pintai: 'imbatv',
	  	},
	  	{
	  		src: 'livebg5',
	  		biaoti: '看8000分大神表演',
	  		zhubo: 'Burning徐志雷',
	  		renshu: '66666',
	  		pintai: 'huomao',
	  	},
	  	],
	  	match : [
	  	{
	  		src: 'img/19.png',
	  	},
	  	{
	  		src: 'img/20.png',
	  	},
	  	{
	  		src: 'img/21.png',
	  	},
	  	{
	  		src: 'img/22.png',
	  	},
	  	{
	  		src: 'img/23.png',
	  	},
	  	{
	  		src: 'img/24.jpg',
	  	},
	  	],
	  	match_time : [
	  	{
	  		country1: 'img/25.gif',
	  		country2: 'img/30.gif',
	  		country1_name: 'TP.NNd',
	  		country2_name: 'Rave',
	  		src: '数据直播',
	  	},
	  	{
	  		country1: 'img/26.gif',
	  		country2: 'img/31.gif',
	  		country1_name: 'Newbee',
	  		country2_name: 'LGD',
	  		src: '数据直播',
	  	},
	  	{
	  		country1: 'img/27.gif',
	  		country2: 'img/32.gif',
	  		country1_name: 'Empire',
	  		country2_name: 'VP',
	  		src: '数据直播',
	  	},
	  	{
	  		country1: 'img/28.gif',
	  		country2: 'img/33.gif',
	  		country1_name: 'Navi',
	  		country2_name: 'Alliance',
	  		src: '5h 7min',
	  	},
	  	{
	  		country1: 'img/29.gif',
	  		country2: 'img/32.gif',
	  		country1_name: 'NP',
	  		country2_name: 'Faceless',
	  		src: '6h 30min',
	  	},
	  	{
	  		country1: 'img/30.gif',
	  		country2: 'img/31.gif',
	  		country1_name: 'Col',
	  		country2_name: 'C9',
	  		src: '8h 2min',
	  	},
	  	{
	  		country1: 'img/31.gif',
	  		country2: 'img/30.gif',
	  		country1_name: 'TNC',
	  		country2_name: 'Fantic',
	  		src: '10h 20min',
	  	},
	  	{
	  		country1: 'img/32.gif',
	  		country2: 'img/29.gif',
	  		country1_name: 'MVP',
	  		country2_name: 'EG',
	  		src: '20h 10min',
	  	},
	  	{
	  		country1: 'img/33.gif',
	  		country2: 'img/28.gif',
	  		country1_name: 'Liquid',
	  		country2_name: 'OG',
	  		src: '20h 30min',
	  	},
	  	{
	  		country1: 'img/33.gif',
	  		country2: 'img/27.gif',
	  		country1_name: 'CDEC',
	  		country2_name: 'Newbee.Y',
	  		src: '1d 2h 10min',
	  	},
	  	{
	  		country1: 'img/32.gif',
	  		country2: 'img/26.gif',
	  		country1_name: 'LFY',
	  		country2_name: 'IG.V',
	  		src: '2d',
	  	},
	  	{
	  		country1: 'img/31.gif',
	  		country2: 'img/25.gif',
	  		country1_name: 'Ehome',
	  		country2_name: 'Wings',
	  		src: '7d',
	  	},
	  	],
	  	flag : [
	  	{
	  		src: 'img/33.gif',
	  	},
	  	{
	  		src: 'img/27.gif',
	  	},
	  	{
	  		src: 'img/31.gif',
	  	},
	  	{
	  		src: 'img/29.gif',
	  	},
	  	],
    }
    return a;
})
// Mock.mock(/addTeam/, function(options) {
//     var b = {
	  	
//     }
//     return b;
// })
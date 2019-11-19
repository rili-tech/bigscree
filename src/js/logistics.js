// 返回按钮
$('#second_btn').click(function () {
    window.history.go(-1)
})
var data = {
    start: '惠州',
    end: '柳州',
    newTime: '2018-5-12 16:46',
    newAddress: '货物已签收，签收人李生',
    marqueeData: [{
            time: '2018-5-06 22:46',
            address: '模板已出仓'
        },
        {
            time: '2018-5-07 12:46',
            address: '已从柳州发车'
        },
        {
            time: '2018-5-09 20:46',
            address: '车到达北海中转站'
        },
        {
            time: '2018-5-11 22:46',
            address: '到达三亚华润22#施工现场'
        },
        {
            time: '2018-5-12 16:46',
            address: '拉斯科放假啦时代峻峰拉时代峰峻'
        }
    ],
    carData: {
        start: {
            name: '中通',
            type: '中型（6.0吨<GA<=14 吨）',
            carNum: '粤B365632',
            driverName: '徐愈龙'
        },
        end: {
            name: '中通',
            type: '中型（6.0吨<GA<=14 吨）',
            carNum: '粤B365632',
            driverName: '徐愈龙'
        }
    },
    driverData: {
        one: {
            num: '411***************',
            carNum: '256**********',
            tpl: '139****6239'
        },
        two: {
            num: '411***************',
            carNum: '236**********',
            tpl: '135****7596'
        }
    }
}
var wuLiuHtml = template('wuLiuTpl', data)
var carHtml = template('carTpl',data)
var driverHtml = template('driverTpl',data)
document.getElementById('wuLiu').innerHTML = wuLiuHtml
document.getElementById('cartInfo').innerHTML = carHtml
document.getElementById('driverInfo').innerHTML = driverHtml
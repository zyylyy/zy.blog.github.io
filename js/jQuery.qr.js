/*假如我要生成本页的二维码，支持IE浏览器，二维码大小为200x200.背景为白色*/
var url = window.location.href || 'http://caibaojian.com';
$('#wx_qrcode').qrcode({
    size: 200,
    render: "div",
    fill: '#1C1C1C',
    text: url
});

/*.假如我要生成跟开始给的演示中一样的二维码，那我只能选择canvas或者image了*/
//第二个
var url2 = 'http://caibaojian.com';
$('#canvas').qrcode({
    size: 200,
    fill: '#1C1C1C',
    text: url2,
    ecLevel: 'H',//误差校正水平选择最高级
    mode: 2,//label模式选择2
    label: 'caibaojian.com',
    fontname: 'Arial',
    fontcolor: '#458fd2'
});



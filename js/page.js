window.onload = function () {

    var oNav = get.byClass('top-nav', document)[0];

    var navs = get.byTagName('li', oNav);

    var oCon = get.byClass('content', document)[0];

    var aCons = get.byClass('content-frame', oCon);
    var oldindex = 0;
    var oUl = get.byClass('work-img', document)[0];
    var aBef = get.byClass('bef', oUl);
    var aLi = get.byTagName('li', oUl);
    var aA = get.byTagName('a', oUl);

    for (var k = 0; k < aLi.length; k++) {
        aLi[k].index = k;
        aLi[k].onmouseover = function () {
            var thos = this.index;
            startMove(aBef[thos], 'width', aLi[thos].offsetWidth, function () {
                aA[thos].style.display = 'block';
            });
        }
        aLi[k].onmouseout = function () {
            var thos = this.index;
            aA[thos].style.display = 'none';
            startMove(aBef[thos], 'width', 0);
        }
    }
    for (var i = 0; i < navs.length; i++) {

        aCons[i].name = i;
        navs[i].index = i;
        navs[i].onclick = function () {
            var that = this.index;
            /*一开始设置old=1，点击一次后old变为当前的index，如果下一个点击的index小于这个old，就执行
             *top直接变为0，如果下一个点击的index大于这个old，就startmove使得top变为0  * */
            if (that > oldindex) {
                startMove(aCons[that], 'top', 0);
                aCons[that].style.zIndex = '99';
                oldindex = that;
            } else if (that < oldindex) {
                aCons[that].style.top = '0';
                aCons[that].style.zIndex = '99';
                oldindex = that;
            } else {
                startMove(oCon, 'height', 0, function () {
                    startMove(oCon, 'height', 608)
                });
                /*aCons[that].style.zIndex ='99';
                 oldindex = that;*/
            }
            for (var j = 0; j < aCons.length; j++) {
                if (j != that) {
                    startMove(aCons[j], 'top', 608);
                    //aCons[j].style.top = '0';
                }
            }
        }
    }

    //var miao = document.getElementById("secP");
    var sec = get.byId('secP');
    //var miu = document.getElementById("miuP");
    var miu = get.byId('miuP');
    //var shi = document.getElementById("hourP");
    var hou = get.byId('hourP');
    var clock = setInterval(function () {
        var nowDate = new Date();//每次读取当前时间
        var hour = nowDate.getHours();
        var minute = nowDate.getMinutes();
        var second = nowDate.getSeconds();

        var circleHour = hour % 12 * 30;
        hou.style.transform = "rotate(" + circleHour + "deg)";//读取到的时间为24小时制，转换为12小时
        miu.style.transform = "rotate(" + minute * 6 + "deg)";
        sec.style.transform = "rotate(" + second * 6 + "deg)";
    }, 1000);

}/**
 * Created by Administrator on 2017/2/2 0002.
 */

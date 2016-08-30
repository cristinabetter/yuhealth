/**
 * 插入用户会籍等级
 */

$(".vip-type").empty().append(window.localStorage.VipType);

/**
 * 返回首页
 */
$(".back-home-btn").bind( "tap", function () {
    window.location = "yhealthy://previous";
});
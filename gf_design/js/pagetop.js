// JavaScript Document


$(function(){
 
    // 「ページトップへ」の要素を隠す
    $('#pagetop').hide();
    $('#pagetop').css({'position':'fixed','bottom':'10px','right':'10px'});
 
 
    // スクロールした場合
    $(window).scroll(function(){
        // スクロール位置が100を超えた場合
        if ($(this).scrollTop() > 50) {
            // 「ページトップへ」をフェードイン
            $('#pagetop').fadeIn();
        }
        // スクロール位置が100以下の場合
        else {
            // 「ページトップへ」をフェードアウト
            $('#pagetop').fadeOut();
        }
    });
 
    // 「ページトップへ」をクリックした場合
    $('#pagetop').click(function(){
        // ページトップにスクロール
        $('html,body').animate({
            scrollTop: 0
        }, 300);
		
		
        return false;
    });
 
});
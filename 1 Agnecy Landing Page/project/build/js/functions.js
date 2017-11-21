$(document).ready(function () {
	svg4everybody({});
});

$(window).resize(openMenuFix);
$('.sticky-header .menuBtn .icon-menu').click(openMenu);

function openMenu(){
    $menuStat = parseInt($('.sticky-header .menu').css('width'), 10);
    if($menuStat == 0) {
            $('.sticky-header .menu').css({
               width: 160+'px' 
            });
        }
        else{
            $('.sticky-header .menu').css({
               width: '0' 
            });
        } 
}
function openMenuFix(){
     $menuStat = parseInt($('.sticky-header .menu').css('width'), 10);
    if($(window).width() >= 640 && $menuStat <= 150){
        $('.sticky-header .menu').css({
            width: 100+'%' 
        });
    }else if($(window).width() < 640 && $menuStat > 150){
        $('.sticky-header .menu').css({
            width: 0 
        }); 
    }
}

$(function(){
    $(window).scroll(function() {
        $paddingT = parseInt($('header .headerWrap').css('padding-top'), 10);
        if($(this).scrollTop() >= $paddingT) {
            $('header .sticky-header').addClass('sticked');
        }
        else{
            $('header .sticky-header').removeClass('sticked');
        }  
    });
});
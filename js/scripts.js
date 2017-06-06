var distance = 300;
$('i.glyphicon.glyphicon-remove').eq(0).on('click', function(){
  $("#welcome").slideUp();
});
$('i.glyphicon.glyphicon-remove').eq(1).on('click', function(){
  $(".box-right").eq(0).slideUp();
});
$window = $(window);
$window.scroll(function() {
    if ($window.scrollTop() > distance) {
        $('.side-menu').addClass('menu-fixed');
        $('#welcome').addClass('hide');
    }else{
        $('.side-menu').removeClass('menu-fixed');
        $('#welcome').removeClass('hide');
    }
});
$( document ).ready(function() {
  $(".product").on('click',function(){
    var imgf = $('.img-squere',this).attr('src');
    var imgb = imgf.split("&");
    var imgn = imgb[0];
    $('.modal-content img.photo-prod-modal').attr('src',imgn+"&fit=crop&h=200&w=200");
    $('.modal-content .bg').css({'background':'url('+imgn+')','background-size':'cover','background-position':'center'});
    $('.modal-content h6').text($('h6',this).text());
    $('.modal-content p').text($('.short-desc',this).text());
    $('.modal-content p.clear').text($('.short-desc', this).text().repeat(20)); 
    $('.modal-content .author-name').text($('.author-name', this).text());
    $('.modal-content img.author').attr('src',$('.author-avatar', this).text());
    $('.modal-content .tags').text($('button.ng-binding.right',this).text());
});
$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    window.setTimeout(function(){
      $('.pop').trigger('click');
    },1000);
    return false;
  });
});
$(".author").on('mouseover', function(){
  $(".about-author").fadeIn();
});
$(".author").on('mouseleave', function(){
  $(".about-author").fadeOut();
});
if(remote){
  var appfile = remoteapi;
}else{
  var appfile = localapi;
}
document.write(unescape("%3Cscript src='"+appfile+"' type='text/javascript'%3E%3C/script%3E"));

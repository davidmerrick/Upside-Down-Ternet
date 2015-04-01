function rotatePage(){
    $('body').css({"-moz-transform" : "rotate(180deg)"});
    $('body').css({"-webkit-transform" : "rotate(180deg"});
    $('body').css({"transform" : "rotate(180deg"});
    rotateImages();
}

function rotateImages(){
	$('img').css({"transform":"rotate(180deg)"});
}

function scrollToBottom(){
    window.scrollTo(0, document.body.scrollHeight);
}

$('document').ready(function(){
	rotatePage();
    scrollToBottom();
});

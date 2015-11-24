var internsJS = {
    common: {}
};

internsJS.common = (function (window, document) {

    function funkcija() {

        console.log('tu sam');

    }

    return {
        funkcija: funkcija
    };


})(window, document);

$(function () {
    webJS.common.funkcija();
});
var popuni = function (){
	/*slike*/
	$('#avatar-latest-left').css("background-image", "url(static/pics/avatar-1.png)");
	$('#avatar-mid-1').css("background-image", "url(static/pics/avatar-2.png)");
	$('#avatar-mid-2').css("background-image", "url(static/pics/avatar-2.png)");
	$('#avatar-mpt').css("background-image", "url(static/pics/avatar-2.png)");
	$('#top-1-avatar').css("background-image", "url(static/pics/avatar-2.png)");
	$('#top-2-avatar').css("background-image", "url(static/pics/top-2.png)");
	$('#top-3-avatar').css("background-image", "url(static/pics/top-3.png)");
	/*handle*/
	$("#handle-latest-left").html("@USERNAME");
	$("#handle-mid-1").html("@JACKREACHER");
	$("#handle-mid-2").html("@JACKREACHER");
	$("#handle-mpt").html("@JACKREACHER");
	/*post-text*/
	$("#post-text-latest-left").html('<span class="highlight">@Lose</span> eyes get fat shew.  <span class="highlight">#Winter</span> can indeed letter oppose way change <span class="highlight">#tended</span> ');
	$("#post-text-mid-1").html('Resolution <span class="highlight">#possession</span> discovered <span class="highlight">#surrounded</span> advantages has but few add.');
	$("#post-text-mid-2").html('She travelling acceptance men <span class="highlight">#unpleasant</span> <span class="highlight">#her</span> especially entreaties law. <span class="highlight">@Law</span> forth but end any arise chief arose.');
	$("#post-text-mpt").html('Rendered her for put improved concerns his. <span class="highlight">@Ladies</span> bed wisdom theirs mrs men, ');
	/*post-image*/
	$('#post-img-latest-left').attr("src","static/pics/post-img-1.png");
	$('#post-img-mpt').attr("src","static/pics/post-img-2.png");
	/*date*/
	$("#date-latest-left").html("21.11.2015.");
	$("#date-mid-1").html("21.11.2015.");
	$("#date-mid-2").html("21.11.2015.");
	$("#date-mpt").html("21.11.2015.");
	/*headline*/
	$("#headline-mid-1").html("Headline example is here");
	/*top-websites*/
	$("#top-1-name").html("apple.com");
	$("#top-2-name").html("newyorktimes.com");
	$("#top-3-name").html("headstats.com");
	/*top-number*/
	$("#total-ment").html("250");
	$("#top-1-num").html("59");
	$("#top-2-num").html("17");
	$("#top-3-num").html("32");
};

popuni();

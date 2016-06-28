$(document).ready(function(){
if($.browser.chrome) {
   alert("1");
} else if ($.browser.mozilla) {
   alert("2");
} else if ($.browser.msie) {
   alert("3");
}
/*$(".oji").click(function(){
 var offset = $( this ).offset();
  event.stopPropagation();
  $( "#result" ).text( this.tagName +
    " coords ( " + offset.left + ", " + offset.top + " )" );*/


});


/*--------------------*/
  var imgs = ["http://www.easyjet.com/en/holidays/shared/images/guides/poland/krakow/krakow-city.jpg",
            "http://wallpapersgalery.com/wp-content/uploads/2015/06/free-nature-wallpaper-downloads.jpg",
            "http://www.justacote.com/photos_entreprises/barrage-vauban-strasbourg-1357767426.jpg"]
    var cnt = imgs.length;

    $(function() {
        setInterval(Slider, 5000);
    });

    function Slider() {
    $("#imageSlide").show("fast", function() {
       $(this).attr("src", imgs[(imgs.length++) % cnt]).show();
    });
    }
/*---------------------------------*/
$(".btn_close").click(function(){
$(".popup_block").hide();
$(".oji").css({"background-color": "#49498e"});
$(".oji a").css({"color": "#EEE"});
});
 /*------------------------------*/
/*c'etait carform here
/*-------------------------------*/

    $(".oji").mouseover(function(){
$(".popup_block").hide (); 
var link_name = "#" + $(this).attr("name");


$(link_name).show (); 
$(link_name).mouseenter(function() { }).mouseleave(function() {
$(link_name).hide (); 
});
}, function() {
alert("display out");
$( link_name ).css({"display": "none"});
    $( link_name ).hide();

//.css({"background-color": "#555;"});

//$(link_name).css('display') == 'show';

//$(this).css({"background-color": "orange"});
//var link_name = "#" + $(this).attr("name");
// $("p").toggle();
// $("#p1").mouseleave(function(){
//$(".oji a").css({"color": "#221"}); 

   
    });

    $(liTTTnk_name).mouseout(function(){
//$(".oji").css({"background-color": "red"});

         $( link_name ).hide(2000);  
    });


//$(".oji").css({"background-color": "#49498e"});
//$(".oji a").css({"color": "red"});

/*-----------------------------------*/


//Lorsque vous cliquez sur un lien de la classe poplight et que le href commence par #
$('a.poplight[href^=#]').click(function() {
	alert("bonjour");
	var popID = $(this).attr('rel'); //Trouver la pop-up correspondante
	var popURL = $(this).attr('href'); //Retrouver la largeur dans le href

	//Récupérer les variables depuis le lien
	var query= popURL.split('?');
	var dim= query[1].split('&amp;');
	var popWidth = dim[0].split('=')[1]; //La première valeur du lien

	//Faire apparaitre la pop-up et ajouter le bouton de fermeture
	$('#' + popID).fadeIn().css({
		'width': Number(popWidth)
	})
	.prepend('<a href="#" class="close"><img src="close_pop.png" class="btn_hun" title="Fermer" alt="Fermer" /></a>');

	//Récupération du margin, qui permettra de centrer la fenêtre - on ajuste de 80px en conformité avec le CSS
	var popMargTop = ($('#' + popID).height() + 80) / 2;
	var popMargLeft = ($('#' + popID).width() + 80) / 2;

	//On affecte le margin
	$('#' + popID).css({
		'margin-top' : -popMargTop,
		'margin-left' : -popMargLeft
	});

	//Effet fade-in du fond opaque
	$('body').append('<div id="fade"></div>'); //Ajout du fond opaque noir
	//Apparition du fond - .css({'filter' : 'alpha(opacity=80)'}) pour corriger les bogues de IE
	$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();

	return false;
});

//Fermeture de la pop-up et du fond
$('a.close, #fade').live('click', function() { //Au clic sur le bouton ou sur le calque...
	$('#fade , .popup_medium').fadeOut(function() {
		$('#fade, a.close').remove();  //...ils disparaissent ensemble
	});
	return false;

/*------------------------------------------------------*/

});
function breakoutwinmenu(){

$(".popup_block").hide (); 
}




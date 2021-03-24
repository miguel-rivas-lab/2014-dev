var lang = "eng";
var toggleLang =
{
	"spa" : "eng",
	"eng" : "spa"
}

$(document).ready(function(){
	$("span:lang(" + toggleLang[lang] + ")").hide(0);
	$('#lang_btn').click(function(){
		lang = toggleLang[lang];
		$("span:lang(" + toggleLang[lang] + ")").hide(0);
		$("span:lang(" + lang + ")").show(0);
	});
});
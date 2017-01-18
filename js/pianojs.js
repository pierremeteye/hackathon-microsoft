var nombre = Math.floor((Math.random() * 60) + 1);
var score = 1;
var score1 = 1;

// Note au chargement de la page :

var son = $(".mysoundclip")[nombre];
$("#button").click(function() {
    son.play();
})

// Bouton nouveau son de note :

$("#reset").click(function(){
	var nombre2 = Math.floor((Math.random() * 60) + 1);

	son = $(".mysoundclip")[nombre2];
})




	

	


// Notes

var audiodo = $(".mysoundclip")[0];
$(".do").click(function() {

	if (audiodo === son) {
		audiodo.play();
		good.textContent = score++ + 1;
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiodo.play();
		console.log("bad"); fail.textContent = score1++;
	}
	
})

var audiododiese = $(".mysoundclip")[1];
$(".dodiese").click(function() {
	if (audiododiese === son) {
		audiododiese.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiododiese.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiore = $(".mysoundclip")[2];
$(".re").click(function() {

	if (audiore === son) {
    	audiore.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiore.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiorediese = $(".mysoundclip")[3];
$(".rediese").click(function() {
	if (audiorediese === son) {
    audiorediese.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiorediese.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiomi = $(".mysoundclip")[4];
$(".mi").click(function() {
	if (audiomi === son) {
    audiomi.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiomi.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiofa = $(".mysoundclip")[5];
$(".fa").click(function() {
	if (audiofa === son) {
    audiofa.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiofa.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiofadiese = $(".mysoundclip")[6];
$(".fadiese").click(function() {
	if (audiofadiese === son) {
    audiofadiese.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiofadiese.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiosol = $(".mysoundclip")[7];
$(".sol").click(function() {
	if (audiosol === son) {
    audiosol.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiosol.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiosoldiese = $(".mysoundclip")[8];
$(".soldiese").click(function() {
    if (audiosoldiese === son) {
    audiosoldiese.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiosoldiese.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiola = $(".mysoundclip")[9];
$(".la").click(function() {
     if (audiola === son) {
    audiola.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiola.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audioladiese = $(".mysoundclip")[10];
$(".ladiese").click(function() {
    if (audioladiese === son) {
    audioladiese.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audioladiese.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiosi = $(".mysoundclip")[11];
$(".si").click(function() {
      if (audiosi === son) {
    audiosi.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiosi.play();
		console.log("bad"); fail.textContent = score1++;
	}
})


//Deuxième octave

var audiodo2 = $(".mysoundclip")[12];
$(".dofinal").click(function() {
      if (audiodo2 === son) {
    audiodo2.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiodo2.play();
		console.log("bad"); fail.textContent = score1++;
	}

})

var audiododiese2 = $(".mysoundclip")[1];
$("#dodiese2").click(function() {
	if (audiododiese2 === son) {
		audiododiese2.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiododiese2.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

// var audiodo = $(".mysoundclip")[1];
// $("#do").click(function() {

// 	if (audiodo === son) {
// 		audiodo.play();
// 		console.log("Good"); good.textContent = score++;
// 	}
// 	else {
// 		audiodo.play();
// 		console.log("bad"); fail.textContent = score1++;
// 	}
    
// })

var audiore2 = $(".mysoundclip")[15];
$("#re2").click(function() {

	if (audiore2 === son) {
    	audiore2.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiore2.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiorediese2 = $(".mysoundclip")[16];
$("#rediese2").click(function() {
	if (audiorediese2 === son) {
    audiorediese2.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiorediese2.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiomi2 = $(".mysoundclip")[17];
$("#mi2").click(function() {
	if (audiomi2 === son) {
    audiomi2.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiomi2.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiofa2 = $(".mysoundclip")[18];
$("#fa2").click(function() {
	if (audiofa2 === son) {
    audiofa2.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiofa2.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiofadiese2 = $(".mysoundclip")[19];
$("#fadiese2").click(function() {
	if (audiofadiese2 === son) {
    audiofadiese2.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiofadiese2.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiosol2 = $(".mysoundclip")[20];
$("#sol2").click(function() {
	if (audiosol2 === son) {
    audiosol2.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiosol2.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiosoldiese2 = $(".mysoundclip")[21];
$("#soldiese2").click(function() {
    if (audiosoldiese2 === son) {
    audiosoldiese2.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiosoldiese2.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiola2 = $(".mysoundclip")[22];
$("#la2").click(function() {
     if (audiola2 === son) {
    audiola2.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiola2.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audioladiese2 = $(".mysoundclip")[23];
$("#ladiese2").click(function() {
    if (audioladiese2 === son) {
    audioladiese2.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audioladiese2.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiosi2 = $(".mysoundclip")[24];
$("#si2").click(function() {
      if (audiosi2 === son) {
    audiosi2.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiosi2.play();
		console.log("bad"); fail.textContent = score1++;
	}
})


//// Troisième octave

var audiodo3 = $(".mysoundclip")[25];
$("#do3").click(function() {
      if (audiodo3 === son) {
    audiodo3.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiodo3.play();
		console.log("bad"); fail.textContent = score1++;
	}

})

var audiododiese3 = $(".mysoundclip")[26];
$("#dodiese3").click(function() {
	if (audiododiese3 === son) {
		audiododiese3.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiododiese3.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiore3 = $(".mysoundclip")[27];
$("#re3").click(function() {

	if (audiore3 === son) {
    	audiore3.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiore3.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiorediese3 = $(".mysoundclip")[28];
$("#rediese3").click(function() {
	if (audiorediese3 === son) {
    audiorediese3.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiorediese3.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiomi3 = $(".mysoundclip")[29];
$("#mi3").click(function() {
	if (audiomi3 === son) {
    audiomi3.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiomi3.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiofa3 = $(".mysoundclip")[30];
$("#fa3").click(function() {
	if (audiofa3 === son) {
    audiofa3.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiofa3.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiofadiese3 = $(".mysoundclip")[31];
$("#fadiese3").click(function() {
	if (audiofadiese3 === son) {
    audiofadiese3.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiofadiese3.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiosol3 = $(".mysoundclip")[32];
$("#sol3").click(function() {
	if (audiosol3 === son) {
    audiosol3.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiosol3.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiosoldiese3 = $(".mysoundclip")[33];
$("#soldiese3").click(function() {
    if (audiosoldiese3 === son) {
    audiosoldiese3.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiosoldiese3.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiola3 = $(".mysoundclip")[34];
$("#la3").click(function() {
     if (audiola3 === son) {
    audiola3.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiola3.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audioladiese3 = $(".mysoundclip")[35];
$("#ladiese3").click(function() {
    if (audioladiese3 === son) {
    audioladiese3.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audioladiese3.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiosi3 = $(".mysoundclip")[36];
$("#si3").click(function() {
      if (audiosi3 === son) {
    audiosi3.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiosi3.play();
		console.log("bad"); fail.textContent = score1++;
	}
})


//Quatrième octave


var audiodo4 = $(".mysoundclip")[37];
$("#do4").click(function() {
      if (audiodo4 === son) {
    audiodo4.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiodo4.play();
		console.log("bad"); fail.textContent = score1++;
	}

})

var audiododiese4 = $(".mysoundclip")[38];
$("#dodiese4").click(function() {
	if (audiododiese4 === son) {
		audiododiese4.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiododiese4.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiore4 = $(".mysoundclip")[39];
$("#re4").click(function() {

	if (audiore4 === son) {
    	audiore4.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiore4.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiorediese4 = $(".mysoundclip")[40];
$("#rediese4").click(function() {
	if (audiorediese4 === son) {
    audiorediese4.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiorediese4.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiomi4 = $(".mysoundclip")[41];
$("#mi4").click(function() {
	if (audiomi4 === son) {
    audiomi4.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiomi4.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiofa4 = $(".mysoundclip")[42];
$("#fa4").click(function() {
	if (audiofa4 === son) {
    audiofa4.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiofa4.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiofadiese4 = $(".mysoundclip")[43];
$("#fadiese4").click(function() {
	if (audiofadiese4 === son) {
    audiofadiese4.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiofadiese4.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiosol4 = $(".mysoundclip")[44];
$("#sol4").click(function() {
	if (audiosol4 === son) {
    audiosol4.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiosol4.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiosoldiese4 = $(".mysoundclip")[45];
$("#soldiese4").click(function() {
    if (audiosoldiese4 === son) {
    audiosoldiese4.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiosoldiese4.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiola4 = $(".mysoundclip")[46];
$("#la4").click(function() {
     if (audiola4 === son) {
    audiola4.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiola4.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audioladiese4 = $(".mysoundclip")[47];
$("#ladiese4").click(function() {
    if (audioladiese4 === son) {
    audioladiese4.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audioladiese4.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiosi4 = $(".mysoundclip")[48];
$("#si4").click(function() {
      if (audiosi4 === son) {
    audiosi4.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiosi4.play();
		console.log("bad"); fail.textContent = score1++;
	}
})


// Cinquième octave


var audiodo5 = $(".mysoundclip")[49];
$("#do5").click(function() {
      if (audiodo5 === son) {
    audiodo5.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiodo5.play();
		console.log("bad"); fail.textContent = score1++;
	}

})

var audiododiese5 = $(".mysoundclip")[50];
$("#dodiese5").click(function() {
	if (audiododiese5 === son) {
		audiododiese5.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiododiese5.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiore5 = $(".mysoundclip")[51];
$("#re5").click(function() {

	if (audiore5 === son) {
    	audiore5.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiore5.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiorediese5 = $(".mysoundclip")[52];
$("#rediese5").click(function() {
	if (audiorediese5 === son) {
    audiorediese5.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiorediese5.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiomi5 = $(".mysoundclip")[53];
$("#mi5").click(function() {
	if (audiomi5 === son) {
    audiomi5.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiomi5.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiofa5 = $(".mysoundclip")[54];
$("#fa5").click(function() {
	if (audiofa5 === son) {
    audiofa5.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiofa5.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiofadiese5 = $(".mysoundclip")[55];
$("#fadiese5").click(function() {
	if (audiofadiese5 === son) {
    audiofadiese5.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiofadiese5.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiosol5 = $(".mysoundclip")[56];
$("#sol5").click(function() {
	if (audiosol5 === son) {
    audiosol5.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiosol5.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiosoldiese5 = $(".mysoundclip")[57];
$("#soldiese5").click(function() {
    if (audiosoldiese5 === son) {
    audiosoldiese5.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiosoldiese5.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiola5 = $(".mysoundclip")[58];
$("#la5").click(function() {
     if (audiola5 === son) {
    audiola5.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiola5.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audioladiese5 = $(".mysoundclip")[59];
$("#ladiese5").click(function() {
    if (audioladiese5 === son) {
    audioladiese5.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audioladiese5.play();
		console.log("bad"); fail.textContent = score1++;
	}
})

var audiosi5 = $(".mysoundclip")[60];
$("#si5").click(function() {
      if (audiosi5 === son) {
    audiosi5.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiosi5.play();
		console.log("bad"); fail.textContent = score1++;
	}
})


// Sixième octave

var audiodo6 = $(".mysoundclip")[60];
$("#do6").click(function() {
      if (audiodo6 === son) {
    audiodo6.play();
		console.log("Good"); good.textContent = score++;
	}
	else {
		audiodo6.play();
		console.log("bad"); fail.textContent = score1++;
	}
})
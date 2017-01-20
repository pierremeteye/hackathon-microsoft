// Notes



var audiodo = $(".mysoundclip")[0];
$(".do").click(function() {
		audiodo.play();
})

var audiododiese = $(".mysoundclip")[1];
$(".dodiese").click(function() {
		audiododiese.play();
})

var audiore = $(".mysoundclip")[2];
$(".re").click(function() {
	audiore.play();
})

var audiorediese = $(".mysoundclip")[3];
$(".rediese").click(function() {
		audiorediese.play();
})

var audiomi = $(".mysoundclip")[4];
$(".mi").click(function() {
		audiomi.play();
})

var audiofa = $(".mysoundclip")[5];
$(".fa").click(function() {
			audiofa.play();
})

var audiofadiese = $(".mysoundclip")[6];
$(".fadiese").click(function() {
			audiofadiese.play();
})

var audiosol = $(".mysoundclip")[7];
$(".sol").click(function() {
			audiosol.play();

})


var audiosoldiese = $(".mysoundclip")[8];
$(".soldiese").click(function() {
    		audiosoldiese.play();

})


var audiola = $(".mysoundclip")[9];
$(".la").click(function() {
     		audiola.play();

})


var audioladiese = $(".mysoundclip")[10];
$(".ladiese").click(function() {
    		audioladiese.play();

})


var audiosi = $(".mysoundclip")[11];
$(".si").click(function() {
      		audiosi.play();

})


var audiodofinal = $(".mysoundclip")[12];
$(".dofinal").click(function() {
      		audiodofinal.play();
      		console.log(audiodofinal);

})

			var clickCounterDo =0;
			var clickCounterFa =0;
			var clickCounterMi =0;
			var clickCounterRe =0;
			var clickCounterLaDiese	 =0;

	$("button").click(function(){

		$("button").click(function(event) {
			location.reload();
		});
	
		$(".do").css('fill', '#FFB6C1');
	
			$(".do").click(function(event) {

					clickCounterDo++;

						if (clickCounterDo == 1) {
							console.log("test")
							$(".do").css('fill', '#FFFFF7');
							setTimeout(function(){ $(".do").css('fill', '#FFB6C1'); }, 500);
						} else if (clickCounterDo == 2) {
							$(".do").css('fill', '#FFFFF7');
							$(".re").css('fill', '#FFB6C1'); 
							console.log("caca")

							$('.re').click(function(event) {
								clickCounterRe++;

								if (clickCounterRe == 1) {
									console.log(clickCounterRe)
									$(".re").css('fill', '#FFFFF7'); 
									$(".do").css('fill', '#FFB6C1');
								} else  {
									console.log('good')
								}

							});
						} else if (clickCounterDo == 3) {
							$(".do").css('fill', '#FFFFF7');
							$(".fa").css('fill', '#FFB6C1'); 

							$('.fa').click(function(event) {
								clickCounterFa++;
								if (clickCounterFa == 1) {
									$(".fa").css('fill', '#FFFFF7'); 
									$(".mi").css('fill', '#FFB6C1');
								} else if (clickCounterFa == 2) {
									$(".fa").css('fill', '#FFFFF7'); 
									$(".do").css('fill', '#FFB6C1');
									console.log('FA' + clickCounterFa)
								} else {
									console.log('FA' + clickCounterFa)
								}
								
							});

							$('.mi').click(function(event) {
								clickCounterMi++;

								if (clickCounterMi == 1) {
									$(".mi").css('fill', '#FFFFF7'); 
									$(".do").css('fill', '#FFB6C1');
								} else {
									$(".mi").css('fill', '#FFFFF7'); 
									$(".re").css('fill', '#FFB6C1');
								}
								
							});


						} else if (clickCounterDo == 4) {
							$(".do").css('fill', '#FFFFF7');
							setTimeout(function(){ $(".do").css('fill', '#FFB6C1'); }, 500);
						} else if (clickCounterDo == 5) {
							$(".do").css('fill', '#FFFFF7');
							$(".re").css('fill', '#FFB6C1');

							$('.re').click(function(event) {

								

								if (clickCounterRe == 3) {
									console.log(clickCounterRe)
									$(".re").css('fill', '#FFFFF7'); 
									$(".ladiese").css('fill', '#FFB6C1');

										


								} else {
									$(".re").css('fill', '#FFFFF7'); 
								$(".do").css('fill', '#FFB6C1');
								}
							});
						} else if (clickCounterDo == 6) {
							$(".do").css('fill', '#FFFFF7'); 
							$(".sol").css('fill', '#FFB6C1');

							$('.sol').click(function(event) {
								$(".sol").css('fill', '#FFFFF7');
								$(".fa").css('fill', '#FFB6C1');
							});

							$('.fa').click(function(event) {
								console.log(clickCounterFa)

								 if (clickCounterFa == 3) {
									$(".fa").css('fill', '#FFFFF7'); 
									$(".mi").css('fill', '#FFB6C1');
								 } else if (clickCounterFa == 4) {
								 	$(".fa").css('fill', '#FFFFF7'); 
									$(".sol").css('fill', '#FFB6C1');
								 } else if (clickCounterFa == 5) {
								 	swal("Good job!", "Allez, au plaisir.", "success")
								 }

								  else {
									console.log('Test FA')
								}
							});
						} else if (clickCounterDo == 7) {
							$(".do").css('fill', '#FFFFF7'); 
							setTimeout(function(){ $(".do").css('fill', '#FFB6C1'); }, 500);
						} else if (clickCounterDo == 8) {
							$(".do").css('fill', '#FFFFF7');
							$(".dofinal").css('fill', '#FFB6C1');

							$(".dofinal").click(function(event) {
								$(".dofinal").css('fill', '#FFFFF7');
								$(".la").css('fill', '#FFB6C1');
							});

							$(".la").click(function(event) {
								$(".la").css('fill', '#FFFFF7');
								$(".fa").css('fill', '#FFB6C1');
							});

							$(".ladiese").click(function(event) {
											clickCounterLaDiese++;

											if (clickCounterLaDiese == 2) {
												$(".ladiese").css('fill', '#4B4B4B');
												$(".la").css('fill', '#FFB6C1');
											} else {
												$(".ladiese").css('fill', '#4B4B4B');
												setTimeout(function(){ $(".ladiese").css('fill', '#FFB6C1'); }, 500);
											}
											
											

											
										});
						} else {

							console.log('else')
						}


						
						

						

					});

			});


			
				


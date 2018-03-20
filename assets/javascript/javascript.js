

//on clicks to register character select and move character to the Hero div, Move Remaining Characters to Enemies list

$("body").on("click", "#Rey", function() {

	alert("you've selected Rey");
	$("#Hero").html("<div class='col-md-4'>Rey<br><img class='img-responsive' src='assets/images/rey.png'><br><span id='heroHP'>120</span>HP</div>");
	$("#villian1").html("<div id='enemyFinn' class='col-md-3'>Finn<br><img class='enemyImage' src='assets/images/finn.png'><br>100HP</div>");
	$("#villian2").html("<div id='enemyKylo' class='col-md-3'>Kylo Ren<br><img class='enemyImage' src='assets/images/kylo.png'><br>180HP</div>");
	$("#villian3").html("<div id='enemyPhasma' class='col-md-3'>Captain Phasma<br><img class='enemyImage' src='assets/images/phasma.png'><br>150HP</div>");
	$("#characterSelect").html("<div class='blankRow'></div>");

})

.on("click", "#Finn", function() {

	alert("you've selected Finn");
	$("#Hero").html("<div class='col-md-4'>Finn<br><img class='img-responsive' src='assets/images/finn.png'><br><span id='heroHP'>100</span>HP</div>");
	$("#villian4").html("<div id='enemyRey' class='col-md-3'>Rey<br><img class='enemyImage' src='assets/images/rey.png'><br>120HP</div>");
	$("#villian2").html("<div id='enemyKylo' class='col-md-3'>Kylo Ren<br><img class='enemyImage' src='assets/images/kylo.png'><br>180HP</div>");
	$("#villian3").html("<div id='enemyPhasma' class='col-md-3'>Captain Phasma<br><img class='enemyImage' src='assets/images/phasma.png'><br>150HP</div>");
	$("#characterSelect").html("<div class='blankRow'></div>");
})

.on("click", "#Kylo", function() {

	alert("you've selected Kylo Ren");
	$("#Hero").html("<div class='col-md-4'>Kylo Ren<br><img class='img-responsive' src='assets/images/kylo.png'><br><span id='heroHP'>180</span>HP</div>");
	$("#villian1").html("<div id='enemyFinn' class='col-md-3'>Finn<br><img class='enemyImage' src='assets/images/finn.png'><br>100HP</div>");
	$("#villian4").html("<div id='enemyRey' class='col-md-3'>Rey<br><img class='enemyImage' src='assets/images/rey.png'><br>120HP</div>");
	$("#villian3").html("<div id='enemyPhasma' class='col-md-3'>Captain Phasma<br><img class='enemyImage' src='assets/images/phasma.png'><br>150HP</div>");
	$("#characterSelect").html("<div class='blankRow'></div>");
})

.on("click", "#Phasma", function() {

	alert("you've selected Captain Phasma");
	$("#Hero").html("<div class='col-md-4'>Captain Phasma<br><img class='img-responsive' src='assets/images/phasma.png'><br><span id='heroHP'>150</span>HP</div>");
	$("#villian1").html("<div id='enemyFinn' class='col-md-3'>Finn<br><img class='enemyImage' src='assets/images/finn.png'><br>100HP</div>");
	$("#villian2").html("<div id='enemyKylo' class='col-md-3'>Kylo Ren<br><img class='enemyImage' src='assets/images/kylo.png'><br>180HP</div>");
	$("#villian4").html("<div id='enemyRey' class='col-md-3'>Rey<br><img class='enemyImage' src='assets/images/rey.png'><br>120HP</div>");
	$("#characterSelect").html("<div class='blankRow'></div>");
})

// on clicks to send selected enemy to defender slot, also removes him from list of enemies

.on("click", "#enemyKylo", function() {

	alert("Prepare to battle Kylo Ren");
	$("#defender").html("<div class='col-md-4'>Kylo Ren<br><img class='img-responsive' src='assets/images/kylo.png'><br><span id='villianHP'>180</span>HP</div>");
	$("#villian2").html("<div></div>");

})

.on("click", "#enemyRey", function() {

	alert("Prepare to battle Rey");
	$("#defender").html("<div class='col-md-4'>Rey<br><img class='img-responsive' src='assets/images/rey.png'><br><span id='villianHP value='120'>120</span>HP</div>");
	$("#villian4").html("<div></div>");
	// var villianHP = 120;
	$("#attackBtn").click(function(){
		for(villianHP = 120; villianHP > 0; villianHP = villianHP - 10);
		console.log(villianHP);
	}) 
})

.on("click", "#enemyFinn", function() {

	alert("Prepare to battle Finn");
	$("#defender").html("<div class='col-md-4'>Finn<br><img class='img-responsive' src='assets/images/finn.png'><br><span id='villianHP'>100</span>HP</div>");
	$("#villian1").html("<div></div>");
})

.on("click", "#enemyPhasma", function() {

	alert("Prepare to battle Captain Phasma");
	$("#defender").html("<div class='col-md-4'>Captain Phasma<br><img class='img-responsive' src='assets/images/phasma.png'><br><span id='villianHP'>150</span>HP</div>");
	$("#villian3").html("<div></div>");
})




	$("#attackBtn").on("click", function() {
		"#villianHP" - 10;

	});
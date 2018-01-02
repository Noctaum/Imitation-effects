$("#firstBut").bind("click", builder);

//Защита от ввода букв и дробных чисел
$(document).on("keyup", ".number1", function() {
this.value = this.value.replace(/[^0-9]/g, '');
});

//Защиты от ввода букв
$(document).on("keyup", ".number2", function() {
this.value = this.value.replace(/,/g , ".")
						.replace(/[^\d.]*/g, '')
                       .replace(/([.])[.]+/g, '$1')
                       .replace(/^[^\d]*(\d+([.]\d{0,5})?).*$/g, '$1');
});




$(document).on("change", ".classI0", function() {
	var a = this.value;
	$(".classI0").val(a);
});
$(document).on("change", ".classI1", function() {
	var a = this.value;
	$(".classI1").val(a);
});
$(document).on("change", ".classI2", function() {
	var a = this.value;
	$(".classI2").val(a);
});
$(document).on("change", ".classI3", function() {
	var a = this.value;
	$(".classI3").val(a);
});
$(document).on("change", ".classI4", function() {
	var a = this.value;
	$(".classI4").val(a);
});
$(document).on("change", ".classI5", function() {
	var a = this.value;
	$(".classI5").val(a);
});
$(document).on("change", ".classI6", function() {
	var a = this.value;
	$(".classI6").val(a);
});


$(document).on("change", ".classT0", function() {
	var a = this.value;
	$(".classT0").val(a);
});
$(document).on("change", ".classT1", function() {
	var a = this.value;
	$(".classT1").val(a);
});
$(document).on("change", ".classT2", function() {
	var a = this.value;
	$(".classT2").val(a);
});
$(document).on("change", ".classT3", function() {
	var a = this.value;
	$(".classT3").val(a);
});
$(document).on("change", ".classT4", function() {
	var a = this.value;
	$(".classT4").val(a);
});
$(document).on("change", ".classT5", function() {
	var a = this.value;
	$(".classT5").val(a);
});
$(document).on("change", ".classT6", function() {
	var a = this.value;
	$(".classT6").val(a);
});


var rows,rowsForT,rowsForI;
var collectorI = new Object();
var collectorT = new Object();
var tooglerner=0;
var toogleCheck=0;
var justForShedule=0;

//Постройка таблицы
 function builder (){

 	$("#firstFirst").empty();
	$("#second").empty();
 	$("#third").empty();
 	$('#fourthZero').empty();
    $('#fourthFirst').empty();
    $('#fourthSecond').empty();
 	$("#fifth").empty();
 	$("#second").hide();

	rows = $("#rows").val();
	if(rows === ""){
		alert("Введите значение n+m!");
		return;
	}
	rows = (rows/2).toFixed(0);

	rowsForI = $("#rowsForI").val();
	if(rowsForI === ""){
		alert("Введите значение F!");
		return;
	}
	rowsForT = $("#rowsForT").val();
	if(rowsForT === ""){
		alert("Введите значение t!");
		return;
	}
 	var ij = 0;
 	var str = "n";
 	$('#firstFirst').append('<h4>Параметры I и t достаточно ввести 1 раз.</h4>');
 	for(var kolVoTable = 0; kolVoTable <((+rows)*2); kolVoTable++){
 		if (kolVoTable == (+rows)) {ij = 0; str="m"};

///////////
 		$('#firstFirst').append('<p>Зависимости параметра Р ('+(ij+1)+')-го экземпляра выборки '+str+' от имитационного фактора F</p>');
		var table = $('<table></table>');
		var thead = $('<thead></thead>');
		var tbody = $('<tbody></tbody>');
		for(var i=0; i<(+rowsForI); i++){
			if(i === 0) var rowHead = $('<tr></tr>');
		    var row = $('<tr></tr>');
		    for(var j=0; j<2; j++){
		    	if(i === 0) {
		    		switch (j){
		    			case 0:
			    			var colHead = $('<td><h5>Значение F</h5></td>');
			    			rowHead.append(colHead);
			    			break;
			    		case 1:
			    			var colHead = $('<td><h5>Значение P'+(ij+1)+'</h5></td>');
			    			rowHead.append(colHead);
			    			break;
		    		}
		    	}
		    	switch (j){
		    		case 0:
			    		var col = $('<td><label class="tableLable"><input class="number2 tableInput classI'+i+'"></label></td>');
		    			row.append(col);
			    		break;
			    	case 1:
			    		var col = $('<td><label class="tableLable"><input class="number2 tableInput col'+(ij*2)+' row'+i+' table'+str+'"></label></td>');
		    			row.append(col);
			    		break;
		    	}
		    }
		    tbody.append(row);
		}
		thead.append(rowHead);
		table.append(thead);
		table.append(tbody);
	 	$('#firstFirst').append(table); 	
////////////
 		$('#firstFirst').append('<p>Зависимости параметра Р ('+(ij+1)+')-го экземпляра выборки '+str+' от имитационного фактора t</p>');
		var table = $('<table></table>');
		var thead = $('<thead></thead>');
		var tbody = $('<tbody></tbody>');
		for(var i=0; i<(+rowsForT); i++){
			if(i === 0) var rowHead = $('<tr></tr>');
		    var row = $('<tr></tr>');
		    for(var j=0; j<2; j++){
		    	if(i === 0) {
		    		switch (j){
			    		case 0:
			    			var colHead = $('<td><h5>Значение t</h5></td>');
			    			rowHead.append(colHead);
			    			break;
			    		case 1:
			    			var colHead = $('<td><h5>Значение P'+(ij+1)+'</h5></td>');
			    			rowHead.append(colHead);
			    			break;
		    		}
		    	}
		    	switch (j){
			    	case 0:
			    		var col = $('<td><label class="tableLable"><input class="number2 tableInput classT'+i+'"></label></td>');
		    			row.append(col);
			    		break;
			    	case 1:
			    		var col = $('<td><label class="tableLable"><input class="number2 tableInput col'+(ij*2+1)+' row'+i+' table'+str+'"></label></td>');
		    			row.append(col);
			    		break;
		    	}
		    }
		    tbody.append(row);
		}
		thead.append(rowHead);
		table.append(thead);
		table.append(tbody);
	 	$('#firstFirst').append(table); 	
	 	ij++;
	}

	$('#firstFirst').append('<div class="row"><button id="firstFirstBut" type="button" class="btn btn-success butForAll"><i class="fa fa-cogs" aria-hidden="true"></i> Ввод</button></div>');
}

$(document).on("click", "#firstFirstBut", firstFirstFUN);

var valueI = new Object();
var valueT = new Object();

var valueFornN = new Object();
var valueFormM = new Object();

var summPnI = new Object();
var summPnT = new Object();

function firstFirstFUN(){

	$("#second").empty();
 	$("#third").empty();
 	$('#fourthZero').empty();
    $('#fourthFirst').empty();
    $('#fourthSecond').empty();
 	$("#fifth").empty();

	var air1,air2;
	for (var i = 0; i<(+rowsForI); i++){
		air1 = ".classI"+i;
		valueI[i] = $(air1).val();
		if(valueI[i] === ""){
			alert("Проверьте ввод значений F");
			return;
		}
	}
		

	for (var i = 0; i<(+rowsForT); i++){
		air2 = ".classT"+i;
		valueT[i] = $(air2).val();
		if(valueT[i] === ""){
			alert("Проверьте ввод значений t");
			return;
		}
	}

/////////

	air1 = ".tablen";
	air2 = ".tablem";
	var air3, air4, air5, air6;
	for (i =0; i<(+rows);i++){
		
		valueFornN[i] = new Object();
		valueFormM[i] = new Object();
		
		valueFornN[i]['PI'] = new Object();
		valueFormM[i]['PI'] = new Object();
		valueFornN[i]['PT'] = new Object();
		valueFormM[i]['PT'] = new Object();
		air1 = ".tablen";
		air2 = ".tablem";
	}
		for (var j = 0; j<(((+rows)*2)); j++){
			air3 = ".col"+j;
			for (var q = 0; q<(+rowsForI); q++){
				air4 = ".row"+q;
				air5 = air1+air3+air4;
				air6 = air2+air3+air4;
				if(j % 2 === 0){
					valueFornN[j/2]['PI'][q] = $(air5).val();
					if(valueFornN[j/2]['PI'][q] === ""){
						alert("Проверьте ввод значений P для F в обучающей выборке!");
						return;
					}
					valueFormM[j/2]['PI'][q] = $(air6).val();
					if(valueFormM[j/2]['PI'][q] === ""){
						alert("Проверьте ввод значений P для F в контрольной выборке!");
						return;
					}
				}
			}
			////////////
			for (var q = 0; q<(+rowsForT); q++){
				air4 = ".row"+q;
				air5 = air1+air3+air4;
				air6 = air2+air3+air4;
				if (j % 2 !== 0) {
					valueFornN[(j-1)/2]['PT'][q] = $(air5).val();
					if(valueFornN[(j-1)/2]['PT'][q] === ""){
						alert("Проверьте ввод значений P для t в обучающей выборке!");
						return;
					}
					valueFormM[(j-1)/2]['PT'][q] = $(air6).val();
					if(valueFormM[(j-1)/2]['PT'][q] === ""){
						alert("Проверьте ввод значений P для t в контрольной выборке!");
						return;
					}
				}
			}
		}
		////////////

	for (q = 0; q<(+rowsForI); q++){
		summPnI[q] = 0;
		for (i =0; i<(+rows);i++){
			summPnI[q] = (+summPnI[q])+(+valueFornN[i]['PI'][q]);
		}
	}
	for (q = 0; q<(+rowsForT); q++){
		summPnT[q] = 0;
		for (i =0; i<(+rows);i++){
			summPnT[q] = (+summPnT[q])+(+valueFornN[i]['PT'][q]);
		}
	}

	for (q = 0; q<(+rowsForI); q++){
		summPnI[q] = (+summPnI[q])/(+rows);
	}

	for (q = 0; q<(+rowsForT); q++){
		summPnT[q] = (+summPnT[q])/(+rows);
	}

	$('#second').append('<h4>Зависимость среднего значения P экземпляров обучающей выборки от имитационного фактора F</h4>');
	var table = $('<table></table>');
	var thead = $('<thead></thead>');
	var tbody = $('<tbody></tbody>');
	var table = $('<table></table>');
	var thead = $('<thead></thead>');
	for(var i=0; i<(+rowsForI); i++){
		if(i === 0) var rowHead = $('<tr></tr>');
	    var row = $('<tr></tr>');
	    for(var j=0; j<2; j++){
	    	if(i === 0) {
	    		if(j === 0){
					var colHead = $('<td><h5>Значение F</h5></td>');
			    	rowHead.append(colHead);
	    		}
	    		else {
					var colHead = $('<td><h5>Значение P</h5></td>');
			    	rowHead.append(colHead);
	    		}
	    	}
	    	if(j === 0) {
	    		var col = $('<td>'+(+valueI[i])+'</td>');
	    		row.append(col);
	    	}
	    	else { 
	    		var col = $('<td>'+((+summPnI[i]).toFixed(3))+'</td>');
	    		row.append(col);
	    	}
	    }
	    tbody.append(row);
	}
	thead.append(rowHead);
	table.append(thead);
	table.append(tbody);
 	$('#second').append(table); 	
 	
	$('#second').append('<h4>Зависимость среднего значения P экземпляров обучающей выборки от наработки t</h4>');
	var table = $('<table></table>');
	var thead = $('<thead></thead>');
	var tbody = $('<tbody></tbody>');
	var table = $('<table></table>');
	var thead = $('<thead></thead>');
	for(var i=0; i<(+rowsForT); i++){
		if(i === 0) var rowHead = $('<tr></tr>');
	    var row = $('<tr></tr>');
	    for(var j=0; j<2; j++){
	    	if(i === 0) {
	    		if(j === 0){
					var colHead = $('<td><h5>Значение t</h5></td>');
			    	rowHead.append(colHead);
	    		}
	    		else {
					var colHead = $('<td><h5>Значение P</h5></td>');
			    	rowHead.append(colHead);
	    		}
	    	}
	    	if(j === 0) {
	    		var col = $('<td>'+(+valueT[i])+'</td>');
	    		row.append(col);
	    	}
	    	else { 
	    		var col = $('<td>'+((+summPnT[i]).toFixed(3))+'</td>');
	    		row.append(col);
	    	}
	    }
	    tbody.append(row);
	}
	thead.append(rowHead);
	table.append(thead);
	table.append(tbody);
 	$('#second').append(table); 	

 	$("#buildTable").removeClass().addClass("btn btn-default");
 	$("#buildSchedule").removeClass().addClass("btn btn-default");
 	$("#logicTable").removeClass().addClass("btn btn-default");

	$("#buildTable").attr('disabled',true);
	$("#buildSchedule").attr('disabled',true);
	$("#logicTable").attr('disabled',true);

 	
 	$("#entry").attr('disabled',false);
 	$("#entry").removeClass("btn-default").addClass("btn-warning");

 	$("#nextLi").removeClass("disabled");
 	tooglerner = 1;
 	toogleCheck=1;
 	toogleCheck=2;

 	alert("Этап успешно завершен!");

 	$('#second').append('<div class="row"><button id="secondBut" type="button" class="btn btn-success butForAll"><i class="fa fa-cogs" aria-hidden="true"></i> Ввод</button></div>');


 }

$(document).on("click", "#planing", planing);

function planing() {

	$("#first").show();
	$("#second").hide();
	$("#third").hide();
 	$("#fourth").hide();
 	$("#fifth").hide();

 	$("#planing").addClass("active");
 	$("#entry").removeClass("active");
 	$("#buildTable").removeClass("active");
 	$("#buildSchedule").removeClass("active");
 	$("#logicTable").removeClass("active");

 	$("#prevLi").addClass("disabled");
 	$("#nextLi").removeClass("disabled");
 	if (toogleCheck <= 1){
 		$("#nextLi").addClass("disabled");
 	}
 	tooglerner = 1;
 }

 $(document).on("click", "#entry", entry);

function entry() {
	$("#planing").removeClass("btn-default").addClass("btn btn-success");
	$("#entry").removeClass("btn-warning").addClass("btn-default active");

	$("#first").hide();
	$("#second").show();
	$("#third").hide();
 	$("#fourth").hide();
 	$("#fifth").hide();

 	$("#planing").removeClass("active");
 	$("#entry").addClass("active");
 	$("#buildTable").removeClass("active");
 	$("#buildSchedule").removeClass("active");
 	$("#logicTable").removeClass("active");

 	$("#prevLi").removeClass("disabled");
 	$("#nextLi").removeClass("disabled");
 	if (toogleCheck <= 2){
 		$("#nextLi").addClass("disabled");
 		$("#buildTable").attr('disabled',true);
 	}
 	tooglerner = 2;
}

$(document).on("click", "#secondBut", censor);

function censor (){

	$("#third").empty();
 	$('#fourthZero').empty();
    $('#fourthFirst').empty();
    $('#fourthSecond').empty();
 	$("#fifth").empty();

//Переписываем значения I и P из таблицы в объект
	collectorI[0]= new Object();
	collectorI[1]= new Object();
	for (var j=0; j<(+rowsForI);j++){
		collectorI[0][j] = valueI[j];
		collectorI[1][j] = summPnI[j]; 
	}

//Переписываем значения T и P из таблицы в объект
	collectorT[0]= new Object();
	collectorT[1]= new Object();
	for (j=0; j<(+rowsForT);j++){
		collectorT[0][j] = valueT[j];
		collectorT[1][j] = summPnT[j];
	}

//Сортируем обёект по I
	var sortic, exchange, exchange1;
	for (i=0; i<(+rowsForI);i++){
		sortic = collectorI[0][i];
		for (j = i + 1; j < ((+rowsForI)+1); j++) {
			if ((+collectorI[0][j]) < sortic) {
				exchange = collectorI[0][i];
				sortic = collectorI[0][j];
				collectorI[0][i] = sortic;
				collectorI[0][j] = exchange;

				exchange1 = collectorI[1][j];
				collectorI[1][j] = collectorI[1][i];;
				collectorI[1][i] = exchange1;
			}
		}
	}

//Сортируем обёект по T
	for (i=0; i<(+rowsForT);i++){
		sortic = collectorT[0][i];
		for (j = i + 1; j < ((+rowsForT)+1); j++) {
			if ((+collectorT[0][j]) < sortic) {
				exchange = collectorT[0][i];
				sortic = collectorT[0][j];
				collectorT[0][i] = sortic;
				collectorT[0][j] = exchange;

				exchange1 = collectorT[1][j];
				collectorT[1][j] = collectorT[1][i];;
				collectorT[1][i] = exchange1;
			}
		}
	}	

//Строим график P=f(I)
	$('#third').append('<p>Для получения функции пересчёта (имитационной модели) наработки на значение имитационного тока коллектора необходимо найти функциональные зависимости между параметрами P и F, а также между P и t, а поcле приравнять их друг к другу.</p>');
	$('#third').append('<p>В итоге будет найдена функция для расчёта имитационных значений имитационного фактора F в зависимости от задаваемой наработки.</p>'); 
	$('#third').append('<div class="nameOfShedule"><h3>График зависимости P=f(F<sub>K</sub>)</h3></div>');
	$('#third').append('<canvas height="500px" width="500px" id="schedule">schedule</canvas>');
	var schedule = document.getElementById("schedule");
	schedule.width = schedule.width;
	var graph = schedule.getContext("2d");
	var width = schedule.width, height = schedule.height;
	function valueToX (n,max) {return n*width/(max);}
	function valueToY (n,max) {return height-(n*height/max);}

	var maxX = (+collectorI[0][(+rowsForI)-1]);
	var maxY = (+collectorI[1][(+rowsForI)-1]);
	for(var i = 0; i<(+rowsForI); i++){
		if(maxX < (+collectorI[0][i])) maxX = (+collectorI[0][i]);
		if(maxY < (+collectorI[1][i])) maxY = (+collectorI[1][i]);
	}
	graph.beginPath();
	for (i=0; i < (+rowsForI); i++){
			if(i === 0) graph.moveTo(valueToX((+collectorI[0][i]),maxX), valueToY((+collectorI[1][i]),maxY));
			else graph.lineTo(valueToX((+collectorI[0][i]),maxX), valueToY((+collectorI[1][i]),maxY));
	}
	graph.strokeStyle = "red";
	graph.stroke();

//Нумеруем ось X
	graph.textAlign = "center";
    var y = valueToY(0,maxY);
    for (var mark = 0; mark <= 100; mark += 5) {
		var x = valueToX(mark,100);
		if (mark % 10 == 0) {
			graph.fillText(String((((maxX/100)*mark).toFixed(1))), x, y - 5);
			graph.fillRect(x - 0.5, y - 4, 1, 3);
		}
		else graph.fillRect(x - 0.5, y - 0.5, 1, 3);
	}

//Нумеруем ось Y
	graph.textAlign = "left";
	graph.textBaseline = "middle";
	var x = valueToX(0,maxX);
	for (var mark = 0; mark <=100; mark += 5) {
		var y = valueToY(mark,100);
		if (mark % 10 == 0) {
			graph.fillText(String((((maxY/100)*mark).toFixed(1))), x + 10, y);
			graph.fillRect(x + 4, y - 0.5, 3, 1);
		}
		else graph.fillRect(x + 2, y - 0.5, 3, 1);
	}

//Добавляем подписи к осям
	graph.font="bold 15px sans-serif";
    graph.fillStyle="black";
    graph.fillText("P", 35, 10);
    graph.fillText("F", 490, 475);

//Создаем ссылку на скачивание
	$('#third').append('<div><h5><a id="download"> Скачать</a></h5></div>');
    var a =  document.getElementById("download");
    a.download = "График P=f(I).png";
    a.href = schedule.toDataURL("png");

//Строим график P=f(T)
    $('#third').append('<div class="nameOfShedule"><h3>График зависимости P=f(t)</h3></div>');
	$('#third').append('<canvas height="500px" width="500px" id="schedule1">schedule</canvas>');
	var schedule1 = document.getElementById("schedule1");
	schedule1.width = schedule1.width;
	var graph = schedule1.getContext("2d");

	var maxX = (+collectorT[0][(+rowsForT)-1]);
	var maxY = (+collectorT[1][(+rowsForT)-1]);
	for(i = 0; i<(+rowsForT); i++){
		if(maxX < (+collectorT[0][i])) maxX = (+collectorT[0][i]);
		if(maxY < (+collectorT[1][i])) maxY = (+collectorT[1][i]);
	}

	graph.beginPath();
	for (i=0; i < (+rowsForT); i++){
			if(i === 0) graph.moveTo(valueToX((+collectorT[0][i]),maxX), valueToY((+collectorT[1][i]),maxY));
			else graph.lineTo(valueToX((+collectorT[0][i]),maxX), valueToY((+collectorT[1][i]),maxY));
	}
	graph.strokeStyle = "green";
	graph.stroke();

//Нумеруем ось X
	graph.textAlign = "center";
    var y = valueToY(0,maxY);
    for (var mark = 0; mark <= 100; mark += 5) {
		var x = valueToX(mark,100);
		if (mark % 10 == 0) {
			graph.fillText(String((((maxX/100)*mark).toFixed(1))), x, y - 5);
			graph.fillRect(x - 0.5, y - 4, 1, 3);
		}
		else graph.fillRect(x - 0.5, y - 0.5, 1, 3);
	}

//Нумеруем ось Y
	graph.textAlign = "left";
	graph.textBaseline = "middle";
	var x = valueToX(0,maxX);
	for (var mark = 0; mark <=100; mark += 5) {
		var y = valueToY(mark,100);
		if (mark % 10 == 0) {
			graph.fillText(String((((maxY/100)*mark).toFixed(1))), x + 10, y);
			graph.fillRect(x + 4, y - 0.5, 3, 1);
		}
		else graph.fillRect(x + 2, y - 0.5, 3, 1);
	}

//Добавляем подписи к осям
	graph.font="bold 15px sans-serif";
    graph.fillStyle="black";
    graph.fillText("P", 35, 10);
    graph.fillText("t", 490, 475);

//Создаем ссылку на скачивание
	$('#third').append('<div><h5><a id="download1"> Скачать</a></h5></div>');
    var a1 =  document.getElementById("download1");
    a1.download = "График P=f(t).png";
    a1.href = schedule1.toDataURL("png");

	$("#buildSchedule").removeClass().addClass("btn btn-default");
 	$("#logicTable").removeClass().addClass("btn btn-default");

	$("#buildSchedule").attr('disabled',true);
	$("#logicTable").attr('disabled',true);

 	$("#buildTable").removeClass().addClass("btn btn-warning");
 	$("#buildTable").attr('disabled',false);

//Создаем поля ввода значений T и колличества P
    $('#fourthZero').empty();
    $('#fourthFirst').empty();
    $('#fourthSecond').empty();
    $('#fourthZero').append('<p>По найденной функции пересчёта рассчитывается значение имитационного фактора F для заданной наработки t.</p>');
	$('#fourthZero').append('<p>Далее определяют прогнозное значение Р i-го экземпляра контрольной выборки Pпр i (i = 1, 2, …, m), соответствующее заданной наработке t.</p>'); 
	$('#fourthZero').append('<p>Также находят истинное значение P i-го экземпляра контрольной выборки Pист i (i = 1, 2, …, m), соответствующее заданной наработке t.</p>');    
    $('#fourthZero').append('<div><h3>Вычисление</h3></div>');
	$('#fourthZero').append('<div class="row box"><label for="timeOld" class="control">Наработка</label><input class="number2" id="timeOld" type="" name="" placeholder="Наработка"></div>');
	
	$('#fourthZero').append('<div class="row"><button id="timeBuild" type="button" class="btn btn-success butForAll"><i class="fa fa-cogs" aria-hidden="true"></i> Ввод</button></div>');

    toogleCheck=4;
    justForShedule=0;

    //$("#entry").removeClass().addClass("btn btn-warning");
    $("#buildTable").removeClass("btn-default").addClass("btn-warning");
    alert("Этап успешно завершен!");
}

$(document).on("click", "#timeBuild", timeBuild);

var quantity;
var massNewPPP;
var massNewP;

function timeBuild(){
	var time = $("#timeOld").val();
	if(time === "" ){
		alert("Проверьте ввод значений");
		return; 
	} 
	var crutch=0;
	var massP =0;
	var x,y,z;

//Находим соответствующее заданному времени P
	for(var j = 0; j<(+rowsForT); j++){
		if (j === 0 ){
			if ((+collectorT[0][j]) > (+time)){
				massP = (+collectorT[1][j]);
				crutch++;
			}
		}
		else if (j == ((+rowsForT)-1)){
			if ((+collectorT[0][j]) == (+time)){
				massP = (+collectorT[1][j]);
				crutch++;
			}
			if ((+collectorT[0][j]) < (+time)){
				z = time - (+collectorT[0][j]);
				x = ((+collectorT[0][j])-(+collectorT[0][j-1]))/100;
				y = ((+collectorT[1][j])-(+collectorT[1][j-1]))/100;
				massP = (+collectorT[1][j])+((z/x)*y);
				crutch++;
			}
		}
		if (crutch === 0) {
			if ((+collectorT[0][j]) == (+time)){
				massP = (+collectorT[1][j]);
			}
			else if ((+collectorT[0][j]) < (+time)){
				z = time - (+collectorT[0][j]);
				x = ((+collectorT[0][j+1])-(+collectorT[0][j]))/100;
				y = ((+collectorT[1][j+1])-(+collectorT[1][j]))/100;
				massP = (+collectorT[1][j])+((z/x)*y);
			}
		}
	}

//Находим найденому P соответствующее I
	var current;
	crutch=0;
	for(var j = 0; j<(+rowsForI); j++){
		if (j === 0 ){
			if ((+collectorI[1][j]) > (+massP)){
				current = (+collectorI[0][j]);
				crutch++;
			}
		}
		else if (j == ((+rowsForI)-1)){
			if ((+collectorI[1][j]) == (+massP)){
				current= (+collectorI[0][j]);
				crutch++;
			}
			if ((+collectorI[1][j]) < (+massP)){
				cz = massP - (+collectorI[1][j]);
				x = ((+collectorI[1][j])-(+collectorI[1][j-1]))/100;
				y = ((+collectorI[0][j])-(+collectorI[0][j-1]))/100;
				current = (+collectorI[0][j])+((z/x)*y);
				crutch++;
			}
		}
		if (crutch === 0) {
			if ((+collectorI[1][j]) == (+massP)){
				current = (+collectorI[0][j]);
			}
			else if ((+collectorI[1][j]) < (+massP)){
				z = massP - (+collectorI[1][j]);
				x = ((+collectorI[1][j+1])-(+collectorI[1][j]))/100;
				y = ((+collectorI[0][j+1])-(+collectorI[0][j]))/100;
				current = (+collectorI[0][j])+((z/x)*y);
			}
		}
	}

//Выводим найденной значение тока I
	$('#fourthFirst').empty();
	$('#fourthSecond').empty();
	$('#fourthFirst').append('<div><h4>Фактор F<sub>Kим</sub> = '+((+current).toFixed(3))+'</h4></div>');

	
	var phantomI = new Object();
	for (var i=0;i<(+rows);i++){
		phantomI[i] = new Object();
		for(var j=0;j<(+rowsForI);j++){
			phantomI[i][j] = (+valueI[j]);
		}
	}

//Сортируем обёект по I
	var sortic, exchange, exchange1;
	for (var q =0; q<(+rows);q++){
		for (i=0; i<(+rowsForI);i++){
			sortic = phantomI[q][i];
			for (j = i + 1; j < ((+rowsForI)+1); j++) {
				if ((+phantomI[q][j]) < sortic) {
					exchange = phantomI[q][i];
					sortic = phantomI[q][j];
					phantomI[q][i] = sortic;
					phantomI[q][j] = exchange;

					exchange1 = valueFormM[q]['PI'][j];
					valueFormM[q]['PI'][j] = valueFormM[q]['PI'][i];
					valueFormM[q]['PI'][i] = exchange1;
				}
			}
		}
	}
	massNewP = new Object();
	for (q =0; q<(+rows);q++){
		crutch=0;
		massNewP[q] = 0;
		for(var j = 0; j<(+rowsForI); j++){
			if (j === 0 ){
				if ((+phantomI[q][j]) > (+current)){
					massNewP[q] = (+valueFormM[q]['PI'][j]);
					crutch++;
				}
			}
			else if (j == ((+rowsForI)-1)){
				if ((+phantomI[q][j]) == (+current)){
					massNewP[q] = (+valueFormM[q]['PI'][j]);
					crutch++;
				}
				if ((+phantomI[q][j]) < (+current)){
					z = current - (+phantomI[q][j]);
					x = ((+phantomI[q][j])-(+phantomI[q][j-1]))/100;
					y = ((+valueFormM[q]['PI'][j])-(+valueFormM[q]['PI'][j-1]))/100;
					massNewP[q] = (+valueFormM[q]['PI'][j])+((z/x)*y);
					crutch++;
				}
			}
			if (crutch === 0) {
				if ((+phantomI[q][j]) == (+current)){
					massNewP[q] = (+valueFormM[q]['PI'][j]);
				}
				else if ((+phantomI[q][j]) < (+current)){
					z = current - (+phantomI[q][j]);
					x = ((+phantomI[q][j+1])-(+phantomI[q][j]))/100;
					y = ((+valueFormM[q]['PI'][j+1])-(+valueFormM[q]['PI'][j]))/100;
					massNewP[q] = (+valueFormM[q]['PI'][j])+((z/x)*y);
				}
			}
		}
	}

	


	var phantomT = new Object();
	for (var i=0;i<(+rows);i++){
		phantomT[i] = new Object();
		for(var j=0;j<(+rowsForT);j++){
			phantomT[i][j] = (+valueT[j]);
		}
	}

//Сортируем обёект по I
	var sortic, exchange, exchange1;
	for (var q =0; q<(+rows);q++){
		for (i=0; i<(+rowsForT);i++){
			sortic = phantomT[q][i];
			for (j = i + 1; j < ((+rowsForT)+1); j++) {
				if ((+phantomT[q][j]) < sortic) {
					exchange = phantomT[q][i];
					sortic = phantomT[q][j];
					phantomT[q][i] = sortic;
					phantomT[q][j] = exchange;

					exchange1 = valueFormM[q]['PT'][j];
					valueFormM[q]['PT'][j] = valueFormM[q]['PT'][i];
					valueFormM[q]['PT'][i] = exchange1;
				}
			}
		}
	}

	massNewPPP = new Object();
	for (q =0; q<(+rows);q++){
		crutch=0;
		massNewPPP[q] = 0;
		for(var j = 0; j<(+rowsForT); j++){
			if (j === 0 ){
				if ((+phantomT[q][j]) > (+time)){
					massNewPPP[q] = (+valueFormM[q]['PT'][j]);
					crutch++;
				}
			}
			else if (j == ((+rowsForT)-1)){
				if ((+phantomT[q][j]) == (+time)){
					massNewPPP[q] = (+valueFormM[q]['PT'][j]);
					crutch++;
				}
				if ((+phantomT[q][j]) < (+time)){
					z = time - (+phantomT[q][j]);
					x = ((+phantomT[q][j])-(+phantomT[q][j-1]))/100;
					y = ((+valueFormM[q]['PT'][j])-(+valueFormM[q]['PT'][j-1]))/100;
					massNewPPP[q] = (+valueFormM[q]['PT'][j])+((z/x)*y);
					crutch++;
				}
			}
			if (crutch === 0) {
				if ((+phantomT[q][j]) == (+time)){
					massNewPPP[q] = (+valueFormM[q]['PT'][j]);
				}
				else if ((+phantomT[q][j]) < (+time)){
					z = time - (+phantomT[q][j]);
					x = ((+phantomT[q][j+1])-(+phantomT[q][j]))/100;
					y = ((+valueFormM[q]['PT'][j+1])-(+valueFormM[q]['PT'][j]))/100;
					massNewPPP[q] = (+valueFormM[q]['PT'][j])+((z/x)*y);
				}
			}
		}
	}


//Строим таблицу для внесения параметров P
	$('#fourthFirst').append('<div><h3>Таблица сравнения</h3></div>');

	var table = $('<table></table>');
	var thead = $('<thead></thead>');
	var tbody = $('<tbody></tbody>');
	for(i=0; i<(+rows); i++){
		if(i === 0) var rowHead = $('<tr></tr>');
	    var row = $('<tr></tr>');
	    for(var j=0; j<3; j++){
	    	if(i === 0) {
	    		switch (j){
	    			case 0:
	    				var colHead = $('<td><h4>№ экземпляра</h4></td>');
	    				rowHead.append(colHead);
	    				break;
	    			case 1: 
	    				var colHead = $('<td><h4>Значения P<sub>пр</sub></h4></td>');
	    				rowHead.append(colHead);
	    				break;
	    			case 2:
	    				var colHead = $('<td><h4>Значения P<sub>ист</sub></h4></td>');
	    				rowHead.append(colHead);
	    				break;
	    		}
	    	}
	    	switch (j){
	    		case 0:
	    			var col = $('<td>'+(i+1)+'</td>');
	    			row.append(col);
	    			break;
	    		case 1:
	    			var col = $('<td>'+(+massNewP[i])+'</td>');
	    			row.append(col);
	    			break;
	    		case 2:
	    		var col = $('<td>'+(+massNewPPP[i])+'</td>');
	    			row.append(col);
	    			break;
	    	}
	    }
	    tbody.append(row);
	}
	thead.append(rowHead);
	table.append(thead);
	table.append(tbody);
 	$('#fourthFirst').append(table);
 	$("#nextLi").removeClass("disabled");
 	toogleCheck=3;
 	toogleCheck=4;
 	$('#fourthSecond').append('<div class="row"><button id="comparator" type="button" class="btn btn-success butForAll"><i class="fa fa-cogs" aria-hidden="true"></i> Ввод</button></div>');

}

$(document).on("click", "#buildTable", buildTable);

function buildTable() {
	$("#entry").removeClass("btn-default").addClass("btn btn-success");
	$("#buildTable").removeClass("btn-warning").addClass("btn-default active");

	$("#first").hide();
	$("#second").hide();
	$("#third").show();
 	$("#fourth").hide();
 	$("#fifth").hide();

 	$("#planing").removeClass("active");
 	$("#entry").removeClass("active");
 	$("#buildTable").addClass("active");
 	$("#buildSchedule").removeClass("active");
 	$("#logicTable").removeClass("active");

 	if(justForShedule === 0){
 		$("#buildSchedule").removeClass().addClass("btn btn-warning");
 		$("#buildSchedule").attr('disabled',false);
 		justForShedule++;
 	}

 	$("#prevLi").removeClass("disabled");
 	$("#nextLi").removeClass("disabled");
 	if (toogleCheck <= 3){
 		$("#nextLi").addClass("disabled");
 	}
 	tooglerner = 3;
}

$(document).on("click", "#buildSchedule", buildSchedule);

function buildSchedule() {
	$("#buildTable").removeClass("btn-default").addClass("btn btn-success");
	$("#buildSchedule").removeClass("btn-warning").addClass("btn-default active");

	$("#first").hide();
	$("#second").hide();
	$("#third").hide();
 	$("#fourth").show();
 	$("#fifth").hide();

 	$("#planing").removeClass("active");
 	$("#entry").removeClass("active");
 	$("#buildTable").removeClass("active");
 	$("#buildSchedule").addClass("active");
 	$("#logicTable").removeClass("active");

 	$("#prevLi").removeClass("disabled");
 	$("#nextLi").removeClass("disabled");
 	if (toogleCheck <= 4){
 		$("#nextLi").addClass("disabled");
 	}
 	tooglerner = 4;
}

$(document).on("click", "#comparator", comparator);

function comparator(){
	var air1, air2, mistake;
	var forecastP = new Object();
	var trueP = new Object();

// //Считываем значения параметров P c таблицы
// 	for (var i=0; i<(+rows);i++){
// 		forecastP[i] = 0;  
// 		trueP[i] = 0;  
// 		air1 = ".forecastP"+i;
// 		air2 = ".trueP"+i;
// 		forecastP[i] = $(air1).val();  
// 		if(forecastP[i] === "" ){
// 			alert("Введите значения!");
// 			return;
// 		}
// 		trueP[i] = $(air2).val();
// 		if(trueP[i] === "" ){
// 			alert("Введите значения!");
// 			return;
// 		}  
// 	}

//Рассчитываем среднюю ошибку прогнозирования
	var intermediate = new Object();
	for (i=0; i<(+rows); i++){
		intermediate[i]=0;
		intermediate[i] = ((+massNewP[i]) - (+massNewPPP[i]))/(+massNewPPP[i]);
	}
	var amount=0;
	for (i=0; i<(+rows); i++){
		amount+= ((+intermediate[i])*(+intermediate[i]));
	}
	amount = amount/(+rows);
	mistake = (Math.sqrt(amount)).toFixed(3);

//Выводим среднюю ошибку прогнозирования
	$('#fourthSecond').empty();
	$('#fourthSecond').append('<div><h3>Cредняя ошибка прогнозирования = '+mistake+'</h3></div>');
	$("#fifth").empty();
	$('#fifth').append('<p>Используя найденную ранее функцию пересчёта, для заданной наработки t<sub>З</sub> рассчитывается имитационное значение имитационного фактора F.</p>'); 
	$('#fifth').append('<p>Далее при токе коллектора I<sub>Ким</sub>(t<sub>З</sub>) измеряют значение P и сравнивают со значение параметра Р, приводимым в ТУ на БТ рассматриваемого типа или с нормой, установленной потребителем. По результатам этого сравнения принимают решение (получают прогноз) о надёжности по постепенному отказу прогнозируемого экземпляра по параметру Р для заданной наработки t<sub>З</sub>.</p>'); 
	$('#fifth').append('<p>Если значение I<sub>Ким</sub>(t<sub>З</sub>), рассчитанное по функции пересчёта, превышает предельно допустимое значение, указываемое в ТУ, более чем в 2 раза, то для заданной наработки t<sub>З</sub> следует отказаться от прогнозирования значения параметра Р, ибо существует заметный риск повреждения прогнозируемого экземпляра при таком значении имитационного фактора.</p>');
	$('#fifth').append('<div><label><input id="firstNo" class="number2" placeholder="Наработка"></label><p id="secondNo"></p></div>');

	$("#logicTable").removeClass().addClass("btn btn-warning");
 	$("#logicTable").attr('disabled',false);

 	$("#nextLi").removeClass("disabled");
 	toogleCheck=5;

 	alert("Этап успешно завершен!");
}

$(document).on("click", "#logicTable", logicTable);


function logicTable() {
	$("#buildSchedule").removeClass("btn-default").addClass("btn btn-success");
	$("#logicTable").removeClass("btn-warning").addClass("btn-default active");

	$("#first").hide();
	$("#second").hide();
	$("#third").hide();
 	$("#fourth").hide();
 	$("#fifth").show();

 	$("#planing").removeClass("active");
 	$("#entry").removeClass("active");
 	$("#buildTable").removeClass("active");
 	$("#buildSchedule").removeClass("active");
 	$("#logicTable").addClass("active");

 	$("#prevLi").removeClass("disabled");
 	$("#nextLi").addClass("disabled");
 	tooglerner = 5;
}


$(document).on("change", "#firstNo", function() {
	var time = this.value;
	var crutch=0;
	var massP =0;
	var x,y,z;

//Рассчитываем значение P в зависимости от заданного значения T
	for(var j = 0; j<(+rowsForT); j++){
		if (j === 0 ){
			if ((+collectorT[0][j]) > time){
				massP = (+collectorT[1][j]);
				crutch++;
			}
		}
		else if (j == ((+rowsForT)-1)){
			if ((+collectorT[0][j]) == time){
				massP = (+collectorT[1][j]);
				crutch++;
			}
			if ((+collectorT[0][j]) < time){
				z = time - (+collectorT[0][j]);
				x = ((+collectorT[0][j])-(+collectorT[0][j-1]))/100;
				y = ((+collectorT[1][j])-(+collectorT[1][j-1]))/100;
				massP = (+collectorT[1][j])+((z/x)*y);
				crutch++;
			}
		}
		if (crutch === 0) {
			if ((+collectorT[0][j]) == time){
				massP = (+collectorT[1][j]);
			}
			else if ((+collectorT[0][j]) < time){
				z = time - (+collectorT[0][j]);
				x = ((+collectorT[0][j+1])-(+collectorT[0][j]))/100;
				y = ((+collectorT[1][j+1])-(+collectorT[1][j]))/100;
				massP = (+collectorT[1][j])+((z/x)*y);
			}
		}
	}

//Рассчитываем значение I в зависимости от найденного значения P
	var current;
	crutch=0;
	for(var j = 0; j<(+rowsForI); j++){
		if (j === 0 ){
			if ((+collectorI[1][j]) > massP){
				current = (+collectorI[0][j]);
				crutch++;
			}
		}
		else if (j == ((+rowsForI)-1)){
			if ((+collectorI[1][j]) == massP){
				current= (+collectorI[0][j]);
				crutch++;
			}
			if ((+collectorI[1][j]) < massP){
				z = massP - (+collectorI[1][j]);
				x = ((+collectorI[1][j])-(+collectorI[1][j-1]))/100;
				y = ((+collectorI[0][j])-(+collectorI[0][j-1]))/100;
				current = (+collectorI[0][j])+((z/x)*y);
				crutch++;
			}
		}
		if (crutch === 0) {
			if ((+collectorI[1][j]) == massP){
				current = (+collectorI[0][j]);
			}
			else if ((+collectorI[1][j]) < massP){
				z = massP - (+collectorI[1][j]);
				x = ((+collectorI[1][j+1])-(+collectorI[1][j]))/100;
				y = ((+collectorI[0][j+1])-(+collectorI[0][j]))/100;
				current = (+collectorI[0][j])+((z/x)*y);
			}
		}
	}

//Выводим найденное значение I
	$('#secondNo').empty();
	$('#secondNo').append('<div><h3>Фактор = '+((+current).toFixed(3))+'</h3></div>');
});

$(document).on("click", "#next", function next(){
	switch (tooglerner){
		case 1:
			$("#prevLi").removeClass("disabled");
			if (toogleCheck >= 2)entry();
			break;
		case 2:
			if (toogleCheck >= 3)buildTable();
			break;
		case 3:
			if (toogleCheck >= 4)buildSchedule();
			break;
		case 4:
			if (toogleCheck >= 5){
				logicTable();
				$("#nextLi").addClass("disabled");
				}
			break;
	}

});

$(document).on("click", "#prev", function(){
	switch (tooglerner){
		case 2:
			$("#prevLi").addClass("disabled");
			planing();
			break;
		case 3:
			entry();
			break;
		case 4:
			buildTable();
			break;
		case 5:
			$("#nextLi").removeClass("disabled");
			buildSchedule();
			break;
	}

});

















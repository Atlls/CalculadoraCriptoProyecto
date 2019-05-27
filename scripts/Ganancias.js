// Alpha V2.0

var textoInvercion     	= document.getElementById("inversion");
var textoValorMoneda   	= document.getElementById("valorMoneda");
var textoAumentoCompra	= document.getElementById("aumentoCompra");
var textoAumentoValor	= document.getElementById("aumentoValor");
var textoPorcentaje 	= document.getElementById("porcentaje");
var t_comicionMoneda 	= document.getElementById("comicionMoneda");
t_comicionMoneda.value  = 0;

var boton1 	         	= document.getElementById("botonCompras");
var boton2 		    	= document.getElementById("botonCalculoCompra");
var boton3 		    	= document.getElementById("botonCalculoValor");

var p_compras 			= document.getElementById("salida");
var p_aumento 			= document.getElementById("salida2");

boton1.addEventListener("click", func);
boton2.addEventListener("click", func3);
boton3.addEventListener("click", func2);

function func(ev){

	p_compras.innerHTML = "<p>" + cantMonedas() + " Moneda(s) ";
	p_compras.innerHTML += " Restando la comición de: " + t_comicionMoneda.value + " Moneda(s), Son: <b>"+ parseFloat(cantMonedas() - t_comicionMoneda.value).toFixed(8) +"</b> Moneda(s)</p>";
	textoPorcentaje.value = 0;

}

function func2(ev){

	var final = textoAumentoCompra.value/cantMonedas();
	final = parseFloat(final).toFixed(2);

	textoAumentoValor.value = final;

	mostrarDif();

}

function func3(ev){

	var final = textoAumentoValor.value*cantMonedas();
	final = parseFloat(final).toFixed(2);

	console.log(textoAumentoValor.value,cantMonedas());

	textoAumentoCompra.value = final;

	mostrarDif();

}

function cantMonedas(){

	var x = parseInt(textoInvercion.value)/parseInt(textoValorMoneda.value);

	return parseFloat(x).toFixed(8);

}

function mostrarDif(){

	var porcentaje = parseFloat(textoPorcentaje.value / 100);
	var totalCom = parseFloat(textoAumentoCompra.value - textoAumentoCompra.value*porcentaje).toFixed(2);

	console.log(totalCom);

	p_aumento.innerHTML  = "<p>" + parseFloat(textoValorMoneda.value).toFixed(2) + " | " + parseFloat(textoAumentoValor.value).toFixed(2);
	p_aumento.innerHTML += " La diferencia es: " + parseFloat(textoAumentoValor.value - textoValorMoneda.value).toFixed(2);
	p_aumento.innerHTML += " | Ganancia es: <b>" + parseFloat(totalCom - textoInvercion.value).toFixed(8) + " BsS</b><br>";

	p_aumento.innerHTML += " Restando la comición de " + parseFloat(textoPorcentaje.value) + "%: <b>" + totalCom  + " BsS</b> </p> "

}
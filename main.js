function first() {
	var result = "";

	for(i=0;i<=5;i++) {
		var num = i * 100;
		result = result + " " + num;
	}
	return result;
}
document.getElementById("first").innerHTML = first();

function second() {
	var result = "";

	for(i=1;i<=64;i) {
    	result = result + " " + i;
    	var num = i + i;
    	i = num;
	}
	return result;
}
document.getElementById("second").innerHTML = second();

function third() {
	var result = "";

	for(i=1;i<4;i++) {
		result = result + " " + i + " " + i + " " + i;
	}
	return result;
}
document.getElementById("third").innerHTML = third();

function fourth() {
	var result = "";

	for(i=0;i<11;i+=2) {
		result = result + " " + i;
	}
	return result;
}
document.getElementById("fourth").innerHTML = fourth();

function fifth() {
	var result = "";

	for(i=3;i<=15;i+=3) {
		result = result + " " + i;
	}
	return result;
}
document.getElementById("fifth").innerHTML = fifth();

function sixth() {
	var result = "";

	for(i=9;i>=0;i--) {
		result = result + " " + i;
	}
	return result;
}
document.getElementById("sixth").innerHTML = sixth();

function seventh() {
	var result = "";
	var i, j;
	for(i=1;i<=3;i++) {
		for(j=0;j<=3;j++) {
			result = result + " " + j;
		}
	}
	return result;
}
document.getElementById("seventh").innerHTML = seventh();
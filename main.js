function myFunction(){
	var x, text;
	x = document.getElementById('number').value;

	if (isNaN(x) || x < 1 || x > 10) {
		text = 'Invalid number';
	}else {
		text = 'Valid number';
	}
	document.getElementById('demo').innerHTML = text;
}

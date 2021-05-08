function calculate()
{
	var x = document.getElementById('height').value
	var y = document.getElementById('weight').value
	x = x/100
	var result = y / (x * x)
	result= result.toFixed(2)
	document.getElementById('hints').style.color = "white"
	if(result == "NaN")
	{
		document.getElementById('results').innerHTML = "ERROR"
		document.getElementById('results').style.color = "white"
		document.getElementById('hints').innerHTML = "You have to fill the weight and height!"
	}
	else if(result== 0 ){
			document.getElementById('results').innerHTML = "ERROR"
			document.getElementById('results').style.color = "white"
			document.getElementById('hints').innerHTML = "You have to fill the weight!"
	}
	else if(result==Infinity)
	{
				document.getElementById('results').innerHTML = "ERROR"
				document.getElementById('results').style.color = "white"
				document.getElementById('hints').innerHTML = "You have to fill the height!"
	}
 else if(result < 15)
	{
	document.getElementById('results').style.color = "red"
	var text = "You better gonna gain some weight!"
	document.getElementById('hints').innerHTML = text
	document.getElementById('results').innerHTML = result
	}
	else if (result >25)
	{
		document.getElementById('results').style.color = "red"
		var text = "You better gonna lose some weight!"
	document.getElementById('hints').innerHTML = text
	document.getElementById('results').innerHTML = result
	}
	else
	{
		 document.getElementById('results').style.color = "green"
		 var text = "Everything's right!"
		document.getElementById('hints').innerHTML = text
		document.getElementById('results').innerHTML = result
	}

}
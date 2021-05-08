setInterval(setClock,1000)
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock()
{
	const currentDate = new Date()
	const secondsRatio = currentDate.getSeconds()/60;
	const minutesRatio = (secondsRatio+currentDate.getMinutes())/60;
	const hoursRatio =(minutesRatio+currentDate.getHours())/12;
	setRotation(secondHand, secondsRatio)
	setRotation(minuteHand, minutesRatio)
	setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio)
{
	element.style.setProperty('--rotation', rotationRatio*360)
}

function setActivity()
{
	const currentDate1 = new Date()
	const hour= currentDate1.getHours();
	console.log(hour);
	if(hour >= 22 || hour <=8)
	{
		document.getElementById('info').innerHTML = "It's time to sleep!"
	}
	else if (hour <22 && hour >= 21)
	{
		document.getElementById('info').innerHTML = "Learn something!"
	}
		else if (hour <21 && hour >= 19)
	{
		document.getElementById('info').innerHTML = "Let's play!"
	}
		else if (hour <19 && hour >= 16)
	{
		document.getElementById('info').innerHTML = "Workout time!"
	}
		else if (hour <16 && hour >= 8)
	{
		document.getElementById('info').innerHTML = "School :("
	}

		
	
}
setClock()
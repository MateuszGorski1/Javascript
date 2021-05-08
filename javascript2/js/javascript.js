function odliczanie ()
{
	var data = new Date();
	var dzien = data.getDate();
	var miesiac = data.getMonth()+1;
	var rok = data.getFullYear();
	var g = data.getHours();
	var m = data.getMinutes();
	var s = data.getSeconds();
	if(g == 0){
		g = 12;
	}
	g = (g < 10) ? "0" + g : g;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
	var czas = dzien + "/" + miesiac + "/" + rok + "|" +g + ":" +  m + ":" + s;
	document.getElementById("timer").innerHTML = czas;
	setTimeout(odliczanie, 1000);
}
odliczanie();




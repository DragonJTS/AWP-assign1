var step = 1;
function changeImage() {
	if (step < 3)
		step++;
	else
		step = 1;
	document.getElementById("slideviewer").src="img\\screenshot"+step+".png";
}

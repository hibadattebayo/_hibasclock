//digital clock!!
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

//change colorsets according to the time of the day
function backgroundColor() {
	var background = document.getElementsByTagName('body')[0];
      var currentTime = new Date().getHours();
	  //if the current time is smaller than/equal to zero and if the current time is less than 5 then show the colorset for the night. 
      if (0 <= currentTime&&currentTime < 5) {
       document.body.style.backgroundColor = "#401F41";
	   document.getElementById("MyClockDisplay").style.color = "#8464A5";
	   document.getElementById("morningclouds").style.display = "none";
	   document.getElementById("dayclouds").style.display = "none";
	   document.getElementById("eveningclouds").style.display = "none";
      }
	  
	  //morning
	  if (5 <= currentTime&&currentTime < 11) {
       document.body.style.backgroundColor = "#FFAB91";
	   document.getElementById("MyClockDisplay").style.color = "#FF5D29";
	   document.getElementById("dayclouds").style.display = "none";
	   document.getElementById("eveningclouds").style.display = "none";
	   document.getElementById("nightclouds").style.display = "none";
      }
	  
	  //day
      if (11 <= currentTime&&currentTime < 16) {
       document.body.style.backgroundColor = "#FFED91";
	   document.getElementById("MyClockDisplay").style.color = "#FFC329";
	    document.getElementById("morningclouds").style.display = "none";
	    document.getElementById("eveningclouds").style.display = "none";
	    document.getElementById("nightclouds").style.display = "none";
      }
	  
	  //evening
      if (16 <= currentTime&&currentTime < 23) {
       document.body.style.backgroundColor = "#F75D2E";
	   document.getElementById("MyClockDisplay").style.color = "#3C2856";
	   document.getElementById("morningclouds").style.display = "none";
	   document.getElementById("dayclouds").style.display = "none";
	   document.getElementById("nightclouds").style.display = "none";
      }
	  
	  //night
      if (23 <= currentTime&&currentTime < 24) {
	   document.body.style.backgroundColor = "#401F41";
	   document.getElementById("MyClockDisplay").style.color = "#8464A5";
	   document.getElementById("morningclouds").style.display = "none";
	   document.getElementById("dayclouds").style.display = "none";
	   document.getElementById("eveningclouds").style.display = "none";
      }
}

backgroundColor();
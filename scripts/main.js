//digital clock!!
function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
	
	var day =  date.getDate();
	//I did this because for some reason the month said february, while it is march. Maybe this is because in js the months start from 0. SO zero being January
	var month = date.getMonth() + 1; 
	var year = date.getFullYear();
	
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
    document.getElementById("clockDisplay").innerText = time;
    document.getElementById("clockDisplay").textContent = time;
	
	var date = day + "-" + month + "-" + year;
	document.getElementById("dateDisplay").innertext = date;
	document.getElementById("dateDisplay").textContent = date;
    
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
	   document.getElementById("clockDisplay").style.color = "#8464A5";
	   document.getElementById("dateDisplay").style.color = "#8464A5";
	   document.getElementById("morningclouds").style.display = "none";
	   document.getElementById("dayclouds").style.display = "none";
	   document.getElementById("eveningclouds").style.display = "none";
      }
	  
	  //morning
	  if (5 <= currentTime&&currentTime < 11) {
       document.body.style.backgroundColor = "#FFAB91";
	   document.getElementById("clockDisplay").style.color = "#FF5D29";
	   document.getElementById("dateDisplay").style.color = "#FF5D29";
	   document.getElementById("dayclouds").style.display = "none";
	   document.getElementById("eveningclouds").style.display = "none";
	   document.getElementById("nightclouds").style.display = "none";
      }
	  
	  //day
      if (11 <= currentTime&&currentTime < 17) {
       document.body.style.backgroundColor = "#FFED91";
	   document.getElementById("clockDisplay").style.color = "#FFC329";
	   document.getElementById("dateDisplay").style.color = "#FFC329";
	    document.getElementById("morningclouds").style.display = "none";
	    document.getElementById("eveningclouds").style.display = "none";
	    document.getElementById("nightclouds").style.display = "none";
      }
	  
	  //evening
      if (17 <= currentTime&&currentTime < 23) {
       document.body.style.backgroundColor = "#F75D2E";
	   document.getElementById("clockDisplay").style.color = "#3C2856";
	   document.getElementById("dateDisplay").style.color = "#3C2856";
	   document.getElementById("morningclouds").style.display = "none";
	   document.getElementById("dayclouds").style.display = "none";
	   document.getElementById("nightclouds").style.display = "none";
      }
	  
	  //night
      if (23 <= currentTime&&currentTime < 24) {
	   document.body.style.backgroundColor = "#401F41";
	   document.getElementById("clockDisplay").style.color = "#8464A5";
	   document.getElementById("dateDisplay").style.color = "#8464A5";
	   document.getElementById("morningclouds").style.display = "none";
	   document.getElementById("dayclouds").style.display = "none";
	   document.getElementById("eveningclouds").style.display = "none";
      }
}

backgroundColor();
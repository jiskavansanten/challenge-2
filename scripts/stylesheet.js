
// Zorgt ervoor dat de tekst groter wordt
var tijd = new TimelineMax();
tijd.to('#txt', 3, {fontSize: 80});

//Zorgt voor een bewegende ster

TweenLite.to("#ster", 10, {x: 980});

//geeft de tijd weer

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();    
    var s = today.getSeconds();
    
    m = checkTime(m);
    s = checkTime(s);
    
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;

 //Zorgt ervoor dat de achtergrond veranderd en dat de tekst GOOD DAY zegt
    if (h > 6 && h < 18) { 
        document.getElementById("day").innerHTML = "GOOD DAY";   
        document.getElementsByTagName('html')[0].style.backgroundImage = "url(' images/sky.jpg')";

    }

    //Zorgt voor de nacht achtergrond en dat de tekst GOOD NIGHT zegt
    else if (h > 19 && h < 5) {
        document.getElementById("night").innerHTML = "GOOD NIGHT"; 
        document.getElementsByTagName('html')[0].style.backgroundImage = "url(' images/backgroundnight.jpg')";

    }

    //zorgt voor de datum
    var t = setTimeout(startTime, 1000);
}

    function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }  // add zero in front of numbers < 10
    
    return i;
}

            
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!

            var yyyy = today.getFullYear();
            if(dd<10){
                dd='0'+dd;
            }
            if(mm<10){
                mm='0'+mm;
            }
            var today = dd+' '+'/'+' '+mm+' '+'/'+' '+yyyy;
            document.getElementById('date').innerHTML = today;





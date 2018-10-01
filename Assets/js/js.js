$(document ).ready(function() {

    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    let progression = 1;
    function progress() 
    {
        
        $('#myBar').width(progression+"%");
        let add=100/1000;
        if(progression >= 99) {
            //clearInterval(progress);
            console.log('done');
            progression=0;
        } else
        {
            progression += 1;
        } 
        //console.log(round(progression,2));

    }
    time=3000;
    progress = setInterval(progress, time/100);
    $('.carousel').carousel({
        interval: time
      });

    
});
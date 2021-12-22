 //таймер до окочания акции
 function timer(){
    let today = new Date();
    Hour_today = today.getHours();
    Minute_today = today.getMinutes();
    Seconds_today = today.getSeconds();
    let end_sale = new Date();
    end_sale.setHours(16, 0, 0);
    Hour_sale = end_sale.getHours();
    Minute_sale = end_sale.getMinutes();
    Seconds_sale = end_sale.getSeconds();
    let diffetentHours = (Hour_sale) - Hour_today;
    let differentMinutes = (60-Minute_sale) - Minute_today;
    let differentSeconds = (60 - Seconds_sale) - Seconds_today;
    if (diffetentHours<0){
        diffetentHours=0;
    }
    if (diffetentHours<0 && differentMinutes <0){
        differentMinutes = 0;
    }
    if (diffetentHours<0 && differentMinutes <0 && differentSeconds <0 ){
        differentSeconds = 0;
    }
    if (Hour_today<=Hour_sale && Minute_today<=Minute_sale && Seconds_today<=Seconds_sale ){
        document.getElementById('timer').innerHTML=`<p>Акция подошла к концу</p>`
        clearInterval(interval_timer);
    }
    else {

    document.getElementById('timer').innerHTML=`<p>Часов ${diffetentHours} Минут ${differentMinutes} Секунд ${differentSeconds}</p>`
    }

 }

 let interval_timer=setInterval(timer,1000);
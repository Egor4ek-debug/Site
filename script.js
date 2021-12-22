//Приветствие в зависмости от времени
let Data = new Date();

let Hour = Data.getHours();

let div = document.getElementById('Hello');

if (Hour > 3 && Hour<=8){
    div.innerHTML=`<span style = "color: white; text-transform: uppercase; font-size: 25px">Доброго утра</span>`;
}
else if (8<Hour && Hour<=14){
    div.innerHTML=`<span style = "color: white; text-transform: uppercase; font-size: 25px">Доброго дня</span>`;
}
else if (14<Hour && Hour<=18){
    div.innerHTML=`<span style = "color: white; text-transform: uppercase; font-size: 25px">Добрый вечер</span>`;
}
else {
    div.innerHTML=`<span style = "color: white; text-transform: uppercase; font-size: 25px">Доброй ночи</span>`;
}
//Вывод времени, проведённого пользователем на сайте.
let seconds = 0;
let minutes  = 0;

function clock(){
    seconds ++;
    if (seconds == 60){
        minutes ++;
        seconds = 0;
    }
    stl = minutes + ':' + seconds;
    document.getElementById('clock').innerHTML = `<p>Вы на сайте уже</p>`+stl+`<p>минут/секунд</p>`;
}

setInterval(clock,1000);
//Вывод текущего времени
function time(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds
    
    stl=hours + ':' + minutes + ':' + seconds;
    document.getElementById('time').innerHTML=`<p>Текущее время</p>`+stl;
    }
    setInterval(time, 1000);

 
//Получение и вывод координат пользователя
let button = document.getElementById('getLocation');
button.innerHTML = `<button>Узнай свои координаты</button>`
button.addEventListener('click',()=>{
    navigator.geolocation.getCurrentPosition(getLocation);
})
function getLocation(position) {
    var latidude=position.coords.latitude;
    var longitude=position.coords.longitude;
    document.getElementById('getLocation').innerHTML =`<p>"Широта "</p>` + latidude + `<br>` ;
    document.getElementById('getLocation').innerHTML =`<p>"Долгота "</p>`+ longitude +`<br>` ;
    alert("Широта"+latidude+ ' '+ "Долгота"+ longitude)
    setTimeout(function(){
        newWin.close();
    },20000);
 }
//Игра в "Угадай число"
place_play = document.getElementById('play_time');
place_play.innerHTML = `<button>Хочешь поиграть?</button>`

place_play.addEventListener('click',()=>{
    alert('Угадай цифру,которую я загадал (от 1 до 5)')
    max = 5;
    min = 0;
    let k = Math.floor(Math.random()* (max - min + 1)+ min);
    let p = parseInt( prompt("Введите число"));
    while( p != k){
        if (p < k){
            p = parseInt( prompt("Мало взял"));
        }
        else{
            p = parseInt( prompt("Много взял"));
    }
 }
 alert("Да, ты угадал! Загаданным число было " + k)
})

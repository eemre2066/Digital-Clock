function getTime(){


const saat = document.querySelector(".saat");
const dakika = document.querySelector(".dakika");
const saniye = document.querySelector(".saniye");
const gün = document.querySelector(".gün");


const tarih = new Date();
let hour = tarih.getHours();
let minute = tarih.getMinutes();
let seconds = tarih.getSeconds();
let day = tarih.toLocaleDateString();


(hour < 10) ? saat.innerHTML = ` 0${hour} ` :
    saat.innerHTML = hour;

(minute < 10) ? dakika.innerHTML = ` 0${minute} ` :
    dakika.innerHTML = minute;

(seconds < 10) ? saniye.innerHTML = ` 0${seconds} ` : // oldugumuz saatteki saniye saat dakika 10 dan kücük mü
    saniye.innerHTML = seconds;                       // kücükse 0 ekle değilse normal yazdır


    gün.innerHTML=day;
}
setInterval(function(){getTime();},1000) //1000 millisaniye de bir yani 1 saniye de 1 fonksiyonu calıştır.
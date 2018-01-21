$(function(){
  setInterval(
    function showClock(){
      var nowTime = new Date();
      var nowHour = nowTime.getHours();
      var nowMin  = nowTime.getMinutes();
      var nowSec  = nowTime.getSeconds();
      if (nowSec < 10){ nowSec = '0' + nowSec}
      var msg = nowHour + ":" + nowMin + ":" + nowSec;
      $('header').text(msg);
    }
  ,1000);

});


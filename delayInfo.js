//画面ロード時に電車遅延情報を取得する
//使用APIについては下記ページを参照。自由に利用可能とのこと
//https://rti-giken.jp/fhc/api/train_tetsudo/
$(function(){

  var targetLine = "京急線";  //取得したい路線の情報を入れること

  var x = $.ajax({
    url: "https://rti-giken.jp/fhc/api/train_tetsudo/delay.json",
    dataType: "json",
    type: "GET"
  })
  .done(function(json){
    console.log("der")
    var flg = 0;
    for (var i = 0; i < json.length; i++){
      if (json[i].name === targetLine){
        $("#delayInfo").append('<p>' + targetLine + " is delayed." +'</p>');
        flg += 1;
      }
    }
    if (flg === 0) {
      $("#delayInfo").append('<p>' + targetLine + " is on schedule." +'</p>');
    }
  })
  .fail(function(){
    $("#delayInfo").append('<p>' + "HTTP ERROR." +'</p>');
  })

});

//天気情報を取得する
//使用APIリファレンス : http://weather.livedoor.com/weather_hacks/webservice
$(function(){

  var targetAreaId = "130010";  //取得したい地域のID
  var baseUrl      = "http://weather.livedoor.com/forecast/webservice/json/v1?city="
  var url          = baseUrl + targetAreaId;

  $.ajax({
    url: url,
    type: "GET"
  })
  .done(function(resp){
      var html = '';
      html += '<tr class="tblHead">';
      html += '<td class="tblHead">' + 'dateLabel' + '</td>';
      html += '<td class="tblHead">' + 'date' + '</td>';
      html += '<td class="tblHead">' + 'telop' + '</td>';
      html += '<td class="tblHead">' + 'min' + '</td>';
      html += '<td class="tblHead">' + 'max' + '</td>';
      html += '</tr class="tblHead">';
      $("#weatherInfo").append(html);

    for (var i = 0; i < json.forecasts.length; i++){
      var html = '';
      html += '<tr>';
      html += '<td>' + json.forecasts[i].dateLabel + '</td>';
      html += '<td>' + json.forecasts[i].date + '</td>';
      html += '<td>' + json.forecasts[i].telop + '</td>';
       if (json.forecasts[i].temperature.min !== null) {
         html += '<td>' + json.forecasts[i].temperature.min.celsius + '℃' + '</td>';
         html += '<td>' + json.forecasts[i].temperature.max.celsius + '℃' + '</td>';
       }
       else {
         html +='<td>' + "-" + '</td>';
         html +='<td>' + "-" + '</td>';
       }
      html += '</tr>';
      $("#weatherInfo").append(html);

       // $("#weatherInfo").append('<tr>');
       // $("#weatherInfo").append('<td>' + json.forecasts[i].dateLabel + '</td>');
       // $("#weatherInfo").append('<td>' + json.forecasts[i].date + '</td>');
       // $("#weatherInfo").append('<td>' + json.forecasts[i].telop + '</td>');
       // if (json.forecasts[i].temperature.min !== null) {
       //   $("#weatherInfo").append('<td>' + json.forecasts[i].temperature.min.celsius + '</td>');
       //   $("#weatherInfo").append('<td>' + json.forecasts[i].temperature.max.celsius + '</td>');
       // }
       // else {
       //   $("#weatherInfo").append('<td>' + "-" + '</td>');
       //   $("#weatherInfo").append('<td>' + "-" + '</td>');
       // }
       // $("#weatherInfo").append('</tr>');
    }
  })
  .fail(function(){
    console.log("通信失敗");
      $("#weatherInfo").append('HTTP ERROR.');
  })

});

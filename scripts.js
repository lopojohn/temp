function tempCon(){
  var fahrenheit,celsius;
  fahrenheit=document.Temp.fahrenheit.value;
  celsius=(fahrenheit-32) * (5/9);
  document.Temp.celsius.value=parseFloat(celsius);
}

console.log("hej")

startTime()

function startTime(){
  var today =new Date ()
  var h =today.getHours()
  var m = today.getMinutes()
  var s = today.getSeconds()
  h = checkTime(h)
  m = checkTime(m)
  s = checkTime(s)

  $("#klocka").html(h + ":"  +m + ":" +s)

  setTimeout(startTime, 500)
}

function checkTime(number){
  if (number<10) {
      number="0"+number
  }
  return number
}

function startBomb (){
  var bombSekunder = 11
  tick(bombSekunder)
}

function tick(bombSekunder){
  bombSekunder=bombSekunder-1

setTimeout(function(){
  if(bombSekunder===0){
      $("#bomb").html("Nu har ett monster ätit upp dig. :(")
    }
else {
    tick(bombSekunder)
    if(bombSekunder>1){$("#bomb").html("Du har "+ bombSekunder+" sekunder kvar..." )
  }
  else {
  $("#bomb").html("Du har "+ bombSekunder+" sekund kvar..." )
  }
  }
}, 1000)

}

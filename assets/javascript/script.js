var nineAmEvent = document.getElementById("nineAm")
var nineAmBtn = document.getElementById("9amBtn")
var tenAmEvent = document.getElementById("tenAm")
var tenAmBtn = document.getElementById("10amBtn")
var elevenAmEvent = document.getElementById("elevenAm")
var elevenAmBtn = document.getElementById("11amBtn")
var twelveAmEvent = document.getElementById("twelvePm")
var twelvePmBtn = document.getElementById("12pmBtn")
var onePmEvent = document.getElementById("onePm")
var onePmBtn = document.getElementById("1pmBtn")
var twoPmEvent = document.getElementById("twoPm")
var twoPmmBtn = document.getElementById("2pmBtn")
var threePmEvent = document.getElementById("threePm")
var threePmBtn = document.getElementById("3pmBtn")
var fourPmvent = document.getElementById("fourPm")
var fourPmBtn = document.getElementById("4pmBtn")
var fivePmEvent = document.getElementById("fivePm")
var fivePmBtn = document.getElementById("5pmBtn")
var nineAmSavedEvent = "";


function timeHandler() {
  setInterval(function (){
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss"));
  }, 1000);
}

timeHandler();

var time = $(".hour");

$.each(time, function (){
  var currentHour = moment().format("h:mm:ss");
  var hourId = $(this).attr("id");
  if(hourId === currentHour) {
    $(this).next().addClass("present");
  } else if (hourId < currentHour) {
    $(this).next().addClass("past");
  } else if (hourId > currentHour) {
    $(this).next().addClass("future");
  }
});


nineAmBtn.addEventListener("click", function () {
  var nineAmSavedInput = nineAmEvent.value;
  localStorage.setItem("nineAmSavedInput", JSON.stringify(nineAmSavedInput));
  nineAmSavedEvent= JSON.parse(localStorage.getItem("nineAmSavedInput"));
  
});

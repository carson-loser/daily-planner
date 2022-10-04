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





function timeHandler() {
  setInterval(function (){
    $("#currentDay").text(moment().format("MMMM Do YYYY, H:mm:sssZ a"));
  }, 1000);
}

timeHandler();

var currentHour = moment().format("HH");
console.log(currentHour);

var hourBadge = $(".hour");

$.each(hourBadge, function (){
  var hourId = $(this).attr("id");
  if(hourId === currentHour) {
    $(this).next().addClass("present");
  } else if (hourId < currentHour) {
    $(this).next().addClass("past");
  } else if (hourId > currentHour) {
    $(this).next().addClass("future");
  }
});

function saveEvents(event) {
  var plannerInput = event.target.parentElement.previousElementSibling.children[0].value
  var idName = event.target.attribute.id
  console.log(idName)
  localStorage.setItem(idName, plannerInput)
};

$(".saveBtn").on("click", saveEvents)

// nineAmBtn.addEventListener("click", function (){
//   var nineAmSavedInput = nineAmEvent.value;
//   localStorage.setItem("nineAmSavedInput", JSON.stringify(nineAmSavedInput));
//   nineAmEvent.value = JSON.parse(localStorage.getItem("nineAmSavedInput"));
// });

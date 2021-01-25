$(document).ready(function() {
  let renderTime = function() {
    $('#currentDay').text(moment().format('LLLL'));
  }
  renderTime();
  //update the time every second
  setInterval(renderTime, 1000);

  moment();

  // Shows the date
  let date = moment().format("dddd, MMMM Do");
  $("#currentDay").text(date);

  // gets current time
  let currentTime = moment().hours();

  // Checks if time-block is past, present, future
  $(".textarea").each(function (i) {
    if (currentTime === i + 9) {
      $(this).addClass("present");
    } else if (currentTime > i + 9) {
      $(this).addClass("past");
    } else if (currentTime < i + 9) {
      $(this).addClass("future");
    }
  });

  // Check local storage
  renderInputs();

  function renderInputs() {
    for (let i = 9; i < 18; i++) {
      value = localStorage.getItem(i);
      $("#hour-" + i).val(value);
    }
  }

  // Stores text input
  $(".saveBtn").on("click", function () {
    value = $(this).siblings(".textarea").val().trim();
    time = $(this).siblings(".hour").attr("id");
    localStorage.setItem(time, value);
    renderInputs();
  });
});
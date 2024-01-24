// Select all elements with the class 'time-block'
var timeblocks = $('.time-block');

// Get the current hour using dayjs
var currentHour = dayjs().hour();

// Function to colorize time blocks based on the current hour
function colourTimeBlocks() {
  timeblocks.each(function (index, element) {
    // Extract the hour text and convert it to an integer
    var hourText = $(this).find('.hour').text();
    var hour = parseInt(hourText);

    // Select the textarea within the current time block
    var textarea = $(this).find('.description');

    // Toggle classes based on the comparison with the current hour
    textarea.toggleClass('past', hour < currentHour);
    textarea.toggleClass('present', hour === currentHour);
    textarea.toggleClass('future', hour > currentHour);
  });
}

// Function to save event data to local storage
function saveEvent() {
  // Get the value of the textarea and the associated hour key
  var textareaValue = $(this).siblings('.description').val();
  var hourKey = $(this).siblings('.hour').text().trim();

  // Save the data to local storage
  localStorage.setItem(hourKey, textareaValue);
}

// Function to show saved events by retrieving data from local storage
function showSavedEvents() {
  timeblocks.each(function (index, element) {
    // Get the hour key associated with the current time block
    var hourKey = $(this).find('.hour').text().trim();

    // Retrieve the value from local storage using the hour key
    var value = localStorage.getItem(hourKey);

    // Set the retrieved value in the textarea of the current time block
    $(this).find('.description').val(value);
  });
}

// Call saveEvent function on click of elements with class 'saveBtn'
$('.saveBtn').on('click', saveEvent);

// Call functions to initialize the page
colourTimeBlocks();
showSavedEvents();

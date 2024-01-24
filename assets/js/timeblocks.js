var timeblocks = $('.time-block');
var currentHour = dayjs().hour();

function colourTimeBlocks() {
  timeblocks.each(function (index, element) {
    var hourText = $(this).find('.hour').text();
    var hour = parseInt(hourText);

    var textarea = $(this).find('.description');

    textarea.toggleClass('past', hour < currentHour);
    textarea.toggleClass('present', hour === currentHour);
    textarea.toggleClass('future', hour > currentHour);
  });
}

function saveEvent() {
  var textareaValue = $(this).siblings('.description').val();
  var hourKey = $(this).siblings('.hour').text().trim();

  localStorage.setItem(hourKey, textareaValue);
}

function showSavedEvents() {

}

colourTimeBlocks();

$('.saveBtn').on('click', saveEvent);
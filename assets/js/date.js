// Extend Day.js with the advancedFormat plugin
dayjs.extend(window.dayjs_plugin_advancedFormat);

// Get the current date and format it using the advanced format
var currentDate = dayjs().format('dddd, MMMM Do');

// Update the text content of the HTML element with id 'currentDay'
$("#currentDay").text(currentDate);

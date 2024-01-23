dayjs.extend(window.dayjs_plugin_advancedFormat);
var currentDate = dayjs().format('dddd, MMMM Do');
$("#currentDay").text(currentDate);

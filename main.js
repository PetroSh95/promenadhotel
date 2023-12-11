/* Nav icon */
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
}



// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input)=>{
	input.addEventListener('input', ()=>{
		if (input.value == '+') input.value = '';
	})
	input.addEventListener('blur', ()=>{
		if (input.value == '+') input.value = '';
	})
});


/*Дата*/

$(function () {

	$("#datepicker").datepicker();
	
});


$(function (factory) {
	"use strict";

	if (typeof define === "function" && define.amd) {

		// AMD. Register as an anonymous module.
		define(["../widgets/datepicker"], factory);
	} else {

		// Browser globals
		factory(jQuery.datepicker);
	}
})


var dates = $("#from, #to").datepicker({
	onSelect: function (selectedDate) {
		var option = this.id == "from" ? "minDate" : "maxDate",
			instance = $(this).data("datepicker"),
			date = $.datepicker.parseDate(
				instance.settings.dateFormat || $.datepicker._defaults.dateFormat,
				selectedDate, instance.settings);
		dates.not(this).datepicker("option", option, date);
	}
});

var dateToday = new Date();
$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Пред',
	nextText: 'След',
	currentText: 'Сегодня',
	monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
		'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
	monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
		'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
	dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
	dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
	dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	weekHeader: 'Нед',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

$('#ps_second_input_from').datepicker({
	changeMonth: true,
	changeYear: true,
	maxDate: dateToday,
	onSelect: function (selectedDate) {
		$("#ps_second_input_to").datepicker("option", "minDate", selectedDate);
	},
});



$('#ps_second_input_to').datepicker({
	changeMonth: true,
	changeYear: true,
	maxDate: dateToday,
	onSelect: function (selectedDate) {
		$("#ps_second_input_from").datepicker("option", "maxDate", selectedDate);
	},
});

$(document).ready(function () {

	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Спасибо за вашую заявку, наш менеджер с вами скоро свяжется!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
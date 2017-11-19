"use strict";

let eventRecords = [];

const KEY_WORDS = {
  WORDS: ['DTSTART', 'DTEND', 'SUMMARY', 'CHECKIN', 'CHECKOUT', 'NIGHTS', 'PHONE', 'EMAIL', 'PROPERTY'],
  SUBSTRING: [19, 17, 8, 9, 10, 8, 7, 7, 10]
};

function printResult() {
  var columns = [];
  columns.push({field: 'id',			title: 'ID',			sortable: true});
  columns.push({field: 'start',			title: 'START',			sortable: true,	 formatter:"DateFormatter"});
  columns.push({field: 'end',			title: 'END',			sortable: true,	 formatter:"DateFormatter"});
  columns.push({field: 'reservation',	title: 'RESERVATION',	sortable: true});
  columns.push({field: 'name',			title: 'NAME',			sortable: true});
  columns.push({field: 'checkin',		title: 'CHECKIN',		sortable: true,	 formatter:"DateFormatter"});
  columns.push({field: 'checkout',		title: 'CHECKOUT',		sortable: true,	 formatter:"DateFormatter"});
  columns.push({field: 'nights',		title: 'NIGHTS',		sortable: true});
  columns.push({field: 'phone',		    title: 'PHONE',			sortable: true,	 formatter:"PhoneFormatter"});
  columns.push({field: 'email',		    title: 'EMAIL',			sortable: true,	 formatter:"EmailFormatter"});
  columns.push({field: 'property',		title: 'PROPERTY',		sortable: true});
  $('#table_result').bootstrapTable('destroy').bootstrapTable({
    columns: columns,
    data: eventRecords
  });
}

function DateFormatter(value, row, index) {
  if (!value) return '';
  var date = new Date(value);
  return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
}
function PhoneFormatter(value, row, index) {
  if (!value) return '';
  return '<a href="phone:' + value + '">' + value + '</a> | <a target="_blank" href="https://api.whatsapp.com/send?phone=' + value.replace("+","").replace(/\s/g,'').replace(/\)/g,'') + '">WA</a>';
}

function EmailFormatter(value, row, index) {
  if (!value) return '';
  if (value && value.indexOf('@') > 0) {
    return '<a href="mailto:' + value + '">send email</a>';
  } else {
    return value;
  }
}

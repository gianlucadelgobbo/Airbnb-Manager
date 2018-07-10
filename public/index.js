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
function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    printResult(parse(contents));
    //displayContents(contents);
  };
  reader.readAsText(file);
}

/*function displayContents(contents) {
  var element = document.getElementById('file-content');
  element.textContent = contents;
}
*/
document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);

function parse(result) {
  const KEY_WORDS = {
    WORDS: ['DTSTART', 'DTEND', 'SUMMARY', 'CHECKIN', 'CHECKOUT', 'NIGHTS', 'PHONE', 'EMAIL', 'PROPERTY'],
    SUBSTRING: [19, 17, 8, 9, 10, 8, 7, 7, 10]
  };

  eventRecords = [];
  var str = result.replace(new RegExp('\n ', 'g'), '');
  str = str.replace(new RegExp('DESCRIPTION:CHECKIN', 'g'), 'CHECKIN');
  str = str.replace(new RegExp('nNIGHTS: ', 'g'), ' NIGHTS: ').replace(new RegExp('\\ NIGHTS: ', 'g'), '\nNIGHTS: ');
  str = str.replace(new RegExp('nNIGHTS: ', 'g'), ' NIGHTS: ').replace(new RegExp('\\ NIGHTS: ', 'g'), '\nNIGHTS: ');
  str = str.replace(new RegExp('nPHONE: ', 'g'), ' PHONE: ').replace(new RegExp('\\ PHONE: ', 'g'), '\nPHONE: ');
  str = str.replace(new RegExp('nEMAIL: ', 'g'), ' EMAIL: ').replace(new RegExp('\\ EMAIL: ', 'g'), '\nEMAIL: ');
  str = str.replace(new RegExp('nCHECKOUT: ', 'g'), ' CHECKOUT: ').replace(new RegExp('\\ CHECKOUT: ', 'g'), '\nCHECKOUT: ');
  str = str.replace(new RegExp('nPROPERTY: ', 'g'), ' PROPERTY: ').replace(new RegExp('\\ PROPERTY: ', 'g'), '\nPROPERTY: ');
  str = str.replace(new RegExp('\ ', 'g'), ' ');
  var input = str.split('BEGIN:VEVENT');
  for (let i = 0; i < input.length; i++) {
    let _keywordIndex = 0;
    let tempArray = {};
    var tempBooking = input[i].split('\n');
    for (let n = 0; n < tempBooking.length; n++) {
      for (let _keywordIndex = 0; _keywordIndex < KEY_WORDS.WORDS.length; _keywordIndex++) {
        if (tempBooking[n].match('^' + KEY_WORDS.WORDS[_keywordIndex])) {
          if (KEY_WORDS.WORDS[_keywordIndex] == 'SUMMARY') {
            var titleA = tempBooking[n].substring(KEY_WORDS.SUBSTRING[_keywordIndex]).split(' (');
            tempArray['NAME'] = titleA[0];
            if (titleA[1]) tempArray['RESERVATION'] = titleA[1].replace(")", "");
          } else {
            tempArray[KEY_WORDS.WORDS[_keywordIndex]] = tempBooking[n].substring(KEY_WORDS.SUBSTRING[_keywordIndex]).replace("\\n", "").replace("\\", "");
          }
        }
      }
    }
    if (tempArray['RESERVATION']) eventRecords.push(parse2(tempArray));
    _keywordIndex = 0;
    tempArray = [];
  }
  return eventRecords;
}
function parse2(obj) {
  var eventRecord = {};
  eventRecord.id = eventRecords.length;
  eventRecord.name = obj.NAME.trim();
  eventRecord.reservation = obj.RESERVATION.trim();
  eventRecord.start = obj.DTSTART.trim();
  //eventRecord.start = eventRecord.start.substring(6,8)+"/"+eventRecord.start.substring(4,6)+"/"+eventRecord.start.substring(0,4);
  eventRecord.start = new Date(eventRecord.start.substring(0, 4), eventRecord.start.substring(4, 6) - 1, eventRecord.start.substring(6, 8)).getTime();
  eventRecord.end = obj.DTEND.trim();
  //eventRecord.end = eventRecord.end.substring(6,8)+"/"+eventRecord.end.substring(4,6)+"/"+eventRecord.end.substring(0,4);
  eventRecord.end = new Date(eventRecord.end.substring(0, 4), eventRecord.end.substring(4, 6) - 1, eventRecord.end.substring(6, 8)).getTime();
  if (obj.CHECKIN) {
    eventRecord.checkin = obj.CHECKIN.trim().replace('\\', '');
    //eventRecord.checkin = eventRecord.checkin.substring(3,5)+"/"+eventRecord.checkin.substring(0,2)+"/"+eventRecord.checkin.substring(6,10);
    eventRecord.checkin = new Date(eventRecord.checkin.substring(6, 10), eventRecord.checkin.substring(0, 2) - 1, eventRecord.checkin.substring(3, 5)).getTime();
    //eventRecord.order = parseInt(eventRecord.checkin.substring(6,10)+eventRecord.checkin.substring(3,5)+eventRecord.checkin.substring(0,2));
  } else {
    //eventRecord.order = 0;
    eventRecord.checkin = '';
  }
  if (obj.CHECKOUT) {
    eventRecord.checkout = obj.CHECKOUT.trim().replace('\\', '');
    //eventRecord.checkout = eventRecord.checkout.substring(3, 5) + "/" + eventRecord.checkout.substring(0, 2) + "/" + eventRecord.checkout.substring(6, 10);
    eventRecord.checkout = new Date(eventRecord.checkout.substring(6, 10), eventRecord.checkout.substring(0, 2) - 1, eventRecord.checkout.substring(3, 5)).getTime();
  } else {
    eventRecord.checkout = '';
  }
  if (obj.NIGHTS) {
    eventRecord.nights = obj.NIGHTS.trim().replace('\\', '');
  } else {
    eventRecord.nights = '';
  }
  if (obj.PHONE) {
    eventRecord.phone = obj.PHONE.trim().replace('\\', '');
  } else {
    eventRecord.phone = '';
  }
  if (obj.EMAIL) {
    eventRecord.email = obj.EMAIL.trim().replace('\\', '');
  } else {
    eventRecord.email = '';
  }
  if (obj.PROPERTY) {
    eventRecord.property = obj.PROPERTY.trim().replace('\\', '');
  } else {
    eventRecord.property = '';
  }
  return eventRecord;
}
"use strict";

let eventRecords = [];

const KEY_WORDS = {
  WORDS: ['DTSTART', 'DTEND', 'SUMMARY', 'CHECKIN', 'CHECKOUT', 'NIGHTS', 'PHONE', 'EMAIL', 'PROPERTY'],
  SUBSTRING: [19, 17, 8, 9, 10, 8, 7, 7, 10]
};

$(function() {
  $('#input_url').click(function(e) {
    var val = $('#input_url_path').val();
    console.log(val);
    if (val){
      $.get(val,{
      },function (data){
        parse(data);
        printResult();
      });

    }
  });
  $('#input_file').change(function(e) {
      /*$('#div_download').empty();
       $('#div_result_file_name').empty();
       $('#div_result_table').empty();*/

    const INPUT_FILE = e.target.files[0];
    if (INPUT_FILE === null) {
      return;
    }
    $('#input_file_path').val(INPUT_FILE.name);
    /*$('#input_file_path').append('ICS Airbnb Calendar：' + INPUT_FILE.name + '<hr/>');*/

    let fileReader = new FileReader();
    fileReader.readAsText(INPUT_FILE);
    fileReader.onload = function() {
      parse(fileReader.result);
      printResult();
    };
  });
});

function parse(result) {
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
            if (titleA[1]) tempArray['RESERVATION'] = titleA[1].replace(")","");
          } else {
            tempArray[KEY_WORDS.WORDS[_keywordIndex]] = tempBooking[n].substring(KEY_WORDS.SUBSTRING[_keywordIndex]).replace("\\n","").replace("\\","");
          }
        }
      }
    }
    if (tempArray['RESERVATION']) eventRecords.push(new EventRecord(tempArray));
    _keywordIndex = 0;
    tempArray = [];
  }

}
class EventRecord {
  constructor(obj) {
    this.id = eventRecords.length;
    this.name = obj.NAME.trim();
    this.reservation = obj.RESERVATION.trim();
    this.start = obj.DTSTART.trim();
    //this.start = this.start.substring(6,8)+"/"+this.start.substring(4,6)+"/"+this.start.substring(0,4);
    this.start = new Date(this.start.substring(0,4), this.start.substring(4,6), this.start.substring(6,8)).getTime();
    this.end = obj.DTEND.trim();
    //this.end = this.end.substring(6,8)+"/"+this.end.substring(4,6)+"/"+this.end.substring(0,4);
    this.end = new Date(this.end.substring(0,4), this.end.substring(4,6), this.end.substring(6,8)).getTime();
    if (obj.CHECKIN) {
      this.checkin = obj.CHECKIN.trim().replace('\\', '');
      //this.checkin = this.checkin.substring(3,5)+"/"+this.checkin.substring(0,2)+"/"+this.checkin.substring(6,10);
      this.checkin = new Date(this.checkin.substring(6, 10), this.checkin.substring(0, 2), this.checkin.substring(3, 5)).getTime();
      //this.order = parseInt(this.checkin.substring(6,10)+this.checkin.substring(3,5)+this.checkin.substring(0,2));
    } else {
      //this.order = 0;
      this.checkin = '';
    }
    if (obj.CHECKOUT) {
      this.checkout = obj.CHECKOUT.trim().replace('\\', '');
      //this.checkout = this.checkout.substring(3, 5) + "/" + this.checkout.substring(0, 2) + "/" + this.checkout.substring(6, 10);
      this.checkout = new Date(this.checkout.substring(6, 10), this.checkout.substring(0, 2), this.checkout.substring(3, 5)).getTime();
    } else {
      this.checkout = '';
    }
    if (obj.NIGHTS) {
      this.nights = obj.NIGHTS.trim().replace('\\', '');
    } else {
      this.nights = '';
    }
    if (obj.PHONE) {
      this.phone = obj.PHONE.trim().replace('\\', '');
    } else {
      this.phone = '';
    }
    if (obj.EMAIL) {
      this.email = obj.EMAIL.trim().replace('\\', '');
    } else {
      this.email = '';
    }
    if (obj.PROPERTY) {
      this.property = obj.PROPERTY.trim().replace('\\', '');
    } else {
      this.property = '';
    }

  }
}

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
  return '<a href="phone:' + value + '">' + value + '</a>';
}

function EmailFormatter(value, row, index) {
  if (!value) return '';
  if (value && value.indexOf('@') > 0) {
    return '<a href="mailto:' + value + '">send email</a>';
  } else {
    return value;
  }
}

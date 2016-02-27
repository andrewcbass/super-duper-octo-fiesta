'use strict';

$(document).ready(init);

var $display;
var operator = 0;

function init() {
$display = $('#display');

  $('.num').click(clickNum);
  $('#neg').click(negNum);
  $('#clear').click(clearClick);
  $('#percent').click(percentClick);
  $('#decimal').click(decimalClick);
  $('.operator').click(operatorClick);
  $('#equals').click(equalsClick);
  $(document).on('keypress', keyPressed);
}


function clickNum() {
  var num = $(this).html()
  addNumtoDisplay(num);
}

function addNumtoDisplay(num) {
  var curDis = $display.text();

    if ($display.text() === '0') {
      $display.text(num);
    }
    else if (operator === 0) {
      $display.text(curDis + num);
    }
    else {
      $display.text(curDis + num);
    }
}

function clearClick() {
  $('#display').text(0);
  operator = 0;
}

function negNum() {
  var curDis = $display.text();
  $display.text(curDis * -1);
}

function percentClick() {
  var curDis = $display.text();
  $display.text(curDis / 100);
}

function decimalClick() {
  var curDis = $display.text();
  if(curDis.split('.').length === 1) {
    $display.text(curDis + '.');
  }  
}

function operatorClick(event) {
  operator = $(this).attr('id');
  var curDis = $display.text();
  $('#display').text(0);

  switch(operator) {
    case 'add':
      operator = curDis + '+';
      return operator;
      break;

    case 'subtract':
      operator = curDis + '-';
      return operator;
      break;

    case 'multiply':
      operator = curDis + '*';
      return operator;
      break;

    case 'divide':
      operator = curDis + '/';
      return operator;
      break;
  }

}

function equalsClick() {
  var curDis = Number($display.text());
  var strTest = operator.toString();
  console.log(strTest);
  if (strTest.length > 1) { //if has operator
    var num = operator.split('');
    var op = num.pop();
    num = Number(num.join(''));

    var solved;

    switch(op) {
      case '+':
        solved = num + curDis;
        break;

      case '-':
        solved = num - curDis;
        break;

      case '*':
        solved = num * curDis;
        break;

      case '/':
        solved = num / curDis;
        break;
    }
    $('#display').text(solved);
    operator = 1;
  }  
}



function keyPressed(event) {
  var curDis = $display.text();
  var key = String.fromCharCode(event.charCode);

  if($.isNumeric(key)) {
    addNumtoDisplay(key);
  }

  if(key === 'c') {
    clearClick();
  }

  if(key === '.') {
    decimalClick();
  }

  if(key === '%') {
    percentClick();
  }

  if(key === '=') {
    equalsClick();
  }

  else {
    if (key === '+') {
      operator = curDis + '+';
      $('#display').text(0);
      return operator;
    }

    if (key === '-') {
      operator = curDis + '-';
      $('#display').text(0);
      return operator;
    }
    
    if (key === '/') {
      operator = curDis + '/';
      $('#display').text(0);
      return operator;
    }

    if (key === '*') {
      operator = curDis + '*';
      $('#display').text(0);
      return operator;
    }
  }



}

// case 'add':
//       operator = curDis + '+';
//       return operator;
//       break;


















//hold

Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key))
}

var errors = localStorage.getObj("errorkey");
if (errors == null)
	{
		errors = [];
		localStorage.setObj("errorkey", errors);
	}



function logInd() {

  var userId = document.querySelector("#username-field").value;
  if (userId == "lærer") {
    window.location.href = "laerer.html";
  } else if (userId == "pedel") {
    window.location.href = "pedel1.html";
  } else {
    document.querySelector('#login-error-msg').style.display = 'block';
  }
}


var tempRange = ["tempRange0", "tempRange1", "tempRange2"];
var tempDemo = ["tempDemo0", "tempDemo1", "tempDemo2"];
var ventRange = ["ventRange0", "ventRange1", "ventRange2"];
var ventDemo = ["ventDemo0", "ventDemo1", "ventDemo2"];

function sliderFunctionTemp() {
  var equal = true;
  var lastDigit = 0;
  var Average = 0;
  for (var i = 0; i < tempRange.length; i++) {
    var slider = document.getElementById(tempRange[i]);
    var output = document.getElementById(tempDemo[i]);
    output.innerHTML = slider.value / 10 + "°C";
    if (i != 0) {
      if (lastDigit != slider.value) {
        equal = false;
      }
    }
    lastDigit = slider.value;
    Average += slider.value / tempRange.length;
  }
  if (equal == true) {
    document.querySelector(".Tempslider").style.backgroundColor = 'rgba(103, 98, 224, 1)';
  } else {
    document.querySelector(".Tempslider").style.backgroundColor = 'rgba(103, 98, 224, 0.2)';
    var masterslider = document.getElementById("tRangeMaster");
    var masteroutput = document.getElementById("tdemoMaster");
    masterslider.value = Average;
    masteroutput.innerHTML = masterslider.value / 10 + "°C";
  }
}


function sliderFunctionVent() {
  var equal = true;
  var lastDigit = 0;
  var Average = 0;
  for (var i = 0; i < ventRange.length; i++) {
    var slider = document.getElementById(ventRange[i]);
    var output = document.getElementById(ventDemo[i]);
    output.innerHTML = slider.value + "%";
    if (i != 0) {
      if (lastDigit != slider.value) {
        equal = false;
      }
    }
    lastDigit = slider.value;
    Average += slider.value / ventRange.length;

  }
  if (equal == true) {
    document.querySelector(".Ventslider").style.backgroundColor = 'rgba(103, 98, 224, 1)';
  } else {
    document.querySelector(".Ventslider").style.backgroundColor = 'rgba(103, 98, 224, 0.2)';
    var masterslider = document.getElementById("vRangeMaster");
    var masteroutput = document.getElementById("vdemomaster");
    masterslider.value = Average;
    masteroutput.innerHTML = masterslider.value + "%";
  }
}


function masterSliderTemp() {
  var masterslider = document.getElementById("tRangeMaster");
  var output = document.getElementById("tdemoMaster");
  output.innerHTML = masterslider.value / 10 + "°C";

  for (var i = 0; i < tempRange.length; i++) {
    var sliderTemp = document.getElementById(tempRange[i]);
    sliderTemp.value = masterslider.value;
  }
  sliderFunctionTemp();
  sliderFunctionVent();
}

function masterSliderVent() {
  var masterslider = document.getElementById("vRangeMaster");
  var output = document.getElementById("vdemomaster");
  output.innerHTML = masterslider.value + "%";

  for (var i = 0; i < ventRange.length; i++) {
    var sliderVent = document.getElementById(ventRange[i]);
    sliderVent.value = masterslider.value;
  }
  sliderFunctionTemp();
  sliderFunctionVent();
}

function sliderLoad() {
  masterSliderTemp();
  masterSliderVent();
}

function ToggleFunction() {
  var anyOn = false;
  var items = document.getElementsByName('acs');
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == 'checkbox') {
      var checkboxparent = items[i].parentNode.parentNode.parentNode.parentNode;
      if (items[i].checked == true) {
        checkboxparent.style.backgroundColor = '#FFFD00';
        checkboxparent.querySelector('.nydiv').style.color = 'black';
        checkboxparent.querySelector('.oprindelig').style.color = 'black';
        checkboxparent.querySelector('.nydiv').style.display = 'block';
        anyOn = true;
      } else {
        checkboxparent.style.backgroundColor = 'black';
        checkboxparent.querySelector('.nydiv').style.color = 'white';
        checkboxparent.querySelector('.oprindelig').style.color = 'white';
        checkboxparent.querySelector('.nydiv').style.display = 'none';
      }
    }
  }
  if (anyOn == true) {
    document.querySelector('.controlAll').style.display = 'block';
  } else {
    document.querySelector('.controlAll').style.display = 'none';
  }
}

function selectAll() {
  var items = document.getElementsByName('acs');
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == 'checkbox')
      items[i].checked = true;

  }
  ToggleFunction();
}

function UnSelectAll() {
  var items = document.getElementsByName('acs');
  for (var i = 0; i < items.length; i++) {
    if (items[i].type == 'checkbox')
      items[i].checked = false;

  }
  ToggleFunction();
}

function deleteButton(position) {
  errors = localStorage.getObj("errorkey");
  //liste.removeChild(liste.childNodes[x]);
  errors.splice(position, 1);
  localStorage.setObj("errorkey", errors);
  loadErrors(true);
}

function loadErrors(Buttons) {
  errors = localStorage.getObj("errorkey");
  var liste = document.querySelector('.fejl-ul');

  liste.innerHTML = "";
	
  for (var i = 0; i < errors.length; i++) {
    var textElement = document.createElement('li');
    textElement.innerHTML = errors[i];
    if (Buttons == true) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      textElement.appendChild(span);
    }
    liste.appendChild(textElement);

    var close = document.getElementsByClassName("close");
    for (let x = 0; x < close.length; x++) {
      close[x].onclick = function () {
        deleteButton(x);
      }
    }
  }
}

function ErrorListTeacher() {
  errors = localStorage.getObj("errorkey");
  var inputElement = document.querySelector('#emne-field')
  var inputValue = inputElement.value
  var inputField = document.querySelector('#besked-field')

  if (inputElement.value != "") {
    var liste = document.querySelector('.fejl-ul')

    var textElement = document.createElement('li')

    textElement.innerHTML = inputValue;
    liste.appendChild(textElement)
	
    errors.push(inputValue);
    localStorage.setObj("errorkey", errors);
  }
  inputElement.value = "";
  inputField.value = "";

}

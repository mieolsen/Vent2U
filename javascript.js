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


var tempRange = ["myRange0", "myRange2", "myRange4"];
var tempDemo = ["demo0", "demo2", "demo4"];
var ventRange = ["myRange1", "myRange3", "myRange5"];
var ventDemo = ["demo1", "demo3", "demo5"];


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
//masterSliderTemp();
//masterSliderVent();

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

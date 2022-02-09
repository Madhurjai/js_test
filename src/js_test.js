function myfunc() {
  var name = document.getElementById('name').value
  var mobile = document.getElementById('mobile').value
  var name1 = document.getElementById('name1')
  var mobile1 = document.getElementById('mobile1')
  var letters = /^[A-Za-z]+$/
  var numbers = /^[0-9]+$/
  if (name == '') {
     if (mobile == '') {
      document.getElementById('name').style.border = '2px solid red'
      document.getElementById('mobile').style.border = '2px solid red'
      name1.innerHTML = 'pls enter  name'
      mobile1.innerHTML = 'pls enter number'
    }
    else if (!mobile.match(numbers)) {
      document.getElementById('name').style.border = '2px solid red'
      document.getElementById('mobile').style.border = '2px solid red'
      name1.innerHTML = 'pls enter  name'
      mobile1.innerHTML = 'pls enter correct number'
    }
   else if (mobile.length != 10) {
      document.getElementById('name').style.border = '2px solid red'
      document.getElementById('mobile').style.border = '2px solid red'
      name1.innerHTML = 'pls enter  name' ;
      mobile1.innerHTML = 'number is incorrect' ;
    } else {
      document.getElementById('name').style.border = '2px solid red'
      name1.innerHTML = 'pls enter  name' ;
    }
    console.log(mobile.length);
  }
  else if (mobile == '') {
    if (name == '') {
      document.getElementById('name').style.border = '2px solid red'
      document.getElementById('mobile').style.border = '2px solid red'
      name1.innerHTML = 'pls enter  name'
      mobile1.innerHTML = 'enter mobile no'
    }
    else if (!name.match(letters)) {
      document.getElementById('name').style.border = '2px solid red'
      document.getElementById('mobile').style.border = '2px solid red'
      name1.innerHTML = 'pls enter correct name'
      mobile1.innerHTML = 'enter mobile number'
    } else {
      document.getElementById('mobile').style.border = '2px solid red'
      mobile1.innerHTML = 'enter mobile number'
    }
  }
 else if (!name.match(letters)) {
    if (!mobile.match(numbers)) {
      document.getElementById('name').style.border = '2px solid red'
      document.getElementById('mobile').style.border = '2px solid red'
      name1.innerHTML = 'pls enter correct name'
      mobile1.innerHTML = 'enter correct  mobile number'
    }
    else if (mobile.length > 10 || mobile.length < 10) {
      document.getElementById('name').style.border = '2px solid red'
      document.getElementById('mobile').style.border = '2px solid red'
      name1.innerHTML = 'pls enter correct name'
      mobile1.innerHTML = 'length is invalid'
    } else {
      document.getElementById('name').style.border = '2px solid red'
      name1.innerHTML = 'pls enter correct name'
    }
  }
 
}

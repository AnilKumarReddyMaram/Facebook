let arr = document.getElementsByTagName("LI");
for (let i = 0; i < arr.length; i++) {
  let span = document.createElement("SPAN");
  let symbol = document.createTextNode("\u00D7");
  span.appendChild(symbol);
  span.className = "close";
  arr[i].appendChild(span);
}

let arr1 = document.getElementsByClassName("close");
for (let i = 0; i < arr1.length; i++) {
  arr1[i].onclick = function() {
    let clicked_element = this.parentElement;
    clicked_element.style.display = "none";
  }
}

let ul = document.querySelector('ul');
ul.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);


function newElement() {
    let li = document.createElement("li");
    let data = document.getElementById("myInput").value;
    let textNode = document.createTextNode(data);
    li.appendChild(textNode);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    let span = document.createElement("SPAN");
    let symbol = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(symbol);
    li.appendChild(span);
  
    for (i = 0; i < arr1.length; i++) {
      arr1[i].onclick = function() {
        let ele = this.parentElement;
        ele.style.display = "none";
      }
    }
}
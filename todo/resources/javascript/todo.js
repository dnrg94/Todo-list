/* No pude usar esta funcion no se porque, tuve que escribir el codigo sin funcion 
		en donde dice !!!AQUI!!!
function count() {
	let myNodeList = document.querySelectorAll("li");
	let items = myNodeList.length;
	document.getElementById("myItems").innerHtml = items + " items";
}
*/

//Esta funcion crea una elemento "span" que funciona como boton para eliminar
//la lista donde esta el span 
function remove(element) {
	let span = document.createElement("SPAN");
	let x = document.createTextNode("\u00D7");
	span.className = "remove";
	span.appendChild(x);
	element.appendChild(span);
	let remove = document.getElementsByClassName("remove");
	for (let i = 0; i < remove.length; i++) {
		remove[i].onclick = function() {
			let list = this.parentElement;
			list.parentNode.removeChild(list);
			//!!!AQUI!!!
			let myNodelist = document.querySelectorAll("li");
			let items = myNodelist.length;
  			document.getElementById("myItems").innerHTML = items + " items";
		}
	}
}

//Esta funcion crea una elemento "li" nuevo con el valor del input 
function add() {
	let inputValue = document.getElementById("myInput").value;
	let li = document.createElement("li");
	let text = document.createTextNode(inputValue);
	li.appendChild(text);
	if (inputValue !== "") {
		document.getElementById("myList").appendChild(li)
	}
	document.getElementById("myInput").value = "";
	remove(li);
	//!!!AQUI!!!
	let myNodelist = document.querySelectorAll("li");
	let items = myNodelist.length;
  	document.getElementById("myItems").innerHTML = items + " items";
}

function filter(event) {
	let listElem = document.querySelectorAll("li");
	let all = document.getElementById("all");
	let active = document.getElementById("active");
	let completed = document.getElementById("completed");

	if (event.id == "active") {
		all.className = "btn";
		completed.className = "btn";
		active.className = "btn active";
		for (let i = 0; i < listElem.length; i++) {
			listElem[i].style.display = "block";
			if (listElem[i].className === "checked") {
				listElem[i].style.display = "none";
			}
		}
	} else if (event.id == "completed") {
		all.className = "btn";
		active.className = "btn";
		completed.className = "btn active";
		for (let i = 0; i < listElem.length; i++) {
			listElem[i].style.display = "block";
			if (listElem[i].className !== "checked") {
				listElem[i].style.display = "none";
			}
		}
	} else {
		completed.className = "btn";
		active.className = "btn";
		all.className = "btn active"
		for (let i = 0; i < listElem.length; i++) {
			listElem[i].style.display = "block";
		}
	}
}

//Esto hace que cada vez que le des click a una lista se cambie el color de fondo 
//y que se ponga una linea en el texto
let list = document.getElementById("myList");
list.addEventListener("click", function(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("checked");
	}
});


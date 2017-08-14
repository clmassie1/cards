console.log('hello');

let createButton = document.getElementById("CreateBtn");
let input = document.getElementById("textInput");
let something = document.getElementById("something");

createButton.addEventListener("click", createCard);

function createCard() {
    let textValue = input.value;
    let divEl = document.createElement("div");
    
    let deleteBtn = document.createElement("button"); 
   
   let textNote = document.createTextNode("Delete");

    divEl.innerHTML = `<h1>Happy Birthday!!</h1><h3>${textValue}</h3>`
        deleteBtn.appendChild(textNote);
        divEl.appendChild(deleteBtn);
        something.appendChild(divEl);
    
        deleteBtn.addEventListener("click", function(event){
            console.log('event', event.target);
            clickedEvent = event.target;
            clickedEvent.parentNode.remove();
        });

};





    
    
    





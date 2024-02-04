"use strict";
const inputData = document.querySelector(".add-item");
const buttonAction = document.querySelector("#add-item-action");
const clearAll = document.querySelector("#clearAll");
const mainContainer = document.querySelector(".main-container");
buttonAction.addEventListener('click', () => {
    const value = inputData.value;
    if (value != "") {
        console.log(value);
        mainContainer.insertAdjacentHTML('beforeend', `<div>
        ${value} <button class="singleItem"> &times; </button>
        </div>`);
    }
    else {
        console.log("error : please enter a value");
    }
});
const singleItem = document.querySelector(".singleItem");
mainContainer.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('singleItem')) {
        clickedElement.parentElement?.remove();
    }
});
clearAll.addEventListener('click', () => {
    if (mainContainer.children.length === 0) {
        console.log("nothing to delete");
    }
    else {
        mainContainer.innerHTML = "";
    }
});

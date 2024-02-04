const inputData = document.querySelector(".add-item") as HTMLInputElement;
const buttonAction = document.querySelector("#add-item-action") as HTMLButtonElement;
const clearAll = document.querySelector("#clearAll") as HTMLButtonElement;
const mainContainer = document.querySelector(".main-container") as HTMLDivElement;

buttonAction.addEventListener('click',()=>{
    const value:string = inputData.value;
    if(value != "" ){
        console.log(value);
        mainContainer.insertAdjacentHTML('beforeend',
        `<div>
        ${value} <button class="singleItem"> &times; </button>
        </div>`
        );
    }else{
        console.log("error : please enter a value");
    }
});

const singleItem = document.querySelector(".singleItem") as HTMLDivElement;

mainContainer.addEventListener('click', (event) => {
    const clickedElement = event.target as HTMLElement;
    if (clickedElement.classList.contains('singleItem')) {
        clickedElement.parentElement?.remove();
    }
});

clearAll.addEventListener('click',()=>{
    if(mainContainer.children.length === 0){
        console.log("nothing to delete");
    }else{
        mainContainer.innerHTML = "";
    }
});
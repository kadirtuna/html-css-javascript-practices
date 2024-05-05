let input_task_DOM = document.querySelector("#task");
let ul_list_DOM = document.querySelector("#list");
let div_live_toast_success_DOM = document.querySelector("#live_toast_success");   
let div_live_toast_error_DOM = document.querySelector("#live_toast_error");
let div_live_toast_remove_DOM = document.querySelector("#live_toast_remove");
let div_live_toast_button_add_DOM = document.querySelector("#live_toast_button_add");
let div_live_toast_button_remove_DOM = document.querySelector("#live_toast_button_remove");
let counter = 0;

div_live_toast_button_add_DOM.addEventListener("click", newElement);
div_live_toast_button_remove_DOM.addEventListener("click", removeElement);

function newElement(){
    removeWarnings();
    div_live_toast_success_DOM.classList.contains("toast") ? div_live_toast_success_DOM.classList.remove("toast") : null;

    if (input_task_DOM.value === ""){
        div_live_toast_error_DOM.classList.remove("toast");
        !div_live_toast_success_DOM.classList.contains("toast") ? div_live_toast_success_DOM.classList.add("toast") : null;
    }
    else 
    {
        let li_DOM = document.createElement("li");
        li_DOM.id = `element${counter}`
        li_DOM.innerHTML = `
        <p id="input_element${counter}">${input_task_DOM.value}</p>`
        ul_list_DOM.appendChild(li_DOM);

        li_DOM.addEventListener("click", () => {
            li_DOM.classList.contains("checked") ? li_DOM.classList.remove("checked") :  li_DOM.classList.add("checked");
        });

        counter++;;
    }
}

function removeElement(){
    removeWarnings();

    let li_DOMs = document.querySelectorAll("li.checked");

    if(li_DOMs.length === 0){
        alert("Please select an element to remove.");
    }
    else {
        div_live_toast_remove_DOM.classList.contains("toast") ? div_live_toast_remove_DOM.classList.remove("toast") : null;

        li_DOMs.forEach((li_DOM) => li_DOM.remove());
        counter--;
    }
}

function removeWarnings(){
    !div_live_toast_error_DOM.classList.contains("toast") ? div_live_toast_error_DOM.classList.add("toast") : null;
    !div_live_toast_success_DOM.classList.contains("toast") ? div_live_toast_success_DOM.classList.add("toast") : null;
    !div_live_toast_remove_DOM.classList.contains("toast") ? div_live_toast_remove_DOM.classList.add("toast") : null;
}

{/* <li>3 Litre Su İç</li>
<li>Ödevleri Yap</li>
<li>En Az 3 Saat Kodlama Yap</li>
<li>Yemek Yap</li>
<li>50 Sayfa Kitap Oku</li> */}
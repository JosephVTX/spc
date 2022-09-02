const btnSubmit = document.querySelector("#btn-submit")
const form = document.querySelector(".content-item");
const formInputs = document.querySelectorAll(".form__item>input")

const thankTitle = document.querySelector(".form__thank");

btnSubmit.addEventListener("click", () =>{


    let name = formInputs[0].value;

    thankTitle.textContent = `Gracias ${name} hemos recibido tu respuesta`
    form.classList.add("hide")
    form.style.display = "none"
    document.querySelector(".form__thank").removeAttribute("hidden")
    document.querySelector(".form").classList.add("fm-height")
})
const main = document.querySelector(".card1");
const thanksContent = document.querySelector(".card2");
const submitButton = document.querySelector(".submit");
const startAgainButton = document.querySelector(".start-again");
const rating = document.querySelector("#rating")
const rates = document.querySelectorAll(".numbers-content")

submitButton.addEventListener("click", ()=>{
    thanksContent.classList.remove("hidden")
    main.style.display="none"
});

startAgainButton.addEventListener("click", ()=>{
    thanksContent.classList.add("hidden")
    main.style.display="block"
   
})

rates.forEach((rate)=>{
    rate.addEventListener("click", () =>{
        console.log(rate.innerHTML)
        rating.innerHTML = rate.innerHTML
    })
})

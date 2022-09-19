const btns = document.querySelectorAll('.btn');
const textValue =document.querySelector("#value-here");


btns.forEach( (btn) => {
     btn.addEventListener("click",() =>{
       btn.style.backgroundColor= "hsl(25, 97%, 53%)";

       textValue.innerHTML = `You selected ${btn.value} out of 5`;
     });
   
});

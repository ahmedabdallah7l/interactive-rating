const rating = document.getElementsByClassName("rate")
const button = document.getElementById("btn")
const mainPage = document.querySelector(".main")
const ratePage = document.querySelector(".thank")
const ThankRate = document .querySelector(".thankRate")
let value =0;
const rateAgain = document.querySelector("#rateAgain")
for(let i = 0 ; i<rating.length; i++)
{
 rating[i].addEventListener("click", ()=>
 {
   value =rating[i].innerHTML;
   for (const rate of rating) {
       rate.classList.remove("active")
   }
   rating[i].classList.add("active")
 })
}

button.addEventListener("click", ()=>
{
   mainPage.style.display="none"
   ratePage.style.display="block"
   ThankRate.innerHTML= value;
   value = 0;
})


rateAgain.addEventListener("click" , ()=>
{
 mainPage.style.display="block"
 ratePage.style.display="none"
 for (const rate of rating) {
  rate.classList.remove("active")
}
})


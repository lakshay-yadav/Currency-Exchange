const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select")
const button = document.querySelector("form button")
let from = document.querySelector(".from select")
let to = document.querySelector(".to select")
let msg = document.querySelector(".msg")

// for(let select of dropdowns){
//     for(code in countryList){
//         let newOPtion = document.createElement("option")
//         newOPtion.innerText = code
//         newOPtion.value = code
//         select.append(newOPtion)
//     }
// }

button.addEventListener("click",async (e)=>{
    e.preventDefault()
    console.log("button clicked")
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value

    if(amtVal==='' || amtVal<1)
        amtVal =1

    const URL = `${BASE_URL}/${from.value.toLowerCase()}/${to.value.toLowerCase()}.json`
    let response = await fetch(URL)
    let data = await response.json()

    // console.log(data)
    let rate = data[to.value.toLowerCase()]

    msg.innerText = `${amtVal} ${from.value} = ${rate} ${to.value}`

})
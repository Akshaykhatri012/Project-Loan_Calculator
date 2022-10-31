
let calculate = document.getElementById('Calculate')
let reset =  document.getElementById("Reset")

calculate.addEventListener("click",()=>{
    
    let principle = parseInt(document.getElementById('Principle').value)
    let time = parseInt(document.getElementById('Time').value)
    time=time*12;
    let rate = parseFloat(document.getElementById('Rate').value)
    rate = rate/12/100;

    let emi = document.getElementById('Emi')
    let interest = document.getElementById('Int')
    let amount = document.getElementById('Amt')
    
    // creating text space for after eventlistener events
    let emiP = document.createElement('label')
    let interestP = document.createElement('label')
    let amountP = document.createElement('label')
    
//  assingning value to emi, interest, amount
    interestP.innerHTML = Math.round((time*(principle*rate*(((1+rate)**time)/(((1+rate)**time)-1))))-principle)
    amountP.innerHTML =  Math.round(time*(principle*rate*(((1+rate)**time)/(((1+rate)**time)-1))))
    emiP.innerHTML = Math.round(principle*rate*(((1+rate)**time)/(((1+rate)**time)-1)))
    
  
    emi.appendChild(emiP)
    interest.appendChild(interestP)
    amount.appendChild(amountP)

reset.addEventListener("click",()=>{
    emi.removeChild(emiP)
    interest.removeChild(interestP)
    amount.removeChild(amountP)
 })
})
 

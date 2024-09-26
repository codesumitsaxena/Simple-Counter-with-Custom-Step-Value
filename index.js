const increment = document.querySelector('.increment-btn')
const decrement = document.querySelector('.decrement-btn')
const count = document.querySelector('.count')
const stepValue = document.querySelector('#stepValue')
const reset = document.querySelector('.reset')

increment.addEventListener('click',function(){
    let countName = parseInt(count.textContent)
    let stepValuee = parseInt(stepValue.value)
    count.textContent = countName + stepValuee
})


decrement.addEventListener('click',function(){
    let countName = parseInt(count.textContent)
    let stepValuee = parseInt(stepValue.value)
    count.textContent = countName - stepValuee
})

reset.addEventListener('click',function(){
    count.textContent = 0;
})
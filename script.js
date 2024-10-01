//this is my logic======>

// let rand = Math.floor(Math.random()*100 + 1)  
// let inputNum = document.querySelector('#num')
// let submitBtn = document.querySelector('.submit-btn')
// let result = document.querySelector('.result')
// let reset = document.querySelector('.reset-btn')
// let allGuesses = document.querySelector('.your-guesses')
// let myGuesses = []

// submitBtn.addEventListener('click', (e) => {
//     myGuesses.push(parseInt(inputNum.value))
//     allGuesses.innerText = `your guesses: ${myGuesses}`

//     if (rand < parseInt(inputNum.value)) {
//         result.innerText = 'Too High...'
//         inputNum.focus()
//     } else if(rand > parseInt(inputNum.value)){
//         result.innerText = 'Too Low...'
//         inputNum.focus()
//     } else if(rand === parseInt(inputNum.value)){
//         result.innerText = `hurray! you guessed it right - ${rand} was the number`
//     }
//     inputNum.value = ''
// })

// reset.addEventListener('click', () => {
//     location.reload()
// })


// experienced logic==========> 
let inputNum = document.querySelector('#num')
let form = document.querySelector('form')
let result = document.querySelector('.result')
let reset = document.querySelector('.reset-btn')
let submitBtn = document.querySelector('.submit-btn')
let allGuesses = document.querySelector('.your-guesses');

(()=> {
    let rand = Math.round(Math.random() * 100)
    let myGuesses = []
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        myGuesses.push(parseInt(inputNum.value))
        allGuesses.innerText = `your guesses: ${myGuesses.join(', ')} `
    
        if (rand < parseInt(inputNum.value)) {
            result.innerText = 'Too High...'
        } else if (rand > parseInt(inputNum.value)) {
            result.innerText = 'Too Low...'
        } else{
            result.innerText = `hurray! you guessed it right - ${rand} was the number`
            reset.disabled  = false
            submitBtn.disabled = true
        }
        inputNum.value = ''
    })
    
    reset.addEventListener('click', () => {
        myGuesses = []
        allGuesses.innerText = ''
        result.innerText = ''
        submitBtn.disabled = false
        reset.disabled  = true
        rand = Math.round(Math.random() * 100)
    })
})()
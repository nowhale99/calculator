let input = document.querySelector('.input')
let onlyNumbers = true
let firstNumber = null
let secondNumber = null
let operator_ = ''

function finalExpression(firstNumber, secondNumber, operator){
    let result
    if (operator === '+'){
        result = parseInt(firstNumber)+parseInt(secondNumber)
    } else if (operator_ === '-'){
        result = parseInt(firstNumber)-parseInt(secondNumber)
    } else if (operator_ === '/'){
        result = parseInt(firstNumber)/parseInt(secondNumber)
    } else if (operator_ === '*'){
        result = parseInt(firstNumber)*parseInt(secondNumber)
    } else if (operator_ === '%'){
        result = parseInt(firstNumber)/100*parseInt(secondNumber)
    } else if (operator_ === '^'){
        result = parseInt(firstNumber)**parseInt(secondNumber)
    }

    return result
}
function equality(){
    input.textContent = finalExpression(firstNumber, secondNumber, operator_)
    firstNumber = input.textContent
    secondNumber = null
    operator_ = ''
}
//Clearing functions

function deleteElement(){
    input.textContent = input.textContent.slice(0, -1)
    if (secondNumber!=null){
        secondNumber.slice(0, -1)
    } else if(input.textContent.charAt(-1)===operator_){
        operator_=''
        onlyNumbers = false
    } else {
        firstNumber = firstNumber.slice(0, -1)
    }
    
}
function clearAll(){
    input.textContent = 0
    firstNumber = 0
    secondNumber = 0
    operator_ = ''
}



function number(number){
    if (operator_===''){

        if(input.textContent==0){
            input.textContent=''
        }
        input.textContent+=number
        firstNumber = input.textContent
        if(input.length>27){
            firstNumber = 0
        }

    } else {
        input.textContent+=number
        secondNumber = input.textContent.slice(firstNumber.length+1)
        if(input.textContent.length>27){
            firstNumber = 0
        }
    }



    onlyNumbers = false
    
}



document.querySelectorAll('.numberBtn').forEach(button=>{
    button.addEventListener('click', ()=>number(button.textContent))
})


document.querySelectorAll('.operator').forEach(operator=>{
    operator.addEventListener('click', ()=>{

        if(operator_===''){

            if (!onlyNumbers){
                firstNumber = input.textContent
                operator_ = operator.textContent
                input.textContent+=operator.textContent
                onlyNumbers = true
                
                
            } else {
                input.textContent = input.textContent.slice(0, -1)
                operator_ = operator.textContent
                input.textContent+=operator.textContent
                onlyNumbers = true
            }


        }else {

            equality()

            if (!onlyNumbers){
                firstNumber = input.textContent
                operator_ = operator.textContent
                input.textContent+=operator.textContent
                onlyNumbers = true
                
                
            } else {
                input.textContent = input.textContent.slice(0, -1)
                operator_ = operator.textContent
                input.textContent+=operator.textContent
                onlyNumbers = true
            }

        }


        
    })
})






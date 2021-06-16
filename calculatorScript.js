/*
First, set the array with the button and 
its styles 
*/
const buttonsArray = [
    { value:'7' },
    { value:'8' },
    { value:'9' },
    { value:'DEL', id:'DEL', style:'DelButton' },
    { value:'4' },
    { value:'5' },
    { value:'6' },
    { value:'+', id:'+' },
    { value:'1' },
    { value:'2' },
    { value:'3' },
    { value:'-', id:'-' },
    { value:'.' },
    { value:'0' },
    { value:'/', id:'/' },
    { value:'X', id:"*" },
    { value:'RESET', id:'RESET', style: 'ResetButton'},
    { value: '=', id:"=", style: 'EqualsButton'}
]

//========== ADDING BUTTONS TO GRID ==========//

const padGrid = document.querySelector('.Calculator__Pad--Grid');

for(let i = 0; i<buttonsArray.length; i++){
    let button = document.createElement('div')
    
    button.classList.add(buttonsArray[i].style || 'RegularButton');
    
    button.classList.add('Button');
    
    buttonsArray[i].id ? button.setAttribute("id", buttonsArray[i].id) 
    : button.setAttribute("id", buttonsArray[i].value)
    
    button.innerHTML=`<p>${buttonsArray[i].value}</p>`;
    padGrid.appendChild(button);
}
//========== CALCULATOR LOGIC ==========//

/*  
I need to set a boolean in order to know 
if the button input will concat with what it 
was written, or if what is displayed in the screen
is the result and will be overwritten 
*/

let willConcat = true;

let operation = '';
let result = '';
let operatorsNumber = 0;

let screenHistory = document.querySelector('.Calculator__Screen--History')
let screenCurrent = document.querySelector('.Calculator__Screen--Current')

const deleteButton = document.getElementById('DEL') 
const equalsButton = document.getElementById('=')
const resetButton = document.getElementById('RESET');

const regularButtons = [...document.querySelectorAll('.RegularButton')]
let operatorSimbols = ["+", "-", "*", "/"]

//========== HISTORY NUMBER INPUT ==========//
regularButtons.map((button) => button.addEventListener('click', 
(e) =>{
        //Taking the value of the button
        let id = button.id
        //Limiting the number of inputs to prevent overflow
        if(operation.length === 25 ){
            alert('You reached the limit of digits');
            return; 
        }
        //Checking if the button is an operator
        if(operatorSimbols.includes(id)){
            //Checking user doesnt add two operators in a row
            if(operatorSimbols.includes(operation[operation.length-1])){
                alert("You cannot add two operators ")
                return
            }
            //You can`t start an operation without a number first
            if(operation.length === 0) {
                alert("You need to input a number first");
                return
            }
            //Increments operatorsNumber variable. 
            //If it reaches 2 the result will we shown
            operatorsNumber++
            //Displaying the result
            if(operatorsNumber > 1) {
                try{
                    let result = eval(operation)
                    screenCurrent.innerHTML = `<h1>${result}</h1>`
                } catch {
                    
                    screenCurrent.innerHTML = `<h3>Error</h3>`
                }
            }
        }
        //Adding the input to the screen   
        operation = operation.concat(id)
        screenHistory.innerHTML = `<p>${operation}</p>`
    }
))

deleteButton.addEventListener('click', (e) => {
    if (operation.length > 0){
        operation = operation.slice(0, -1);
        screenHistory.innerHTML = `<p>${operation}</p>`
    }
})

equalsButton.addEventListener('click', (e) => {
    if (result.length > 0){
        operation = result;
        result = '';
        screenHistory.innerHTML = `<p>${operation}</p>`
        screenCurrent.innerHTML = `<h1>${result}</h1>`
    }
})

resetButton.addEventListener('click', (e) => {
    operation = '';
    result = '';
    screenHistory.innerHTML = `<p>${operation}</p>`
    screenCurrent.innerHTML = `<h1>${result}</h1>`
})
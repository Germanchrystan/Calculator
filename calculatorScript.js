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
    
    buttonsArray[i].id && button.setAttribute("id", buttonsArray[i].id)
    
    button.innerHTML=`<p>${buttonsArray[i].value}</p>`;
    padGrid.appendChild(button);
}
/*  
I need to set a boolean in order to know 
if the button input will concat with what it 
was written, or if what is displayed in the screen
is the result and will be overwritten 
*/
let willConcat = true;

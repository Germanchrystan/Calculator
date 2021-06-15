let themeNumber = 1;

const themedStyleSheet= document.getElementById('themeCSS')
const themeKnob = document.getElementById('themeKnob');
const themeKnobSlot = document.getElementById('themeKnobSlot');

function changeTheme(){
    if(themeNumber < 3) themeNumber ++
    else themeNumber = 1;

    themedStyleSheet.href =`theme${themeNumber}.css`

    switch(themeNumber){
        case 1: themeKnobSlot.style.justifyContent='flex-start'; break;
        case 2: themeKnobSlot.style.justifyContent='center'; break;
        case 3: themeKnobSlot.style.justifyContent='flex-end'; break;
        default: themeKnobSlot.style.justifyContent='flex-start'; break; 
    } 

}

themeKnob.addEventListener('click', (e) =>{ 
    //console.log("CLICK!")
    changeTheme()
});
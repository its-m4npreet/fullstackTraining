let display=document.getElementById("display");

function appendToDisplay(value){
    display.value+=value;
}

function calculate(){
    try{
        display.value=eval(display.value);
    }catch{
        display.value='Error';
        // display.style.backgroundColor="#ff5252";
        display.style.color="#ff5252";
    }
}


function clearDisplay(){
    display.value='';
};

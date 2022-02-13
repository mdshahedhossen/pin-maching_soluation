function getPin() {
    const pin=Math.round(Math.random()*10000);
    const pinString=pin+"";
    if(pinString.length==4){
        return pin;
    }
    else{
        // console.log('you get pin ',pin);
        return getPin();
    }
    
}

function genaratePin() {
    const pin=getPin();
    document.getElementById('display-pin').value=pin;
}

document.getElementById('key-pad').addEventListener('click',function (event) {
    const number=event.target.innerText;
    const calcInput= document.getElementById('clac-display');
    // console.log(number)
    if(isNaN(number)){
        if(number=='C'){
            calcInput.value='';
        }
    }
    else{
        
        const calcPreviousNumber=calcInput.value;
        const clacNewNumber=calcPreviousNumber+number;
        calcInput.value=clacNewNumber;

    }
    
});
function verifyPin() {
    const pin=document.getElementById('display-pin').value;
    const inputPin=document.getElementById('clac-display').value;
    //  Message
    const successMessage=document.getElementById('success-notify');
    const erroeMessage= document.getElementById('error-notify');

    if(pin==inputPin){
        successMessage.style.display='block';
        erroeMessage.style.display='none';
    }
    else{  
        erroeMessage.style.display='block';
        successMessage.style.display='none';
    }
    
}
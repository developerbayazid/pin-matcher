//Create four digit pin
function getPin(){
    const random = Math.random()*10000;
    const pin = (random + "").split('.')[0];
    if(pin.length === 4){
        return pin;
    }else{
        return getPin();
    }
}

//Display generated pin
function pinGenerator(){
    const pin = document.getElementById('pin-generate');
    pin.value = getPin();
}

document.querySelector('.calc-body').addEventListener('click', function(event) {
    const pinInput = event.target.innerText;
    if(isNaN(pinInput)){
        // 
        if(pinInput === 'C'){
            document.getElementById('pin-typed').value = '';
            pinMatchNotify('none', 'none');
        }
    }else{
        const pin =  document.getElementById('pin-typed');
        pin.value = pin.value + pinInput;
    }
});

//Verify Pin

function verifyPin(){
    const generatePin = document.getElementById('pin-generate');
    const submitPin =  document.getElementById('pin-typed');
    if(generatePin.value === submitPin.value){
        pinMatchNotify('block', 'none');
    }else{
        pinMatchNotify('none', 'block');
    }
}

function pinMatchNotify(correct, incorrect){
    document.getElementById('correct').style.display = correct;
    document.getElementById('incorrect').style.display = incorrect;
}
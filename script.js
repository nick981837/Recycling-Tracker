var wasteinput = document.getElementById('wasteinput');
var amountinput = document.getElementById('amountinput');
var whereinput = document.getElementById('whereinput')
var ul = document.querySelector('ul');
var button = document.getElementById('enter');



function createListElement(){
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(`${wasteinput.value}, ${amountinput.value}, ${whereinput.value}`));
	ul.appendChild(li);
	wasteinput.value= '';
	amountinput.value='';
	whereinput.value='';	
}




function wasteinputLength(){
	return wasteinput.value.length;
}

function amountinputLength(){
	return amountinput.value.length;
}

function whereLength(){
	return whereinput.value.length;
}



var tot = 0
function findTotal(){

        if (Number(amountinput.value > 0)){
            tot += (Number(amountinput.value))
                 }
        if (tot > 50){
        	alert('You are an earth protector!!!')
        }else {alert('Keep going!!!')
    }
          
    document.getElementById('total').value = tot;
        }



function addListAfterClick(){

	findTotal()
	if(wasteinputLength() && amountinputLength() && whereLength() >0) {
	createListElement()
	}

}





button.addEventListener('click',addListAfterClick);
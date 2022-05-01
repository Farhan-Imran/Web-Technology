const form = document.getElementById('form');
const form = document.getElementById('username');
const form = document.getElementById('email');
const form = document.getElementById('password');
const form = document.getElementById('password2');

//Show error message
function showError(input,message){
	const formControl = input.parentElement;
	formControl.className= 'form-Control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}
//Show succes Outline

function showSuccess(input){
	const formControl = input.parentElement;
	formControl.className 'form-Control success';
}
//Email validation

function invalidEmail(email){
		const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
			return re.test(String(email).toLowerCase());

}
//Check required
function checkRequired(inputArr){
		inputArr.forEach(function(input){
				if(input.value.trim()===(parameter) input: any
					showError(input, '${input.id} is required)'
						)
					else{
						showSuccess(input);
					}
		})

}
//Check input length
function checkLength(input, min, max){
		if (input.value.length < min) {

			showError(input,'${getFieldName(input)} must be at least $(min) characters');
		}
		else if(input.value.length > max) {
			showError(input, '${getFieldName(input)} must be less than ${max} characters ');
		}
		else{
			showSuccess(input);
		}


}
//Check password matchig
function checkPasswordMatch(input1,input2){

		if(input1.value!==input2.value){
			showError(input2, "password do not match");
		}


}


// Event listeners
form.addEventListener('submit',function(e){
	e.preventDefault();

	checkLength(username, 3, 15);
	checkLength(password, 6, 25);

	CheckEmail(email);
	checkPasswordMatch(password,password2);
})
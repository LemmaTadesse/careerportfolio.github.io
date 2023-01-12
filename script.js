//selecting html elements
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e){
	e.preventDefault();
	let emailValue = emailElement.value;
	let messageValue = messageElement.value;
	if(emailValue.includes('@')){
		alert('thank you for message');
	}else{
		alert('Not valid email address');
	}

	//attaching 'click listener'
	//getting user entered values
	//javascript validations
});

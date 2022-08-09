
const form = document.querySelector(".container form");
const  inputs = document.querySelectorAll (".container form input");

form.addEventListener('submit', function(e){
    e.preventDefault();
     inputs.forEach(function(input){
        if (!input.value) {
			input.classList.add('show');
		} else {
            input.classList.remove('show');
            if(input.type == 'email'){
                if (validateEmail(input.value)){
                    input.classList.remove('show');
                } else {
                    input.classList.add('show');
                }
            }
        }
    })

})



function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}













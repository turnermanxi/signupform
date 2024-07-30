const submitBtn = document.querySelector('button')
const passInput = document.querySelector('password')
const passValidate = document.querySelector('confirm_password')
const inputError = document.querySelector('input-error')

let submitBtnDisabled = false
function validatePassword() {
	if (passInput.value != passValidate.value) {
		inputError.style.visibility = 'visible'
		passValidate.setCustomValidity('Improper Input Value.')
		passValidate.setAttribute('invalid', '')
		submitBtn.setAttribute('disabled', true)
	} else {
		inputError.style.visibility = 'hidden'
		passValidate.setCustomValidity('')
		submitBtn.removeAttribute('disabled')
		submitBtnDisabled = false
	}
}

passValidate.addEventListener('input', validatePassword)
passInput.addEventListener('input', validatePassword)
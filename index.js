const btn = document.querySelector('.btn');
const username = document.querySelector('.username');
const password = document.querySelector('.password');

btn.disabled = true;
btn.style.color  = '#ffffff50'

btn.addEventListener("click", () => {
	location.href = 'books/books.html';	
})
username.addEventListener('input', buttonActivation);
password.addEventListener('input', buttonActivation);

function buttonActivation  ()  {
	if (username.value !== '' && password.value !== '') {
		btn.style.color  = '#03030398'
		btn.disabled = false;
	}
	else {
		btn.disabled = true;
		btn.style.color  = '#ffffff50'
	}
}
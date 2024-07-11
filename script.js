const ballImg = document.querySelector('.ball-img img')
const input = document.querySelector('.question-area input')
const answerText = document.querySelector('.answer')
const errorText = document.querySelector('.error')

const answersArray = [
	'Tak!',
	'Nie!',
	'Nigdy więcej o to nie pytaj!',
	'To zależy!',
	'Też zadaje sobie to pytanie...',
	'Chyba tak!',
	'Może!',
	'Tego to chyba nikt nie wie!',
	'Oczywiście!',
]

const generateRandomAnswer = answersArray => {
	errorText.textContent = ''
	const randomNumber = Math.floor(Math.random() * answersArray.length)
	answerText.innerHTML = `<span>Odpowiedź:</span> ${answersArray[randomNumber]}`
}

const inputCheck = inputValue => {
	if (inputValue === '') {
		errorText.textContent = 'Musisz zadać jakieś pytanie!'
	} else if (inputValue.at(-1) !== '?') {
		errorText.textContent = 'Pytanie musi być zakończone znakiem "?"'
	} else {
		generateRandomAnswer(answersArray)
	}
}

const handler = () => {
	ballImg.classList.add('shake-animation')
	inputCheck(input.value)
}

ballImg.addEventListener('click', handler)
ballImg.addEventListener('animationend', () => {
	ballImg.classList.remove('shake-animation')
})

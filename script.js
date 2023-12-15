//your JS code here. If required.
const counterElement = document.getElementById('counter');

const incrementButton = document.getElementById('incrementBtn');
let counter = 0 ;
function updateCounter() {
	counter++ ;
	counterElement.textContent = counter;
}
incrementButton.addEventListener('click' , updateCounter);
var keyboard = document.querySelector('.keyboard');
var typedLettersInput = document.getElementById('typed-letters');
var backspaceBtn = document.getElementById('backspace-btn');
var toggleCaseBtn = document.getElementById('toggle-case-btn');
var isUpperCase = false;
var spaceButton = document.querySelector('.space-bar');

keyboard.addEventListener('click', function(event) {
if (event.target.classList.contains('key')) {
    var key = event.target.textContent;
    typedLettersInput.value += isUpperCase ? key.toUpperCase() : key.toLowerCase();
}
});

backspaceBtn.addEventListener('click', function() {
    typedLettersInput.value = typedLettersInput.value.slice(0, -1);
});

toggleCaseBtn.addEventListener('click', function() {
    isUpperCase = !isUpperCase;
    toggleCaseBtn.textContent = isUpperCase ? "Aa" : "Aa";
    keyboard.classList.toggle('uppercase', isUpperCase);
});

spaceButton.addEventListener('click', function() {
    typedLettersInput.value += ' ';
});



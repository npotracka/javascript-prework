function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var computerMove, playerMove, set;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '');


var randomNumber;
<<<<<<< HEAD
randomNumber = Math.floor(Math.random() * (19-11) + 11);
printMessage('Wylosowana liczba to: ' + randomNumber);
// W poleceniu było liczby od 11 do 19. Tu mam problem, bo nie wiem jak to napisać. Logicznie należałoby zrobić jakiś przedział, ale jak to napisać w JavaScript 🤷‍♀️.
// Poprawione, musiałam podpytać Internety.

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
  computerMove = 'papier';
} else {
  computerMove = 'nożyce';
}
printMessage('Mój ruch: ' + computerMove);
=======
randomNumber = Math.floor(Math.random() * 19 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber); 
// W poleceniu było liczby od 11 do 19. Tu mam problem, bo nie wiem jak to napisać. Logicznie należałoby zrobić jakiś przedział, ale jak to napisać w JavaScript 🤷‍♀️.
>>>>>>> a083dccf6e9749f5a175a48da5a54423f62bd6eb

var randomNumber;
randomNumber = Math.floor(Math.random() * (19-11) + 11);
printMessage('Wylosowana liczba to: ' + randomNumber);
// W poleceniu było liczby od 11 do 19. Tu mam problem, bo nie wiem jak to napisać. Logicznie należałoby zrobić jakiś przedział, ale jak to napisać w JavaScript 🤷‍♀️.
// Poprawione, musiałam podpytać Internety.

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
  computerMove = 'papier';
} else {
  computerMove = 'nożyce';
}
printMessage('Mój ruch: ' + computerMove);
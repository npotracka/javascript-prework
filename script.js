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
randomNumber = Math.floor(Math.random() * 19 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber); 
// W poleceniu było liczby od 11 do 19. Tu mam problem, bo nie wiem jak to napisać. Logicznie należałoby zrobić jakiś przedział, ale jak to napisać w JavaScript 🤷‍♀️.

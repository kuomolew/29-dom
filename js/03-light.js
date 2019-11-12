// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

document.body.setAttribute('style', 'background-color:black;');
let ul = document.createElement('ul');
let liRed = document.createElement('li');
let liYellow = document.createElement('li');
let liGreen = document.createElement('li');
let button = document.createElement('button');
let text = 'Click!';

ul.setAttribute('style', 'width:10vw; margin:0 auto;');
liRed.setAttribute('style', 'margin-top:1vw; width:10vw; height:10vw; border-radius: 100%; background-color:white;');
liYellow.setAttribute('style', 'margin-top:1vw; width:10vw; height:10vw; border-radius: 100%; background-color:white;');
liGreen.setAttribute('style', 'margin-top:1vw; width:10vw; height:10vw; border-radius: 100%; background-color:white;');
button.setAttribute('style', 'position:absolute; bottom:0; left:50%; width:100px; height:50px;');
button.innerText = text;


document.body.appendChild(ul);
ul.appendChild(liRed);
ul.appendChild(liYellow);
ul.appendChild(liGreen);
document.body.appendChild(button);

let color = ['red', 'yellow', 'green', 'white'];

button.onclick = function() {
    
    
}

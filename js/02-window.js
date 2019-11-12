// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.



let button = document.createElement('button');
let hiddenButton = document.createElement('button');
let hiddenDiv = document.createElement('div');
let p = document.createElement('p');
let open = 'Open';
let close = 'Close';
let text = "There is some random text";


hiddenButton.setAttribute('style', 'position:absolute; top:50%; left:50%;');
p.setAttribute('style', 'width:80%; padding-top:20vh; margin:0 auto; color: white; font-size:30px; text-align:center');
button.innerText = open;
hiddenButton.innerText = close;
p.innerText = text;

button.onclick = function() {
   document.body.appendChild(hiddenDiv);
   hiddenDiv.appendChild(hiddenButton);
   hiddenDiv.appendChild(p);
   hiddenDiv.setAttribute('style', 'position:absolute; top:0; left:0; right:0; bottom:0; background-color:black;');
};

hiddenButton.onclick = function() {
    hiddenDiv.setAttribute('style', 'display:none;');
}

document.body.appendChild(button);

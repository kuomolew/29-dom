/*
1. Создать страницу, которая выводит нумерованный список песен:

*/


let playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
];

let ol = document.createElement('ol');
console.log(ol);

for (let i = 0; i < playList.length; i++) {
    let li = document.createElement('li');
    let html = `Author: ${playList[i].author} <br> Song: ${playList[i].song}`;
    li.innerHTML = html;

    ol.appendChild(li);
}
document.body.appendChild(ol);


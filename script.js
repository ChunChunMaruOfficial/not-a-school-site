let c;
if (window.innerWidth < 901) {
    c = 1
    wrp = 3
} else {
    c = 2;
    wrp = 5
}
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let formattedDate = day + "-" + month + "-" + year;

const options = { weekday: 'long' };
const dayOfWeek = new Date().toLocaleString('en-US', options);
document.querySelector('.date').innerHTML = dayOfWeek + " " + formattedDate;


for (let i = 0; i < 8; i++) {
    var clonedFrame = document.querySelector('.element').cloneNode(true);
    document.querySelector('#innercontainer').appendChild(clonedFrame);
    switch (i) {
        case 0:
            clonedFrame.children[0].children[0].style.backgroundImage = "url(img/icons/" + i + ".png)";
            clonedFrame.children[1].innerHTML = 'Вспомнить все. Помнить каждого.';
            clonedFrame.children[2].innerHTML = 'Example Example';
            break;
        case 1:
            clonedFrame.children[0].children[0].style.backgroundImage = "url(img/icons/" + i + ".png)";
            clonedFrame.children[1].innerHTML = 'Родительский университет';
            clonedFrame.children[2].innerHTML = 'Example Example';
            break;
        case 2:
            clonedFrame.children[0].style.backgroundColor = "#34a0f7"
            clonedFrame.children[0].children[0].style.backgroundImage = "url(img/icons/" + i + ".png)";
            clonedFrame.children[1].innerHTML = 'Профилактика противоправного поведения';
            clonedFrame.children[2].innerHTML = 'Example Example';
            break;
        case 3:
            clonedFrame.children[0].style.backgroundColor = "#34a0f7"
            clonedFrame.children[0].children[0].style.backgroundImage = "url(img/icons/" + i + ".png)";
            clonedFrame.children[1].innerHTML = 'Здоровое питание';
            clonedFrame.children[2].innerHTML = 'Example Example';
            break;
        case 4:
            clonedFrame.children[0].style.backgroundColor = "#34a0f7"
            clonedFrame.children[0].children[0].style.backgroundImage = "url(img/icons/" + i + ".png)";
            clonedFrame.children[1].innerHTML = 'Профориентация';
            clonedFrame.children[2].innerHTML = 'Example Example';
            break;
        case 5:
            clonedFrame.children[0].style.backgroundColor = "#776be0"
            clonedFrame.children[0].children[0].style.backgroundImage = "url(img/icons/" + i + ".png)";
            clonedFrame.children[1].innerHTML = 'Профсоюзный комитет';
            clonedFrame.children[2].innerHTML = 'Example Example';
            break;
        case 6:
            clonedFrame.children[0].style.backgroundColor = "#776be0"
            clonedFrame.children[0].children[0].style.backgroundImage = "url(img/icons/" + i + ".png)";
            clonedFrame.children[1].innerHTML = 'Школа активного гражданина';
            clonedFrame.children[2].innerHTML = 'Example Example';
            break;
        case 7:
            clonedFrame.children[0].style.backgroundColor = "#776be0"
            clonedFrame.children[0].children[0].style.backgroundImage = "url(img/icons/" + i + ".png)";
            clonedFrame.children[1].innerHTML = 'Твоя безопасность';
            clonedFrame.children[2].innerHTML = 'Example Example';
            break;
    }
}

for (let i = 0; i < c; i++) {
    var clonedFrame = document.querySelector('.extra>div').cloneNode(true);
    document.querySelector('.extra').appendChild(clonedFrame);

}


function clon(child, parent, count) {
    for (let i = 0; i < count; i++) {
        let clone = child.cloneNode(true)
        parent.appendChild(clone)
        if(count == 17){
            child.style.backgroundImage = 'url(img/slider/' + (i+1) +'.jpg)'
            console.log(i);
        }
    } 

}
clon(document.querySelector('.elem'), document.querySelector('.wrapper>div'), wrp)
clon(document.querySelector('.container_slider'), document.querySelector('.swiper_container'), 8)
clon(document.querySelector('.main_bunner'), document.querySelector('.mySwiper'), 17) //на 1 меньше, чем слайдов

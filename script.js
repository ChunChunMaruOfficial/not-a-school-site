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
            clonedFrame.children[0].children[0].style.backgroundImage = "url(icons/" + i + ".png)";
            clonedFrame.children[1].innerHTML = 'Вспомнить все. Помнить каждого.';
            clonedFrame.children[2].innerHTML = 'Example Example';
            break;
        case 1:
            clonedFrame.children[0].children[0].style.backgroundImage = "url(icons/" + i + ".png)";
            clonedFrame.children[1].innerHTML = 'Родительский университет';
            clonedFrame.children[2].innerHTML = 'Example Example';
            break;
        case 2:
            clonedFrame.children[0].style.backgroundColor = "#34a0f7"
            clonedFrame.children[0].children[0].style.backgroundImage = "url(icons/" + i + ".png)";
            clonedFrame.children[1].innerHTML = 'Профилактика противоправного поведения';
            clonedFrame.children[2].innerHTML = 'Example Example';
            break;
        case 3:
            clonedFrame.children[0].style.backgroundColor = "#34a0f7"
            clonedFrame.children[0].children[0].style.backgroundImage = "url(icons/" + i + ".png)";
            clonedFrame.children[1].innerHTML = 'Здоровое питание';
            clonedFrame.children[2].innerHTML = 'Example Example';
            break;
        case 4:
            clonedFrame.children[0].style.backgroundColor = "#34a0f7"
            clonedFrame.children[0].children[0].style.backgroundImage = "url(icons/" + i + ".png)";
            clonedFrame.children[1].innerHTML = 'Профориентация';
            clonedFrame.children[2].innerHTML = 'Example Example';
            break;
        case 5:
            clonedFrame.children[0].style.backgroundColor = "#776be0"
            clonedFrame.children[0].children[0].style.backgroundImage = "url(icons/" + i + ".png)";
            clonedFrame.children[1].innerHTML = 'Профсоюзный комитет';
            clonedFrame.children[2].innerHTML = 'Example Example';
            break;
        case 6:
            clonedFrame.children[0].style.backgroundColor = "#776be0"
            clonedFrame.children[0].children[0].style.backgroundImage = "url(icons/" + i + ".png)";
            clonedFrame.children[1].innerHTML = 'Школа активного гражданина';
            clonedFrame.children[2].innerHTML = 'Example Example';
            break;
        case 7:
            clonedFrame.children[0].style.backgroundColor = "#776be0"
            clonedFrame.children[0].children[0].style.backgroundImage = "url(icons/" + i + ".png)";
            clonedFrame.children[1].innerHTML = 'Твоя безопасность';
            clonedFrame.children[2].innerHTML = 'Example Example';
            break;
    }
}

for (let i = 0; i < 2; i++) {
    var clonedFrame = document.querySelector('.extra>div').cloneNode(true);
    document.querySelector('.extra').appendChild(clonedFrame);

}


function clon(child, parent, count) {
    for (let i = 0; i < count; i++) {
        let clone = child.cloneNode(true)
        parent.appendChild(clone)
    }
}
clon(document.querySelector('.elem'),document.querySelector('.wrapper>div'),5)
clon(document.querySelector('swiper-slide'),document.querySelector('swiper-container'),8)

const news = [
    {
        date: "22.03.2024",
        title: '🎉 ПОЗДРАВЛЯЕМ!',
        text: '⚡️На итоговой коллегии управления по образованию администрации Первомайского района были подведены итоги работы учреждений образования в 2023 году.',
        imageUrl: 'http://sch73.minsk.edu.by/sm_full.aspx?guid=153923'
    },
    {
        date: "22.03.2024",
        title: '📸 Делимся фото мероприятия, которое проводят наши сегодняшние учителя-дублеры',
        text: '✨️ Педагог социальный и руководитель по военно-партиотическому воспитанию провели экскурсию в нашем музее для ребят 2 "Б" класса.',
        imageUrl: 'http://sch73.minsk.edu.by/sm_full.aspx?guid=153913'
    },
    {
        date: "22.03.2024",
        title: '⭐️ #МЫ_ПОМНИМ',
        text: '🙏 Мы почтили память погибших минутой молчания.',
        imageUrl: 'http://sch73.minsk.edu.by/sm_full.aspx?guid=153903'
    },
    {
        date: "21.03.2024",
        title: '❤️‍🔥 Приятно получать такие благодарственные письма!',
        text: '',
        imageUrl: 'http://sch73.minsk.edu.by/sm_full.aspx?guid=153893'
    },
    {
        date: "21.03.2024",
        title: '💫 #НАШИ_ДЕТИ',
        text: '🌟 Команда наших 4-х классов представляет нашу школу на игре "Зарничка"!',
        imageUrl: 'http://sch73.minsk.edu.by/sm_full.aspx?guid=153873'
    },
    {
        date: "21.03.2024",
        title: '🎉 ТОРЖЕСТВЕННАЯ ЛИНЕЙКА, ПОСВЯЩЁННАЯ ОКОНЧАНИЮ III ЧЕТВЕРТИ',
        text: '🎈 В это верится с трудом, но самая большая учебная четверть завершается!',
        imageUrl: 'http://sch73.minsk.edu.by/sm_full.aspx?guid=153773'
    },
]

const innercontainer = [
    'Вспомнить все. Помнить каждого.',
    'Родительский университет',
    'Профилактика противоправного поведения',
    'Здоровое питание',
    'Профориентация',
    'Профсоюзный комитет',
    'Школа активного гражданина',
    'Твоя безопасность'
]

let c;
if (window.innerWidth < 901) {
    c = 1
    wrp = 3
} else {
    c = 2;
    wrp = 5
}

const Month = ["Янв", "Фев", "Мар", "Апр", "май", "Июн", "Июль", "Авг", "Сен", "Окт", "Ноя", "дек"]
const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

const dayOfWeek = days[new Date().getDay()]
document.querySelector('.date').innerHTML = dayOfWeek + ", " + new Date().getDate() + " " + Month[new Date().getMonth()] + ".";


for (let i = 0; i < 8; i++) {
    const clonedFrame = document.querySelector('.element').cloneNode(true);
    document.querySelector('#innercontainer').appendChild(clonedFrame);
    clonedFrame.children[0].children[0].style.backgroundImage = "url(img/icons/" + i + ".png)";
    clonedFrame.children[1].innerHTML = innercontainer[i]
    i >= 2 ? clonedFrame.children[0].style.backgroundColor = "#34a0f7" : ''
    i >= 5 ? clonedFrame.children[0].style.backgroundColor = "#776be0" : ''
}

for (let i = 0; i < c; i++) {
    const clonedFrame = document.querySelector('.extra>div').cloneNode(true);
    document.querySelector('.extra').appendChild(clonedFrame);

}


let clon = (child, parent, count) => {
    for (let i = 0; i < count; i++) {
        let clone = child.cloneNode(true)
        parent.appendChild(clone)
        if (count == 17) {
            child.children[0].children[0].style.backgroundImage = 'url(img/slider/' + (i + 1) + '.jpg)'
            document.querySelector('.mySwiper>swiper-slide>div:nth-of-type(2)>div:nth-of-type(2)').style.backgroundImage = 'url(img/slider/' + (i + 1) + '.jpg)'
        }
        if (count == wrp) {
            child.children[0].style.backgroundImage = 'url("' + news[i].imageUrl + '")'
            child.children[1].innerHTML = news[i].date
            child.children[2].innerHTML = news[i].title
            child.children[3].innerHTML = news[i].text
        }
    }

}



let createDiv = document.createElement('div');
let createP;

createDiv.classList.add('elem');

document.querySelector('.wrapper > div').appendChild(createDiv);
createDiv = document.createElement('div');
createDiv.style.backgroundImage = 'url("' + news[5].imageUrl + '")'
document.querySelector('.elem').appendChild(createDiv);

const keys = Object.keys(news[5]); // массив ключей последнего объекта 
for (let i = 0; i < 3; i++) {
    createP = document.createElement('p');
    createP.innerHTML = news[5][keys[i]]
    document.querySelector('.elem').appendChild(createP);
}

clon(document.querySelector('.elem'), document.querySelector('.wrapper>div'), wrp)
clon(document.querySelector('.container_slider'), document.querySelector('.swiper_container'), 8)
clon(document.querySelector('.mySwiper>swiper-slide'), document.querySelector('.mySwiper'), 17) //на 1 меньше, чем слайдов
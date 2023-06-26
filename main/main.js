const data = [{
    title: "Electro Dragon",
    describe: "For the lightning arc to chain, buildings must be spaced one tile apart at most. Therefore, by spacing them out further it is possible to drastically reduce their effectiveness.",
    img: "../img/Relaxing Sleep Music + Rain Sound - Deep Sleeping Music, music for sleeping fall asleep fast(카페 음악).jpg",
    bgColor: "#6ce3f2",
    target: "any",
    housing: 30,
    movement: 13,
    attack: "3.5s",
    training: "6m"
},
{
    title: "Lava Hound",
    describe: "For the lightning arc to chain, buildings must be spaced one tile apart at most. Therefore, by spacing them out further it is possible to drastically reduce their effectiveness.",
    img: "../img/Download Mountains at Night Landscape Scene  for free.jpg",
    bgColor: "#7b5e4d",
    target: "air",
    housing: 30,
    movement: 13,
    attack: "3.5s",
    training: "6m"
},
{
    title: "Baby Dragon",
    describe: "For the lightning arc to chain, buildings must be spaced one tile apart at most. Therefore, by spacing them out further it is possible to drastically reduce their effectiveness.",
    img: "../img/high mountain and cold winter.png",
    bgColor: "#6ce3f2",
    target: "any",
    housing: 30,
    movement: 13,
    attack: "3.5s",
    training: "6m"
},
{
    title: "Baby Dragon",
    describe: "For the lightning arc to chain, buildings must be spaced one tile apart at most. Therefore, by spacing them out further it is possible to drastically reduce their effectiveness.",
    img: "../img/tải xuống (1).jpg",
    bgColor: "#6ce3f2",
    target: "any",
    housing: 30,
    movement: 13,
    attack: "3.5s",
    training: "6m"
},
{
    title: "Lava Hound",
    describe: "For the lightning arc to chain, buildings must be spaced one tile apart at most. Therefore, by spacing them out further it is possible to drastically reduce their effectiveness.",
    img: "../img/Beautiful calm night in mountain forest with moon and stars.jpg",
    bgColor: "#7b5e4d",
    target: "air",
    housing: 30,
    movement: 13,
    attack: "3.5s",
    training: "6m"
},
];
const introduce = document.querySelector(".introduce");
const ordinalNumber = document.querySelector(".ordinal-number");

introduce.innerHTML = "";
ordinalNumber.innerHTML = "";
for(let i=0; i < data.length; i++){
    introduce.innerHTML += `
    <div class="wrapper">
        <span>
            <p class="country" style="--idx:0">${data[i].target}</p>
         </span>
        <span>
            <h1 class="place" style="--idx:1">${data[i].title}</h1>
        </span>
        <span>
            <p class="describe" style="--idx:2">${data[i].describe}</p>
        </span>
        <span>
            <button class="discover-button" style="--idx: 3"> Discover now</button>
        </span>
    </div>`;
    ordinalNumber.innerHTML += `<h2>0${i+1}</h2>`
}

introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");

const thumbnailListWrapper = document.querySelector(".thumbnail-list .wrapper");
thumbnailListWrapper.innerHTML += `
    <div class="thumbnail zoom">
    <img src="${data[0].img}" alt="">
     </div>`;
for(let i = 1 ; i < data.length ; i++){
    thumbnailListWrapper.innerHTML += `
    <div class="thumbnail" style="--idx: ${i}">
         <img src="${data[i].img}" alt="">
     </div>`;
}

const nextBtn = document.querySelector(".navigation .next-button");
var currentIndex = 0;
nextBtn.addEventListener("click" ,()=>{
    nextBtn.disabled = true;
    let clone = thumbnailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumbnailListWrapper.appendChild(clone);
    thumbnailListWrapper.children[1].classList.add("zoom");
    setTimeout(()=>{
        thumbnailListWrapper.children[0].remove();
        nextBtn.disabled = false
    });
    for(let i = 0 ; i < thumbnailListWrapper.childElementCount; i++){
        thumbnailListWrapper.children[i].style = `--idx: ${i - 2 }`
    };
    if(currentIndex < data.length - 1){
        currentIndex++;
    }else{
        currentIndex = 0;
    };
    for(let i = 0 ; i < data.length; i++){
        introduce.children[i].classList.remove("active");
        ordinalNumber.children[i].classList.remove("active");
    };
    introduce.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].textContent = `0${currentIndex + 1}`;
});
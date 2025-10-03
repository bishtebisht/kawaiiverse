const arrowsLeft=document.querySelectorAll(".arrow-left");
const arrowsRight=document.querySelectorAll(".arrow-right");
const animeList=document.querySelectorAll(".anime-list");

arrowsRight.forEach((arrowRight,i)=>{
    const itemNum=animeList[i].querySelectorAll("img").length; 
    let clickCounter=0;
    arrowRight.addEventListener("click",()=>{
   const ratio=Math.floor(window.innerWidth/200);
        clickCounter++;
        if(itemNum-(5+clickCounter)+(6-ratio)>=0){
            animeList[i].style.transform=`translateX(${
                animeList[i].computedStyleMap().get("transform")[0].x.value
            -220}px)`;
        }else{
            animeList[i].style.transform="translateX(0)";
            clickCounter=0;
        }
    });
    arrowsLeft[i].addEventListener("click", () => {
        if (clickCounter > 0) {
            clickCounter--;
            animeList[i].style.transform = `translateX(${
                animeList[i].computedStyleMap().get("transform")[0].x.value + 220
            }px)`;
        }
    }); 
    console.log(Math.floor(window.innerWidth/200));
  
});
// const nextBtn=document.querySelector(".nav-btn.right");
// const prevBtn=document.querySelector(".nav-btn-left");
// const spotlights=document.querySelectorAll(".spotlight");

// nextBtn.forEach((nextBtn,i)=>{
//     const items=spotlights[i].querySelectorAll("img").length; 
//     let Counter=0;
//     nextBtn.addEventListener("click",()=>{
//     const ratio=Math.floor(window.innerWidth/800);
//         Counter++;
//         if(items-(1+Counter)+(2-ratio)>=0){
//             spotlights[i].style.transform=`translateX(${
//                 spotlights[i].computedStyleMap().get("transform")[0].x.value
//             -850}px)`;
//         }else{
//             spotlights[i].style.transform="translateX(0)";
//             Counter=0;
//         }
//     });
//     prevBtn[i].addEventListener("click", () => {
//         if (Counter > 0) {
//             Counter--;
//             spotlights[i].style.transform = `translateX(${
//                 spotlights[i].computedStyleMap().get("transform")[0].x.value + 220
//             }px)`;
//         }
//     }); 
//     console.log(Math.floor(window.innerWidth/800));
  
// });
// const animeLists = document.querySelectorAll(".anime-list");
// const arrowsLeft = document.querySelectorAll(".arrow-left");
// const arrowsRight = document.querySelectorAll(".arrow-right");

// animeLists.forEach((animeList, i) => {
//     const items = animeList.querySelectorAll(".anime-item"); 
//     const totalItems = items.length;
//     let currentIndex = 0;

//     // Right arrow
//     arrowsRight[i].addEventListener("click", () => {
//         currentIndex++;
//         if (currentIndex >= totalItems - 5) {  
//             // "-4" so it shows 5 items max at once
//             currentIndex = 0;  
//         }
//         animeList.style.transform = `translateX(-${currentIndex * 220}px)`; 
//     });

//     // Left arrow
//     arrowsLeft[i].addEventListener("click", () => {
//         currentIndex--;
//         if (currentIndex < 0) {
//             currentIndex = totalItems - 6; // back to last "page"
//         }
//         animeList.style.transform = `translateX(-${currentIndex * 220}px)`; 
//     });
// });

const spotlightItem = document.querySelector(".spotlight-item");
const spotlights = document.querySelectorAll(".spotlight");
const nextBtn = document.querySelector(".nav-btn.right");
const prevBtn = document.querySelector(".nav-btn.left");

let currentIndex = 0;
const totalSpotlights = spotlights.length;

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= totalSpotlights) {
        currentIndex = 0;
    }
    spotlightItem.style.transform = `translateX(-${currentIndex * 104.08}%)`;
});

prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSpotlights - 1;
    }
    spotlightItem.style.transform = `translateX(-${currentIndex * 104.08}%)`;
});

// const animeList = document.querySelector(".anime-list");
// const animeItem= document.querySelectorAll(".anime-item");
// const arrowsLeft = document.querySelector(".arror-left");
// const arrowsRight = document.querySelector(".arroe-right");

// let counter = 0;
// const totalanime = animeItem.length;

// arrowsRight.addEventListener("click", () => {
//     counter++;
//     if (counter >= totalanime) {
//         counter = 0;
//     }
//     animeList.style.transform = `translateX(-${counter * 104.05}%)`;
// });

// arrowsLeft.addEventListener("click", () => {
//     counter--;
//     if (counter < 0) {
//         counter = totalSpotlights - 1;
//     }
//     animeList.style.transform = `translateX(-${counter * 104.05}%)`;
// });
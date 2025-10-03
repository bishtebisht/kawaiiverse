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


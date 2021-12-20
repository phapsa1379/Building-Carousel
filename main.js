

let imgNumber=8;
let imgArraySource=[];
for(let i=1;i<=imgNumber;i++)
{
    imgArraySource[i-1]=`./images/${i}.jpg`;
}


let carouselItemsContent;
let carouselNavBarContent;
let activeImgIndex=0;

const carouselNavBarEl=document.querySelector('.carousel-nav-bar');
const carouselItemsEl=document.querySelector('.carousel-items');
const nexSlide=document.querySelector('.carousel-next');
const prevSlide=document.querySelector('.carousel-prev');



refreshCarousel();




let carouselNavItems=document.querySelectorAll('.carousel-nav-item');




setInterval(()=>
{
    activeImgIndex=++activeImgIndex%imgNumber;
    refreshCarousel();

},5000)



function refreshCarousel()
{

    carouselItemsContent="";
     carouselNavBarContent="";

    for(let i=0;i<imgNumber;i++)
    {
        carouselItemsContent+=`<div class="carousel-item">
            <img style="display: ${i===activeImgIndex?"block":"none"}" class="carousel-img carousle-img-${i}" src=${imgArraySource[i]} alt="img" />
        </div>`
        carouselNavBarContent+=`<div class="carousel-nav-item carousel-nav-item-${i} ${i===activeImgIndex?"carousel-nav-item-active":""}"></div>`;
    }


    carouselItemsEl.innerHTML=carouselItemsContent;
    carouselNavBarEl.innerHTML=carouselNavBarContent;



}




nexSlide.addEventListener('click',(e)=>
{
    activeImgIndex=++activeImgIndex%imgNumber;
    refreshCarousel();
})

prevSlide.addEventListener('click',(e)=>
{
    if(activeImgIndex===0)
    {
        activeImgIndex=imgNumber-1;
    }
    else
    {
        activeImgIndex=--activeImgIndex%imgNumber;
    }

    refreshCarousel();
})


carouselNavBarEl.addEventListener('click',(e)=>
{
    if(e.target.getAttribute('class'))
    {
        if(e.target.getAttribute('class').includes('carousel-nav-item'))
        {
            let index=e.target.getAttribute('class').split(' ')[1].split('-')[3];

            activeImgIndex=Number(index);
            refreshCarousel();
        }
    }
})
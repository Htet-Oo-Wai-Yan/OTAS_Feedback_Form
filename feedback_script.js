const slidePage = document.querySelector('.slide-page');
const firstNextBtn = document.querySelector('.nextBtn');
const prevBtnsuggest = document.querySelector('.prev-btn-1');
const nextBtnsuggest = document.querySelector('.next-btn-1');
const prevBtntestimoni = document.querySelector('.prev-btn-2');
const submitBtn = document.querySelector('.submit-btn');
const closeBtn = document.querySelector('.form-close-btn');

const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;



firstNextBtn.addEventListener('click',function(event){
    event.preventDefault();
    slidePage.style.marginLeft = '-25%';
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

nextBtnsuggest.addEventListener('click',function(event){
    event.preventDefault();
    slidePage.style.marginLeft = '-50%';
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

submitBtn.addEventListener('click',function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});


// prev btns 
prevBtnsuggest.addEventListener('click',function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

prevBtntestimoni.addEventListener('click',function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

submitBtn.addEventListener('click',function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});




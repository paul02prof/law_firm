let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 800)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
if(backButton){
  backButton.onclick = function(){
    carousel.classList.remove('showDetail');
  }
}

// Modal handling
const modal = document.getElementById('modal');
const openModalButtons = document.querySelectorAll('.open-modal');
if(openModalButtons && modal){
  openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      modal.classList.remove('hidden');
    });
  });
  // Close when clicking backdrop
  modal.addEventListener('click', (e)=>{
    if(e.target === modal){
      modal.classList.add('hidden');
    }
  });
  // Close with Escape
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') modal.classList.add('hidden');
  });
}

// Keyboard navigation for carousel
if(nextButton && prevButton){
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowRight') showSlider('next');
    if(e.key === 'ArrowLeft') showSlider('prev');
  });
}
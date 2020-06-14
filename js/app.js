window.addEventListener ('DOMContentLoaded', console.log('Hey, babe'))
let x = true;
let toggle = 1;
let counter = 0;
const imgs = document.querySelectorAll ('.main_photo');
const size = imgs[0].clientWidth;

const heartIcon = document.querySelector ('.heart');
const goButton = document.querySelector ('.go_circle');
const card2 = document.querySelector ('.card2')
const leftArrow = document.querySelector ('.fa-chevron-left')
const rightArrow = document.querySelector ('.fa-chevron-right')
const photo2 = document.querySelector ('.main_photo2');
const photoCard = document.querySelector ('.photos');
const heart = document.querySelector ('.fa-heart');
const title = document.querySelector ('.title');
const cartIcon = document.querySelector ('.fa-shopping-cart');
const plusIcon = document.querySelector ('.fa-plus');
const descText = document.querySelector ('.description');
const plus = document.querySelector ('.add');
const images = ['url(p3.jpg)', 'url(p2.jpg)', 'url(p4.jpg)', 'url(p1.jpg)'];
//--------------------------------------------------------------------------------------------------------------------------

function prevP () {
    console.log(counter);
    console.log(toggle);
    rightArrow.style.opacity = '1'
    heart.style.color =  '#56586C'
    heart.style.textShadow= 'none';
    if (counter > -2){
        counter--;
        photoCard.style.transition = '.4s all ease'
        photoCard.style.transform = `translateX(${20 * counter}%)`;
        photoCard.style.transform = `translateX(${20 * counter}%)`;
        if (toggle !=0){
            toggle--;
            title.textContent = description[toggle].title;
            descText.textContent = description[toggle].text;
           
        }

    };

    if (counter === -2) {
       leftArrow.style.opacity = '0'
    } 

}

function nextP () {
    console.log(counter);
    console.log(toggle);
   leftArrow.style.opacity = '1'
   heart.style.color =  '#56586C'
   heart.style.textShadow= 'none';
    if (counter < 2) {
        counter++;
        photoCard.style.transition = '.4s all ease'
        photoCard.style.transform = `translateX(${20 * counter}%)`;
        if (toggle < 4){
            toggle++;
            title.textContent = description[toggle].title;
            descText.textContent = description[toggle].text;
            
        }
    };

    if (counter === 2) {
        rightArrow.style.opacity = '0'
    } 
}


//-------------------------------------------------------------------------------------------------- clean later 
const description = [
    {
        title: 'Night Shade',
        text: 'Unleash your inner temptress and explore our collection of sexy bras. Statement strapping, daring peekaboo cutouts and indulgent fabrics are sure to set pulses racing, while deep jewel hues and sleek black capture a sultry mood.'
    },
    {
        title: 'Love Trap',
        text: 'Find your style with attention-grabbing pushing up bras, revealing half cup cuts and flattering balconettes or set the tone for boudoir luxe with flirty frills and lavish lace. '
    },
    {
        title: 'Cotton Hug',
        text: 'Wearing beautiful lingerie isn\'t about guys, ladies. It\'s about claiming who we are at our most powerful. What you wear affects your confidence and self-esteem. '
    },
    {
        title: 'White Spell',
        text: 'Statement strapping, daring peekaboo cutouts and indulgent fabrics are sure to set pulses racing, while deep jewel hues and sleek black capture a sultry mood.'
    },
    {
        title: 'Love Burst',
        text: 'In alluring colourways, lace inserts and pretty bow detailing, these feature padded, wired and size options to make sure you get the perfect fit for every dress. '
    },
]

function colorHeart () {

    heart.style.color =  'white';
    heart.style.animation = 'heartMove .5s 1 ease-in'
    heart.style.textShadow= ' 0 0 10px #e60073, 0 0 15px #e60073, 0 0 20px #e60073, 0 0 30px #e60073';
  setTimeout(()=> {
    heart.style.animation = '';
  }, 700)  

}

function showCard2 () {
    card2.classList.toggle('show');
    goButton.style.color = toggle? 'white' : '#56586C'

    if (toggle === true) {
        goButton.style.color = '#56586C';
        cartIcon.style.textShadow = 'none'
        cartIcon.style.color = '#56586C'
        toggle = false
    } else {
        goButton.style.color = 'white'
        toggle = true;
        
    }
}


function addToCart () {
    console.log('added');

    cartIcon.style.animation = 'rotateCard .5s 1 ease-in';
    cartIcon.style.textShadow= ' 0 0 10px #e60073, 0 0 15px #e60073, 0 0 20px #e60073, 0 0 30px #e60073';
    cartIcon.style.color = 'white'
    plusIcon.style.animation = 'plusMove .5s 1 ease-in';
    plusIcon.style.color = 'white'
    setTimeout(()=> {
        cartIcon.style.animation = '';
        plusIcon.style.animation = '';
        plusIcon.style.color = '#56586C'
      }, 500)  
}

heartIcon.addEventListener('click', colorHeart);
goButton.addEventListener('click', showCard2);
leftArrow.addEventListener('click', prevP);
rightArrow.addEventListener('click', nextP);
plus.addEventListener ('click', addToCart)


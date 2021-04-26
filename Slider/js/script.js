let images=[
    'images/calgary.jpg',
    'images/niagrafalls.jpg',
    'images/toronto.jpg'
];


let currentImage=0;
let sliderImage=document.querySelector('.slider_image');
let nextBtn=document.querySelector('.slider_button_next')
let prevBtn=document.querySelector('.slider_button_prev');
let playBtn=document.querySelector('.slider_button_play');



const nextImage=()=>{

    if (currentImage <images.length-1){
        currentImage++;
    }else {
        currentImage=0;
    }
    sliderImage.src=images[currentImage];
}

nextBtn.addEventListener('click', nextImage)

const prevImage=()=>{

    if (currentImage>0){
        currentImage--;
    }
      else{
          currentImage=images.length-1;
      }
      sliderImage.src=images[currentImage]
}

prevBtn.addEventListener('click', prevImage)

const playImages=()=>{
    currentImage++;
}

playBtn.addEventListener('click', playImage)
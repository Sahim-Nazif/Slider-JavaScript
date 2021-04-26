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



const prevImage=()=>{

    if (currentImage>0){
        currentImage--;
    }
      else{
          currentImage=images.length-1;
      }
      sliderImage.src=images[currentImage]
}




let interval;

const autoPlay=()=>{

    if (interval){
        clearInterval(interval)
        interval=null;
    } else{
       interval= setInterval(()=>{
            nextImage()
        },1000)
    }
    playBtn.children[0].classList.toggle('fa-play');
    playBtn.children[0].classList.toggle('fa-pause')
    
}
nextBtn.addEventListener('click', nextImage)
prevBtn.addEventListener('click', prevImage)
playBtn.addEventListener('click', autoPlay)
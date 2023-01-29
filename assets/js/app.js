$('.counter').counterUp();
$('.my_slider_2').slick({

    centerMode: true,
    centerPadding: '0',
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows:false,
    autoplay:true,
   
    
  });
$('.my_slider_1').slick({

    centerMode: true,
    centerPadding: '0',
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
   
    
  });
  let btn = document.getElementById('btn')
let btn1 = document.getElementById('btn1')

let snumber = document.getElementById('snumber')
let unumber = document.getElementById('unumber')
let pnumber = document.getElementById('pnumber')

btn1.addEventListener('click',function(){
  snumber.innerText = '33'
  unumber.innerText = '99'
  pnumber.innerText = '55'
})


btn.addEventListener('click',function(){
  snumber.innerText = '155'
  unumber.innerText = '999'
  pnumber.innerText = '555'
})
 

 
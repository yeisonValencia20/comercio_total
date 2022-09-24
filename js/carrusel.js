
let contador = 0;

function nextSlide(n) {
    contador += n;
    carrusel(contador);
}

function currentSlide(n) {
    contador = n
    carrusel(contador);
}

function carrusel( n ) {
    let slide =  document.getElementsByClassName('carrusel-item');
    let slideBtn = document.getElementsByClassName('Btn');
    if(n < 0){
        contador =  slide.length - 1;
    }
    if(n > slide.length - 1){
        contador = 0;
    }

    for(let i=0; i<slide.length; i++){
        slide[i].className = slide[i].className.replace(' active','');
        slideBtn[i].className = slideBtn[i].className.replace(' selected','')
    }

    slide[contador].className += ' active';
    slideBtn[contador].className += ' selected';
}

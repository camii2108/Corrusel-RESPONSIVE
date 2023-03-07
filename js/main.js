document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration:150,
        dist:-80,/* calculo la prespectiva */
        shift:5,
        padding:5,
        numVisible: 3, /* establescon cuadno carousel van a ser visibles */
        indicators: true,/* los puntitos que indican la imagen */
        noWrap:false/* inicia con el primer slide y termina en el ultimo con true, es decir hay a la izquiera y derecha */
        
    });
});

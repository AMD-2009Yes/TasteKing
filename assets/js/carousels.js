const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
    let index = 0;

    const updateCarousel = () => {
        index++;
        if (index >= carousel.children.length) {
            index = 0;
        }
        const offset = index * -350; // ширина изображения  
        carousel.style.transform = `translateX(${offset}px)`;
    };

    setInterval(updateCarousel, 3500); // Интервал переключения (3 секунды)
});
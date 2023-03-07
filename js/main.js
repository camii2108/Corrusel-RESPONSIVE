document.addEventListener('DOMContentLoaded', () => {
    const elementosCorousel = document.querySelectorAll('.caurousel');
    M.Courousel.init(elementosCorousel, {
        duration:150
    });
});

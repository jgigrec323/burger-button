const burger = document.querySelector('.container')

burger.addEventListener('click', () => {
    document.querySelector('.line1').classList.toggle('active')
    document.querySelector('.line2').classList.toggle('active')
    document.querySelector('.line3').classList.toggle('active')
})
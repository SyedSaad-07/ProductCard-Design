function ImageChanger() {
    let forImage = document.querySelector('.shoeImg');
    let changeImage = document.querySelectorAll('.Onhover');
    changeImage.forEach(element => {
        element.addEventListener('mouseover',()=>{
            forImage.src = element.src;
        }); 
    });
}

ImageChanger();
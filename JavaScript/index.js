/*
* Effectively Serves as a Scroll Event Listener
*/

window.addEventListener('scroll', function() {
    const navbar = document.querySelector("nav");
    navbar.classList.add('navbar-dimmed');
    console.log("Navbar dimmed");
});

window.addEventListener("scrollend", (event) => {
    const navbar = document.querySelector("nav");
    navbar.classList.remove('navbar-dimmed');
});

/*
* Have Image rotate every 5 seconds
* This is a simple image gallery that rotates images every 3 seconds
*/
let currentImageIndex = 0;
const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg"
];
function changeImage() {
    const galleryImage = document.getElementById("galleryImage");
    currentImageIndex += 1; // Move to the next image
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Reset to the first image if at the end
    }
    galleryImage.src = images[currentImageIndex];
}

function changeImage(direction) {
    if(direction == -1) {
        currentImageIndex -= 1; // Move to the previous image
        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1; // Wrap around to the last image
        }
        const galleryImage = document.getElementById("galleryImage");
        galleryImage.src = images[currentImageIndex];
    }
    else{
        currentImageIndex += 1; // Move to the next image
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0; // Reset to the first image if at the end
        }
        const galleryImage = document.getElementById("galleryImage");
        galleryImage.src = images[currentImageIndex];
    }
}

setInterval(changeImage, 3000); // Change image every 3 seconds
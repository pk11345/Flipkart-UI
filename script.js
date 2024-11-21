// Array of image URLs
const images = [
    "/fasttrack.jpeg",
    "/headphone.jpeg",
    "/powerbank.jpeg",
    "/mouse.jpeg",
   
];

// Function to randomly select an image
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Set the src attribute of the image element to a random image
document.querySelector(".king").src = getRandomImage();
// document.querySelector(".had").innerHTML = "Headphone"

document.querySelector('.menu-icon').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

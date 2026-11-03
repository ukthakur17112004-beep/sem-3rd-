// Mobile Menu

function toggleMenu(){
document.getElementById("navLinks").classList.toggle("active");
}

// Image Slider

const images = [
"banner1.jpg",
"banner2.jpg",
"banner3.jpg"
];

let current = 0;

setInterval(() => {

current++;

if(current >= images.length){
current = 0;
}

document.getElementById("slider").src = images[current];

},3000);
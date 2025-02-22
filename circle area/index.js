const PI = 3.14;
let radius;
let area;

document.getElementById("sub").onclick = function() {
    radius = document.getElementById("myradius").value;
    radius = parseInt(radius); 
    area = PI * radius ** 2;
    document.getElementById("myh2").textContent = area + " cm";
};

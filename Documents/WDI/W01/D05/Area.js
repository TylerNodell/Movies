var x = process.argv[2];
var y = process.argv[3];
var radius = process.argv[4];

function Peri(width, height) {
  console.log("The perimeter is: " + (2 * width + 2 * height));
}

function areaf(width,height) {
  console.log("The area is: " +(width*height));
}

function areaofcircle(radius) {
  console.log("The area of the circle is: " + (Math.PI * radius * radius));
}

Peri(x, y);

areaf(x ,y);

areaofcircle(radius);

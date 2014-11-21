var x = process.argv[2];
var y = process.argv[3];
var z = process.argv[4];

function Max(a, b) {
  if (a > b) {
    console.log(a);
  } else if (b > a) {
    console.log(b);
  } else {
    console.log("They are equal");
  }
}

Max(x, y)

function Maxt(a, b, c) {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  }else if (c > a && c > b) {
    console.log(c);
  } else {
    console.log("They are equal");
  }
}

Maxt(x, y, z)

var zoo = ["elephant", "alligator", "panda", "lion", "monkey", "kola", "tiger", "t-rex", "puffin", "dodo", "Crawford", "penguins"];

function Add(a) {
 zoo.push(a)
 console.log(zoo);
 zoo.pop();
}

Add("kangaroo")

function killingdodos(a) {
  var x = zoo.indexOf(a)
  zoo.splice(x,1)
  console.log(zoo);
  zoo.splice(x,0,"dodo")

}

killingdodos("dodo")

Array.prototype.move = function (old_index, new_index) {
  if (new_index >= this.length) {
    var k = new_index - this.length;
    while ((k--) + 1) {
      this.push(undefined);
    }
  }
  this.splice(new_index, 0, this.splice(old_index, 1)[0]);
  return this;
};

function movet(a, b) {
  var x = zoo.indexOf(a);
  var y = zoo.indexOf(b);
  var zoon = zoo.move(y,x);
  var zoof = zoon.move(x+1,y);
  console.log(zoof);

}

movet("tiger", "Crawford");

function sortinghat(a) {
  var zook = a.sort();
  console.log(zook);
}

sortinghat(zoo);

function reverse(a) {
  var zoor = a.reverse();
  console.log(zoor);
}

reverse(zoo);

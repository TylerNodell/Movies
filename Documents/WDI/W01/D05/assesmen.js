  var a = process.argv[2];

  a.split("");
  for (var i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      console.log(a[i])
    }
  }

  for (var i = 0; i <= 10; i++) {
    console.log(i*10);
  }

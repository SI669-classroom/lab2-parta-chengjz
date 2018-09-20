///// Problem 1 - Fun with Promises

function flip() {
    let p = new Promise(function (resolve, reject) {
        if (Math.random() > 0.5) resolve("Heads");
        else reject("Tails");
    });
    return p;
}

var i;
for (i = 0; i < 10; i++) {
    flip().then(function(result) {
      console.log(result);
    }, function(err) {
      console.log(err);
    });
}

//// Add code here that will "flip" the coin ten times and write the
//// result to the console (e.g. "Heads" or "Tails" for each flip).




/// Problem 2 - More fun...

function countBig(bignum) {
    // Add code here that returns a Promise that will resolve after it has counted to bignum
    let p = new Promise(function (resolve, reject) {
          var num = 0;
          while (num != bignum) num++;
          if ( num == bignum) resolve();
          else reject();
    });
    return p;
}


start = Date.now();
bignum = 1000000000;
countBig(1000000000).then(()=> {
    console.log("It took " + (Date.now() - start) + " ms to count to " + bignum);
}, () => {
    console.log("A problem occurred while trying to count to " + bignum);
})

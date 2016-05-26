

var data = require('../products.json');

// Write your solutions below

// console.log(data[0]); // undefined
// console.log(data.items[0]); // prints an item
// console.log(typeof data); // object
// console.log(typeof "hi"); // string

// deliverable 1--------------------------------------------------------------
var count = 0;

for(i=0;i<data.items.length;i++){
  if(data.items[i].kind = "shopping#product"){
    count = count + 1;
  }
}

console.log(count);

// found also as "current item count"

// deliverable 2  -------------------------------------------------------------

// product.inventories.availability

for(i=0; i<data.items.length;i++){
  if(data.items[i].product.inventories[0].availability === "backorder"){
    console.log(data.items[i].product.title);
  }
}

// deliverable 3 --------------------------------------------------------------

for(i=0; i<dat.items.length;i++){
  if(data.items[i].product.images.length > 1) {
    console.log(data.items[i].product.title);
  }
}

// deliverable 4 --------------------------------------------------------------

for(i=0; i<dat.items.length;i++){
  if(data.items[i].product.brand === "Canon") {
    console.log(data.items[i].product.brand);
  }
}

// deliverable 5 --------------------------------------------------------------

for(i=0; i<dat.items.length;i++){
  if(data.items[i].product.brand === "Canon" && data.items[i].product.author.name === "eBay") {
    console.log(data.items[i].product.title);
  }
}

// deliverable 6 --------------------------------------------------------------

for(i=0; i<dat.items.length;i++){
  console.log(data.items[i].product.brand);
  console.log(data.items[i].product.inventories[0].price);
  console.log(data.items[i].product.images[0]);
}






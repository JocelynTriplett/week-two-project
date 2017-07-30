// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let averagePrice = 0
  for (var i = 0; i < data.length; i++) {
    costEach = data[i].price;
    averagePrice += costEach / data.length;
  }
  console.log("The average price is " + averagePrice.toFixed(2))
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let reasonablyPriced = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].price >= 14 && data[i].price <= 18)
    reasonablyPriced.push(data[i].title);
  }
  console.log(reasonablyPriced)
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  for (var i = 0; i < data.length; i++) {
    if (data[i].price >= 14 && data[i].price <= 18 && data[i].currency_code == "GBP") {
      console.log(data[i].title + " costs " + data[i].price + " pounds.");
    }
  }

}


// 4: Display a list of all items who are made of wood.
function question4 (){
  let itemsMadeOfWood = []
    for (var i = 0; i < data.length; i++) {
      for (var m = 0; m < data[i].materials.length; m++) {
        if (data[i].materials[m] == "wood") {
          itemsMadeOfWood.push(data[i].title + " is made of wood.");
        }
      }

      }
      console.log(itemsMadeOfWood);
    }


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  let EightOrMoreMaterials = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      EightOrMoreMaterials.push(data[i])
    }
  }
  for (var i = 0; i < EightOrMoreMaterials.length; i++) {
    console.log(EightOrMoreMaterials[i].title + " has " + EightOrMoreMaterials[i].materials.length + " materials:" + "\n")
    for (var m = 0; m < EightOrMoreMaterials[i].materials.length; m++) {
      console.log("- " + EightOrMoreMaterials[i].materials[m] + "\n")
    }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let MadeByMe = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made == "i_did") {
      MadeByMe.push(data[i])
    }
  }
  console.log(MadeByMe.length + " items were made by their sellers.")
}

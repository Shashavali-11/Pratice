// Define CartItems
const cartItems = [
  {product: "Pen",price: 10.0,quantity: 5,},
  {product: "Book",price: 40.0,quantity: 1,},
  {product: "Eraser",price: 5.0,quantity: 2,},
];
// const cartItems = 0;

// Define tax rate and discount rate
const taxRate = 0.04;
const DiscountRate = 0.3;

calculateTotalCost(cartItems, taxRate); // calculate totalCost with tax

function calculateTotalCost(items, tax) {
  try {
    if (!items) {
      console.log("No Items in the cart.");
    } else {
      let totalCost = 0;
      for (i = 0; i < items.length; i++) {
        totalCost += items[i].price * items[i].quantity;
      }
      totalCost += totalCost * tax;
      console.log("Total Cost: " + totalCost);
      applyDiscount(totalCost, DiscountRate); // applyDiscount 
    }
  } catch (e) {
    return "Error: " + e.message;
  }
}

function applyDiscount(Cost, discount) {
  try {
    if (discount > 1 || discount < 0) {
      console.log("Discount rate must be between 0 and 1.");
    } else if (Cost < 0 || Cost == 0) {
      console.log("No cost to apply discount.");
    } else {
      let finalRate = Cost - Cost * discount;
      console.log("Final Rate: " + finalRate);
    }
  } catch (e) {
    return "Error: " + e.message;
  }
}

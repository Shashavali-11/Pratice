// Write a JavaScript program that simulates adding items to a shopping cart, calculates 
// total cost with tax, applies discount using operators, and displays the result using 
// proper variable types and scope.


// Function to calculate total cost with tax
function calculateTotalCost(cartItems, taxRate){

    let totalCost = 0;
    for(let item of cartItems){
        totalCost += item.price * item.quantity;
    }
    totalCost += totalCost * taxRate;
    return totalCost;
}

// Function to apply discount
function applyDiscount(totalCost, discountRate){
    return totalCost - (totalCost * discountRate);
}

// Function to display the result
function displayResult(totalCost, discountRate, finalCost){
    console.log(`Total Cost: $${totalCost.toFixed(2)}`);
    console.log(`Discount Rate: ${discountRate * 100}%`);
    console.log(`Final Cost after Discount: $${finalCost.toFixed(2)}`);
}

// Main function to simulate shopping cart



function shoppingCartSimulation(){
    // Define cart items
    const cartItems = [
        { name: "Apple", price: 1.00, quantity: 3 },
        { name: "Banana", price: 0.50, quantity: 5 },
        { name: "Orange", price: 0.75, quantity: 4 }
    ];

    // Define tax rate and discount rate
    const taxRate = 0.07; // 7%
    const discountRate = 0.10; // 10%

    // Calculate total cost with tax
    let totalCost = calculateTotalCost(cartItems, taxRate);

    // Apply discount
    let finalCost = applyDiscount(totalCost, discountRate);

    // Display result
    displayResult(totalCost, discountRate, finalCost);
}



// Run the shopping cart simulation
shoppingCartSimulation();

// Output:
// Total Cost: $10.75
// Discount Rate: 10%
// Final Cost after Discount: $9.67




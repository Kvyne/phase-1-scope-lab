//Define the initial values for the variables
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'tom'

// Function to uppercase the customerName
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

// Set the best customer to 'not bob'
function setBestCustomer(){
    bestCustomer = 'not bob';
}

//Call setBestCustomer to set the best customer
setBestCustomer();
console.log(bestCustomer);


// Overwrite the best customer to 'maybe bob'
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

overwriteBestCustomer();
console.log(bestCustomer);

// Reset bestCustomer to undefined
bestCustomer = undefined;

console.log(bestCustomer); 

// Attempt to change the least favorite customer 
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'don';
}
changeLeastFavoriteCustomer();
console.log(leastFavoriteCustomer);
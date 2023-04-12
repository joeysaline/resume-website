// Ordering System for Coaching, Diet Plans, and Training Routines

// Allow user to place an order and display confirmation message
const orderButton = document.querySelector('#place-order');
const plan = document.querySelector('#plan-type');
const msg = "Sorry. Could not process your order of '";
const msg2 = "' at this time. Some features of this website may be temporarily down."
orderButton.onclick = function purchasePlan(){
        alert(msg + plan.value + msg2);
}
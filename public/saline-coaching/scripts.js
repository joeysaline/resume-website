// Coaching


// Allowing user input to add a new testimonial
const submitButton = document.querySelector('#submit'); // the submission button
const testimonial = document.querySelector('#testimonial'); // the empty testimonial location
const client = document.querySelector("#client"); // the part of testimonial which displays client name
const userReview = document.querySelector('#review'); // the user input for review
const userName = document.querySelector('#name'); // the user input for name
submitButton.onclick = function addTestimony(){
    testimonial.innerHTML = '"' + userReview.value + '"';
    client.innerHTML = userName.value + ", new client"
}

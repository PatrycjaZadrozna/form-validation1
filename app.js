const firstNameInput= document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
btn.addEventListener("click", displayDetails);

btn.disabled = true;
let letters = /^[A-Za-z]+$/;

class User{
    constructor(firstName, lastName, gender){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
  displayDetails(){
    return this.lastName + this.firstName + this.gender;
  }
}

function displayDetails(){
const gender = document.querySelector("input[name=gender]:checked").value;

const user1 = new User(firstName, lastName, gender);
userDetails(user1);
}

function validate (){
const isLengthValid  = lastNameInput.value.length >= 3 && firstNameInput.value.length >= 3;
const isLettersValid = lastNameInput.value.match(letters) && firstNameInput.value.match(letters);
const isEmptyValid = lastNameInput.value !== '' && firstNameInput.value !== '';

if (isLengthValid && isLettersValid && isEmptyValid) {
  btn.disabled = false;
} else {
  btn.disabled = true;
 }
}

firstNameInput.addEventListener('input', validate);

lastNameInput.addEventListener('input', validate);

function userDetails(user){
    result.innerHTML = `Result: <br /> First name is: ${firstNameInput.value} <br /> Last name is: ${lastNameInput.value} <br /> Gender: ${user.gender}`;
};




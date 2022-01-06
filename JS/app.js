const fName = document.querySelector('#firstName');
const lName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const btn = document.querySelector('#btn');


btn.addEventListener('click', () => {
    if (fName.value === '') {
        fName.classList.add("red");
    } else {
        fName.classList.add("green");
    }
    if (lName.value === '') {
        lName.classList.add("red");
    } else {
        lName.classList.add("green");
    }
    if (email.value === '') {
        email.classList.add("red");
    } else {
        email.classList.add("green");
    }
    if (pass.value === '') {
        pass.classList.add("red");
    } else {
        pass.classList.add("green");
    }
});


// there must be a more efficent way 
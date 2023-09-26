function setFormMessage(formElement, type, message) {
    
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector  ("#login");
    const createAccountForm = document.querySelector  ("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
});


document.addEventListener('DOMContentLoaded', function () {
   
    const loginForm = document.getElementById('login');
    const createAccountForm = document.getElementById('createAccount');
  
   
    loginForm.addEventListener('submit', function (event) {
      if (!isFormValid(loginForm)) {
        event.preventDefault(); 
      }
    });
  
    createAccountForm.addEventListener('submit', function (event) {
      if (!isFormValid(createAccountForm)) {
        event.preventDefault(); 
      }
    });
  
    
    function isFormValid(form) {
      const formInputs = form.querySelectorAll('.form__input');
      let isValid = true;
  
      formInputs.forEach(function (input) {
        if (input.value.trim() === '') {
          isValid = false;
        
          const errorMessage = input.nextElementSibling;
          errorMessage.textContent = 'This field is required';
        }
      });
  
      return isValid;
    }
  
    
    const allFormInputs = document.querySelectorAll('.form__input');
    allFormInputs.forEach(function (input) {
      input.addEventListener('focus', function () {
        const errorMessage = input.nextElementSibling;
        errorMessage.textContent = '';
      });
    });
  });
  

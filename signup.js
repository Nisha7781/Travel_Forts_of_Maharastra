// // validate the Username
// function validateUsername(username) {
//     if (username.length < 6 || !/^[a-zA-Z]+$/.test(username)) {
//       return false;
//     }
//     return true;
//   }
  
//   // validate the Password
//   function validatePassword(password) {
//     if (password.length < 6 || !/\d/.test(password)) {
//       return false;
//     }
//     return true;
//   }
  
//   // validate the E-mail id
//   function validateEmail(email) {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       return false;
//     }
//     return true;
//   }
  
//   //validate the Mobile Number
//   function validateMobileNumber(mobileNumber) {
//     if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
//       return false;
//     }
//     return true;
//   }
  
//   // Retrieve the form element
//   const signupForm = document.querySelector('form');
  
//   // Add event listener to the form's submit event
//   signupForm.addEventListener('submit', function(event) {
//     // Prevent the form from being submitted
//     event.preventDefault();
  
//     // Get the values entered in the form fields
//     const username = document.getElementById('exampleInputusername1').value;
//     const password = document.getElementById('exampleInputPassword1').value;
//     const email = document.getElementById('exampleInputEmail1').value;
//     const mobileNumber = document.getElementById('exampleInputmobile1').value;
  
//     // Perform the validation for each field
//     if (!validateUsername(username)) {
//       alert('Invalid Username');
//       return;
//     }
  
//     if (!validatePassword(password)) {
//       alert('Invalid Password');
//       return;
//     }
  
//     if (!validateEmail(email)) {
//       alert('Invalid Email');
//       return;
//     }
  
//     if (!validateMobileNumber(mobileNumber)) {
//       alert('Invalid Mobile Number');
//       return;
//     }
  
//     // If all validations pass, you can proceed with submitting the form or performing further actions
//     alert('Form submitted successfully!');
//     signupForm.reset();
//   });
  


// // This script can handle simple form validation
// document.getElementById('login-form').addEventListener('submit', function(event) {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
  
//     // Basic Validation
//     if (username === "" || password === "") {
//       alert("Please fill in both fields.");
//       event.preventDefault(); // Prevent form submission
//     }
//   });
  // Add event listeners to handle form submissions
document.getElementById('student-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Student login submitted!');
});

document.getElementById('admin-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Admin login submitted!');
});

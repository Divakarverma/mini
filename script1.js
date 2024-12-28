// Basic form validation
document.getElementById('registration-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
  
    // Ensure all fields are filled
    if (name === "" || mobile === "" || address === "" || email === "") {
      alert("Please fill in all fields.");
      event.preventDefault(); // Prevent form submission
    }
  });
  
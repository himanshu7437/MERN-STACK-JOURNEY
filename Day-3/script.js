 // Add JavaScript for form validation
 const form = document.getElementById('userForm');

 form.addEventListener('submit', function (event) {
     // Prevent form submission for demonstration
     event.preventDefault();

     const username = document.getElementById('username').value;
     const password = document.getElementById('password').value;
     const gender = document.querySelector('input[name="gender"]:checked');

     // Basic validation checks
     if (!username || !password) {
         alert("Please fill in all required fields.");
         return;
     }

     if (!gender) {
         alert("Please select a gender.");
         return;
     }

     // If all checks pass
     alert(`Form submitted successfully!\nUsername: ${username}\nGender: ${gender.value}`);
 });
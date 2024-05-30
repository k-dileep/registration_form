const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    
    if (username === '') {
        alert('Please enter a username.');
        return;
    }

   
    const emailRegex =/^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    
    if (password.length < 6) {
        alert('Password should be at least 6 characters long.');
        return;
    }

    
    alert('Registration successful!');
    form.reset(); 
});

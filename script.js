document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // You can perform login validation here, for example, sending an AJAX request to a server-side script.
    // For demonstration purposes, let's just log the credentials.
    console.log('Username:', username);
    console.log('Password:', password);
  });
  
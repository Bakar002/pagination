const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signupForm = document.querySelector('#signup form');
const loginForm = document.querySelector('#login form');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form input values
    const firstName = this.querySelector('#username').value;
    const email = this.querySelector('#email').value;
    const password = this.querySelector('#password').value;
    
    // Check if user already exists in local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);
    
    if (userExists) {
     showToast('User already exists, please log in instead');
      document.getElementById('signup').classList.add('hidden');
      this.reset();
      return;
    }
    
    // Create new user object
    const newUser = {
      firstName,
      email,
      password
    };
    
    // Add new user to local storage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    showToast('Account created successfully');
    
    // Reset form inputs
    this.reset();
    setTimeout(function() {
      document.getElementById('signup').classList.add('hidden');
    }, 500);
  });
  
  // Login form submit event handler
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form input values
    const email = this.querySelector('#login-username').value;
    const password = this.querySelector('#login-password').value;
    
    // Check if user exists in local storage and password matches
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    
    if (!user) {
      showToast('Invalid email or password, please create an account');
      this.reset();
      return;
    }
    
    // Set isLogin to true in local storage
    localStorage.setItem('isLoggedIn', true);
    
    showToast('Logged in successfully');
    
    // Reset form inputs
    this.reset();
    setTimeout(function() {
      window.location.href = 'Home.html';
    }, 500);
  });
  
  
  if (localStorage.getItem('isLoggedIn') === 'true') {
    // User is logged in, show the "logged in" section and hide the "logged out" section
    document.getElementById('container').classList.add('hide');
    document.getElementById('profile').classList.remove('hide');

    
  } else {
    document.getElementById('profile').classList.add('hide');
    document.getElementById('container').classList.remove('hide');

  
   
  }
  const storeddetail = JSON.parse(localStorage.getItem('users'));

  const storedName=storeddetail[0].firstName

  const Uname= document.getElementById('name')
  
Uname.textContent=storedName;

  const storedEmail=storeddetail[0].email

  const Uemail= document.getElementById('Uemail')
  console.log(Uemail)
 Uemail.textContent=storedEmail;
 const logoutBtn = document.querySelector("#profile button");
 logoutBtn.addEventListener("click", function() {
    localStorage.removeItem("card");
    localStorage.removeItem("isLoggedIn"); // replace "key" with the name of the item you want to remove from local storage
    window.location.href = 'Form1.html'
  });
  function showToast(message) {
    const toaster = document.getElementById("toaster");
    const toasterMessage = document.getElementById("toaster-message");
  
    toasterMessage.innerText = message;
    toaster.classList.add("active");
  
    setTimeout(() => {
      toaster.classList.remove("active");
    }, 5000);
  }
  
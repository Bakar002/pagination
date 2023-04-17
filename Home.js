// Get reference to the div element

if (localStorage.getItem('isLoggedIn') === 'true') {
    const storeddetail = JSON.parse(localStorage.getItem('users'));
   
  const storedName=storeddetail[0].firstName
    // User is logged in, show the "logged in" section and hide the "logged out" section
    var myDiv = document.getElementById("myDiv");

    // Create a new paragraph element
    var paragraph = document.createElement("p");
    
    // Set the text content of the paragraph
    paragraph.innerText = storedName;
    
    // Append the paragraph to the div
    myDiv.appendChild(paragraph);
    
    
  }


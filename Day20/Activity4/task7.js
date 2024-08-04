// task 7: Create a simple form that saves user input(eg.,name,email to sessionStorage when submitted .Retrived and display the saved data on page load.

document.getElementById("userForm").addEventListener('submit',(event) => {
    event.preventDefault();
    const name= document.getElementById("name").value;
    const email= document.getElementById("email").value;
    sessionStorage.setItem('name',name);
    sessionStorage.setItem('email',email);
    displayUserData();

});

 function displayUserData(){
    const name=  sessionStorage.getItem('name');
    const email= sessionStorage.getItem('email');

    if(name && email){
        document.getElementById("displayData").innerHTML = `
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                `;
    }
    
}


window.onload = displayUserData; 
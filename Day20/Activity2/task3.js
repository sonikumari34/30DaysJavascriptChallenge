// task 3: Create a simple form that saves user input(ex. name and email) to localstorage when submitted.Retrived and display the saved data on page load.

//const myform=document.getElementById("userForm");
document.getElementById("userForm").addEventListener('submit',(event) => {
    event.preventDefault();
    const email=document.getElementById("email").value;
    const name=document.getElementById("name").value;
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    //console.log(`Name of the user: ${localStorage.getItem('name')}`);
    //console.log(`Email of user: ${localStorage.getItem('email')}`);
     displayData();
    
});

function displayData(){
    const name=localStorage.getItem('name');
    const email=localStorage.getItem('email');

    if(name && email){
        document.getElementById('displayData').innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong>${email}</p>
        `;
        
        
    }
}
window.onload = displayData;
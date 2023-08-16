function test(event){
    event.preventDefault();
    let name=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let email=document.getElementById("email").value;
    
    let userDetails={
        name,
        password,
        email
    }

    localStorage.setItem('userDetails', JSON.stringify(userDetails));

}
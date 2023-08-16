function test(event){
    event.preventDefault();
    let uid=document.getElementById("username").value;
    let pw=document.getElementById("password").value;
    let email=document.getElementById("email").value;
    
    let user=localStorage.setItem('uid',uid);
    let pass=localStorage.setItem('pw',pw);
    let em=localStorage.setItem('email',email);

}
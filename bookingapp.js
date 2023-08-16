var form=document.getElementById('addform');
var itemList=document.getElementById('items');

function test(event){
    event.preventDefault();
    let name=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let email=document.getElementById("email").value;

    // create li
    var li=document.createElement('li');

    // give class name to li
    li.className='list-group-item';

    // add text node
    li.appendChild(document.createTextNode(name));
    li.appendChild(document.createTextNode(password));
    li.appendChild(document.createTextNode(email));

    itemList.appendChild(li);
    
    let userDetails={
        name,
        password,
        email
    }

    localStorage.setItem(userDetails.email, JSON.stringify(userDetails));

}






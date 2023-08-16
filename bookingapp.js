var form=document.getElementById('addform');
var itemList=document.getElementById('items');

itemList.addEventListener('click',removeItem);

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

    // creating delete btn
    var deletebtn=document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('delete'));
    li.appendChild(deletebtn);
   
    

    itemList.appendChild(li);
    
    let userDetails={
        name,
        password,
        email
    }

    localStorage.setItem(userDetails.email, JSON.stringify(userDetails));
   
    

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
    }

    let name=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let email=document.getElementById("email").value;

    let userDetails={
        name,
        password,
        email
    }

    localStorage.removeItem(userDetails.email, JSON.stringify(userDetails));
}






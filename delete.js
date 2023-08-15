var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

// form submit event
form.addEventListener('submit',addItem);

// delete event
itemList.addEventListener('click',removeItem);


// add item fn
function addItem(e){
    e.preventDefault();

    //getinput value
    var newItem=document.getElementById('item').value; 

    // ccreate new li
    var li=document.createElement('li')
    // add class name
    li.className='list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create delete btn
    var deletebtn=document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);


    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm("Are u Sure?"))
        {
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
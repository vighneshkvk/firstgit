var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

// form submit event
form.addEventListener('submit',addItem);

// delete event
itemList.addEventListener('click',removeItem);

// filter element
filter.addEventListener('keyup',filterItems);


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

// remove fn
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


// fiter fn
function filterItems(e){
    var text=e.target.value.toLowerCase();
    
    var items=document.getElementsByTagName('li');
    // convert to array since it is in html collection
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }
        else{
            item.style.display='none'; 
        }
    });
}
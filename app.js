// console.dir(document);
// console.log(document.title);

// var titleheader=document.getElementById('header-title');
// titleheader.textContent='kvk';
// console.log(titleheader);
// titleheader.innerHTML='<h3>hello</h3>';
// titleheader.style.borderBottom='solid 2px black';

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// items.style.backgroundColor='yellow' it wont work

// for(var i=0;i<items.length;i++)
// {
//     items[i].style.backgroundColor='yellow';
// }

var items=document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor='green'
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';

}
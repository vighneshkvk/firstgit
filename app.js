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

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// items[2].style.backgroundColor='green'
// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight='bold';

// }

// var li=document.getElementsByTagName('li');
// console.log(li);
// li[2].style.backgroundColor='green'
// for(var i=0;i<li.length;i++)
// {
//     li[i].style.fontWeight='bold';

// }

// QuerySelectors
// var  secondItem= document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='green';

// var  thirdItem= document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display='none';

// queryselectorall
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}

var secondli = document.querySelectorAll('.list-group-item');
secondli[1].style.color='green';

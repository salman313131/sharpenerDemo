const items = document.getElementById('items')

const form = document.getElementById('addForm')

form.addEventListener('submit',addInput)
items.addEventListener('click',removeItem)

const itemsList = document.querySelectorAll('.list-group-item');

for(let i=0;i<itemsList.length;i++){
    const editButton = document.createElement('button');
    editButton.appendChild(document.createTextNode('edit'))
    editButton.className='btn btn-primary btn-sm float-right'
    itemsList[i].appendChild(editButton)
}

function addInput(e){
    e.preventDefault();
    var inputItem = document.getElementById('item').value;
    const newLi = document.createElement('li');
    newLi.className = 'list-group-item';
    newLi.appendChild(document.createTextNode(inputItem));
    const newBtn = document.createElement('button');
    newBtn.className = 'btn btn-danger btn-sm float-right delete';
    newBtn.appendChild(document.createTextNode('X'));
    newLi.appendChild(newBtn);
    items.appendChild(newLi);
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
           const li = e.target.parentElement;
           items.removeChild(li);
        }
    }
}
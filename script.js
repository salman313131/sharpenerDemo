const items = document.getElementById('items')

const form = document.getElementById('addForm')
const filter = document.getElementById('filter')

const newInput = document.createElement('input')
newInput.className='form-control mr-2'
newInput.id='item1'
newInput.setAttribute('type','text')
var preInput = document.getElementById('sub')
form.insertBefore(newInput,preInput)

filter.addEventListener('keyup',filterItems)

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
    var newInputItem = document.getElementById('item1').value;
    const newLi = document.createElement('li');
    newLi.className = 'list-group-item';
    newLi.appendChild(document.createTextNode(inputItem+" "+newInputItem));
    const newBtn = document.createElement('button');
    newBtn.className = 'btn btn-danger btn-sm float-right delete';
    newBtn.appendChild(document.createTextNode('X'));
    const editButton = document.createElement('button');
    editButton.appendChild(document.createTextNode('edit'))
    editButton.className='btn btn-primary btn-sm float-right'
    newLi.appendChild(newBtn);
    newLi.appendChild(editButton);
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
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var itmList = document.getElementsByClassName('list-group-item')
    Array.from(itmList).forEach(function(item){
        var itemText = item.firstChild.textContent;
        if(itemText.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block'
        }
        else{
            item.style.display = 'none'
        }
    })
}
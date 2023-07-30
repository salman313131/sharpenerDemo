const usersByClassName = document.getElementsByClassName('list-group-item')
const usersByTagName = document.getElementsByTagName('li')

for(i=0;i<usersByClassName.length;i++){
    usersByClassName[i].style.backgroundColor = 'grey';
}

for(i=0;i<usersByTagName.length;i++){
    usersByTagName[i].innerText= `This is user ${i}`;
}
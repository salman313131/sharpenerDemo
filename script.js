const usersByQuerySelectorSecond = document.querySelector('.list-group-item:nth-child(2)')
const usersByQuerySelectorThird = document.querySelector('.list-group-item:nth-child(3)')
const usersByQuerySelectorAll = document.querySelectorAll('li')

usersByQuerySelectorSecond.style.backgroundColor = '#90EE90';
usersByQuerySelectorThird.textContent = ''
usersByQuerySelectorAll[1].style.color = 'green'

for(i=0;i<usersByQuerySelectorAll.length;i=i+2){
    usersByQuerySelectorAll[i].style.backgroundColor='green'
}
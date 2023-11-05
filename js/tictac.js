let turn = 'x';
let title = document.querySelector('.title');
let squares = [];
let btn = document.getElementById('again');
function check(num1,num2,num3){
    title.innerHTML = `${squares[num1]} Winner`
    title.style.color = 'tomato'
    document.getElementById('item' + num1).style.background = 'tomato';
    document.getElementById('item' + num2).style.background = 'tomato';
    document.getElementById('item' + num3).style.background = 'tomato';
}
function winner(){
    for(let i = 1; i<10;i++){
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
        check(1,2,3)
    }
    if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != ''){
        check(4,5,6)
    }
    if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != ''){
        check(7,8,9)
    }
    if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''){
        check(1,4,7)
    }
    if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != ''){
        check(2,5,8)
    }
    if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != ''){
        check(3,6,9)
    }
    if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != ''){
        check(1,5,9)
    }
    if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != ''){
        check(3,5,7)
    }
}
function game(id){
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML == '')
    {
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML= 'O';
        title.style.color = 'tomato'
    } else if(turn === 'o' && element.innerHTML == '')
    {
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X'
        title.style.color = 'tomato'
    }
    winner();
}
btn.onclick = function(){
    location.reload();
}
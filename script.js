const changeTitleButton1=document.getElementById('btn-1').addEventListener('click', () => {
    let Value=document.getElementById('input-1').value;
    if (Value==""){
        alert('Title cannot be Empty...!!!');
        return;
    }
    document.getElementById('task-name-1').innerText=Value;
    document.getElementById('input-1').value="";
})
const changeTitleButton2=document.getElementById('btn-2').addEventListener('click', () => {
    let Value=document.getElementById('input-2').value;
    if (Value==""){
        alert('Title cannot be Empty...!!!');
        return;
    }
    document.getElementById('task-name-2').innerText=Value;
    document.getElementById('input-2').value="";
})
const changeTitleButton=document.getElementById('btn-3').addEventListener('click', () => {
    let Value=document.getElementById('input-3').value;
    if (Value==""){
        alert('Title cannot be Empty...!!!');
        return;
    }
    document.getElementById('task-name-3').innerText=Value;
    document.getElementById('input-3').value="";
})

let id_1=0;
let id_2=0;
let id_3=0;

document.getElementById('add-btn-1').addEventListener('click', () => {
    let task=document.getElementById('input-task-1').value;
    if (task==""){
        alert('Task cannot be empty...!!!');
        return;
    }
    const div=document.createElement('div');
    div.classList.add('added');
    id_1++;
    div.setAttribute('id',id_1);
    div.innerText=task;
    document.getElementById('card-1').appendChild(div);
    document.getElementById('input-task-1').value="";
    div.addEventListener('click',function(){
        if (div.style.textDecoration==='none'){
            div.style.textDecoration='line-through';
        }
        else {
            div.style.textDecoration='none';
        }
    })
    div.addEventListener('dblclick',function(){
        const dd=document.getElementById('card-1');
        dd.removeChild(div);
    })
})

document.getElementById('add-btn-2').addEventListener('click', () => {
    let task=document.getElementById('input-task-2').value;
    if (task==""){
        alert('Task cannot be empty...!!!');
        return;
    }
    const div=document.createElement('div');
    div.classList.add('added');
    div.innerText=task;
    document.getElementById('card-2').appendChild(div);
    document.getElementById('input-task-2').value="";
    div.addEventListener('click',function(){
        if (div.style.textDecoration==='none'){
            div.style.textDecoration='line-through';
        }
        else {
            div.style.textDecoration='none';
        }
    })
    div.addEventListener('dblclick',function(){
        const dd=document.getElementById('card-2');
        dd.removeChild(div);
    })
})

document.getElementById('add-btn-3').addEventListener('click', () => {
    let task=document.getElementById('input-task-3').value;
    if (task==""){
        alert('Task cannot be empty...!!!');
        return;
    }
    let div=document.createElement('div');
    div.classList.add('added');
    div.innerText=task;
    document.getElementById('card-3').appendChild(div);
    document.getElementById('input-task-3').value="";
    div.addEventListener('click',function(){
        if (div.style.textDecoration==='none'){
            div.style.textDecoration='line-through';
        }
        else {
            div.style.textDecoration='none';
        }
    })
    div.addEventListener('dblclick',function(){
        const dd=document.getElementById('card-3');
        dd.removeChild(div);
    })
})
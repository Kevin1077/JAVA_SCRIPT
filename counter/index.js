const incrbtn = document.getElementById('incrbtn');
const decrease = document.getElementById('decrbtn');
const reset = document.getElementById('resetbtn');
const countlabel = document.getElementById("btnlabel");

let count =0;

incrbtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}

decrease.onclick = function(){
    count--;
    countlabel.textContent = count;
}


reset.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}

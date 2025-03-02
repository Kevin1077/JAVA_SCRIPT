

//mouse events

const btn = document.getElementById('btn');
btn.addEventListener('click',function changeColor(){
    mybox.style.backgroundColor = 'red';
    mybox.textContent = 'ouch!';
});

btn.addEventListener("mouseover", event => {
    mybox.style.backgroundColor = "yellow";

});

//key events

const mybox = document.getElementById('mybox');
const move = 10;
let x=0;
let y=0;

document.addEventListener('keydown', event => {
    if(event.key.startsWith('Arrow')){
        switch(event.key){
            case 'ArrowUp':
                y -= move;
                break;
            case 'ArrowDown':
                y += move;
                break;
            case 'ArrowLeft':
                x -= move;
                break;
            case 'ArrowRight':
                x += move;
                break;
        }
        mybox.style.top = `${y}px`;
        mybox.style.left = `${x}px`;
        
    }
})

const btn = document.getElementById('btn');
const myimg = document.getElementById('myimg');

btn.addEventListener('click', event => {

    if (myimg.style.display === 'none') {
        myimg.style.display = 'block';
        
    }
    else{
     myimg.style.display = 'none';
     btn.textContent = 'show';
    }
});

//node list
let buttons = document.querySelectorAll('button');
buttons.forEach(button =>{
    button.style.backgroundColor = 'blue';
    button.addEventListener("click", event =>{
       event.target.style.backgroundColor = 'red';
    
})});


btn.addEventListener('mouseover', event =>{
    event.target.classList.add('hover')
});

btn.classList.add('enable');

let button = document.querySelectorAll('button');

button.forEach(button =>{
     button.classList.add('enable');
});

button.forEach(button =>{
        button.addEventListener('mouseover', event =>{
            event.target.classList.toggle('hover');
        });
    });

button.forEach(button =>{
        button.addEventListener('click', event =>{
            event.target.classList.replace('enable','disable');
        });
   });

const mysubmit = document.getElementById('mysubmit');
const mycheckbox = document.getElementById('mycheckbox');
const visabtn = document.getElementById('visabtn');

mysubmit.onclick = function() {
  
    if(mycheckbox.checked){
        result.textContent = "You have successfully subscribed";
        if(visabtn.checked){
            result2.textContent = "You have successfully subscribed and you will receive a Visa card";
        }
        else{
            result2.textContent = "You have successfully subscribed Please select the card";
        }
    }
    else{
        result1.textContent = "Please subscribe to continue";
    }
}


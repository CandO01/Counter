let increase = 0;
function addButton(){
    const displayElement = document.getElementById('js-display');
    increase += 1;
    displayElement.innerHTML = increase;
    if( increase === 10){
        document.getElementById('plusjs').removeAttribute('onclick');
    };
};

function maxPoint(){
    if(increase === 10){
        document.querySelector('.output').innerHTML = 'You have reached your maximum point!!!!'
    };
};

function minusButton(){
    const displayElement = document.getElementById('js-display');
    increase -= 1;
    displayElement.innerHTML = increase;
    if( increase === 0){
        document.getElementById('minusjs').disabled = true;
    };
};
function minPoint(){
    if(increase === 0){
        document.querySelector('.output').innerHTML = 'You have reached your minimum point!!!!'
    };
   
};




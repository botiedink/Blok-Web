var body = document.body

var form = document.querySelector('.filter');

var button = document.querySelector('input');

var boekenbutton = document.querySelector('.boekenbutton');

var filterresult = document.querySelectorAll('.filterresult');


// Dennis heeft mij geholpen met deze forEach functie :)//

filterresult.forEach(function(item){
    item.addEventListener('click', removeFilter)
})


function addFilter(e){
    e.preventDefault();
    body.classList.add('filter')
}

function removeFilter(e){
    e.preventDefault();
    body.classList.remove('filter')
}

button.addEventListener('click', addFilter)
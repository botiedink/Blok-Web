

const form = document.querySelector('.filter');

const button = document.querySelector('input');

const boekenbutton = document.querySelector('.boekenbutton');
console.log(boekenbutton)

const filterresult = document.querySelectorAll('.filterresult');


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
var body = document.body

var boekenlegger = document.querySelector('.boekenlegger');

var zinwijzer = document.querySelectorAll('.zinwijzer')
console.log(zinwijzer);

/*Ik geef hier de functie een naam en wat die moet doen */
function addboekenlegger(e){
    e.preventDefault();
    body.classList.toggle('uitklap')
}


zinwijzer.forEach(function(item){
    item.addEventListener('click', function(){
        this.classList.toggle('legger')
    })
})



/* Hier voert die de functie uit zodra je op de button clickt */
boekenlegger.addEventListener('click', addboekenlegger)

function addbutton(e){
    e.preventDefault();
    body.classList.toggle('select')
}

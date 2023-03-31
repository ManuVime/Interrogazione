const Refresh = document.querySelector(".Refresh");
const Random = document.querySelector(".Random");
const Blackboardbutton = document.querySelector(".Blackboardbutton");
var Classe = "1A";
var NumeroCasuale = -1;

Blackboardbutton.innerHTML = `<h1>1^A</h1>
<h2>Chi interroghiamo?</h2>`;

Random.addEventListener("click",function(){
    SelezionatoreCasuale();
});

Refresh.addEventListener("click",function(){
    CambiaClasse();
});



function SelezionatoreCasuale() {
    if (Classe == "1A") {
        NumeroCasuale = Math.floor(Math.random() * source1A.length);
        var interrogato = source1A[NumeroCasuale];
        Blackboardbutton.innerHTML = `<h1>1^A</h1><h2>${interrogato.FirstName} ${interrogato.LastName}</h2>`
    } else if (Classe == "1D") {
        NumeroCasuale = Math.floor(Math.random() * source1D.length);
        var interrogato = source1D[NumeroCasuale];  
        Blackboardbutton.innerHTML = `<h1>1^D</h1><h2>${interrogato.FirstName} ${interrogato.LastName}</h2>`     
    }
}

function CambiaClasse() {
    if (Classe == "1A") {
        Classe = "1D";
        Blackboardbutton.innerHTML = `<h1>1^D</h1>
        <h2>Chi interroghiamo?</h2>`
    }else{
        Classe = "1A"; 
        Blackboardbutton.innerHTML = `<h1>1^A</h1>
        <h2>Chi interroghiamo?</h2>` 
    }

}
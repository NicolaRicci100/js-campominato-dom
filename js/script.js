console.log('JS OK');

// TODO recupero e scrivo gli elementi utili

//pulsate Play
const playButton = document.getElementById('play');
//griglia
const fullGrid = document.getElementById('grid');
//punteggio
const scoreNumber = document.getElementById('score');
let click = 0 //variabile per il punteggio

const rows = 10; //righe
const columns = 10; //colonne
const cellsNumber = rows * columns; //totale celle
playButton.addEventListener('click', function(){ // attivo il pulsante play
    // resetto la griglia
    fullGrid.innerHTML = '';
    // creazione della griglia
    for(i = 0; i < cellsNumber; i++){
        const cell = document.createElement('div'); // creo i div figli di grid
        cell.className = 'col'; // 'col' per classe di Bootstrap
        cell.innerText = i + 1; // scrivo i numeri nelle celle
        cell.addEventListener('click', function(){ // se premo la cella
            console.log('il numero selezionato è ' + cell.innerText); //scrivo il numero in log
            if(cell.classList.contains('azure')){ //se è già azzurro
                return; //non faccio nulla
            }else{ //altrimenti
            clickPoints = (scoreNumber.value = ++click); //aggiungo punti per ogni click
            }
        cell.classList.add('azure'); //diventa azzurro
        scoreNumber.innerText ='Punteggio: ' + clickPoints; //mostro il punteggio in pagina
    });
    fullGrid.appendChild(cell); // inserisco in pagina le celle
    }
});
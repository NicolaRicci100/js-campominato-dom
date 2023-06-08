console.log('JS OK');

// TODO recupero e scrivo gli elementi utili

//pulsate Play
const playButton = document.getElementById('play');
//griglia
const fullGrid = document.getElementById('grid');
//punteggio
const scoreNumber = document.getElementById('score');
let click = 0 //variabile per il punteggio


// * FUNZIONE per bombe casuali
function bombs(totBombs, possibleLocation){ //i valori della funzione saranno 16 totBombs & 100 possibleLocation
    let clusterBombs = []; //array di bombe vuoto
    while (clusterBombs.length < totBombs){ //posso caricare l'array con le bombe fino alla capacità massima
        let randomBombs; //creo variabile per le bombe casuali
        do{
            randomBombs = Math.floor(Math.random() * possibleLocation) + 1; //genero casualmente le bombe 
        } while (clusterBombs.includes(randomBombs)); //mi assicuro che le bombe non siano già nel array
        clusterBombs.push(randomBombs); //carico le bombe
    }
    return clusterBombs; //bombe caricate nell'array
}


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
            }
            else if(bombs(16, 100).includes(i)){ //se c'è una bomba
                cell.classList.add('explode'); //diventa rosso
                console.log('GAME OVER');
                alert('Hai preso una bomba!');
            }
            else{ //altrimenti
            clickPoints = (scoreNumber.value = ++click); //aggiungo punti per ogni click
            }
        cell.classList.add('azure'); //diventa azzurro
        scoreNumber.innerText ='Punteggio: ' + clickPoints; //mostro il punteggio in pagina
    });
    fullGrid.appendChild(cell); // inserisco in pagina le celle
    }
});
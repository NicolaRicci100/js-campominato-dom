# Steps
- Creo una griglia temporanea di 100 celle 10x10 nell'HTML personalizzandola con CSS
- Creo un pulsante *Play*
- Rimuovere la griglia *(per poi andarla a creare con JavaScript)*
- Collego il pulsante *Play* con *JavaScript*
- Creo un evento per il pulsante *Play* che esegua la *funzione (griglia)*
### Funzione *(Griglia)*
- Creo una funzione per la griglia usando un ciclo *for* *(in ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100)*
- Se premo su una cella stampo il numero della cella in console e coloro la cella di azzurro


### APPUNTI VARI
- Punteggio
    - crea variabile vuota
    - se l'utente preme su una cella aggiungi 1 alla variabile sopra
    - mostro la variabile in pagina
- Cella non cliccabile
    - premo sulla cella
        - se ha la classe azure tolgo l'interazione
        - se non ha la classe allora la aggiungo
- Bombe
    - creo un array vuoto
    - genero 16 numeri casuali da 1 a 100 con un ciclo
        - pesco il numero
            - se il numero è già nell'array allora ignoro il risultato e pesco nuovamente
            - se il numero non è ancora uscito lo aggiungo all'array